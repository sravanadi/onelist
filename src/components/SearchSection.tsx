'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import { featuredSites, Site } from '@/data/sites';

export default function SearchSection() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ type: 'category' | 'site', id: string, name: string, image?: string, slug?: string, url?: string, categoryName?: string }[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const searchTerm = query.toLowerCase();

        // Search categories
        const matchedCategories = categories
            .filter(c => !c.isHidden && (c.name.toLowerCase().includes(searchTerm) || c.description.toLowerCase().includes(searchTerm)))
            .map(c => ({
                type: 'category' as const,
                id: c.id,
                name: c.name,
                image: c.image,
                slug: c.slug
            }));

        // Search sites (using featuredSites as the base or you could aggregate all if they were in one list, 
        // but for now we'll search the primary site data available)
        const matchedSites = featuredSites
            .filter(s => s.name.toLowerCase().includes(searchTerm) || s.description.toLowerCase().includes(searchTerm) || s.tags.some(t => t.toLowerCase().includes(searchTerm)))
            .slice(0, 10) // Limit results
            .map(s => ({
                type: 'site' as const,
                id: s.id,
                name: s.name,
                url: s.url,
                categoryName: categories.find(c => c.id === s.categoryId)?.name
            }));

        setResults([...matchedCategories, ...matchedSites].slice(0, 15));
    }, [query]);

    // Handle clicks outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative max-w-2xl mx-auto group w-full" ref={containerRef}>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 group-focus-within:text-primary transition-colors text-xl">🔍</span>
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    className="block w-full text-lg bg-card border-2 border-border rounded-full pl-12 pr-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-lg"
                    placeholder="Search for a site, category, or keyword..."
                />
                <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-[#b0060e] text-white font-semibold px-6 rounded-full transition-colors">
                    Search
                </button>
            </div>

            {/* Results Dropdown */}
            {isFocused && (query.trim()) && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-border rounded-2xl shadow-2xl overflow-hidden z-50 max-h-[400px] overflow-y-auto">
                    {results.length > 0 ? (
                        <div className="py-2">
                            {results.map((result) => (
                                <Link
                                    key={`${result.type}-${result.id}`}
                                    href={result.type === 'category' ? result.slug! : result.url!}
                                    target={result.type === 'site' ? '_blank' : '_self'}
                                    className="flex items-center gap-4 px-6 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                    onClick={() => setIsFocused(false)}
                                >
                                    <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center shrink-0 border border-border">
                                        {result.type === 'category' ? (
                                            <Image src={result.image!} alt={result.name} width={24} height={24} />
                                        ) : (
                                            <span className="text-primary text-xl font-bold">▶</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold">{result.name}</span>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                                            {result.type === 'category' ? 'Category' : `Site in ${result.categoryName}`}
                                        </span>
                                    </div>
                                    <span className="ml-auto text-gray-600">
                                        {result.type === 'category' ? 'Browse' : 'Open'} ↗
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="px-6 py-8 text-center text-muted-foreground italic">
                            No results found for "{query}"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
