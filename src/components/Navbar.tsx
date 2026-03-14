import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary">StreamHub</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="md:hidden text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <span className="text-xl">☰</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
