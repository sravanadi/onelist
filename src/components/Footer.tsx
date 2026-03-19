import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-4 text-4xl font-black text-primary tracking-tighter hover:opacity-80 transition-opacity">
                            <img src="/icon.png" alt="OneList Icon" className="h-20 w-auto drop-shadow-xl" />
                            <span>OneList</span>
                        </Link>
                            The ultimate curated directory for AI tools and streaming sites. We help you discover the best platforms for AI, movies, anime, and sports while prioritizing your digital safety.
                    </div>

                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">Categories</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/movies" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Movies & TV</Link></li>
                            <li><Link href="/anime" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Anime</Link></li>
                            <li><Link href="/live-sports" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Sports</Link></li>
                            <li><Link href="/torrents" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Torrents</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">Discovery</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary hover:translate-x-1 inline-block transition-all">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Insights / Blog</Link></li>
                            <li><Link href="/vpn" className="hover:text-primary hover:translate-x-1 inline-block transition-all text-primary font-medium">Best VPNs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">Compliance</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/contact" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Contact Hub</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
                            <li><Link href="/dmca" className="hover:text-primary hover:translate-x-1 inline-block transition-all">DMCA Notice</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} OneList. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
