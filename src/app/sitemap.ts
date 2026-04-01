import { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://onelist.pro';

    // Static routes (Only truly static ones, rest come from categories)
    const staticPages = [
        '',
        '/about',
        '/faq',
        '/safety',
        '/contact',
        '/privacy',
        '/dmca',
        '/blog',
        '/terms',
        '/online-games/flycat',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Dynamic category routes (Includes vpn, adblockers, aitools etc.)
    const categoryPages = categories.map((category) => ({
        url: `${baseUrl}${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic blog posts
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...categoryPages, ...blogPages];
}
