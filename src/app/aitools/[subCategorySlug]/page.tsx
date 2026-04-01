import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { getSitesByCategory } from '@/data/sites';
import { seoData } from '@/data/seo_content';
import { SEO_META, SEOMetaKey } from '@/lib/seo-meta';
import { getCanonicalUrl, getBreadcrumbSchema } from '@/lib/seo-utils';
import { Metadata } from 'next';
import AISubCategoryClient from '@/components/AISubCategoryClient';

export async function generateMetadata({ params }: { params: Promise<{ subCategorySlug: string }> }): Promise<Metadata> {
    const { subCategorySlug } = await params;
    const fullSlug = `/aitools/${subCategorySlug}`;
    const category = categories.find(c => c.slug === fullSlug);

    if (!category) return {};

    const meta = SEO_META[category.id as SEOMetaKey] || SEO_META.aitools;
    const canonical = getCanonicalUrl(category.slug);

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

export async function generateStaticParams() {
    // Only generate for AI subcategories
    return categories
        .filter(c => c.id.startsWith('ai-'))
        .map((category) => ({
            subCategorySlug: category.slug.split('/').pop(),
        }));
}

export default async function AISubCategoryPage({ params }: { params: Promise<{ subCategorySlug: string }> }) {
    const { subCategorySlug } = await params;
    
    // Find the category by matching the slug
    const fullSlug = `/aitools/${subCategorySlug}`;
    const category = categories.find(c => c.id.startsWith('ai-') && c.slug === fullSlug);

    if (!category) {
        notFound();
    }

    const sites = getSitesByCategory(category.id);
    const content = seoData[category.id] || seoData['aitools'];

    // Initial schemas (fallback to English/Default for SSR)
    const categoryName = typeof category.name === 'string' ? category.name : (category.name as any).en || 'AI Tools';
    const categoryDesc = typeof category.description === 'string' ? category.description : (category.description as any).en || '';

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `Best ${categoryName} in 2026`,
        "description": categoryDesc,
        "url": `https://onelist.pro${category.slug}`,
        "numberOfItems": sites.length,
        "itemListOrder": "https://schema.org/ItemListOrderAscending"
    };

    const breadcrumbSchema = getBreadcrumbSchema(categoryName, category.slug);

    const otherAiCategories = categories.filter(c => c.id.startsWith('ai-') && c.id !== category.id);

    return (
        <AISubCategoryClient
            category={category}
            sites={sites}
            content={content}
            otherAiCategories={otherAiCategories}
            itemListSchema={itemListSchema}
            breadcrumbSchema={breadcrumbSchema}
        />
    );
}
