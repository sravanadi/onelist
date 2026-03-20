import Link from 'next/link';
import { blogPosts } from '@/data/blog';


import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: SEO_META.blog.title,
    description: SEO_META.blog.description,
    alternates: {
        canonical: getCanonicalUrl("/blog"),
    },
    openGraph: {
        title: SEO_META.blog.title,
        description: SEO_META.blog.description,
        url: getCanonicalUrl("/blog"),
    },
    twitter: {
        title: SEO_META.blog.title,
        description: SEO_META.blog.description,
    },
};

export default function BlogIndexPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <section className="bg-card border-b border-border py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">OneList Blog</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Tips, tricks, and guides for getting the most out of your streaming experience safely and for free.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={post.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors group flex flex-col h-full">
                            <div className="aspect-video bg-accent w-full border-b border-border">
                                {/* Fallback space for cover image */}
                            </div>
                            <div className="p-6 grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
                                    <h2 className="text-2xl font-bold text-white mb-3 leading-tight">{post.title}</h2>
                                </Link>
                                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline text-sm inline-flex items-center">
                                        Read Article →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
