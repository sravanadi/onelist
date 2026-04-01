import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";
import BlogIndexClient from "@/components/BlogIndexClient";

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
    return <BlogIndexClient />;
}
