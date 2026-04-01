import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: SEO_META.safety.title,
    description: SEO_META.safety.description,
    alternates: {
        canonical: getCanonicalUrl("/safety"),
    },
    openGraph: {
        title: SEO_META.safety.title,
        description: SEO_META.safety.description,
        url: getCanonicalUrl("/safety"),
    },
    twitter: {
        title: SEO_META.safety.title,
        description: SEO_META.safety.description,
    },
};

export default function SafetyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-foreground mb-8 uppercase italic tracking-tighter">Safety Manual</h1>

            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-8">
                <section className="bg-secondary/20 border border-border/50 rounded-2xl p-8 mb-10">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Your Digital Shield</h2>
                    <p>Staying safe while browsing free streaming sites and AI tools is a top priority. Follow this manual to protect your privacy and device.</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-xl bg-card border border-border">
                        <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                             Use a VPN
                        </h3>
                        <p className="text-sm">We strongly recommend using a <a href="/vpn" className="text-primary hover:underline">VPN</a> to encrypt your data and hide your IP address from third-party sites.</p>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border">
                        <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                             Ad-Blockers
                        </h3>
                        <p className="text-sm">Intrusive pop-ups can be dangerous. Use a reliable ad-blocking browser extension to stop malicious scripts from loading.</p>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border">
                        <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                             Avoid Downloads
                        </h3>
                        <p className="text-sm">Never download executable files (.exe, .msi, .dmg) from streaming sites. Most legitimate streaming happens directly in the browser.</p>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border">
                        <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                             Check URLs
                        </h3>
                        <p className="text-sm">Always verify you are on the correct site. Some malicious platforms try to mimic popular brands with similar-looking domain names.</p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Report an Issue</h2>
                    <p>Discovery a malicious link in our directory? Please let us know immediately through our <a href="/contact" className="text-primary hover:underline">contact form</a> so we can remove it for the entire community.</p>
                </div>
            </div>
        </div>
    );
}
