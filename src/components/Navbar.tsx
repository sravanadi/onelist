'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from './LanguageProvider';
import GlobalLanguageSelector from './GlobalLanguageSelector';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const navLinks = [
        { name: t('nav.net_tools'), href: 'https://netflash-ten.vercel.app/#/', external: true },
        { name: t('nav.typing_tools'), href: 'https://typingforge.vercel.app/', external: true },
        { name: t('nav.calculator'), href: 'https://fincalculator.cloud/', external: true },
        { name: t('nav.games'), href: '/online-games' },
        { name: t('nav.varieties'), href: '/varieties' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="shrink-0 flex items-center space-x-3 group">
                            <img src="/icon.png" alt="OneList Icon" className="h-12 w-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-2xl font-black text-primary tracking-tighter uppercase italic">OneList</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-3 lg:space-x-5">
                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="px-3 py-2 text-xs font-black uppercase tracking-widest text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3 border-l border-border/50 pl-3 sm:pl-5">
                            <GlobalLanguageSelector />
                            <ThemeToggle />
                            
                            {/* Mobile Hamburger Button */}
                            <button 
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden text-muted-foreground hover:text-primary inline-flex items-center justify-center p-2 rounded-xl bg-secondary/50 border border-border/50 focus:outline-none transition-all duration-300"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-4 duration-300">
                    <div className="px-4 pt-2 pb-6 flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="block px-6 py-4 text-sm font-black uppercase tracking-widest rounded-xl text-foreground/80 bg-secondary/30 border border-border/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 text-center"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
