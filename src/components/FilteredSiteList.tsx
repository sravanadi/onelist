"use client";

import React, { useState } from 'react';
import { Site } from '@/data/sites';
import SiteCard from '@/components/SiteCard';
import Link from 'next/link';

export default function FilteredSiteList({ initialSites, categorySlug }: { initialSites: Site[], categorySlug?: string }) {
    const [filter, setFilter] = useState<'All' | 'Free' | 'Paid'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSites = initialSites.filter(site => {
        // Search filter
        const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            site.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        if (!matchesSearch) return false;

        if (filter === 'All') return true;

        if (filter === 'Free') {
            return site.badges.includes('Free') || site.badges.includes('Freemium');
        }

        if (filter === 'Paid') {
            return site.badges.includes('Paid');
        }

        return true;
    });

    // Grouping logic exclusively for the Music, eBooks, and Porn categories
    const isMusicCategory = categorySlug === 'music';
    const isEbooksCategory = categorySlug === 'ebooks';
    const isPornCategory = categorySlug === 'porn';
    const isOpenSourceTools = categorySlug === 'open-source-tools';
    const isJobsCategory = categorySlug === 'jobs';

    type GroupedSites = { [key: string]: Site[] };
    let groupedSites: GroupedSites = {};

    if (isMusicCategory) {
        groupedSites = {
            "Spotify Downloaders": filteredSites.filter(s => s.tags.includes("Spotify Downloader") || s.tags.includes("Spotify")),
            "YouTube Downloaders": filteredSites.filter(s => s.tags.includes("YouTube to MP3") || s.tags.includes("YouTube")),
            "Multi-Platform Tools": filteredSites.filter(s => s.tags.includes("Multi-Platform")),
            "Open Source Software": filteredSites.filter(s => s.tags.includes("Software"))
        };

        // Catch-all for any other music sites that don't fit the main 4 groups
        const categorizedIds = new Set(Object.values(groupedSites).flat().map(s => s.id));
        const others = filteredSites.filter(s => !categorizedIds.has(s.id));
        if (others.length > 0) {
            groupedSites["Other Music Sites"] = others;
        }
    } else if (isEbooksCategory) {
        groupedSites = {
            "eBooks": filteredSites.filter(s => s.tags.includes("eBooks") || s.tags.includes("PDF/EPUB")),
            "Audiobooks": filteredSites.filter(s => s.tags.includes("Audiobooks")),
            "eBook Readers": filteredSites.filter(s => s.tags.includes("eBook Reader"))
        };

        const categorizedIds = new Set(Object.values(groupedSites).flat().map(s => s.id));
        const others = filteredSites.filter(s => !categorizedIds.has(s.id));
        if (others.length > 0) {
            groupedSites["Other Book Sites"] = others;
        }
    } else if (isPornCategory) {
        groupedSites = {
            "AI Undress & Tools": filteredSites.filter(s => s.tags.includes("AI Undress")),
            "Onlyfans & Leaks": filteredSites.filter(s => s.tags.includes("Onlyfans") || s.tags.includes("Leaks")),
            "Free Porn Sites": filteredSites.filter(s => s.tags.includes("Free") && !s.tags.includes("AI Undress") && !s.tags.includes("Onlyfans"))
        };

        const categorizedIds = new Set(Object.values(groupedSites).flat().map(s => s.id));
        const others = filteredSites.filter(s => !categorizedIds.has(s.id));
        if (others.length > 0) {
            groupedSites["Other Adult Sites"] = others;
        }
    } else if (isOpenSourceTools) {
        groupedSites = {
            "Infrastructure & Deployment": filteredSites.filter(s => s.tags.includes("Infrastructure-and-Deployment")),
            "Research Tools": filteredSites.filter(s => s.tags.includes("Research-based")),
            "Agents & Workflows": filteredSites.filter(s => s.tags.includes("Agents-and-Workflow")),
            "AI Reasoning": filteredSites.filter(s => s.tags.includes("Reasoning")),
            "Audio & Speech": filteredSites.filter(s => s.tags.includes("Audio-and-Speech")),
            "Image Generation": filteredSites.filter(s => s.tags.includes("Image")),
            "Canvas AI": filteredSites.filter(s => s.tags.includes("Canvas-based")),
            "Learning & Frameworks": filteredSites.filter(s => s.tags.includes("Learning-based")),
            "Video & Motion": filteredSites.filter(s => s.tags.includes("Video")),
            "Music & Sound": filteredSites.filter(s => s.tags.includes("Music-based")),
            "Vibecoding": filteredSites.filter(s => s.tags.includes("Vibecoding")),
            "Coding Tools": filteredSites.filter(s => s.tags.includes("Coding"))
        };

        const categorizedIds = new Set(Object.values(groupedSites).flat().map(s => s.id));
        const others = filteredSites.filter(s => !categorizedIds.has(s.id));
        if (others.length > 0) {
            groupedSites["Other Open Source Tools"] = others;
        }
    } else if (isJobsCategory) {
        groupedSites = {
            "Global Job Search Engines": filteredSites.filter(s => s.tags.includes("Global-Jobs")),
            "Tech & IT Job Websites": filteredSites.filter(s => s.tags.includes("Tech-and-IT-Jobs")),
            "Remote Job Websites": filteredSites.filter(s => s.tags.includes("Remote-Jobs")),
            "Freshers & Internships": filteredSites.filter(s => s.tags.includes("Freshers-and-Internships")),
            "India Job Portals": filteredSites.filter(s => s.tags.includes("India-Job-Portals")),
            "Freelance & Gig Work": filteredSites.filter(s => s.tags.includes("Freelance-and-Gig-Work")),
            "Startup Jobs": filteredSites.filter(s => s.tags.includes("Startup-Jobs")),
            "Country Specific Jobs": filteredSites.filter(s => s.tags.includes("Country-Specific-Jobs")),
            "AI Powered Job Platforms": filteredSites.filter(s => s.tags.includes("AI-Powered-Jobs")),
            "Niche Job Boards": filteredSites.filter(s => s.tags.includes("Niche-Job-Boards")),
            "Bonus & Underrated Sites": filteredSites.filter(s => s.tags.includes("Underrated-Jobs"))
        };

        const categorizedIds = new Set(Object.values(groupedSites).flat().map(s => s.id));
        const others = filteredSites.filter(s => !categorizedIds.has(s.id));
        if (others.length > 0) {
            groupedSites["Other Job Resources"] = others;
        }
    }

    return (
        <>
            {/* Filter & Search Bar */}
            <div className="flex flex-col gap-6 mb-8 border-b border-border pb-6">
                <div className="relative group max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-400 group-focus-within:text-primary transition-colors">🔍</span>
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search within this category..."
                        className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setFilter('All')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'All' ? 'bg-primary text-white' : 'bg-card border border-border text-gray-300 hover:text-white'}`}>
                        All
                    </button>
                    <button
                        onClick={() => setFilter('Free')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'Free' ? 'bg-primary text-white' : 'bg-card border border-border text-gray-300 hover:text-white'}`}>
                        Free
                    </button>
                    <button
                        onClick={() => setFilter('Paid')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'Paid' ? 'bg-primary text-white' : 'bg-card border border-border text-gray-300 hover:text-white'}`}>
                        Paid
                    </button>
                </div>
            </div>

            {/* Recommendation Header */}
            <div className="text-center mb-10">
                <p className="text-lg md:text-xl font-medium text-gray-300">
                    <Link href="/adblockers" className="text-[#38bdf8] hover:text-[#7dd3fc] underline underline-offset-4 decoration-1">AdBlock</Link>
                    {" is recommended and use "}
                    <Link href="/vpn" className="text-[#38bdf8] hover:text-[#7dd3fc] underline underline-offset-4 decoration-1">VPN</Link>
                    {" if needed."}
                </p>
            </div>

            {/* Main Content Area */}
            {filteredSites.length > 0 ? (
                isMusicCategory || isEbooksCategory || isPornCategory || isOpenSourceTools || isJobsCategory ? (
                    <div className="flex flex-col gap-12">
                        {Object.entries(groupedSites).map(([groupName, sites]) => (
                            sites.length > 0 && (
                                <div key={groupName} id={groupName.replace(/\s+/g, '-').toLowerCase()} className="flex flex-col gap-4 scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                        {groupName}
                                    </h2>
                                    <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
                                        {sites.map((site) => (
                                            <div key={site.id} className="w-full">
                                                <SiteCard site={site} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
                        {filteredSites.map((site) => (
                            <div key={site.id} className="w-full">
                                <SiteCard site={site} />
                            </div>
                        ))}
                    </div>
                )
            ) : (
                <div className="py-20 text-center border border-border border-dashed rounded-xl bg-card">
                    <h3 className="text-xl font-bold text-white mb-2">No Sites Found</h3>
                    <p className="text-muted-foreground mt-2">No sites found matching your criteria.</p>
                </div>
            )}
        </>
    );
}
