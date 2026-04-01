'use client';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog';
import { useLanguage } from '@/components/LanguageProvider';

export default function BlogIndexClient() {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <section className="bg-card border-b border-border py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase italic tracking-tighter decoration-primary underline-offset-8">OneList Blog</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
                        Tips, tricks, and guides for getting the most out of your streaming experience safely and for free.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all group flex flex-col h-full shadow-lg hover:shadow-primary/5">
                            <Link href={`/blog/${post.slug}`} className="aspect-video relative overflow-hidden bg-accent border-b border-border block">
                                <img 
                                    src={post.coverImage} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </Link>
                            <div className="p-8 grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                    <span className="text-primary">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    <span className="opacity-30">|</span>
                                    <span>{post.author}</span>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors inline-block">
                                    <h2 className="text-2xl font-black text-foreground mb-4 leading-tight tracking-tight uppercase italic">{post.title}</h2>
                                </Link>
                                <p className="text-muted-foreground text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                                    {post.excerpt.replace(/<[^>]*>/g, '')}
                                </p>
                                <div className="mt-auto">
                                    <Link href={`/blog/${post.slug}`} className="text-primary font-black uppercase tracking-widest hover:underline text-xs inline-flex items-center gap-2">
                                        {t('ui.read_article')} →
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
