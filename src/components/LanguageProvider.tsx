'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'es' | 'zh' | 'ar' | 'fr' | 'bn' | 'pt' | 'ru' | 'ur';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    tContent: (data: any, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languages: { code: Language, name: string, nativeName: string, flag: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰' },
];

import { translations } from '@/data/translations';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        // 1. Check local storage
        const savedLang = localStorage.getItem('onelist-language') as Language;
        
        if (savedLang && languages.find(l => l.code === savedLang)) {
            applyLanguage(savedLang);
        } else {
            // 2. Detect browser language
            const browserLang = navigator.language.split('-')[0] as Language;
            const supported = languages.find(l => l.code === browserLang);
            if (supported) {
                applyLanguage(supported.code);
            } else {
                applyLanguage('en');
            }
        }
    }, []);

    const applyLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('onelist-language', lang);
        
        // SEO & Accessibility: Sync HTML attributes
        document.documentElement.lang = lang;
        
        // RTL Support: Arabic and Urdu
        const isRTL = lang === 'ar' || lang === 'ur';
        document.body.dir = isRTL ? 'rtl' : 'ltr';
        
        if (isRTL) {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
    };

    const setLanguage = (lang: Language) => {
        applyLanguage(lang);
    };

    const t = (key: string): string => {
        const keys = key.split('.');
        let current: any = translations[language] || translations['en'];
        
        for (const k of keys) {
            if (current && current[k]) {
                current = current[k];
            } else {
                // Fallback to English if key missing in current language
                let fallback: any = translations['en'];
                for (const fk of keys) {
                    if (fallback && fallback[fk]) fallback = fallback[fk];
                    else return key; // Last resort
                }
                return typeof fallback === 'string' ? fallback : key;
            }
        }
        
        return typeof current === 'string' ? current : key;
    };

    const tContent = (data: any, fallback: string = ''): string => {
        if (!data) return fallback;
        if (typeof data === 'string') return data;
        return data[language] || data['en'] || fallback;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, tContent }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
