import { Site } from '@/data/sites';

export default function SiteCard({ site }: { site: Site }) {
    // Extract domain for display if possible, otherwise use name
    const displayUrl = site.displayUrl || site.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

    return (
        <a
            href={site.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex flex-col gap-2 w-full bg-[#1c212d] hover:bg-[#252b3a] border border-[#2d3548] py-4 px-6 rounded-xl text-white transition-all hover:scale-[1.01] active:scale-[0.99] group shadow-sm text-center md:text-left"
        >
            <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-white/80 group-hover:text-primary transition-colors text-lg shrink-0">
                    ▶
                </span>
                <span className="text-xl font-medium tracking-tight truncate">
                    {displayUrl}
                </span>
            </div>
            {site.description && (
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-2 md:line-clamp-none">
                    {site.description}
                </p>
            )}
        </a>
    );
}
