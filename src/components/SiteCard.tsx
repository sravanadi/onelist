'use client';
import { Site } from '@/data/sites';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function SiteCard({ site }: { site: Site }) {
    // Extract domain for display if possible, otherwise use name
    const displayUrl = site.displayUrl || site.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
    
    // Check if it's a GitHub link
    const isGitHub = site.url.includes('github.com') || site.url.includes('github.io');
    const logoSrc = isGitHub ? '/github-logo.png' : (site.logo && site.logo !== '/placeholder.png' ? site.logo : null);

    const isInternal = site.url.startsWith('/');
    const isGame = site.categoryId === 'online-games';
    const { t } = useLanguage();

    // Game card variant — professional slate style
    if (isGame) {
        const gameContent = (
            <div className="flex items-center gap-4">
                {/* Game Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/10 shrink-0 border-2 border-primary/20">
                    {logoSrc ? (
                        <img 
                            src={logoSrc} 
                            alt={site.name} 
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                        />
                    ) : (
                        <span className="text-3xl sm:text-4xl">🎮</span>
                    )}
                </div>
                {/* Game Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg sm:text-xl font-bold text-foreground truncate">
                            {site.name}
                        </span>
                        {site.tags?.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-muted-foreground hidden sm:inline">
                                {tag}
                            </span>
                        ))}
                    </div>
                    {site.description && (
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2 mt-1">
                            {site.description}
                        </p>
                    )}
                    <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            ▶ {t('games.play_now')}
                        </span>
                        <span className="text-[10px] text-muted-foreground/60">{t('games.free_no_download')}</span>
                    </div>
                </div>
            </div>
        );

        const gameClasses = "flex flex-col gap-2 w-full bg-card hover:bg-accent border border-border hover:border-primary/40 py-5 px-6 rounded-2xl text-foreground transition-all hover:scale-[1.01] active:scale-[0.99] group shadow-lg shadow-primary/5 hover:shadow-primary/10";

        if (isInternal) {
            return (
                <Link href={site.url} className={gameClasses}>
                    {gameContent}
                </Link>
            );
        }
        return (
            <a href={site.url} target="_blank" rel="nofollow noopener noreferrer" className={gameClasses}>
                {gameContent}
            </a>
        );
    }

    // Default card variant
    const cardContent = (
        <>
            <div className="flex items-center justify-center md:justify-start gap-3">
                {logoSrc ? (
                    <img 
                        src={logoSrc} 
                        alt="" 
                        className="w-5 h-5 object-contain filter group-hover:brightness-110 transition-all"
                    />
                ) : (
                    <span className="text-foreground group-hover:text-primary transition-colors text-lg shrink-0">
                        ▶
                    </span>
                )}
                <span className="text-xl font-medium tracking-tight truncate">
                    {displayUrl}
                </span>
            </div>
            {site.description && (
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2 md:line-clamp-none">
                    {site.description}
                </p>
            )}
        </>
    );

    const commonClasses = "flex flex-col gap-2 w-full bg-card hover:bg-accent border border-border py-4 px-6 rounded-xl text-foreground transition-all hover:scale-[1.01] active:scale-[0.99] group shadow-sm text-center md:text-left";

    if (isInternal) {
        return (
            <Link href={site.url} className={commonClasses}>
                {cardContent}
            </Link>
        );
    }

    return (
        <a
            href={site.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={commonClasses}
        >
            {cardContent}
        </a>
    );
}
