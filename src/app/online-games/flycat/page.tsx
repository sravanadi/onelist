import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Play Fly Cat Free Online - Flappy Bird Style Arcade Game | OneList',
    description: 'Play Fly Cat free online — a fun Flappy Bird style arcade game. No download needed. Tap to fly, dodge obstacles & beat your high score. Play now on OneList!',
    keywords: 'fly cat, flappy bird, free online games, arcade games, cat game, browser game, play online, no download games, casual games, mobile games',
    openGraph: {
        title: 'Play Fly Cat Free Online - Flappy Bird Style Arcade Game',
        description: 'Play Fly Cat free — a fun Flappy Bird style arcade game. No download, no signup. Just tap to fly!',
        type: 'website',
    },
};

export default function FlyCatPage() {
    return (
        <div className="min-h-screen bg-[#0a0e1a] text-white">
            {/* Top Bar */}
            <div className="w-full bg-[#0f1629]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                    <Link
                        href="/online-games"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Games
                    </Link>
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">🐱</span>
                        <div>
                            <h1 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-400 to-orange-500">
                                FLY CAT
                            </h1>
                        </div>
                    </div>
                    <div className="w-24 text-right">
                        <span className="text-[10px] text-gray-500 tracking-widest uppercase">Arcade</span>
                    </div>
                </div>
            </div>

            {/* Main Content - Game + Sidebar */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">

                    {/* Game Screen */}
                    <div className="flex-1 min-w-0">
                        <div className="relative w-full bg-[#111827] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
                             style={{ aspectRatio: '3/5', maxHeight: '90vh' }}>
                            {/* Corner Glow Effects */}
                            <div className="absolute -top-16 -left-16 w-32 h-32 bg-yellow-500/15 blur-[80px] pointer-events-none"></div>
                            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500/15 blur-[80px] pointer-events-none"></div>

                            <iframe
                                src="/games/flycat/"
                                className="w-full h-full border-none rounded-xl sm:rounded-2xl"
                                title="Fly Cat Game"
                                allow="autoplay"
                                scrolling="no"
                                style={{ overflow: 'hidden' }}
                            />

                            {/* Frame Border Glow */}
                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/5 pointer-events-none group-hover:border-yellow-500/20 transition-colors duration-500"></div>
                        </div>
                    </div>

                    {/* Sidebar Panel */}
                    <div className="w-full lg:w-80 xl:w-96 flex flex-col gap-4 sm:gap-5">

                        {/* Player Card */}
                        <div className="bg-linear-to-br from-[#1a1f35] to-[#111827] rounded-2xl border border-white/10 p-5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 blur-[60px] pointer-events-none"></div>
                            <div className="flex items-center gap-4 relative">
                                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-yellow-500/20">
                                    🐱
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Player</p>
                                    <p className="font-bold text-lg text-white">Guest</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                        <span className="text-xs text-green-400">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-5">
                                <div className="bg-white/5 rounded-xl p-3 text-center">
                                    <p className="text-xs text-gray-500">Best Score</p>
                                    <p className="text-xl font-bold text-yellow-400">—</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 text-center">
                                    <p className="text-xs text-gray-500">Games</p>
                                    <p className="text-xl font-bold text-purple-400">0</p>
                                </div>
                            </div>
                        </div>

                        {/* How to Play */}
                        <div className="bg-[#111827] rounded-2xl border border-white/10 p-5">
                            <h3 className="font-bold text-sm flex items-center gap-2 mb-4 text-yellow-400">
                                <span className="text-lg">🎮</span> How to Play
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm shrink-0">⌨️</div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Spacebar</p>
                                        <p className="text-xs text-gray-500">Flap to fly up</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm shrink-0">🖱️</div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Click / Tap</p>
                                        <p className="text-xs text-gray-500">Works on mobile too</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm shrink-0">🏆</div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Score Points</p>
                                        <p className="text-xs text-gray-500">Pass through gaps in towers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Game Features */}
                        <div className="bg-[#111827] rounded-2xl border border-white/10 p-5">
                            <h3 className="font-bold text-sm flex items-center gap-2 mb-4 text-purple-400">
                                <span className="text-lg">✨</span> Game Features
                            </h3>
                            <div className="space-y-2.5">
                                {[
                                    { icon: '🐾', label: 'Cute Cat Character', desc: 'Animated flying cat sprite' },
                                    { icon: '🌄', label: 'Dynamic Background', desc: 'Parallax clouds & sky' },
                                    { icon: '🔊', label: 'Retro Sound FX', desc: 'Arcade-style audio' },
                                    { icon: '📈', label: 'Progressive Difficulty', desc: 'Speed increases over time' },
                                    { icon: '💾', label: 'High Score Saved', desc: 'Stored locally in browser' },
                                ].map((feature) => (
                                    <div key={feature.label} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/3 hover:bg-white/6 transition-colors">
                                        <span className="text-base">{feature.icon}</span>
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-white truncate">{feature.label}</p>
                                            <p className="text-[11px] text-gray-500 truncate">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Select Character - Coming Soon */}
                        <div className="bg-[#111827] rounded-2xl border border-white/10 p-5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/2 backdrop-blur-[1px]"></div>
                            <div className="relative">
                                <h3 className="font-bold text-sm flex items-center gap-2 mb-4 text-orange-400">
                                    <span className="text-lg">🎨</span> Select Character
                                </h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { emoji: '🐱', name: 'Classic', active: true },
                                        { emoji: '🐱‍👤', name: 'Ninja', active: false },
                                        { emoji: '😺', name: 'Happy', active: false },
                                        { emoji: '🙀', name: 'Scared', active: false },
                                        { emoji: '😸', name: 'Grin', active: false },
                                        { emoji: '😻', name: 'Love', active: false },
                                    ].map((cat) => (
                                        <button
                                            key={cat.name}
                                            className={`p-3 rounded-xl text-center transition-all duration-200 ${
                                                cat.active
                                                    ? 'bg-yellow-500/20 border-2 border-yellow-500/50 shadow-lg shadow-yellow-500/10'
                                                    : 'bg-white/5 border border-white/10 opacity-50 cursor-not-allowed'
                                            }`}
                                            disabled={!cat.active}
                                        >
                                            <span className="text-2xl block">{cat.emoji}</span>
                                            <span className="text-[10px] text-gray-400 mt-1 block">{cat.name}</span>
                                            {!cat.active && <span className="text-[8px] text-gray-600 block">Soon</span>}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* SEO Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <article className="prose prose-invert max-w-none">
                    <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">Play Fly Cat Online — Free Flappy Bird Style Game</h2>

                    <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            Looking for a fun way to kill time during your lunch break or while waiting for the bus? <strong>Fly Cat</strong> is the perfect pick-up-and-play arcade game you can enjoy right in your browser — no downloads, no sign-ups, just pure fun. If you have ever played <a href="https://www.crazygames.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">Flappy Bird on CrazyGames</a> or tried similar tap-to-fly games on your phone, you already know how addictive this genre can be.
                        </p>

                        <p>
                            The idea behind Fly Cat is simple: you control a cute little cat that flies through the sky. Tap the screen or press the spacebar to flap and stay in the air. Dodge the pipes and obstacles coming your way. Every gap you pass through earns you a point. Sounds easy, right? Well, the speed picks up the longer you survive, and before you know it your palms are sweaty and you are laser-focused on beating your personal best.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Why People Love Fly Cat</h3>
                        <p>
                            There is something special about simple games that just work. You do not need a gaming PC or an expensive console. You do not need to download a 2 GB app or create an account. Just open the page and start playing. That is exactly what makes casual browser games so popular on platforms like <a href="https://www.crazygames.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">CrazyGames</a>, <a href="https://playhop.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">PlayHop</a>, <a href="https://games.yahoo.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">Yahoo Games</a>, and <a href="https://www.google.com/search?q=google+games" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">Google Games</a>.
                        </p>

                        <p>
                            Fly Cat takes the best parts of the Flappy Bird formula and adds a cute twist. Instead of a bird, you are flying a cat — complete with ears, whiskers, and big round eyes. The retro pixel-art style gives it that nostalgic arcade feel, while the smooth controls make it satisfying to play on both desktop and mobile devices. You can play it on your phone during your commute, on your laptop at work (we will not tell your boss), or on your tablet at home.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-3">How Fly Cat Compares to Other Free Online Games</h3>
                        <p>
                            If you enjoy Fly Cat, you will probably love other free browser games too. The internet is filled with great options for casual gaming. Sites like <a href="https://www.crazygames.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">CrazyGames.com</a> have hundreds of free games you can play instantly — from racing games to puzzles to action adventures. <a href="https://playhop.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">PlayHop</a> is another awesome platform where you can find games similar to Flappy Bird and other one-tap arcade classics.
                        </p>

                        <p>
                            Even big names like <a href="https://games.yahoo.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">Yahoo Games</a> offer a solid collection of free online games that you can jump into without any hassle. And of course, Google has its own collection of fun mini-games — remember the dinosaur game that shows up when your internet goes down? That is the same idea: simple, addictive, and impossible to put down.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Tips to Get a High Score in Fly Cat</h3>
                        <p>
                            Getting a high score in Fly Cat takes practice, but here are some quick tips that can help. First, do not panic. A lot of players start tapping like crazy when they see an obstacle coming, but that usually makes things worse. Stay calm and make small, controlled taps. Second, focus on the gaps between the pipes, not the pipes themselves. Your brain will naturally guide you through the openings if you keep your eyes on the target. Third, practice the rhythm. The game has a certain flow to it, and once you find that sweet spot between tapping and gliding, you will start racking up points like a pro.
                        </p>

                        <p>
                            The game also saves your high score locally in your browser, so you can always come back and try to beat it. Challenge your friends, share your scores on social media, or just enjoy the satisfaction of watching that number climb higher and higher.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Play Anytime, Anywhere</h3>
                        <p>
                            Whether you are on a quick five-minute break or settling in for a longer gaming session, Fly Cat has you covered. The game works perfectly on Chrome, Firefox, Safari, and Edge. It runs smoothly on both Android and iOS devices. No app store needed — just bookmark this page and you are good to go. And unlike a lot of free-to-play mobile games, there are no annoying pop-ups asking you to buy coins or watch ads every 30 seconds. Just you, your cat, and the sky.
                        </p>

                        <p>
                            So what are you waiting for? Scroll up, hit that play button, and see how far your flying cat can go. Your next high score is just one tap away.
                        </p>
                    </div>
                </article>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'Is Fly Cat free to play?',
                                a: 'Yes, Fly Cat is 100% free to play. There are no hidden charges, no in-app purchases, and no downloads required. Just open the page and start playing right away.'
                            },
                            {
                                q: 'Is Fly Cat similar to Flappy Bird?',
                                a: 'Yes! Fly Cat is inspired by the classic Flappy Bird gameplay. You tap to fly and dodge obstacles, but instead of a bird, you play as a cute flying cat with retro pixel-art graphics.'
                            },
                            {
                                q: 'Can I play Fly Cat on my phone?',
                                a: 'Absolutely. Fly Cat works great on mobile devices including Android and iOS. Just open this page in your mobile browser, tap the screen to flap, and enjoy the game on the go.'
                            },
                            {
                                q: 'Do I need to download anything to play?',
                                a: 'No downloads needed. Fly Cat runs entirely in your web browser. It works on Chrome, Firefox, Safari, Edge, and most modern browsers without any plugins or extensions.'
                            },
                            {
                                q: 'How do I control the cat in the game?',
                                a: 'On desktop, press the Spacebar or click anywhere on the game screen to make the cat flap its wings. On mobile, simply tap the screen. Each tap gives the cat a boost upward.'
                            },
                            {
                                q: 'Does the game save my high score?',
                                a: 'Yes, your high score is automatically saved in your browser\'s local storage. When you come back to play again, your best score will still be there waiting for you.'
                            },
                            {
                                q: 'Are there similar games I can play online?',
                                a: 'Definitely! If you enjoy Fly Cat, check out platforms like CrazyGames, PlayHop, Yahoo Games, and Google Games for hundreds of free browser games including Flappy Bird clones, endless runners, and other casual arcade games.'
                            },
                            {
                                q: 'Can I customize my cat character?',
                                a: 'Yes! Fly Cat offers character customization. You can choose from different cat skins and background themes using the BG and CAT buttons in the game menu. More character options are coming soon.'
                            },
                        ].map((faq, i) => (
                            <details key={i} className="group bg-[#111827] border border-white/10 rounded-xl overflow-hidden">
                                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-white/5 transition-colors">
                                    <span className="text-sm sm:text-base font-medium text-white pr-4">{faq.q}</span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform text-lg shrink-0">▼</span>
                                </summary>
                                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-gray-400 leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-600 text-xs py-6 border-t border-white/5 mt-4">
                <p>&copy; {new Date().getFullYear()} OneList Online Games. All rights reserved.</p>
            </div>
        </div>
    );
}
