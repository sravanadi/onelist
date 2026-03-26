'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="shrink-0 flex items-center space-x-3">
                            <img src="/icon.png" alt="OneList Icon" className="h-14 w-auto drop-shadow-lg" />
                            <span className="text-2xl font-bold text-primary">OneList</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Desktop Links */}
                        <a 
                            href="https://netflash-ten.vercel.app/#/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold rounded-lg text-white bg-primary/20 border border-primary/50 hover:bg-primary/40 transition-colors"
                        >
                            Net-tools
                        </a>
                        <a 
                            href="https://typingforge.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold rounded-lg text-white bg-primary/20 border border-primary/50 hover:bg-primary/40 transition-colors"
                        >
                            typing_tools
                        </a>
                        <a 
                            href="https://fincalculator.cloud/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold rounded-lg text-white bg-primary/20 border border-primary/50 hover:bg-primary/40 transition-colors"
                        >
                            Calculator
                        </a>
                        <Link 
                            href="/varieties" 
                            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold rounded-lg text-white bg-primary/20 border border-primary/50 hover:bg-primary/40 transition-colors"
                        >
                            Varieties
                        </Link>
                        
                        {/* Mobile Hamburger Button */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
                    <div className="px-4 pt-2 pb-4 flex flex-col space-y-2 text-center">
                        <a 
                            href="https://netflash-ten.vercel.app/#/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-sm font-bold rounded-lg text-white bg-primary/20 border border-primary/50 hover:bg-primary/40 transition-colors"
                        >
                            Net-tools
                        </a>
                        <a 
                            href="https://typingforge.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-sm font-bold rounded-lg text-white bg-primary/20 border border-primary/50 hover:bg-primary/40 transition-colors"
                        >
                            typing_tools
                        </a>
                        <a 
                            href="https://fincalulator.cloud" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-sm font-bold rounded-lg text-white bg-primary/20 border border-primary/50 hover:bg-primary/40 transition-colors"
                        >
                            Calculator
                        </a>
                        <Link 
                            href="/varieties" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-sm font-bold rounded-lg text-white bg-primary/20 border border-primary/50 hover:bg-primary/40 transition-colors"
                        >
                            Varieties
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
