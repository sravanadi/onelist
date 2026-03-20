import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/data/blog';
import { getCanonicalUrl, getBreadcrumbSchema } from '@/lib/seo-utils';
import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';

import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return {};

    const canonical = getCanonicalUrl(`/blog/${slug}`);

    return {
        title: `${post.title} — OneList Blog`,
        description: post.excerpt,
        alternates: {
            canonical: canonical,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: canonical,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            title: post.title,
            description: post.excerpt,
        },
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const breadcrumbSchema = getBreadcrumbSchema(post.title, `/blog/${slug}`);

    return (
        <div className="bg-background min-h-screen">
            <JsonLd data={breadcrumbSchema} />
            <article className="max-w-3xl mx-auto px-4 py-16">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="mx-2">›</span>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <span className="mx-2">›</span>
                    <span className="text-gray-400 truncate">{post.title}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-white text-xs">
                            {post.author.charAt(0)}
                        </div>
                        <span>{post.author}</span>
                    </div>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>

                {/* Article Content */}
                <div
                    className="prose prose-invert prose-lg max-w-none text-[#cccccc] prose-headings:text-white prose-a:text-primary hover:prose-a:text-[#b0060e]"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </article>

            {/* Related Posts */}
            <section className="bg-card border-t border-border py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">More from the Blog</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                            <Link key={related.id} href={`/blog/${related.slug}`} className="group block bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors h-full">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">{related.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">{related.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
