import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: SEO_META.terms.title,
    description: SEO_META.terms.description,
    alternates: {
        canonical: getCanonicalUrl("/terms"),
    },
    openGraph: {
        title: SEO_META.terms.title,
        description: SEO_META.terms.description,
        url: getCanonicalUrl("/terms"),
    },
    twitter: {
        title: SEO_META.terms.title,
        description: SEO_META.terms.description,
    },
};

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6">
                <p>Last updated: March 12, 2026</p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing and using OneList.pro (the "Website"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use License</h2>
                <p>
                    Permission is granted to temporarily view the materials (information or software) on OneList.pro for personal, non-commercial transitory viewing only.
                </p>
                <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by OneList.pro at any time.</p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Disclaimer</h2>
                <p>
                    The materials on OneList.pro are provided on an 'as is' basis. OneList.pro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                    Further, OneList.pro does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitations</h2>
                <p>
                    In no event shall OneList.pro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OneList.pro, even if OneList.pro authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
            </div>
        </div>
    );
}
