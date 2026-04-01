import React from 'react';
import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { getSitesByCategory } from '@/data/sites';
import { SEO_META, SEOMetaKey } from '@/lib/seo-meta';
import { getCanonicalUrl, getBreadcrumbSchema } from '@/lib/seo-utils';
import { Metadata } from 'next';
import CategoryPageClient from '@/components/CategoryPageClient';

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }> }): Promise<Metadata> {
    const { categorySlug } = await params;
    const meta = SEO_META[categorySlug as SEOMetaKey] || SEO_META.home;
    const canonical = getCanonicalUrl(categorySlug);

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: canonical,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: canonical,
        },
        twitter: {
            title: meta.title,
            description: meta.description,
        },
    };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const staticRoutes = [
        'about', 'aitools', 'blog', 'contact', 'dmca', 
        'privacy', 'terms', 'varieties', 'vpn', 'faq', 'safety',
        'favicon.ico', 'sitemap.xml', 'robots.txt',
        'apple-touch-icon.png', 'apple-touch-icon-precomposed.png'
    ];

    return categories
        .filter(category => {
            // 1. Exclude categories that have their own static directories
            if (staticRoutes.includes(category.id)) return false;
            
            // 2. Exclude nested AI subcategories (handled by /aitools/[subCategorySlug])
            if (category.id.startsWith('ai-')) return false;
            
            // 3. Only include top-level slugs (e.g., /movies, not /aitools/chat)
            const segments = category.slug.split('/').filter(Boolean);
            return segments.length === 1;
        })
        .map((category) => ({
            categorySlug: category.id,
        }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
    const { categorySlug } = await params;
    const category = categories.find(c => c.id === categorySlug);

    if (!category) {
        notFound();
    }

    const sites = getSitesByCategory(category.id);

    // Initial schemas (fallback to English/Default for SSR)
    // Note: category.name might be an object here, so we pick English for SSR
    const categoryName = typeof category.name === 'string' ? category.name : (category.name as any).en || 'Tools';
    const categoryDesc = typeof category.description === 'string' ? category.description : (category.description as any).en || '';

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `Best Free ${categoryName} Sites 2026`,
        "description": categoryDesc,
        "url": `https://onelist.pro${category.slug}`,
        "numberOfItems": sites.length,
        "itemListOrder": "https://schema.org/ItemListOrderAscending"
    };

    const breadcrumbSchema = getBreadcrumbSchema(categoryName, category.slug);

    return (
        <CategoryPageClient 
            category={category}
            sites={sites}
            categories={categories}
            itemListSchema={itemListSchema}
            breadcrumbSchema={breadcrumbSchema}
        />
    );
}
