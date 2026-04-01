'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, Search, Check, ChevronDown } from 'lucide-react';
import { useLanguage, languages, Language } from './LanguageProvider';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function GlobalLanguageSelector() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredLanguages = languages.filter(lang => 
        lang.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentLanguage = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Globe Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300",
                    "bg-secondary/50 hover:bg-secondary border border-border/50",
                    "backdrop-blur-sm group shadow-sm hover:shadow-md",
                    isOpen && "ring-2 ring-primary/30 border-primary/50"
                )}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-label={t('select_language')}
            >
                <div className="relative overflow-hidden rounded-full w-5 h-5 flex items-center justify-center">
                   <Globe className={cn("w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-500")} />
                </div>
                <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-foreground/80">
                    {currentLanguage.code}
                </span>
                <ChevronDown className={cn("w-3 h-3 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
            </button>

            {/* Glassmorphism Dropdown */}
            {isOpen && (
                <div className={cn(
                    "absolute top-full right-0 mt-3 w-72 max-h-[450px] overflow-hidden flex flex-col",
                    "bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-100",
                    "animate-in fade-in zoom-in-95 duration-200 origin-top-right"
                )}>
                    {/* Search Bar */}
                    <div className="p-4 border-b border-border/30 bg-muted/20">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder={t('search_languages') || "Search languages..."}
                                className="w-full pl-9 pr-4 py-2 bg-background/50 border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Language List */}
                    <div className="overflow-y-auto py-2 custom-scrollbar">
                        {filteredLanguages.length > 0 ? (
                            filteredLanguages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                        setSearchTerm('');
                                    }}
                                    className={cn(
                                        "w-full flex items-center justify-between px-4 py-3 hover:bg-primary/5 transition-colors group relative",
                                        language === lang.code && "bg-primary/10"
                                    )}
                                    role="option"
                                    aria-selected={language === lang.code}
                                >
                                    <div className="flex items-center space-x-4">
                                        <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                                            {lang.flag}
                                        </span>
                                        <div className="flex flex-col items-start -translate-y-px">
                                            <span className={cn(
                                                "text-sm font-bold text-foreground transition-colors",
                                                language === lang.code ? "text-primary" : "group-hover:text-primary/80"
                                            )}>
                                                {lang.nativeName}
                                            </span>
                                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                                                {lang.name}
                                            </span>
                                        </div>
                                    </div>
                                    {language === lang.code && (
                                        <div className="flex items-center justify-center w-5 h-5 bg-primary/20 rounded-full">
                                            <Check className="w-3 h-3 text-primary stroke-3" />
                                        </div>
                                    )}
                                </button>
                            ))
                        ) : (
                            <div className="p-8 text-center text-muted-foreground italic text-sm">
                                {t('no_languages_found') || "No languages found."}
                            </div>
                        )}
                    </div>
                    
                    {/* Footer / Selected Info */}
                    <div className="p-3 text-[10px] text-center border-t border-border/20 bg-muted/5 text-muted-foreground uppercase tracking-widest font-bold">
                        {t('total_languages') || "Global Connectivity Supported"}
                    </div>
                </div>
            )}
        </div>
    );
}
