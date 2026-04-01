'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, languages } from './LanguageProvider';

export default function LanguageSelector() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(l => l.code === language) || languages[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left w-full sm:w-auto" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full sm:w-48 px-4 py-2 bg-card border border-border rounded-xl text-sm font-bold text-foreground hover:border-primary/50 transition-all shadow-sm"
            >
                <div className="flex items-center">
                    <span className="mr-3 opacity-70">🌐</span>
                    <span>{currentLanguage.nativeName}</span>
                </div>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {isOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-full sm:w-64 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="grid grid-cols-2 gap-1 p-2 max-h-[300px] overflow-y-auto">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code as any);
                                    setIsOpen(false);
                                }}
                                className={`flex flex-col items-start px-3 py-2 rounded-lg text-left transition-colors ${
                                    language === lang.code 
                                    ? 'bg-primary/10 text-primary border border-primary/20' 
                                    : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <span className="text-xs font-black uppercase tracking-widest">{lang.code}</span>
                                <span className="text-sm font-bold">{lang.nativeName}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
