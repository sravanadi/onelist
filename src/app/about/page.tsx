export const metadata = {
    title: "About OneList",
    description: "Learn more about OneList, the ultimate directory for streaming sites."
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-8">About OneList</h1>

            <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
                <p className="text-lg">
                    OneList is born out of a simple frustration: finding reliable, high-quality streaming sites is too hard.
                    The internet is full of broken links, malicious pop-ups, and outdated directories. We wanted to build something better.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
                <p>
                    Our mission is to be the "Google for Entertainment Sites" — a clean, fast, and curated directory where users can safely
                    discover the best platforms for their needs, whether it's free anime, live sports, premium movies, or eBooks.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">How It Works</h2>
                <p>
                    <strong>We do not host any content.</strong> We are strictly a search engine and link directory.
                    Our team manually reviews, categorizes, and monitors external platforms to ensure they meet our quality standards.
                    We use community feedback and rigorous testing to keep our database up to date.
                </p>

                <div className="bg-card border border-border rounded-xl p-6 mt-8">
                    <h3 className="text-xl font-bold text-white mb-2">Support Us</h3>
                    <p className="text-sm">
                        Maintaining this directory takes significant time and resources. We keep the site free by displaying
                        non-intrusive advertisements and utilizing affiliate links for services we genuinely recommend, like VPNs.
                    </p>
                </div>
            </div>
        </div>
    );
}
