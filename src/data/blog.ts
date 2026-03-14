export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    date: string;
    author: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'best-free-movie-sites-2026',
        title: 'Best Free Movie Sites in 2026',
        excerpt: 'Discover the top free movie streaming sites that still work perfectly in 2026 without annoying pop-ups.',
        content: '<p>Finding a reliable free streaming site can be tough...</p><h2>1. Fmovies</h2><p>Fmovies remains the king of free streaming...</p><h2>Is it safe?</h2><p>Always use a VPN when accessing these sites.</p>',
        coverImage: '/placeholder.png',
        date: '2026-03-01',
        author: 'StreamAdmin'
    },
    {
        id: '2',
        slug: 'top-10-anime-sites-without-ads',
        title: 'Top 10 Anime Sites Without Ads',
        excerpt: 'We reviewed the best ad-free anime sites for subbed and dubbed content.',
        content: '<p>Tired of pop-ups interrupting your anime binges?</p>',
        coverImage: '/placeholder.png',
        date: '2026-03-02',
        author: 'WeebMaster'
    },
    {
        id: '3',
        slug: 'is-using-vpn-legal',
        title: 'Is Using a VPN Legal?',
        excerpt: 'Everything you need to know about the legality of using VPNs for streaming.',
        content: '<p>Yes, using a VPN is perfectly legal in most countries...</p>',
        coverImage: '/placeholder.png',
        date: '2026-03-05',
        author: 'TechGuru'
    },
    {
        id: '4',
        slug: 'best-sites-watch-kdramas-free',
        title: 'Best Sites to Watch K-Dramas Free',
        excerpt: 'Get your fix of Korean dramas with these top-rated streaming directories.',
        content: '<p>Korean dramas have taken the world by storm...</p>',
        coverImage: '/placeholder.png',
        date: '2026-03-10',
        author: 'DramaLover'
    },
    {
        id: '5',
        slug: 'how-to-block-ads-on-streaming-sites',
        title: 'How to Block Ads on Streaming Sites',
        excerpt: 'A complete guide to using AdBlockers like uBlock Origin to enjoy a clean streaming experience.',
        content: '<p>Ads can ruin your streaming experience. Here is how to stop them...</p>',
        coverImage: '/placeholder.png',
        date: '2026-03-11',
        author: 'StreamAdmin'
    }
];

export const getPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
};
