'use client';

import { useEffect } from 'react';
import { useLanguage, languages } from './LanguageProvider';

export default function SEOHead() {
    const { language, t } = useLanguage();

    useEffect(() => {
        // Update document title and description based on current translation
        // Note: This is client-side only. Search engines like Google execute JS, 
        // but for initial SSR, Next.js metadata in layout.tsx is used.
        
        const translatedTitle = t('nav.home') === 'Home' ? document.title : `${t('nav.home')} | OneList`;
        const translatedDesc = t('footer.description');

        if (translatedTitle && translatedTitle !== 'nav.home') {
             // document.title = translatedTitle; // Be careful not to overwrite specific page titles
        }
        
        // Hreflang injection
        const baseUrl = 'https://onelist.pro';
        const currentPath = window.location.pathname;
        
        // Remove existing hreflang tags to prevent duplicates
        const existingTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
        existingTags.forEach(tag => tag.remove());
        
        // Add new hreflang tags
        languages.forEach(lang => {
            const link = document.createElement('link');
            link.rel = 'alternate';
            link.hreflang = lang.code;
            link.href = `${baseUrl}${currentPath}`; // In a real app with /es/ paths, this would change
            document.head.appendChild(link);
        });
        
        // Add x-default
        const xDefault = document.createElement('link');
        xDefault.rel = 'alternate';
        xDefault.hreflang = 'x-default';
        xDefault.href = `${baseUrl}${currentPath}`;
        document.head.appendChild(xDefault);

    }, [language, t]);

    return null;
}
