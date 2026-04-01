'use client';

import Link from 'next/link';
import { useLanguage, languages } from './LanguageProvider';
import { X, Play, Send, ChevronDown, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Footer() {
    const { t, language, setLanguage } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedLang = languages.find(l => l.code === language) || languages[0];

    return (
        <footer className="bg-background border-t border-border mt-auto pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    
                    {/* Brand & Social Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <img src="/icon.png" alt="OneList Icon" className="h-10 w-auto drop-shadow-md group-hover:scale-110 transition-transform duration-300 contrast-125 brightness-90 grayscale-[0.5] sepia-[0.2] hue-rotate-180" />
                            <span className="text-xl font-black text-primary tracking-tighter uppercase italic">OneList</span>
                        </Link>
                        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                            {t('footer.description')}
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex items-center space-x-4 mt-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <X className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <Play className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <Send className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Language Selector (Footer Version) */}
                        <div className="mt-8 relative" ref={langRef}>
                            <button 
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-secondary/30 border border-border/50 text-sm font-bold hover:bg-secondary/50 transition-all"
                            >
                                <span>{selectedLang.flag}</span>
                                <span>{selectedLang.nativeName}</span>
                                <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform", isLangOpen && "rotate-180")} />
                            </button>
                            
                            {isLangOpen && (
                                <div className="absolute bottom-full left-0 mb-2 w-48 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden z-50">
                                    <div className="max-h-60 overflow-y-auto">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setIsLangOpen(false);
                                                }}
                                                className={cn(
                                                    "w-full flex items-center space-x-3 px-4 py-3 text-left text-sm hover:bg-primary/5 transition-colors",
                                                    language === lang.code && "bg-primary/10 text-primary"
                                                )}
                                            >
                                                <span>{lang.flag}</span>
                                                <span className="font-medium">{lang.nativeName}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="text-foreground font-black uppercase tracking-widest text-[11px] mb-8">{t('footer.product')}</h3>
                        <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                            <li><Link href="/movies" className="hover:text-primary transition-colors">{t('nav.movies')}</Link></li>
                            <li><Link href="/anime" className="hover:text-primary transition-colors">{t('nav.anime')}</Link></li>
                            <li><Link href="/live-sports" className="hover:text-primary transition-colors">{t('nav.sports')}</Link></li>
                            <li><Link href="/torrents" className="hover:text-primary transition-colors">{t('nav.torrents')}</Link></li>
                            <li><Link href="/online-games" className="hover:text-primary transition-colors">OneList Games</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-foreground font-black uppercase tracking-widest text-[11px] mb-8">{t('footer.resources')}</h3>
                        <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                            <li><Link href="/aitools" className="hover:text-primary transition-colors">AI Tools Hub</Link></li>
                            <li><Link href="/developer-tools" className="hover:text-primary transition-colors">Developers Tools</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/safety" className="hover:text-primary transition-colors">Safety Manual</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">{t('nav.blog')}</Link></li>
                        </ul>
                    </div>

                    {/* General Column */}
                    <div>
                        <h3 className="text-foreground font-black uppercase tracking-widest text-[11px] mb-8">{t('footer.general')}</h3>
                        <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                            <li><Link href="/vpn" className="hover:text-primary transition-colors text-primary font-bold">{t('nav.vpn')}</Link></li>
                            <li><Link href="/varieties" className="hover:text-primary transition-colors">Varieties Sites</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">{t('footer.contact_us')}</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-foreground font-black uppercase tracking-widest text-[11px] mb-8">{t('footer.legal')}</h3>
                        
                        <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy_policy')}</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">{t('footer.terms_of_service')}</Link></li>
                            <li><Link href="/dmca" className="hover:text-primary transition-colors">DMCA Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Disclaimer & Copyright */}
                <div className="pt-12 border-t border-border/50">
                    <div className="bg-secondary/30 border border-border/30 rounded-2xl p-6 md:p-8 text-center max-w-5xl mx-auto mb-10">
                        <p className="text-xs text-muted-foreground leading-relaxed tracking-wide italic">
                            {t('footer.disclaimer')}
                        </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                        <p>© {new Date().getFullYear()} OneList. {t('footer.rights')}</p>
                        <div className="flex items-center space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                            <Link href="/dmca" className="hover:text-primary transition-colors">Abuse</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
