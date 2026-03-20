import { getSitesByCategory } from '@/data/sites';
import SiteCard from '@/components/SiteCard';
import Link from 'next/link';
import LegalDisclaimer from '@/components/LegalDisclaimer';

import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl, getBreadcrumbSchema } from "@/lib/seo-utils";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_META.vpn.title,
  description: SEO_META.vpn.description,
  alternates: {
    canonical: getCanonicalUrl("/vpn"),
  },
  openGraph: {
    title: SEO_META.vpn.title,
    description: SEO_META.vpn.description,
    url: getCanonicalUrl("/vpn"),
  },
  twitter: {
    title: SEO_META.vpn.title,
    description: SEO_META.vpn.description,
  },
};

export default function VpnPage() {
    const vpns = getSitesByCategory('vpn');
    const breadcrumbSchema = getBreadcrumbSchema("VPN", "/vpn");

    return (
        <div className="flex flex-col min-h-screen bg-background text-white">
            <JsonLd data={breadcrumbSchema} />
            {/* Hero Section */}
            <section className="bg-card border-b border-border py-16 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className="w-24 h-24 bg-accent border border-border rounded-full flex items-center justify-center shrink-0 shadow-xl text-5xl">
                        🛡️
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Safe Streaming VPNs</h1>
                        <p className="text-muted-foreground max-w-2xl">
                            Avoid ISP throttling, bypass geo-restrictions, and protect your identity while streaming.
                            These are the VPNs we recommend for a zero-buffer experience.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 w-full py-12">
                <LegalDisclaimer />
                {/* Recommendation Header */}
                <div className="text-center mb-10">
                    <p className="text-lg md:text-xl font-medium text-gray-300">
                        <Link href="/adblockers" className="text-[#38bdf8] hover:text-[#7dd3fc] underline underline-offset-4 decoration-1">AdBlock</Link>
                        {" is recommended and use "}
                        <span className="text-primary font-bold">VPN</span>
                        {" for privacy."}
                    </p>
                </div>

                {/* VPN Links - Single Column Stack */}
                <div className="flex flex-col gap-3 w-full mb-16">
                    {vpns.map((vpn) => (
                        <div key={vpn.id} className="w-full">
                            <SiteCard site={vpn} />
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Why do I need a VPN?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent border border-border rounded-full mx-auto flex items-center justify-center mb-4 text-3xl">
                                🌍
                            </div>
                            <h3 className="text-white font-bold mb-2 text-lg">Unblock Content</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">Instantly bypass blocks and access content from anywhere in the world.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent border border-border rounded-full mx-auto flex items-center justify-center mb-4 text-3xl">
                                ⚡
                            </div>
                            <h3 className="text-white font-bold mb-2 text-lg">Stop Throttling</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">Prevent ISPs from slowing down your connection when they detect high bandwidth streaming.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent border border-border rounded-full mx-auto flex items-center justify-center mb-4 text-3xl">
                                🕵️
                            </div>
                            <h3 className="text-white font-bold mb-2 text-lg">Anonymity</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">Encrypt your data and hide your IP address to maintain total privacy online.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
