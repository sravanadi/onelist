import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: SEO_META.privacy.title,
    description: SEO_META.privacy.description,
    alternates: {
        canonical: getCanonicalUrl("/privacy"),
    },
    openGraph: {
        title: SEO_META.privacy.title,
        description: SEO_META.privacy.description,
        url: getCanonicalUrl("/privacy"),
    },
    twitter: {
        title: SEO_META.privacy.title,
        description: SEO_META.privacy.description,
    },
};

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6">
                <p>Last updated: March 12, 2026</p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
                <p>
                    We collect minimal data to provide you with the best experience. The only personal information we collect is what you voluntarily provide (e.g., when signing up for our newsletter or using our contact form).
                </p>
                <p>
                    Like many site operators, we collect information that your browser sends whenever you visit our website ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, and other statistics.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Cookies and Third-Party Advertising</h2>
                <p>
                    We use Google AdSense to serve ads on our site. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
                    <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
                    <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" className="text-primary hover:underline">Ads Settings</a>.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Affiliate Links</h2>
                <p>
                    Some links on this website are affiliate links, meaning we may earn a commission if you click through and make a purchase. This comes at no additional cost to you and helps support our site.
                </p>
            </div>
        </div>
    );
}
