import { MetadataRoute } from 'next';
import { categories } from '@/data/categories';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://onelist.pro';

    // Static routes (Only truly static ones, rest come from categories)
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/privacy',
        '/dmca',
        '/blog',
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

    return [...staticPages, ...categoryPages];
}
