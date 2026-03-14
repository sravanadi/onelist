import { Site } from '@/data/sites';

export default function SiteCard({ site }: { site: Site }) {
    // Extract domain for display if possible, otherwise use name
    const displayUrl = site.displayUrl || site.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

    return (
        <a
            href={site.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#1c212d] hover:bg-[#252b3a] border border-[#2d3548] py-5 px-6 rounded-xl text-white font-medium transition-all hover:scale-[1.01] active:scale-[0.99] group shadow-sm"
        >
            <span className="text-white/80 group-hover:text-primary transition-colors text-lg">
                ▶
            </span>
            <span className="text-xl tracking-tight">
                {displayUrl}
            </span>
        </a>
    );
}
