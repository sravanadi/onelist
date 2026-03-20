/**
 * Returns the full canonical URL for a given path.
 * @param path The path of the page (e.g., '/movies' or '').
 * @returns The absolute canonical URL.
 */
export function getCanonicalUrl(path: string = ''): string {
    const baseUrl = 'https://onelist.pro';
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    // Remove trailing slash except for root
    const cleanPath = normalizedPath === '/' ? '' : normalizedPath.replace(/\/$/, '');
    return `${baseUrl}${cleanPath}`;
}

/**
 * Returns a JSON-LD BreadcrumbList schema.
 * @param pageName The name of the current page.
 * @param pageSlug The slug of the current page (e.g., '/movies').
 * @returns A JSON-LD BreadcrumbList object.
 */
export function getBreadcrumbSchema(pageName: string, pageSlug: string) {
    const baseUrl = 'https://onelist.pro';
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": pageName,
                "item": `${baseUrl}${pageSlug.startsWith('/') ? pageSlug : `/${pageSlug}`}`
            }
        ]
    };
}
