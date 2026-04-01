import { SEO_META } from "@/lib/seo-meta";
import { getCanonicalUrl } from "@/lib/seo-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: SEO_META.about.title,
    description: SEO_META.about.description,
    alternates: {
        canonical: getCanonicalUrl("/about"),
    },
    openGraph: {
        title: SEO_META.about.title,
        description: SEO_META.about.description,
        url: getCanonicalUrl("/about"),
    },
    twitter: {
        title: SEO_META.about.title,
        description: SEO_META.about.description,
    },
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-foreground mb-8">About OneList</h1>

            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6">
                <section>
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Who Runs OneList?</h2>
                    <p className="text-lg">
                        OneList is built and maintained by the <strong>OneList Editorial Team</strong> — a dedicated group of digital privacy advocates, tech enthusiasts, and streaming veterans. Founded in <strong>2025</strong> out of a simple frustration: finding reliable, high-quality streaming sites had become too difficult. The internet was full of broken links, malicious pop-ups, and outdated directories. We decided to create a definitive solution.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Mission</h2>
                    <p>
                        Our mission is to provide the world's most comprehensive, up-to-date, global, free, and safe streaming directory. We aim to be the "Google for Entertainment Sites" — a clean, fast, and curated hub where users can seamlessly discover the best platforms for their needs, whether it's free anime, live sports, premium movies, or software tools.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How Links Are Curated</h2>
                    <p>
                        <strong>We do not host any content.</strong> We are strictly a search engine and link directory.
                        To ensure the highest quality experience, every link on OneList undergoes a strict manual verification process. Our editorial team personally tests each platform across multiple devices, verifying the availability of content, the speed of servers, and the usability of the site. We actively monitor community feedback to keep our database accurate and up-to-date.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Editorial Standards</h2>
                    <p>
                        Trust is our top priority. Our editorial standards are built around three core pillars:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground font-bold">
                        <li><strong>Safety-First Approach:</strong> We actively screen platforms for malware, intrusive ad networks, and phishing scripts before listing. Safety comes first.</li>
                        <li><strong>No Malware Guarantee:</strong> Links that host malicious files or dangerous redirect loops are permanently blacklisted from our directory.</li>
                        <li><strong>Regular Updates:</strong> The streaming landscape changes rapidly. We perform rigorous daily and weekly link checks to remove dead domains and update working mirrors continuously.</li>
                    </ul>
                </section>

                <div className="bg-card border border-border rounded-xl p-6 mt-12 mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">Support Us</h3>
                    <p className="text-sm text-muted-foreground">
                        Maintaining this directory takes significant time and resources. We keep the site free by displaying
                        non-intrusive advertisements and utilizing affiliate links for services we genuinely recommend, such as premium privacy-focused VPNs. Your support allows us to remain independent and ad-light.
                    </p>
                </div>
            </div>
        </div>
    );
}
