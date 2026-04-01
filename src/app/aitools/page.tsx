import { categories } from '@/data/categories';
import { featuredSites } from '@/data/sites';

import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl, getBreadcrumbSchema } from "@/lib/seo-utils";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";
import AIHubClient from '@/components/AIHubClient';

export const metadata: Metadata = {
  title: SEO_META.aitools.title,
  description: SEO_META.aitools.description,
  alternates: {
    canonical: getCanonicalUrl("/aitools"),
  },
  openGraph: {
    title: SEO_META.aitools.title,
    description: SEO_META.aitools.description,
    url: getCanonicalUrl("/aitools"),
  },
  twitter: {
    title: SEO_META.aitools.title,
    description: SEO_META.aitools.description,
  },
};

export default function AIToolsHub() {
  // Filter for AI subcategories (excluding the main hub itself)
  const aiSubcategories = categories.filter(c => c.id.startsWith('ai-'));
  const breadcrumbSchema = getBreadcrumbSchema("AI Tools", "/aitools");

  // Pre-calculate site counts to avoid complex logic in client component
  const siteCounts: Record<string, number> = {};
  aiSubcategories.forEach(category => {
    siteCounts[category.id] = featuredSites.filter(s => s.categoryId === category.id).length;
  });

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16 px-4 md:px-8">
      <JsonLd data={breadcrumbSchema} />
      <AIHubClient
        aiSubcategories={aiSubcategories}
        siteCounts={siteCounts}
      />
    </div>
  );
}
