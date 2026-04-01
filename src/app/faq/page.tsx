import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: SEO_META.faq.title,
    description: SEO_META.faq.description,
    alternates: {
        canonical: getCanonicalUrl("/faq"),
    },
    openGraph: {
        title: SEO_META.faq.title,
        description: SEO_META.faq.description,
        url: getCanonicalUrl("/faq"),
    },
    twitter: {
        title: SEO_META.faq.title,
        description: SEO_META.faq.description,
    },
};

export default function FAQPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h1>

            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-8">
                <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">What is OneList.pro?</h2>
                    <p>OneList.pro is a meticulously curated directory of free streaming sites, anime platforms, torrent trackers, and the latest AI tools. Our goal is to provide a safe and organized way to find high-quality content online.</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">Is OneList free to use?</h2>
                    <p>Yes, OneList.pro is and always will be 100% free. We do not require signups or any personal information to browse our directory.</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">Are the sites listed safe?</h2>
                    <p>We manually verify every site before listing it. However, since we do not own these external websites, we strongly recommend using a reputable VPN and an ad-blocker when browsing any free streaming or torrent platform.</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">How often is the directory updated?</h2>
                    <p>Our links are updated daily. We regularly remove broken mirrors and add high-quality new alternatives discovered by our team and community.</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">Can I suggest a site?</h2>
                    <p>Absolutely! Head over to our <a href="/contact" className="text-primary hover:underline">Contact</a> page to submit your suggestions.</p>
                </div>
            </div>
        </div>
    );
}
