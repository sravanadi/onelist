export type Site = {
  id: string;
  name: string;
  url: string;
  logo: string;
  description: string;
  categoryId: string;
  tags: string[];
  badges: ('Free' | 'Freemium' | 'Paid' | 'Editor Pick' | 'Popular' | 'New' | '18+')[];
  rating: number;
  addedAt: string;
  language: string;
  displayUrl?: string;
};

export const featuredSites: Site[] = [
  {
    "id": "10",
    "name": "Soap2night",
    "url": "https://soap2night.cc",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Soap2night in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "11",
    "name": "Dorawatch",
    "url": "https://dorawatch.one",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Dorawatch in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "12",
    "name": "Wmovies",
    "url": "https://wmovies.one",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Wmovies in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "13",
    "name": "Ramoflix",
    "url": "https://ramoflix.net",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Ramoflix in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "14",
    "name": "Hydrahd",
    "url": "https://hydrahd.ru",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Hydrahd in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "15",
    "name": "Cineby",
    "url": "https://cineby.gd",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Cineby in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "16",
    "name": "Flickystream",
    "url": "https://flickystream.ru",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Flickystream in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "17",
    "name": "Yflix",
    "url": "https://yflix.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Yflix in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "18",
    "name": "Cinema",
    "url": "https://cinema.bz",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Cinema in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "19",
    "name": "Flixer",
    "url": "https://flixer.su",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Flixer in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "20",
    "name": "Goojara",
    "url": "https://goojara.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Goojara in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "21",
    "name": "Flixbabafree",
    "url": "https://flixbabafree.com",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Flixbabafree in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "22",
    "name": "67movies",
    "url": "https://67movies.net",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on 67movies in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "23",
    "name": "Mapple",
    "url": "https://mapple.mov",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Mapple in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "24",
    "name": "Popcornmovies",
    "url": "https://popcornmovies.org",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Popcornmovies in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "25",
    "name": "Gomovies",
    "url": "https://gomovies.gg",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Gomovies in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "26",
    "name": "Theflixertv",
    "url": "https://theflixertv.click",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Theflixertv in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "27",
    "name": "Onionplay",
    "url": "https://onionplay.cx",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Onionplay in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "28",
    "name": "Lookmovie2",
    "url": "https://lookmovie2.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Lookmovie2 in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "29",
    "name": "Pressplayz",
    "url": "https://pressplayz.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Pressplayz in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "30",
    "name": "Moviesjoytv",
    "url": "https://moviesjoytv.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Moviesjoytv in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "31",
    "name": "Fmovies",
    "url": "https://fmovies.co",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Fmovies in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "32",
    "name": "Soap2dayhdz",
    "url": "https://soap2dayhdz.com",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Soap2dayhdz in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "33",
    "name": "Projectfreetv",
    "url": "https://projectfreetv.sx",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Projectfreetv in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "34",
    "name": "Sflix",
    "url": "https://sflix.ps",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Sflix in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "35",
    "name": "Theflixertv",
    "url": "https://theflixertv.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Theflixertv in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "36",
    "name": "Myflixerz",
    "url": "https://myflixerz.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Myflixerz in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 5,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "37",
    "name": "Hdtodayz",
    "url": "https://hdtodayz.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Hdtodayz in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "38",
    "name": "Flixhq",
    "url": "https://flixhq.to",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Flixhq in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "39",
    "name": "Hurawatch",
    "url": "https://hurawatch.cc",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Hurawatch in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "40",
    "name": "Cinebytv",
    "url": "https://cinebytv.com",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Cinebytv in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "41",
    "name": "Ridomovies",
    "url": "https://ridomovies.tv",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Ridomovies in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "42",
    "name": "123moviesfree",
    "url": "https://123moviesfree.net",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on 123moviesfree in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "43",
    "name": "Hdtoday",
    "url": "https://hdtoday.cc",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Hdtoday in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "44",
    "name": "Vidplay",
    "url": "https://vidplay.top",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Vidplay in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "45",
    "name": "Putlocker",
    "url": "https://putlocker.pe",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Putlocker in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "46",
    "name": "Yesmovies",
    "url": "https://yesmovies.ag",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Yesmovies in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "47",
    "name": "Watchseries",
    "url": "https://watchseries.pe",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Watchseries in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "48",
    "name": "Primewire",
    "url": "https://primewire.mov",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Primewire in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "49",
    "name": "Watch32",
    "url": "https://watch32.sx",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on Watch32 in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "50",
    "name": "flickr-mini.pages.dev",
    "url": "https://flickr-mini.pages.dev",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on flickr-mini.pages.dev in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "51",
    "name": "streamm4u.com.co",
    "url": "https://streamm4u.com.co",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows online on streamm4u.com.co in HD quality without registration.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "HD",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2024-03-12",
    "language": "English"
  },
  {
    "id": "2000",
    "name": "Anime",
    "url": "https://anime.nexus",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at anime.nexus. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2001",
    "name": "Hianime",
    "url": "https://hianime.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at hianime.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2002",
    "name": "9Anime TV",
    "url": "https://9animetv.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at 9animetv.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2003",
    "name": "Miruro",
    "url": "https://miruro.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at miruro.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2004",
    "name": "Anitaku",
    "url": "https://anitaku.io",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at anitaku.io. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2005",
    "name": "Anikai",
    "url": "https://anikai.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at anikai.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2006",
    "name": "GogoAnime",
    "url": "https://gogoanime.org.vc",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at gogoanime.org.vc. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2007",
    "name": "Anigo",
    "url": "https://anigo.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at anigo.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2008",
    "name": "Kickass-anime",
    "url": "https://kickass-anime.ro",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at kickass-anime.ro. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2009",
    "name": "Aniwatchtv",
    "url": "https://aniwatchtv.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at aniwatchtv.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2010",
    "name": "Animegg",
    "url": "https://animegg.org",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at animegg.org. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2011",
    "name": "Animestream",
    "url": "https://animestream.net",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at animestream.net. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2012",
    "name": "KissAnime",
    "url": "https://kissanime.com.ru",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at kissanime.com.ru. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2013",
    "name": "Allmanga",
    "url": "https://allmanga.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at allmanga.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2014",
    "name": "Aniworld",
    "url": "https://aniworld.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at aniworld.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2015",
    "name": "Wcostream",
    "url": "https://wcostream.tv",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at wcostream.tv. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2016",
    "name": "Justanime",
    "url": "https://justanime.to",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at justanime.to. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "2017",
    "name": "123animes",
    "url": "https://123animes.ru",
    "logo": "/placeholder.png",
    "description": "Watch free high-quality anime online at 123animes.ru. Stream the latest episodes in sub and dub.",
    "categoryId": "anime",
    "tags": [
      "Free",
      "HD",
      "Subbed",
      "Dubbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-12",
    "language": "English, Japanese"
  },
  {
    "id": "3000",
    "name": "Comix",
    "url": "https://comix.to",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at comix.to in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3001",
    "name": "MangaFire",
    "url": "https://mangafire.to",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at mangafire.to in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3002",
    "name": "Mangahaven",
    "url": "https://mangahaven.net",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at mangahaven.net in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3003",
    "name": "Mangataro",
    "url": "https://mangataro.org",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at mangataro.org in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3004",
    "name": "MangaDex",
    "url": "https://mangadex.org",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at mangadex.org in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3005",
    "name": "Allmanga",
    "url": "https://allmanga.to",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at allmanga.to in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3006",
    "name": "Mangago",
    "url": "https://mangago.me",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at mangago.me in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3007",
    "name": "WeebCentral",
    "url": "https://weebcentral.com",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at weebcentral.com in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3008",
    "name": "MangaNato",
    "url": "https://manganato.gg",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at manganato.gg in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "3009",
    "name": "Kagane",
    "url": "https://kagane.org",
    "logo": "/placeholder.png",
    "description": "Read free manga, manhwa, and comics online at kagane.org in high quality.",
    "categoryId": "manga",
    "tags": [
      "Free",
      "Manga",
      "Manhwa",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4000",
    "name": "LiveTV",
    "url": "https://livetv.sx",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at livetv.sx including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4001",
    "name": "TotalSportek",
    "url": "https://totalsportek.events",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at totalsportek.events including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4002",
    "name": "Streamed",
    "url": "https://streamed.pk",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at streamed.pk including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4003",
    "name": "Ntv",
    "url": "https://ntv.cx",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at ntv.cx including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4004",
    "name": "StreamEast",
    "url": "https://streameast.ga",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at streameast.ga including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4005",
    "name": "Fctv33",
    "url": "https://fctv33.hair",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at fctv33.hair including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4006",
    "name": "MethStreams",
    "url": "https://methstreams.ms",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at methstreams.ms including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4007",
    "name": "Sportsbite",
    "url": "https://sportsbite.sbs",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at sportsbite.sbs including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4008",
    "name": "Sport71",
    "url": "https://sport71.pro",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at sport71.pro including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4009",
    "name": "Sportyhunter",
    "url": "https://sportyhunter.com",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at sportyhunter.com including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4010",
    "name": "Watchsports",
    "url": "https://watchsports.to",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at watchsports.to including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4011",
    "name": "Onhockey",
    "url": "https://onhockey.tv",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at onhockey.tv including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4012",
    "name": "CrackStreams",
    "url": "https://crackstreams.io",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at crackstreams.io including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4013",
    "name": "Sportplus",
    "url": "https://sportplus.live",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at sportplus.live including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4014",
    "name": "Livetv861",
    "url": "https://livetv861.me",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at livetv861.me including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4015",
    "name": "Strikeout",
    "url": "https://strikeout.im",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at strikeout.im including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4016",
    "name": "Watchfooty",
    "url": "https://watchfooty.st",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at watchfooty.st including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "4017",
    "name": "SportSurge",
    "url": "https://sportsurge.net",
    "logo": "/placeholder.png",
    "description": "Watch free live sports streams online at sportsurge.net including NFL, NBA, Football, and UFC in HD.",
    "categoryId": "live-sports",
    "tags": [
      "Free",
      "Live Sports",
      "HD",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "5000",
    "name": "The TV",
    "url": "https://the-tv.app",
    "logo": "/placeholder.png",
    "description": "Watch free live television channels online from around the world at the-tv.app. Includes news, sports, and entertainment broadcasts.",
    "categoryId": "live-tv",
    "tags": [
      "Free",
      "Live TV",
      "IPTV",
      "News",
      "Entertainment"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "5001",
    "name": "Globetv",
    "url": "https://globetv.app",
    "logo": "/placeholder.png",
    "description": "Watch free live television channels online from around the world at globetv.app. Includes news, sports, and entertainment broadcasts.",
    "categoryId": "live-tv",
    "tags": [
      "Free",
      "Live TV",
      "IPTV",
      "News",
      "Entertainment"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "5002",
    "name": "DaddyLive",
    "url": "https://daddylive.mp",
    "logo": "/placeholder.png",
    "description": "Watch free live television channels online from around the world at daddylive.mp. Includes news, sports, and entertainment broadcasts.",
    "categoryId": "live-tv",
    "tags": [
      "Free",
      "Live TV",
      "IPTV",
      "News",
      "Entertainment"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "5003",
    "name": "TV247 US",
    "url": "https://tv247us.live",
    "logo": "/placeholder.png",
    "description": "Watch free live television channels online from around the world at tv247us.live. Includes news, sports, and entertainment broadcasts.",
    "categoryId": "live-tv",
    "tags": [
      "Free",
      "Live TV",
      "IPTV",
      "News",
      "Entertainment"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "5004",
    "name": "Ntvstream",
    "url": "https://ntvstream.cx",
    "logo": "/placeholder.png",
    "description": "Watch free live television channels online from around the world at ntvstream.cx. Includes news, sports, and entertainment broadcasts.",
    "categoryId": "live-tv",
    "tags": [
      "Free",
      "Live TV",
      "IPTV",
      "News",
      "Entertainment"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "5005",
    "name": "IPTV Web",
    "url": "https://iptv-web.app",
    "logo": "/placeholder.png",
    "description": "Watch free live television channels online from around the world at iptv-web.app. Includes news, sports, and entertainment broadcasts.",
    "categoryId": "live-tv",
    "tags": [
      "Free",
      "Live TV",
      "IPTV",
      "News",
      "Entertainment"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "5006",
    "name": "Publiciptv",
    "url": "https://publiciptv.com",
    "logo": "/placeholder.png",
    "description": "Watch free live television channels online from around the world at publiciptv.com. Includes news, sports, and entertainment broadcasts.",
    "categoryId": "live-tv",
    "tags": [
      "Free",
      "Live TV",
      "IPTV",
      "News",
      "Entertainment"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6000",
    "name": "1337x",
    "url": "https://1337x.to",
    "logo": "/placeholder.png",
    "description": "Download free torrents from 1337x, offering high quality P2P sharing.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6001",
    "name": "Rutracker",
    "url": "https://rutracker.org",
    "logo": "/placeholder.png",
    "description": "Download free torrents from Rutracker, offering high quality P2P sharing.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6002",
    "name": "LimeTorrents",
    "url": "https://limetorrents.fun",
    "logo": "/placeholder.png",
    "description": "Download free torrents from LimeTorrents, offering high quality P2P sharing.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6003",
    "name": "YTS",
    "url": "https://yts.bz",
    "logo": "/placeholder.png",
    "description": "Download high quality movie torrents from YTS.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P",
      "Movies"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6004",
    "name": "EZTV",
    "url": "https://eztvx.to",
    "logo": "/placeholder.png",
    "description": "Download the latest TV show torrents from EZTV.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P",
      "TV Shows"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6005",
    "name": "TorrentGalaxy",
    "url": "https://torrentgalaxy.one",
    "logo": "/placeholder.png",
    "description": "Download free torrents from TorrentGalaxy, offering high quality P2P sharing.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6006",
    "name": "ExtraTorrent",
    "url": "https://extratorrent.st",
    "logo": "/placeholder.png",
    "description": "Download free torrents from ExtraTorrent, offering high quality P2P sharing.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6007",
    "name": "Ext",
    "url": "https://ext.to",
    "logo": "/placeholder.png",
    "description": "Download free torrents from Ext, offering high quality P2P sharing.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6008",
    "name": "RARBG",
    "url": "https://rargb.to",
    "logo": "/placeholder.png",
    "description": "Download free torrents from RARBG, offering high quality P2P sharing.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "6009",
    "name": "The Pirate Bay",
    "url": "https://thepiratebay.org",
    "logo": "/placeholder.png",
    "description": "The Pirate Bay is a legendary torrent index. Use a VPN and proceed at your own risk.",
    "categoryId": "torrents",
    "tags": [
      "Free",
      "Torrents",
      "P2P",
      "Risky"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "7000",
    "name": "FitGirl Repacks",
    "url": "https://fitgirl-repacks.site",
    "logo": "/placeholder.png",
    "description": "The official site for FitGirl Repacks, offering highly compressed free PC games.",
    "categoryId": "games",
    "tags": [
      "Free",
      "PC Games",
      "Repacks",
      "Downloads"
    ],
    "badges": [
      "Free",
      "Editor Pick"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "7001",
    "name": "DODI Repacks",
    "url": "https://dodi-repacks.site",
    "logo": "/placeholder.png",
    "description": "The official site for DODI Repacks, offering highly compressed free PC games.",
    "categoryId": "games",
    "tags": [
      "Free",
      "PC Games",
      "Repacks",
      "Downloads"
    ],
    "badges": [
      "Free",
      "Editor Pick"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "7002",
    "name": "AnkerGames",
    "url": "https://ankergames.net",
    "logo": "/placeholder.png",
    "description": "Download free PC games, repacks, and standalone versions directly from AnkerGames.",
    "categoryId": "games",
    "tags": [
      "Free",
      "PC Games",
      "Repacks",
      "Downloads"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "7003",
    "name": "G4U",
    "url": "https://g4u.to",
    "logo": "/placeholder.png",
    "description": "Download free PC games, repacks, and standalone versions directly from G4U.",
    "categoryId": "games",
    "tags": [
      "Free",
      "PC Games",
      "Repacks",
      "Downloads"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "7004",
    "name": "SteamRIP",
    "url": "https://steamrip.com",
    "logo": "/placeholder.png",
    "description": "Download free PC games, repacks, and standalone versions directly from SteamRIP.",
    "categoryId": "games",
    "tags": [
      "Free",
      "PC Games",
      "Repacks",
      "Downloads"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "7005",
    "name": "SteamGG",
    "url": "https://steamgg.net",
    "logo": "/placeholder.png",
    "description": "Download free PC games, repacks, and standalone versions directly from SteamGG.",
    "categoryId": "games",
    "tags": [
      "Free",
      "PC Games",
      "Repacks",
      "Downloads"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "7006",
    "name": "M4ckD0ge Repacks",
    "url": "https://m4ckd0ge-repacks.site",
    "logo": "/placeholder.png",
    "description": "Download free PC games, repacks, and standalone versions directly from M4ckD0ge Repacks.",
    "categoryId": "games",
    "tags": [
      "Free",
      "PC Games",
      "Repacks",
      "Downloads"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "7007",
    "name": "Gload",
    "url": "https://gload.to",
    "logo": "/placeholder.png",
    "description": "Download free PC games, repacks, and standalone versions directly from Gload.",
    "categoryId": "games",
    "tags": [
      "Free",
      "PC Games",
      "Repacks",
      "Downloads"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8000",
    "name": "SpotDownloader",
    "url": "https://spotdownloader.com",
    "logo": "/placeholder.png",
    "description": "Download your favorite tracks and playlists directly from Spotify using SpotDownloader.",
    "categoryId": "music",
    "tags": [
      "Spotify Downloader",
      "MP3",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8001",
    "name": "SpotifyMate",
    "url": "https://spotifymate.com",
    "logo": "/placeholder.png",
    "description": "Download your favorite tracks and playlists directly from Spotify using SpotifyMate.",
    "categoryId": "music",
    "tags": [
      "Spotify Downloader",
      "MP3",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8002",
    "name": "SpotMate",
    "url": "https://spotmate.online",
    "logo": "/placeholder.png",
    "description": "Download your favorite tracks and playlists directly from Spotify using SpotMate.",
    "categoryId": "music",
    "tags": [
      "Spotify Downloader",
      "MP3",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8003",
    "name": "Y2Mate",
    "url": "https://y2mate.nu",
    "logo": "/placeholder.png",
    "description": "Convert and download YouTube videos to MP3 high quality audio using Y2Mate.",
    "categoryId": "music",
    "tags": [
      "YouTube to MP3",
      "Converter",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8004",
    "name": "AZMP3",
    "url": "https://azmp3.cc",
    "logo": "/placeholder.png",
    "description": "Convert and download YouTube videos to MP3 high quality audio using AZMP3.",
    "categoryId": "music",
    "tags": [
      "YouTube to MP3",
      "Converter",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8005",
    "name": "YTMP3",
    "url": "https://ytmp3.cc",
    "logo": "/placeholder.png",
    "description": "Convert and download YouTube videos to MP3 high quality audio using YTMP3.",
    "categoryId": "music",
    "tags": [
      "YouTube to MP3",
      "Converter",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8006",
    "name": "Racoon",
    "url": "https://racoon.to",
    "logo": "/placeholder.png",
    "description": "A versatile downloader supporting multiple platforms including Spotify, Soundcloud, and YouTube via Racoon.",
    "categoryId": "music",
    "tags": [
      "Multi-Platform",
      "Downloader",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8007",
    "name": "Ytiz",
    "url": "https://ytiz.xyz",
    "logo": "/placeholder.png",
    "description": "A versatile downloader supporting multiple platforms including Spotify, Soundcloud, and YouTube via Ytiz.",
    "categoryId": "music",
    "tags": [
      "Multi-Platform",
      "Downloader",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8008",
    "name": "Lucida",
    "url": "https://lucida.to",
    "logo": "/placeholder.png",
    "description": "A versatile downloader supporting multiple platforms including Spotify, Soundcloud, and YouTube via Lucida.",
    "categoryId": "music",
    "tags": [
      "Multi-Platform",
      "Downloader",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8009",
    "name": "Cobalt",
    "url": "https://cobalt.tools",
    "logo": "/placeholder.png",
    "description": "A versatile downloader supporting multiple platforms including Spotify, Soundcloud, and YouTube via Cobalt.",
    "categoryId": "music",
    "tags": [
      "Multi-Platform",
      "Downloader",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8010",
    "name": "Soulseek",
    "url": "https://slsknet.org",
    "logo": "/placeholder.png",
    "description": "Free, open source desktop software for discovering and downloading music: Soulseek.",
    "categoryId": "music",
    "tags": [
      "Software",
      "P2P",
      "Open Source"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8011",
    "name": "Spotube",
    "url": "https://spotube.dev",
    "logo": "/placeholder.png",
    "description": "Free, open source desktop software for discovering and downloading music: Spotube.",
    "categoryId": "music",
    "tags": [
      "Software",
      "P2P",
      "Open Source"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "8012",
    "name": "Downline",
    "url": "https://github.io/downline",
    "logo": "/placeholder.png",
    "description": "Free, open source desktop software for discovering and downloading music: Downline.",
    "categoryId": "music",
    "tags": [
      "Software",
      "P2P",
      "Open Source"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "9000",
    "name": "Z-Library",
    "url": "https://z-lib.gd",
    "logo": "/placeholder.png",
    "description": "Download your favorite eBooks in EPUB and PDF formats directly from Z-Library.",
    "categoryId": "ebooks",
    "tags": [
      "eBooks",
      "PDF/EPUB",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "9001",
    "name": "Anna's Archive",
    "url": "https://annas-archive.li",
    "logo": "/placeholder.png",
    "description": "Download your favorite eBooks in EPUB and PDF formats directly from Anna's Archive.",
    "categoryId": "ebooks",
    "tags": [
      "eBooks",
      "PDF/EPUB",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "9002",
    "name": "Library Genesis",
    "url": "https://libgen.li",
    "logo": "/placeholder.png",
    "description": "Download your favorite eBooks in EPUB and PDF formats directly from Library Genesis.",
    "categoryId": "ebooks",
    "tags": [
      "eBooks",
      "PDF/EPUB",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "9003",
    "name": "eBook Hunter",
    "url": "https://ebook-hunter.org",
    "logo": "/placeholder.png",
    "description": "Download your favorite eBooks in EPUB and PDF formats directly from eBook Hunter.",
    "categoryId": "ebooks",
    "tags": [
      "eBooks",
      "PDF/EPUB",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "9004",
    "name": "Galaxy Audiobook",
    "url": "https://galaxyaudiobook.com",
    "logo": "/placeholder.png",
    "description": "Stream and download high-quality audiobooks for free using Galaxy Audiobook.",
    "categoryId": "ebooks",
    "tags": [
      "Audiobooks",
      "Streaming",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "9005",
    "name": "AudiobookBay",
    "url": "https://audiobookbay.lu",
    "logo": "/placeholder.png",
    "description": "Stream and download high-quality audiobooks for free using AudiobookBay.",
    "categoryId": "ebooks",
    "tags": [
      "Audiobooks",
      "Streaming",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "9006",
    "name": "Nepu",
    "url": "https://nepu.to",
    "logo": "/placeholder.png",
    "description": "Stream and download high-quality audiobooks for free using Nepu.",
    "categoryId": "ebooks",
    "tags": [
      "Audiobooks",
      "Streaming",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "9007",
    "name": "Foxit Reader",
    "url": "https://foxit.com",
    "logo": "/placeholder.png",
    "description": "Read and organize your digital library with Foxit Reader, a top-rated eBook reader.",
    "categoryId": "ebooks",
    "tags": [
      "eBook Reader",
      "Software",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "9008",
    "name": "Foliate",
    "url": "https://flowoss.com",
    "logo": "/placeholder.png",
    "description": "Read and organize your digital library with Foliate, a top-rated eBook reader.",
    "categoryId": "ebooks",
    "tags": [
      "eBook Reader",
      "Software",
      "Free"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "10000",
    "name": "ReadComicOnline",
    "url": "https://readcomiconline.li",
    "logo": "/placeholder.png",
    "description": "Read classic and modern comic books for free online at ReadComicOnline.",
    "categoryId": "comics",
    "tags": [
      "Free",
      "Comics",
      "DC",
      "Marvel"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "10001",
    "name": "XOXO Comic",
    "url": "https://xoxocomic.com",
    "logo": "/placeholder.png",
    "description": "Read classic and modern comic books for free online at XOXO Comic.",
    "categoryId": "comics",
    "tags": [
      "Free",
      "Comics",
      "DC",
      "Marvel"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "10002",
    "name": "ReadComicsOnline",
    "url": "https://readcomicsonline.ru",
    "logo": "/placeholder.png",
    "description": "Read classic and modern comic books for free online at ReadComicsOnline.",
    "categoryId": "comics",
    "tags": [
      "Free",
      "Comics",
      "DC",
      "Marvel"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "10003",
    "name": "Batcave",
    "url": "https://batcave.biz",
    "logo": "/placeholder.png",
    "description": "Read classic and modern comic books for free online at Batcave.",
    "categoryId": "comics",
    "tags": [
      "Free",
      "Comics",
      "DC",
      "Marvel"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "10004",
    "name": "GetComics",
    "url": "https://getcomics.org",
    "logo": "/placeholder.png",
    "description": "Download thousands of DC, Marvel, and indie comics for free in CBR/CBZ formats at GetComics.",
    "categoryId": "comics",
    "tags": [
      "Free",
      "Comics",
      "DC",
      "Marvel"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English"
  },
  {
    "id": "11000",
    "name": "AsiaFlix",
    "url": "https://asiaflix.net",
    "logo": "/placeholder.png",
    "description": "Watch your favorite KDrama, CDrama, and JDrama online for free at AsiaFlix with English subtitles.",
    "categoryId": "asian-drama",
    "tags": [
      "Free",
      "KDrama",
      "CDrama",
      "Subbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "Korean, Chinese, Japanese, English Subtitles"
  },
  {
    "id": "11001",
    "name": "KissKH",
    "url": "https://kisskh.id",
    "logo": "/placeholder.png",
    "description": "Watch your favorite KDrama, CDrama, and JDrama online for free at KissKH with English subtitles.",
    "categoryId": "asian-drama",
    "tags": [
      "Free",
      "KDrama",
      "CDrama",
      "Subbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "Korean, Chinese, Japanese, English Subtitles"
  },
  {
    "id": "11002",
    "name": "GoPlay",
    "url": "https://goplay.su",
    "logo": "/placeholder.png",
    "description": "Watch your favorite KDrama, CDrama, and JDrama online for free at GoPlay with English subtitles.",
    "categoryId": "asian-drama",
    "tags": [
      "Free",
      "KDrama",
      "CDrama",
      "Subbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "Korean, Chinese, Japanese, English Subtitles"
  },
  {
    "id": "11003",
    "name": "KissAsian",
    "url": "https://kissasian.com.lv",
    "logo": "/placeholder.png",
    "description": "Watch your favorite KDrama, CDrama, and JDrama online for free at KissAsian with English subtitles.",
    "categoryId": "asian-drama",
    "tags": [
      "Free",
      "KDrama",
      "CDrama",
      "Subbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "Korean, Chinese, Japanese, English Subtitles"
  },
  {
    "id": "11004",
    "name": "DramaCool",
    "url": "https://dramacool.com.tr",
    "logo": "/placeholder.png",
    "description": "Watch your favorite KDrama, CDrama, and JDrama online for free at DramaCool with English subtitles.",
    "categoryId": "asian-drama",
    "tags": [
      "Free",
      "KDrama",
      "CDrama",
      "Subbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "Korean, Chinese, Japanese, English Subtitles"
  },
  {
    "id": "11005",
    "name": "AsianCTV",
    "url": "https://asianctv.cc",
    "logo": "/placeholder.png",
    "description": "Watch your favorite KDrama, CDrama, and JDrama online for free at AsianCTV with English subtitles.",
    "categoryId": "asian-drama",
    "tags": [
      "Free",
      "KDrama",
      "CDrama",
      "Subbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "Korean, Chinese, Japanese, English Subtitles"
  },
  {
    "id": "11006",
    "name": "MyAsianTV",
    "url": "https://myasiantv.com.bz",
    "logo": "/placeholder.png",
    "description": "Watch your favorite KDrama, CDrama, and JDrama online for free at MyAsianTV with English subtitles.",
    "categoryId": "asian-drama",
    "tags": [
      "Free",
      "KDrama",
      "CDrama",
      "Subbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "Korean, Chinese, Japanese, English Subtitles"
  },
  {
    "id": "11007",
    "name": "KissKH",
    "url": "https://kisskh.club",
    "logo": "/placeholder.png",
    "description": "Watch your favorite KDrama, CDrama, and JDrama online for free at KissKH with English subtitles.",
    "categoryId": "asian-drama",
    "tags": [
      "Free",
      "KDrama",
      "CDrama",
      "Subbed"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "Korean, Chinese, Japanese, English Subtitles"
  },
  {
    "id": "12000",
    "name": "Stake",
    "url": "https://stake.com",
    "logo": "/placeholder.png",
    "description": "Play top casino games, slots, and bet on sports at Stake.",
    "categoryId": "gambling",
    "tags": [
      "Gambling",
      "Casino",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12001",
    "name": "Duelbits",
    "url": "https://duelbits.com",
    "logo": "/placeholder.png",
    "description": "Play top casino games, slots, and bet on sports at Duelbits.",
    "categoryId": "gambling",
    "tags": [
      "Gambling",
      "Casino",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12002",
    "name": "BitStarz",
    "url": "https://bitstarz.com",
    "logo": "/placeholder.png",
    "description": "Play top casino games, slots, and bet on sports at BitStarz.",
    "categoryId": "gambling",
    "tags": [
      "Gambling",
      "Casino",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12003",
    "name": "Shuffle",
    "url": "https://shuffle.com",
    "logo": "/placeholder.png",
    "description": "Play top casino games, slots, and bet on sports at Shuffle.",
    "categoryId": "gambling",
    "tags": [
      "Gambling",
      "Casino",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12004",
    "name": "Roobet",
    "url": "https://roobet.com",
    "logo": "/placeholder.png",
    "description": "Play top casino games, slots, and bet on sports at Roobet.",
    "categoryId": "gambling",
    "tags": [
      "Gambling",
      "Casino",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12005",
    "name": "Wild",
    "url": "https://wild.io",
    "logo": "/placeholder.png",
    "description": "Play top casino games, slots, and bet on sports at Wild.",
    "categoryId": "gambling",
    "tags": [
      "Gambling",
      "Casino",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12006",
    "name": "BC.Game",
    "url": "https://bc.game",
    "logo": "/placeholder.png",
    "description": "Play top casino games, slots, and bet on sports at BC.Game.",
    "categoryId": "gambling",
    "tags": [
      "Gambling",
      "Casino",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12007",
    "name": "Rainbet",
    "url": "https://rainbet.com",
    "logo": "/placeholder.png",
    "description": "Play top casino games, slots, and bet on sports at Rainbet.",
    "categoryId": "gambling",
    "tags": [
      "Gambling",
      "Casino",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12008",
    "name": "Skinrave",
    "url": "https://skinrave.gg",
    "logo": "/placeholder.png",
    "description": "The best CS2 skin gambling and case opening site: Skinrave.",
    "categoryId": "gambling",
    "tags": [
      "CS2 Gambling",
      "Skins",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "12009",
    "name": "Rain",
    "url": "https://rain.gg",
    "logo": "/placeholder.png",
    "description": "The best CS2 skin gambling and case opening site: Rain.",
    "categoryId": "gambling",
    "tags": [
      "CS2 Gambling",
      "Skins",
      "Crypto"
    ],
    "badges": [
      "18+"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13000",
    "name": "EternalAI",
    "url": "https://eternalai.org",
    "logo": "/placeholder.png",
    "description": "Advanced AI Undress generator and artificial intelligence tools at EternalAI.",
    "categoryId": "porn",
    "tags": [
      "AI Undress",
      "AI",
      "18+",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13001",
    "name": "Fapello",
    "url": "https://fapello.com",
    "logo": "/placeholder.png",
    "description": "Discover free OnlyFans leaks and exclusive content absolutely free on Fapello.",
    "categoryId": "porn",
    "tags": [
      "Onlyfans",
      "Leaks",
      "18+",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13002",
    "name": "Coomer",
    "url": "https://coomer.st",
    "logo": "/placeholder.png",
    "description": "Discover free OnlyFans leaks and exclusive content absolutely free on Coomer.",
    "categoryId": "porn",
    "tags": [
      "Onlyfans",
      "Leaks",
      "18+",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13003",
    "name": "Erothots",
    "url": "https://erothots.is",
    "logo": "/placeholder.png",
    "description": "Discover free OnlyFans leaks and exclusive content absolutely free on Erothots.",
    "categoryId": "porn",
    "tags": [
      "Onlyfans",
      "Leaks",
      "18+",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13004",
    "name": "Bunkr Albums",
    "url": "https://bunkr-albums.io",
    "logo": "/placeholder.png",
    "description": "Discover free OnlyFans leaks and exclusive content absolutely free on Bunkr Albums.",
    "categoryId": "porn",
    "tags": [
      "Onlyfans",
      "Leaks",
      "18+",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13005",
    "name": "Egooners",
    "url": "https://egooners.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at Egooners for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13006",
    "name": "Beeg",
    "url": "https://beeg.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at Beeg for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13007",
    "name": "YouPorn",
    "url": "https://youporn.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at YouPorn for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13008",
    "name": "Porntrex",
    "url": "https://porntrex.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at Porntrex for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13009",
    "name": "XVideos",
    "url": "https://xvideos.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at XVideos for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13010",
    "name": "SpankBang",
    "url": "https://spankbang.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at SpankBang for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13011",
    "name": "xHamster",
    "url": "https://xhamster.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at xHamster for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13012",
    "name": "Porndoe",
    "url": "https://porndoe.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at Porndoe for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13013",
    "name": "Xnxx",
    "url": "https://xnxx.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at Xnxx for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13014",
    "name": "RedTube",
    "url": "https://redtube.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at RedTube for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13015",
    "name": "CzechVideo",
    "url": "https://czechvideo.ac",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at CzechVideo for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13016",
    "name": "Pornhub",
    "url": "https://pornhub.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at Pornhub for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "13017",
    "name": "ePorner",
    "url": "https://eporner.com",
    "logo": "/placeholder.png",
    "description": "Watch premium 18+ adult entertainment at ePorner for free in stunning HD.",
    "categoryId": "porn",
    "tags": [
      "18+",
      "Adult",
      "Free"
    ],
    "badges": [
      "18+",
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "15000",
    "name": "uBlock Origin",
    "url": "https://ublockorigin.com",
    "logo": "/placeholder.png",
    "description": "An efficient, open-source ad blocker that is light on CPU and memory.",
    "categoryId": "adblockers",
    "tags": [
      "Adblocker",
      "Extension",
      "Privacy",
      "Open Source"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "15001",
    "name": "AdBlock Plus",
    "url": "https://adblockplus.org",
    "logo": "/placeholder.png",
    "description": "Block annoying ads and pop-ups while browsing online using AdBlock Plus.",
    "categoryId": "adblockers",
    "tags": [
      "Adblocker",
      "Extension",
      "Privacy"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "15002",
    "name": "AdGuard",
    "url": "https://adguard.com",
    "logo": "/placeholder.png",
    "description": "Block annoying ads and pop-ups while browsing online using AdGuard.",
    "categoryId": "adblockers",
    "tags": [
      "Adblocker",
      "Extension",
      "Privacy"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "15003",
    "name": "AdBlock",
    "url": "https://getadblock.com",
    "logo": "/placeholder.png",
    "description": "Block annoying ads and pop-ups while browsing online using AdBlock.",
    "categoryId": "adblockers",
    "tags": [
      "Adblocker",
      "Extension",
      "Privacy"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "15004",
    "name": "Poper Blocker",
    "url": "https://poperblocker.com",
    "logo": "/placeholder.png",
    "description": "Block annoying ads and pop-ups while browsing online using Poper Blocker.",
    "categoryId": "adblockers",
    "tags": [
      "Adblocker",
      "Extension",
      "Privacy"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "14000",
    "name": "NordVPN (Most Popular)",
    "url": "https://nordvpn.com",
    "logo": "/placeholder.png",
    "description": "Protect your online privacy and bypass geo-restrictions securely with NordVPN.",
    "categoryId": "vpn",
    "tags": [
      "VPN",
      "Privacy",
      "Security",
      "Top Rated"
    ],
    "badges": [
      "Paid",
      "Popular"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "14001",
    "name": "Surfshark VPN",
    "url": "https://surfshark.com",
    "logo": "/placeholder.png",
    "description": "Protect your online privacy and bypass geo-restrictions securely with Surfshark VPN.",
    "categoryId": "vpn",
    "tags": [
      "VPN",
      "Privacy",
      "Security"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "14002",
    "name": "ExpressVPN",
    "url": "https://expressvpn.com",
    "logo": "/placeholder.png",
    "description": "Protect your online privacy and bypass geo-restrictions securely with ExpressVPN.",
    "categoryId": "vpn",
    "tags": [
      "VPN",
      "Privacy",
      "Security"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "14003",
    "name": "CyberGhost VPN",
    "url": "https://cyberghostvpn.com",
    "logo": "/placeholder.png",
    "description": "Protect your online privacy and bypass geo-restrictions securely with CyberGhost VPN.",
    "categoryId": "vpn",
    "tags": [
      "VPN",
      "Privacy",
      "Security"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "14004",
    "name": "Private Internet Access VPN",
    "url": "https://privateinternetaccess.com",
    "logo": "/placeholder.png",
    "description": "Protect your online privacy and bypass geo-restrictions securely with Private Internet Access VPN.",
    "categoryId": "vpn",
    "tags": [
      "VPN",
      "Privacy",
      "Security"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  {
    "id": "14005",
    "name": "VeePN",
    "url": "https://veepn.com",
    "logo": "/placeholder.png",
    "description": "Protect your online privacy and bypass geo-restrictions securely with VeePN.",
    "categoryId": "vpn",
    "tags": [
      "VPN",
      "Privacy",
      "Security"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-13",
    "language": "English, International"
  },
  // --- AI CHAT / TEXT MODELS ---
  { id: "chatgpt", name: "ChatGPT", url: "https://chat.openai.com/", logo: "/placeholder.png", description: "Leading AI chatbot for productivity and creativity.", categoryId: "ai-chat", tags: ["AI", "Chat", "LLM"], badges: ["Popular"], rating: 5, addedAt: "2026-03-14", language: "Multiple" },
  { id: "claude", name: "Claude AI", url: "https://claude.ai/", logo: "/placeholder.png", description: "Helpful and safe AI assistant by Anthropic.", categoryId: "ai-chat", tags: ["AI", "Chat", "Safe AI"], badges: ["Editor Pick"], rating: 4.9, addedAt: "2026-03-14", language: "Multiple" },
  { id: "gemini", name: "Gemini", url: "https://gemini.google.com/", logo: "/placeholder.png", description: "Google's powerful AI assistant.", categoryId: "ai-chat", tags: ["AI", "Google", "LLM"], badges: ["Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "meta-ai", name: "Meta AI", url: "https://meta.ai/", logo: "/placeholder.png", description: "AI assistant integrated into Meta platforms.", categoryId: "ai-chat", tags: ["AI", "Social", "Free"], badges: ["New"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "copilot", name: "Copilot", url: "https://copilot.microsoft.com/", logo: "/placeholder.png", description: "Microsoft's AI companion for work.", categoryId: "ai-chat", tags: ["AI", "Office", "Productivity"], badges: ["Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "perplexity", name: "Perplexity AI", url: "https://perplexity.ai/", logo: "/placeholder.png", description: "AI-powered search and answer engine.", categoryId: "ai-chat", tags: ["AI", "Search", "Answers"], badges: ["Popular"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "grok", name: "Grok", url: "https://grok.com/", logo: "/placeholder.png", description: "Elon Musk's AI with real-time access to X.", categoryId: "ai-chat", tags: ["AI", "X", "Real-time"], badges: ["Popular"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "deepseek", name: "DeepSeek", url: "https://chat.deepseek.com/", logo: "/placeholder.png", description: "Powerful open-source AI models.", categoryId: "ai-chat", tags: ["AI", "Open Source", "Free"], badges: ["Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "mistral", name: "Mistral AI", url: "https://mistral.ai/", logo: "/placeholder.png", description: "Europe's leading AI open-weight models.", categoryId: "ai-chat", tags: ["AI", "Europe", "Open Source"], badges: ["Editor Pick"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "huggingchat", name: "HuggingChat", url: "https://huggingface.co/chat", logo: "/placeholder.png", description: "Open source chat using top Hugging Face models.", categoryId: "ai-chat", tags: ["AI", "Open Source", "Community"], badges: ["Free"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "pi-ai", name: "Pi AI", url: "https://pi.ai/", logo: "/placeholder.png", description: "Personal AI companion designed to be kind.", categoryId: "ai-chat", tags: ["AI", "Personal", "Conversational"], badges: ["New"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "you-ai", name: "You.com", url: "https://you.com/", logo: "/placeholder.png", description: "AI-powered search engine with chat capabilities.", categoryId: "ai-chat", tags: ["AI", "Search", "Privacy"], badges: ["Popular"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "poe", name: "Poe", url: "https://poe.com/", logo: "/placeholder.png", description: "Access all major AI models in one place.", categoryId: "ai-chat", tags: ["AI", "Models Hub", "Productivity"], badges: ["Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "phind", name: "Phind", url: "https://phind.com/", logo: "/placeholder.png", description: "AI search engine for developers.", categoryId: "ai-chat", tags: ["AI", "Coding", "Search"], badges: ["Editor Pick"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "kimi", name: "Kimi AI", url: "https://kimi.ai/", logo: "/placeholder.png", description: "Smart AI assistant for long context processing.", categoryId: "ai-chat", tags: ["AI", "Long Context", "Assistant"], badges: ["New"], rating: 4.7, addedAt: "2026-03-14", language: "Chinese, English" },
  { id: "qwen", name: "Qwen", url: "https://qwen.ai/", logo: "/placeholder.png", description: "Alibaba's powerful large language models.", categoryId: "ai-chat", tags: ["AI", "Alibaba", "LLM"], badges: ["New"], rating: 4.6, addedAt: "2026-03-14", language: "Multiple" },
  { id: "character-ai", name: "Character AI", url: "https://character.ai/", logo: "/placeholder.png", description: "Chat with AI-powered fictional characters.", categoryId: "ai-chat", tags: ["AI", "Entertainment", "Social"], badges: ["Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },

  // --- AI IMAGE GENERATION ---
  { id: "midjourney", name: "Midjourney", url: "https://www.midjourney.com/", logo: "/placeholder.png", description: "High-quality AI image generation via Discord.", categoryId: "ai-image", tags: ["AI", "Art", "Image"], badges: ["Paid", "Popular"], rating: 5, addedAt: "2026-03-14", language: "English" },
  { id: "dalle-3", name: "DALL-E 3", url: "https://openai.com/dall-e-3", logo: "/placeholder.png", description: "OpenAI's advanced AI image generation.", categoryId: "ai-image", tags: ["AI", "OpenAI", "Image"], badges: ["Paid", "Popular"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "stable-diffusion", name: "Stable Diffusion", url: "https://stability.ai/", logo: "/placeholder.png", description: "Open source AI image generation.", categoryId: "ai-image", tags: ["AI", "Open Source", "Image"], badges: ["Free"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "adobe-firefly", name: "Adobe Firefly", url: "https://firefly.adobe.com/", logo: "/placeholder.png", description: "Adobe's creative generative AI model.", categoryId: "ai-image", tags: ["AI", "Adobe", "Design"], badges: ["Freemium", "Editor Pick"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "ideogram", name: "Ideogram", url: "https://ideogram.ai/", logo: "/placeholder.png", description: "AI specialized in typography and design.", categoryId: "ai-image", tags: ["AI", "Typography", "Art"], badges: ["Freemium", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "leonardo-ai", name: "Leonardo AI", url: "https://leonardo.ai/", logo: "/placeholder.png", description: "AI platform for visual asset generation.", categoryId: "ai-image", tags: ["AI", "Art", "Design"], badges: ["Freemium", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "playground-ai", name: "Playground AI", url: "https://playground.com/", logo: "/placeholder.png", description: "Online AI image creator and editor.", categoryId: "ai-image", tags: ["AI", "Art", "Tool"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "canva-ai", name: "Canva AI", url: "https://canva.com/", logo: "/placeholder.png", description: "AI-powered design tools within Canva.", categoryId: "ai-image", tags: ["AI", "Design", "Productivity"], badges: ["Freemium", "Popular"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "night-cafe", name: "NightCafe", url: "https://nightcafe.studio/", logo: "/placeholder.png", description: "Community-driven AI art generation.", categoryId: "ai-image", tags: ["AI", "Art", "Community"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "dream-studio", name: "DreamStudio", url: "https://dreamstudio.ai/", logo: "/placeholder.png", description: "Standard tool for high-quality generated images.", categoryId: "ai-image", tags: ["AI", "Art", "Stable Diffusion"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "bing-creator", name: "Bing Image Creator", url: "https://www.bing.com/images/create", logo: "/placeholder.png", description: "Create images from words with AI by Microsoft.", categoryId: "ai-image", tags: ["AI", "Microsoft", "Free"], badges: ["Free"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "sea-art", name: "SeaArt", url: "https://www.seaart.ai/", logo: "/placeholder.png", description: "Web-based AI art platform with many models.", categoryId: "ai-image", tags: ["AI", "Art", "Models"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "tensor-art", name: "Tensor.Art", url: "https://tensor.art/", logo: "/placeholder.png", description: "AI model hosting and image generation platform.", categoryId: "ai-image", tags: ["AI", "Models", "Generation"], badges: ["Free"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "craiyon", name: "Craiyon", url: "https://www.craiyon.com/", logo: "/placeholder.png", description: "Free AI image generator, formerly DALL-E mini.", categoryId: "ai-image", tags: ["AI", "Art", "Free"], badges: ["Free"], rating: 4.2, addedAt: "2026-03-14", language: "English" },
  { id: "krea-ai", name: "Krea AI", url: "https://www.krea.ai/", logo: "/placeholder.png", description: "Real-time AI image generation and enhancement.", categoryId: "ai-image", tags: ["AI", "Real-time", "Design"], badges: ["Freemium"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "flux-ai", name: "Flux AI", url: "https://flux1.ai/", logo: "/placeholder.png", description: "Next-gen photorealistic image generation.", categoryId: "ai-image", tags: ["AI", "Photorealism", "New"], badges: ["Freemium", "Popular"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "artbreeder", name: "Artbreeder", url: "https://artbreeder.com/", logo: "/placeholder.png", description: "Collaborative AI art exploration.", categoryId: "ai-image", tags: ["AI", "Art", "Social"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "starry-ai", name: "Starry AI", url: "https://starryai.com/", logo: "/placeholder.png", description: "AI art generator app for Android and iOS.", categoryId: "ai-image", tags: ["AI", "Mobile", "Art"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "fotor-ai", name: "Fotor AI", url: "https://www.fotor.com/ai-image-generator", logo: "/placeholder.png", description: "Online AI image generator and editing tool.", categoryId: "ai-image", tags: ["AI", "Editor", "Art"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "Multiple" },
  { id: "piclumen", name: "PicLumen", url: "https://www.piclumen.com/", logo: "/placeholder.png", description: "AI image generator for creative projects.", categoryId: "ai-image", tags: ["AI", "Art", "Generation"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "freepik-ai", name: "Freepik AI", url: "https://www.freepik.com/ai", logo: "/placeholder.png", description: "Generative AI tools by Freepik.", categoryId: "ai-image", tags: ["AI", "Design", "Assets"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "getimg-ai", name: "Getimg.ai", url: "https://getimg.ai/", logo: "/placeholder.png", description: "Everything you need to create images with AI.", categoryId: "ai-image", tags: ["AI", "Art", "Tools"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "neural-love", name: "Neural.love", url: "https://neural.love/", logo: "/placeholder.png", description: "AI image and video enhancement tools.", categoryId: "ai-image", tags: ["AI", "Enhancement", "Art"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "pixai", name: "Pixai", url: "https://pixai.art/", logo: "/placeholder.png", description: "AI anime art generator.", categoryId: "ai-image", tags: ["AI", "Anime", "Art"], badges: ["Free"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "novelai", name: "NovelAI", url: "https://novelai.net/", logo: "/placeholder.png", description: "AI-assisted writing and image generation.", categoryId: "ai-image", tags: ["AI", "Writing", "Art"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },

  // --- AI VIDEO GENERATION ---
  // --- AI VIDEO GENERATION ---
  { id: "sora", name: "Sora", url: "https://sora.com/", logo: "/placeholder.png", description: "OpenAI's groundbreaking text-to-video model.", categoryId: "ai-video", tags: ["AI", "Video", "OpenAI"], badges: ["Paid", "New"], rating: 5, addedAt: "2026-03-14", language: "English" },
  { id: "runway-ml", name: "Runway ML", url: "https://runwayml.com/", logo: "/placeholder.png", description: "Advanced AI-powered creative software.", categoryId: "ai-video", tags: ["AI", "Video", "Creative"], badges: ["Freemium", "Popular"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "pika-labs", name: "Pika Labs", url: "https://pika.art/", logo: "/placeholder.png", description: "AI video generation platform.", categoryId: "ai-video", tags: ["AI", "Video", "Animation"], badges: ["Freemium", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "kling-ai", name: "Kling AI", url: "https://klingai.com/", logo: "/placeholder.png", description: "High-definition AI video generation.", categoryId: "ai-video", tags: ["AI", "Video", "HD"], badges: ["Freemium", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Chinese, English" },
  { id: "luma-dream", name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", logo: "/placeholder.png", description: "AI for cinematic video generation.", categoryId: "ai-video", tags: ["AI", "Cinematic", "New"], badges: ["Freemium", "Editor Pick"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "stable-video", name: "Stable Video", url: "https://stability.ai/stable-video", logo: "/placeholder.png", description: "Open source video generation from Stability AI.", categoryId: "ai-video", tags: ["AI", "Video", "Stable Diffusion"], badges: ["Free"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "invideo-ai", name: "Invideo AI", url: "https://invideo.io/", logo: "/placeholder.png", description: "Generate full videos from text prompts.", categoryId: "ai-video", tags: ["AI", "Video", "Automation"], badges: ["Freemium", "Popular"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "synthesia", name: "Synthesia", url: "https://synthesia.io/", logo: "/placeholder.png", description: "Create AI videos with human presenters.", categoryId: "ai-video", tags: ["AI", "Business", "Video"], badges: ["Paid", "Popular"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "heygen", name: "HeyGen", url: "https://heygen.com/", logo: "/placeholder.png", description: "AI avatar-based video creation.", categoryId: "ai-video", tags: ["AI", "Avatar", "Business"], badges: ["Freemium", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "veed-io", name: "Veed.io", url: "https://www.veed.io/", logo: "/placeholder.png", description: "Online video editor with AI tools.", categoryId: "ai-video", tags: ["AI", "Editor", "Video"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "pictory", name: "Pictory", url: "https://pictory.ai/", logo: "/placeholder.png", description: "AI video tool for content marketers.", categoryId: "ai-video", tags: ["AI", "Marketing", "Video"], badges: ["Paid"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "descript", name: "Descript", url: "https://www.descript.com/", logo: "/placeholder.png", description: "All-in-one video and podcast editing powered by AI.", categoryId: "ai-video", tags: ["AI", "Editor", "Audio"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "capcut-ai", name: "CapCut AI", url: "https://www.capcut.com/", logo: "/placeholder.png", description: "Video editing platform with massive AI creative features.", categoryId: "ai-video", tags: ["AI", "Video", "TikTok"], badges: ["Free"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "fliki", name: "Fliki", url: "https://fliki.ai/", logo: "/placeholder.png", description: "Turn text into videos with AI voices.", categoryId: "ai-video", tags: ["AI", "Voices", "Video"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "Multiple" },
  { id: "genmo", name: "Genmo", url: "https://www.genmo.ai/", logo: "/placeholder.png", description: "AI platform for creating and sharing generative art and video.", categoryId: "ai-video", tags: ["AI", "Generative", "Video"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "hailuo-ai", name: "Hailuo AI", url: "https://hailuoai.video/", logo: "/placeholder.png", description: "High-quality AI video generator.", categoryId: "ai-video", tags: ["AI", "Video", "HD"], badges: ["Free"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "minimax-video", name: "Minimax Video", url: "https://www.minimaxi.com/", logo: "/placeholder.png", description: "Next-gen AI video creative platform.", categoryId: "ai-video", tags: ["AI", "Video", "Creative"], badges: ["Free"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "gemini-veo", name: "Gemini Veo", url: "https://deepmind.google/veo", logo: "/placeholder.png", description: "Google DeepMind's most capable video generation model.", categoryId: "ai-video", tags: ["AI", "Google", "Video"], badges: ["Paid", "New"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "pixverse", name: "Pixverse", url: "https://pixverse.ai/", logo: "/placeholder.png", description: "Powerful AI video platform for creators.", categoryId: "ai-video", tags: ["AI", "Video", "Creative"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "wan-ai", name: "Wan AI", url: "https://wan.video/", logo: "/placeholder.png", description: "AI specialized in high-end video generation.", categoryId: "ai-video", tags: ["AI", "Video", "HD"], badges: ["Freemium", "New"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "viggle-ai", name: "Viggle AI", url: "https://viggle.ai/", logo: "/placeholder.png", description: "Controllable video generation using AI.", categoryId: "ai-video", tags: ["AI", "Control", "Video"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "steve-ai", name: "Steve AI", url: "https://www.steve.ai/", logo: "/placeholder.png", description: "AI video maker for social media and business.", categoryId: "ai-video", tags: ["AI", "Social Media", "Video"], badges: ["Paid"], rating: 4.5, addedAt: "2026-03-14", language: "Multiple" },
  { id: "animoto", name: "Animoto", url: "https://animoto.com/", logo: "/placeholder.png", description: "Simple online video builder with AI features.", categoryId: "ai-video", tags: ["AI", "Business", "Video"], badges: ["Freemium"], rating: 4.4, addedAt: "2026-03-14", language: "English" },
  { id: "visla", name: "Visla", url: "https://www.visla.us/", logo: "/placeholder.png", description: "AI powered platform for video storytelling.", categoryId: "ai-video", tags: ["AI", "Storytelling", "Video"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "mootion", name: "Mootion", url: "https://www.mootion.com/", logo: "/placeholder.png", description: "AI creative platform for motion and video.", categoryId: "ai-video", tags: ["AI", "Motion", "Video"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },

  // --- AI WEBSITE / CODE BUILDERS ---
  // --- AI WEBSITE / CODE BUILDERS ---
  { id: "cursor", name: "Cursor", url: "https://cursor.com/", logo: "/placeholder.png", description: "The AI-first code editor built for pair programming.", categoryId: "ai-code", tags: ["AI", "Coding", "IDE"], badges: ["Freemium", "Popular"], rating: 5, addedAt: "2026-03-14", language: "English" },
  { id: "bolt-new", name: "Bolt.new", url: "https://bolt.new/", logo: "/placeholder.png", description: "Prompt-to-app web development platform.", categoryId: "ai-code", tags: ["AI", "Web Dev", "Fullstack"], badges: ["Freemium", "New"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "lovable", name: "Lovable", url: "https://lovable.dev/", logo: "/placeholder.png", description: "The world's most capable AI app builder.", categoryId: "ai-code", tags: ["AI", "No-code", "Web Dev"], badges: ["Freemium", "New"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "v0-vercel", name: "v0 by Vercel", url: "https://v0.dev/", logo: "/placeholder.png", description: "AI-powered React UI generation by Vercel.", categoryId: "ai-code", tags: ["AI", "React", "UI"], badges: ["Freemium", "Popular"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "replit-ai", name: "Replit AI", url: "https://replit.com/", logo: "/placeholder.png", description: "AI-powered workspace and software agent on Replit.", categoryId: "ai-code", tags: ["AI", "Coding", "Cloud"], badges: ["Freemium", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "github-copilot", name: "GitHub Copilot", url: "https://github.com/copilot", logo: "/placeholder.png", description: "The world's most widely used AI developer tool.", categoryId: "ai-code", tags: ["AI", "Coding", "GitHub"], badges: ["Paid", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "windsurf", name: "Windsurf", url: "https://codeium.com/windsurf", logo: "/placeholder.png", description: "Next-gen AI IDE by Codeium.", categoryId: "ai-code", tags: ["AI", "IDE", "Coding"], badges: ["Freemium", "New"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "wix-ai", name: "Wix AI", url: "https://wix.com/", logo: "/placeholder.png", description: "AI-powered website builder within Wix.", categoryId: "ai-code", tags: ["AI", "No-code", "Wix"], badges: ["Freemium", "Popular"], rating: 4.6, addedAt: "2026-03-14", language: "Multiple" },
  { id: "framer-ai", name: "Framer AI", url: "https://framer.com/", logo: "/placeholder.png", description: "Ship your sites with AI as your design partner.", categoryId: "ai-code", tags: ["AI", "Web Dev", "Design"], badges: ["Freemium", "Popular"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "webflow-ai", name: "Webflow AI", url: "https://webflow.com/", logo: "/placeholder.png", description: "Professional website builder with AI capabilities.", categoryId: "ai-code", tags: ["AI", "Webflow", "Design"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "durable-ai", name: "Durable AI", url: "https://durable.co/", logo: "/placeholder.png", description: "Build a website in 30 seconds with AI.", categoryId: "ai-code", tags: ["AI", "Business", "Website"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "tenweb", name: "10Web", url: "https://10web.io/", logo: "/placeholder.png", description: "AI-powered WordPress platform.", categoryId: "ai-code", tags: ["AI", "WordPress", "Hosting"], badges: ["Paid"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "hostinger-ai", name: "Hostinger AI", url: "https://www.hostinger.com/ai-website-builder", logo: "/placeholder.png", description: "Hostinger's AI-driven website generation.", categoryId: "ai-code", tags: ["AI", "Hosting", "Website"], badges: ["Paid"], rating: 4.4, addedAt: "2026-03-14", language: "Multiple" },
  { id: "unicorn-platform", name: "Unicorn Platform", url: "https://unicornplatform.com/", logo: "/placeholder.png", description: "AI website builder for startups/SaaS.", categoryId: "ai-code", tags: ["AI", "Startup", "SaaS"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "antigravity-ai", name: "Antigravity AI", url: "https://antigravity.dev/", logo: "/placeholder.png", description: "Advanced AI-powered coding and development assistant.", categoryId: "ai-code", tags: ["AI", "Coding", "Assistant"], badges: ["Freemium", "Editor Pick"], rating: 5, addedAt: "2026-03-14", language: "English" },
  { id: "firebase-studio", name: "Firebase Studio", url: "https://firebase.studio/", logo: "/placeholder.png", description: "AI development environment for Firebase.", categoryId: "ai-code", tags: ["AI", "Firebase", "Backend"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "tempo-labs", name: "Tempo Labs", url: "https://www.tempolabs.ai/", logo: "/placeholder.png", description: "AI-powered React tool for designers and developers.", categoryId: "ai-code", tags: ["AI", "React", "Design"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "softgen", name: "Softgen", url: "https://softgen.ai/", logo: "/placeholder.png", description: "Build full-stack web apps with AI.", categoryId: "ai-code", tags: ["AI", "Full-stack", "Web Dev"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "trickle-ai", name: "Trickle AI", url: "https://www.trickle.so/", logo: "/placeholder.png", description: "AI-powered workspace for modern teams.", categoryId: "ai-code", tags: ["AI", "Workspace", "Productivity"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "butternut-ai", name: "Butternut AI", url: "https://butternut.ai/", logo: "/placeholder.png", description: "Generate websites instantly with AI.", categoryId: "ai-code", tags: ["AI", "Website", "Instant"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "dorik-ai", name: "Dorik AI", url: "https://dorik.com/", logo: "/placeholder.png", description: "White-label AI website builder.", categoryId: "ai-code", tags: ["AI", "White-label", "Website"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "stunning-ai", name: "Stunning AI", url: "https://stunning.so/", logo: "/placeholder.png", description: "AI tools for creators and developers.", categoryId: "ai-code", tags: ["AI", "Creators", "Dev"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "claude-artifacts", name: "Claude Artifacts", url: "https://claude.ai/", logo: "/placeholder.png", description: "Interactive AI code execution and UI rendering within Claude.", categoryId: "ai-code", tags: ["AI", "Claude", "Interactive"], badges: ["Freemium", "Popular"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "tabnine", name: "Tabnine", url: "https://www.tabnine.com/", logo: "/placeholder.png", description: "AI assistant for software developers.", categoryId: "ai-code", tags: ["AI", "Coding", "Autocomplete"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "codeium-main", name: "Codeium", url: "https://codeium.com/", logo: "/placeholder.png", description: "Free AI-powered code acceleration and search.", categoryId: "ai-code", tags: ["AI", "Coding", "Free"], badges: ["Free", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },

  // --- AI AUDIO / MUSIC / VOICE ---
  { id: "suno", name: "Suno AI", url: "https://suno.com/", logo: "/placeholder.png", description: "Advanced AI music generation platform.", categoryId: "ai-audio", tags: ["AI", "Music", "Generative"], badges: ["Freemium", "Popular"], rating: 5, addedAt: "2026-03-14", language: "Multiple" },
  { id: "udio", name: "Udio", url: "https://udio.com/", logo: "/placeholder.png", description: "High-fidelity AI music generation and sharing.", categoryId: "ai-audio", tags: ["AI", "Music", "HD"], badges: ["Freemium", "Popular"], rating: 4.9, addedAt: "2026-03-14", language: "Multiple" },
  { id: "elevenlabs", name: "ElevenLabs", url: "https://try.elevenlabs.io/2zqn0p2b1snf", logo: "/placeholder.png", description: "State-of-the-art AI voice and speech generation.", categoryId: "ai-audio", tags: ["AI", "Voice", "TTS"], badges: ["Freemium", "Popular"], rating: 5, addedAt: "2026-03-14", language: "Multiple", displayUrl: "elevenlabs.io" },
  { id: "murf-ai", name: "Murf AI", url: "https://murf.ai/", logo: "/placeholder.png", description: "Professional AI voiceover generation.", categoryId: "ai-audio", tags: ["AI", "Voice", "Professional"], badges: ["Freemium", "Popular"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "play-ht", name: "PlayHT", url: "https://play.ht/", logo: "/placeholder.png", description: "AI voice generator with ultra-realistic voices.", categoryId: "ai-audio", tags: ["AI", "Voice", "Realism"], badges: ["Freemium", "Popular"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "descript-audio", name: "Descript", url: "https://www.descript.com/", logo: "/placeholder.png", description: "AI-powered audio and video editing platform.", categoryId: "ai-audio", tags: ["AI", "Editor", "Audio"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "adobe-podcast", name: "Adobe Podcast", url: "https://podcast.adobe.com/", logo: "/placeholder.png", description: "AI-powered audio enhancement and recording.", categoryId: "ai-audio", tags: ["AI", "Audio", "Podcast"], badges: ["Free"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "soundraw", name: "Soundraw", url: "https://soundraw.io/", logo: "/placeholder.png", description: "AI music generator for content creators.", categoryId: "ai-audio", tags: ["AI", "Music", "Creators"], badges: ["Paid"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "boomy", name: "Boomy", url: "https://boomy.com/", logo: "/placeholder.png", description: "Make music with artificial intelligence.", categoryId: "ai-audio", tags: ["AI", "Music", "Creation"], badges: ["Freemium"], rating: 4.4, addedAt: "2026-03-14", language: "English" },
  { id: "aiva", name: "AIVA", url: "https://www.aiva.ai/", logo: "/placeholder.png", description: "AI composing assistant for original music.", categoryId: "ai-audio", tags: ["AI", "Music", "Composer"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "loudme", name: "Loudme", url: "https://loudme.ai/", logo: "/placeholder.png", description: "AI music generator and discovery platform.", categoryId: "ai-audio", tags: ["AI", "Music", "Discovery"], badges: ["Free"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "splash-music", name: "Splash Music", url: "https://www.splashmusic.com/", logo: "/placeholder.png", description: "AI-powered music composition and performance.", categoryId: "ai-audio", tags: ["AI", "Music", "Gaming"], badges: ["Free"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "voicemod", name: "Voicemod", url: "https://www.voicemod.net/", logo: "/placeholder.png", description: "Real-time AI voice changer and soundboard.", categoryId: "ai-audio", tags: ["AI", "Voice", "Gaming"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "resemble-ai", name: "Resemble AI", url: "https://www.resemble.ai/", logo: "/placeholder.png", description: "Custom AI voices and voice cloning.", categoryId: "ai-audio", tags: ["AI", "Voice", "Cloning"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "speechify", name: "Speechify", url: "https://speechify.com/", logo: "/placeholder.png", description: "Leading AI text-to-speech reader.", categoryId: "ai-audio", tags: ["AI", "TTS", "Productivity"], badges: ["Freemium"], rating: 4.9, addedAt: "2026-03-14", language: "Multiple" },
  { id: "listnr", name: "Listnr", url: "https://www.listnr.com/", logo: "/placeholder.png", description: "AI voice generator and podcast hosting.", categoryId: "ai-audio", tags: ["AI", "Voice", "Podcast"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "beatoven-ai", name: "Beatoven AI", url: "https://www.beatoven.ai/", logo: "/placeholder.png", description: "AI music generator for YouTube and podcasts.", categoryId: "ai-audio", tags: ["AI", "Music", "Royalty Free"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "musicfy", name: "Musicfy", url: "https://musicfy.lol/", logo: "/placeholder.png", description: "AI voice conversion for music.", categoryId: "ai-audio", tags: ["AI", "Music", "Voice"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "natural-reader", name: "Natural Reader", url: "https://www.naturalreaders.com/", logo: "/placeholder.png", description: "Professional text-to-speech for personal or commercial use.", categoryId: "ai-audio", tags: ["AI", "TTS", "Professional"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "typecast", name: "Typecast", url: "https://typecast.ai/", logo: "/placeholder.png", description: "AI virtual actors and voice generator.", categoryId: "ai-audio", tags: ["AI", "Voice", "Virtual Actor"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "Multiple" },

  // --- AI WRITING / CONTENT TOOLS ---
  { id: "jasper", name: "Jasper AI", url: "https://jasper.ai/", logo: "/placeholder.png", description: "AI content platform for marketing teams.", categoryId: "ai-writing", tags: ["AI", "Marketing", "Copywriting"], badges: ["Paid"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "copy-ai", name: "Copy.ai", url: "https://copy.ai/", logo: "/placeholder.png", description: "AI-powered copywriting for every channel.", categoryId: "ai-writing", tags: ["AI", "Copywriting", "Efficiency"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "writesonic", name: "Writesonic", url: "https://writesonic.com/", logo: "/placeholder.png", description: "AI writer for SEO blogs and ads.", categoryId: "ai-writing", tags: ["AI", "SEO", "Blogs"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "rytr", name: "Rytr", url: "https://rytr.me/", logo: "/placeholder.png", description: "AI writing assistant that helps you create high-quality content.", categoryId: "ai-writing", tags: ["AI", "Writing", "Content"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "quillbot", name: "Quillbot", url: "https://quillbot.com/", logo: "/placeholder.png", description: "AI paraphrasing and writing tool.", categoryId: "ai-writing", tags: ["AI", "Paraphrasing", "Writing"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "grammarly-ai", name: "Grammarly AI", url: "https://grammarly.com/", logo: "/placeholder.png", description: "AI-enhanced writing assistant and checker.", categoryId: "ai-writing", tags: ["AI", "Grammar", "Productivity"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "notion-ai", name: "Notion AI", url: "https://www.notion.so/", logo: "/placeholder.png", description: "AI tools integrated directly into Notion workspace.", categoryId: "ai-writing", tags: ["AI", "Writing", "Productivity"], badges: ["Paid"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "sudowrite", name: "Sudowrite", url: "https://www.sudowrite.com/", logo: "/placeholder.png", description: "The AI writing partner you've been looking for.", categoryId: "ai-writing", tags: ["AI", "Fiction", "Writing"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "wordtune", name: "Wordtune", url: "https://www.wordtune.com/", logo: "/placeholder.png", description: "AI professional writing assistant.", categoryId: "ai-writing", tags: ["AI", "Writing", "Professional"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "hypotenuse-ai", name: "Hypotenuse AI", url: "https://www.hypotenuse.ai/", logo: "/placeholder.png", description: "AI content generator for e-commerce and marketing.", categoryId: "ai-writing", tags: ["AI", "Markdown", "Content"], badges: ["Paid"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "anyword", name: "Anyword", url: "https://anyword.com/", logo: "/placeholder.png", description: "AI writing platform with predictive performance.", categoryId: "ai-writing", tags: ["AI", "Marketing", "Copywriting"], badges: ["Paid"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "simplified", name: "Simplified", url: "https://simplified.com/", logo: "/placeholder.png", description: "All-in-one platform for design, writing, and social media.", categoryId: "ai-writing", tags: ["AI", "Content", "Simplified"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "Multiple" },
  { id: "peppertype", name: "Peppertype", url: "https://www.peppertype.ai/", logo: "/placeholder.png", description: "Your virtual content assistant.", categoryId: "ai-writing", tags: ["AI", "Copywriting", "Virtual Assistant"], badges: ["Paid"], rating: 4.4, addedAt: "2026-03-14", language: "English" },
  { id: "cohesive-ai", name: "Cohesive AI", url: "https://cohesive.so/", logo: "/placeholder.png", description: "The most powerful AI editor.", categoryId: "ai-writing", tags: ["AI", "Editor", "Content"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "narrato", name: "Narrato", url: "https://narrato.io/", logo: "/placeholder.png", description: "AI content workspace for teams.", categoryId: "ai-writing", tags: ["AI", "Content", "Teams"], badges: ["Paid"], rating: 4.4, addedAt: "2026-03-14", language: "English" },
  { id: "ink-editor", name: "Ink Editor", url: "https://inkforall.com/", logo: "/placeholder.png", description: "AI content marketing tool for SEO and writing.", categoryId: "ai-writing", tags: ["AI", "SEO", "Marketing"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "scalenut", name: "Scalenut", url: "https://www.scalenut.com/", logo: "/placeholder.png", description: "AI-powered SEO and content marketing platform.", categoryId: "ai-writing", tags: ["AI", "SEO", "Marketing"], badges: ["Paid"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "frase-io", name: "Frase.io", url: "https://www.frase.io/", logo: "/placeholder.png", description: "AI writing and SEO research tool.", categoryId: "ai-writing", tags: ["AI", "SEO", "Research"], badges: ["Paid"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "longshot-ai", name: "Longshot AI", url: "https://www.longshot.ai/", logo: "/placeholder.png", description: "AI for long-form content generation.", categoryId: "ai-writing", tags: ["AI", "Long-form", "Writing"], badges: ["Paid"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "article-forge", name: "Article Forge", url: "https://www.articleforge.com/", logo: "/placeholder.png", description: "Automatically generate high-quality articles with AI.", categoryId: "ai-writing", tags: ["AI", "Articles", "Automated"], badges: ["Paid"], rating: 4.4, addedAt: "2026-03-14", language: "English" },

  // --- AI SEARCH ENGINES ---
  { id: "perplexity-search", name: "Perplexity AI", url: "https://perplexity.ai/", logo: "/placeholder.png", description: "AI search engine that provides direct answers.", categoryId: "ai-search", tags: ["AI", "Search", "Answers"], badges: ["Freemium", "Popular"], rating: 5, addedAt: "2026-03-14", language: "English" },
  { id: "you-search", name: "You.com", url: "https://you.com/", logo: "/placeholder.png", description: "The private search engine with chat AI.", categoryId: "ai-search", tags: ["AI", "Search", "Privacy"], badges: ["Freemium", "Popular"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "phind-search", name: "Phind", url: "https://phind.com/", logo: "/placeholder.png", description: "AI-powered search for software engineers.", categoryId: "ai-search", tags: ["AI", "Coding", "Search"], badges: ["Freemium", "Popular"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "bing-ai", name: "Bing AI", url: "https://bing.com/", logo: "/placeholder.png", description: "Microsoft's AI-enhanced search engine.", categoryId: "ai-search", tags: ["AI", "Microsoft", "Search"], badges: ["Free"], rating: 4.5, addedAt: "2026-03-14", language: "Multiple" },
  { id: "exa-ai", name: "Exa AI", url: "https://exa.ai/", logo: "/placeholder.png", description: "Search engine built for AI agents.", categoryId: "ai-search", tags: ["AI", "Search", "API"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "tavily-ai", name: "Tavily", url: "https://tavily.com/", logo: "/placeholder.png", description: "AI search engine optimized for LLMs and RAG.", categoryId: "ai-search", tags: ["AI", "Search", "RAG"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "consensus-app", name: "Consensus", url: "https://consensus.app/", logo: "/placeholder.png", description: "AI search engine for scientific research.", categoryId: "ai-search", tags: ["AI", "Research", "Science"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "elicit-ai", name: "Elicit", url: "https://elicit.com/", logo: "/placeholder.png", description: "AI research assistant for scientific papers.", categoryId: "ai-search", tags: ["AI", "Research", "Academic"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "semantic-scholar", name: "Semantic Scholar", url: "https://www.semanticscholar.org/", logo: "/placeholder.png", description: "AI-powered research tool for scientific literature.", categoryId: "ai-search", tags: ["AI", "Research", "Open Access"], badges: ["Free"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "scispace", name: "Scispace", url: "https://typeset.io/", logo: "/placeholder.png", description: "AI-powered platform to understand and write papers.", categoryId: "ai-search", tags: ["AI", "Research", "Writing"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "kagi-search", name: "Kagi", url: "https://kagi.com/", logo: "/placeholder.png", description: "Premium, ad-free search engine.", categoryId: "ai-search", tags: ["AI", "Search", "Premium"], badges: ["Paid"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "brave-search-ai", name: "Brave Search AI", url: "https://search.brave.com/", logo: "/placeholder.png", description: "AI-powered summaries in Brave Search.", categoryId: "ai-search", tags: ["AI", "Search", "Privacy"], badges: ["Free"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "andi-search", name: "Andi Search", url: "https://andisearch.com/", logo: "/placeholder.png", description: "Next-gen AI search assistant.", categoryId: "ai-search", tags: ["AI", "Search", "Chat"], badges: ["Free"], rating: 4.5, addedAt: "2026-03-14", language: "English" },

  // --- AI PRODUCTIVITY ---
  { id: "notion-ai", name: "Notion AI", url: "https://www.notion.so/", logo: "/placeholder.png", description: "AI tools integrated directly into Notion workspace.", categoryId: "ai-productivity", tags: ["AI", "Productivity", "Notes"], badges: ["Paid"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "otter-ai", name: "Otter.ai", url: "https://otter.ai/", logo: "/placeholder.png", description: "AI-powered transcription and meeting notes.", categoryId: "ai-productivity", tags: ["AI", "Transcription", "Meetings"], badges: ["Freemium", "Popular"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "fireflies-ai", name: "Fireflies AI", url: "https://fireflies.ai/", logo: "/placeholder.png", description: "AI meeting assistant that records and transcribes.", categoryId: "ai-productivity", tags: ["AI", "Meetings", "Transcription"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "zapier-ai", name: "Zapier AI", url: "https://zapier.com/", logo: "/placeholder.png", description: "AI-powered automation for thousands of apps.", categoryId: "ai-productivity", tags: ["AI", "Automation", "Workflow"], badges: ["Paid", "Popular"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "make-ai", name: "Make.com", url: "https://www.make.com/", logo: "/placeholder.png", description: "Visual platform to design, build, and automate anything.", categoryId: "ai-productivity", tags: ["AI", "Automation", "No-code"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "gamma-ai", name: "Gamma AI", url: "https://gamma.app/", logo: "/placeholder.png", description: "AI for creating presentations and documents.", categoryId: "ai-productivity", tags: ["AI", "Presentations", "Design"], badges: ["Freemium", "Popular"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "beautiful-ai", name: "Beautiful.ai", url: "https://www.beautiful.ai/", logo: "/placeholder.png", description: "AI presentation software for teams.", categoryId: "ai-productivity", tags: ["AI", "Presentations", "Design"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "tome-app", name: "Tome", url: "https://tome.app/", logo: "/placeholder.png", description: "AI-powered storytelling and presentation tool.", categoryId: "ai-productivity", tags: ["AI", "Storytelling", "Design"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "taskade-ai", name: "Taskade AI", url: "https://www.taskade.com/", logo: "/placeholder.png", description: "AI-powered productivity and collaboration tool.", categoryId: "ai-productivity", tags: ["AI", "Planning", "Collaboration"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "mem-ai", name: "Mem AI", url: "https://mem.ai/", logo: "/placeholder.png", description: "AI-powered notes that organize themselves.", categoryId: "ai-productivity", tags: ["AI", "Notes", "Productivity"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "reclaim-ai", name: "Reclaim AI", url: "https://reclaim.ai/", logo: "/placeholder.png", description: "AI calendar tool that optimizes your schedule.", categoryId: "ai-productivity", tags: ["AI", "Calendar", "Scheduling"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "motion-ai", name: "Motion AI", url: "https://www.usemotion.com/", logo: "/placeholder.png", description: "AI that manages your calendar, meetings, and tasks.", categoryId: "ai-productivity", tags: ["AI", "Planning", "Calendar"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "krisp-ai", name: "Krisp AI", url: "https://krisp.ai/", logo: "/placeholder.png", description: "AI noise removal for online meetings.", categoryId: "ai-productivity", tags: ["AI", "Audio", "Meetings"], badges: ["Freemium"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "fathom-ai", name: "Fathom AI", url: "https://fathom.video/", logo: "/placeholder.png", description: "AI meeting assistant for Zoom, Teams, and Google Meet.", categoryId: "ai-productivity", tags: ["AI", "Meetings", "Transcription"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "tldv-io", name: "Tldv", url: "https://tldv.io/", logo: "/placeholder.png", description: "AI meeting recorder for Zoom and Google Meet.", categoryId: "ai-productivity", tags: ["AI", "Meetings", "Recorder"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "notta-ai", name: "Notta AI", url: "https://www.notta.ai/", logo: "/placeholder.png", description: "AI voice-to-text transcription service.", categoryId: "ai-productivity", tags: ["AI", "Transcription", "Voice"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "Multiple" },

  // --- AI EDUCATION ---
  { id: "khan-academy-ai", name: "Khan Academy AI", url: "https://khanmigo.ai/", logo: "/placeholder.png", description: "AI-powered tutor for students and teachers.", categoryId: "ai-edu", tags: ["AI", "Education", "Tutoring"], badges: ["Freemium"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "socratic", name: "Socratic", url: "https://socratic.org/", logo: "/placeholder.png", description: "Google's AI tool for homework help.", categoryId: "ai-edu", tags: ["AI", "Education", "Google"], badges: ["Free"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "photomath", name: "Photomath", url: "https://photomath.com/", logo: "/placeholder.png", description: "AI-powered math solver using camera scanning.", categoryId: "ai-edu", tags: ["AI", "Math", "Education"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "wolfram-alpha", name: "Wolfram Alpha", url: "https://www.wolframalpha.com/", logo: "/placeholder.png", description: "AI-powered computational knowledge engine.", categoryId: "ai-edu", tags: ["AI", "Math", "Knowledge"], badges: ["Freemium"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "duolingo-ai", name: "Duolingo AI", url: "https://www.duolingo.com/", logo: "/placeholder.png", description: "AI-powered language learning platform.", categoryId: "ai-edu", tags: ["AI", "Language", "Education"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "coursera-ai", name: "Coursera AI", url: "https://www.coursera.org/", logo: "/placeholder.png", description: "AI-powered education platform with online courses.", categoryId: "ai-edu", tags: ["AI", "Courses", "Education"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "synthesis-ai", name: "Synthesis AI", url: "https://synthesis.com/", logo: "/placeholder.png", description: "AI-powered education model for advanced cognitive skills.", categoryId: "ai-edu", tags: ["AI", "Critical Thinking", "Education"], badges: ["Paid"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "numerade", name: "Numerade", url: "https://www.numerade.com/", logo: "/placeholder.png", description: "AI-powered STEM education platform.", categoryId: "ai-edu", tags: ["AI", "STEM", "Education"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "quizlet-ai", name: "Quizlet AI", url: "https://quizlet.com/", logo: "/placeholder.png", description: "AI-powered learning platform with flashcards and sets.", categoryId: "ai-edu", tags: ["AI", "Flashcards", "Study"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "knowji", name: "Knowji", url: "http://www.knowji.com/", logo: "/placeholder.png", description: "AI-powered vocabulary learning app.", categoryId: "ai-edu", tags: ["AI", "Vocabulary", "Education"], badges: ["Paid"], rating: 4.5, addedAt: "2026-03-14", language: "English" },

  // --- AI AVATAR / FACE TOOLS ---
  { id: "d-id", name: "D-ID", url: "https://www.d-id.com/", logo: "/placeholder.png", description: "Create AI speaking avatars from photos.", categoryId: "ai-avatar", tags: ["AI", "Avatar", "Video"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "akool", name: "Akool", url: "https://akool.com/", logo: "/placeholder.png", description: "AI face swap and avatar generation.", categoryId: "ai-avatar", tags: ["AI", "Face Swap", "Creative"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "reface", name: "Reface", url: "https://reface.ai/", logo: "/placeholder.png", description: "Leading AI face swap app and tool.", categoryId: "ai-avatar", tags: ["AI", "Face Swap", "Mobile"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "Multiple" },
  { id: "photoai", name: "PhotoAI", url: "https://photoai.com/", logo: "/placeholder.png", description: "The world's first AI photographer and model agency.", categoryId: "ai-avatar", tags: ["AI", "Photography", "Avatar"], badges: ["Paid"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "remini", name: "Remini", url: "https://remini.ai/", logo: "/placeholder.png", description: "AI photo enhancer and avatar creator.", categoryId: "ai-avatar", tags: ["AI", "Enhancement", "Avatar"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "lensa-ai", name: "Lensa AI", url: "https://prisma-ai.com/lensa", logo: "/placeholder.png", description: "All-in-one image editing app that takes your photos to the next level.", categoryId: "ai-avatar", tags: ["AI", "Photo Editor", "Avatar"], badges: ["Paid"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "pfpmaker", name: "PFPMaker", url: "https://pfpmaker.com/", logo: "/placeholder.png", description: "Create professional profile pictures with AI.", categoryId: "ai-avatar", tags: ["AI", "PFP", "Social Media"], badges: ["Free"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "profile-picture-ai", name: "Profile Picture AI", url: "https://profilepicture.ai/", logo: "/placeholder.png", description: "AI-generated profile pictures for your brand.", categoryId: "ai-avatar", tags: ["AI", "PFP", "Marketing"], badges: ["Paid"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "avatar-ai", name: "Avatar AI", url: "https://avatarai.me/", logo: "/placeholder.png", description: "Photorealistic AI avatars.", categoryId: "ai-avatar", tags: ["AI", "Avatar", "Photorealistic"], badges: ["Paid"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "insta3d", name: "Insta3D", url: "https://insta3d.ai/", logo: "/placeholder.png", description: "Generate 3D avatars from a single photo.", categoryId: "ai-avatar", tags: ["AI", "3D", "Avatar"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "ready-player-me", name: "Ready Player Me", url: "https://readyplayer.me/", logo: "/placeholder.png", description: "Cross-game avatar platform for the metaverse.", categoryId: "ai-avatar", tags: ["AI", "Metaverse", "Avatar"], badges: ["Freemium"], rating: 4.9, addedAt: "2026-03-14", language: "Multiple" },
  { id: "fotor-avatar", name: "Fotor Avatar", url: "https://www.fotor.com/ai-avatar-generator", logo: "/placeholder.png", description: "Online AI avatar generator from Fotor.", categoryId: "ai-avatar", tags: ["AI", "Avatar", "Creative"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "dawn-ai", name: "Dawn AI", url: "https://dawnai.app/", logo: "/placeholder.png", description: "Avatar generation app for mobile.", categoryId: "ai-avatar", tags: ["AI", "Avatar", "Mobile"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },
  { id: "facet-ai", name: "Facet AI", url: "https://facet.ai/", logo: "/placeholder.png", description: "AI-powered creative image editor.", categoryId: "ai-avatar", tags: ["AI", "Editor", "Creative"], badges: ["Paid"], rating: 4.6, addedAt: "2026-03-14", language: "English" },

  // --- AI PHOTO EDITING ---
  { id: "adobe-firefly-photo", name: "Adobe Firefly", url: "https://firefly.adobe.com/", logo: "/placeholder.png", description: "Adobe's creative generative AI model for photo editing.", categoryId: "ai-photo", tags: ["AI", "Design", "Editing"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "luminar-ai", name: "Luminar AI", url: "https://skylum.com/luminar-ai", logo: "/placeholder.png", description: "AI-powered photo editor for photographers.", categoryId: "ai-photo", tags: ["AI", "Photography", "Editor"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "topaz-ai", name: "Topaz Photo AI", url: "https://www.topazlabs.com/topaz-photo-ai", logo: "/placeholder.png", description: "Sharpen, denoise, and upscale photos with AI.", categoryId: "ai-photo", tags: ["AI", "Upscale", "Photography"], badges: ["Paid"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "remove-bg", name: "Remove.bg", url: "https://www.remove.bg/", logo: "/placeholder.png", description: "Remove backgrounds from images automatically with AI.", categoryId: "ai-photo", tags: ["AI", "Background Remover", "Tool"], badges: ["Freemium"], rating: 4.9, addedAt: "2026-03-14", language: "Multiple" },
  { id: "cleanup-pictures", name: "Cleanup.pictures", url: "https://cleanup.pictures/", logo: "/placeholder.png", description: "Remove any object, person, or text from your photos with AI.", categoryId: "ai-photo", tags: ["AI", "Object Removal", "Editor"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "upscayl", name: "Upscayl", url: "https://upscayl.org/", logo: "/placeholder.png", description: "Free and open source AI image upscaler.", categoryId: "ai-photo", tags: ["AI", "Upscale", "Open Source"], badges: ["Free"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "lets-enhance", name: "Let's Enhance", url: "https://letsenhance.io/", logo: "/placeholder.png", description: "AI image upscaler and quality enhancer.", categoryId: "ai-photo", tags: ["AI", "Upscale", "Enhancer"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "picwish", name: "Picwish", url: "https://picwish.com/", logo: "/placeholder.png", description: "AI-powered photo editing toolkit.", categoryId: "ai-photo", tags: ["AI", "Editing", "Toolkit"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "Multiple" },
  { id: "pixelcut", name: "Pixelcut", url: "https://www.pixelcut.ai/", logo: "/placeholder.png", description: "AI graphic design and photo editing tool.", categoryId: "ai-photo", tags: ["AI", "Design", "Editing"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "photoroom", name: "Photoroom", url: "https://www.photoroom.com/", logo: "/placeholder.png", description: "AI-powered product photography and design.", categoryId: "ai-photo", tags: ["AI", "E-commerce", "Design"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "claid-ai", name: "Claid AI", url: "https://claid.ai/", logo: "/placeholder.png", description: "AI image processing for businesses.", categoryId: "ai-photo", tags: ["AI", "Business", "Processing"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "evoto-ai", name: "Evoto AI", url: "https://www.evoto.ai/", logo: "/placeholder.png", description: "AI-powered photo editing platform for retouchers.", categoryId: "ai-photo", tags: ["AI", "Retouching", "Photography"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "cutout-pro", name: "Cutout.pro", url: "https://www.cutout.pro/", logo: "/placeholder.png", description: "AI visual design platform for photo and video editing.", categoryId: "ai-photo", tags: ["AI", "Editing", "Visual Design"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "Multiple" },

  // --- AI AUTOMATION ---
  { id: "autogpt", name: "AutoGPT", url: "https://agpt.co/", logo: "/placeholder.png", description: "An experimental open-source attempt to make GPT-4 fully autonomous.", categoryId: "ai-automation", tags: ["AI", "Autonomous", "Agents"], badges: ["Free"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "agentgpt", name: "AgentGPT", url: "https://agentgpt.reworkd.ai/", logo: "/placeholder.png", description: "Deploy autonomous AI agents directly in your browser.", categoryId: "ai-automation", tags: ["AI", "Agents", "Browser"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "n8n", name: "n8n", url: "https://n8n.io/", logo: "/placeholder.png", description: "Workflow automation tool with powerful AI integration.", categoryId: "ai-automation", tags: ["AI", "Automation", "Workflow"], badges: ["Freemium"], rating: 4.9, addedAt: "2026-03-14", language: "Multiple" },
  { id: "zapier-ai-automation", name: "Zapier AI", url: "https://zapier.com/", logo: "/placeholder.png", description: "AI-powered automation for thousands of apps.", categoryId: "ai-automation", tags: ["AI", "Automation", "Workflow"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "Multiple" },
  { id: "make-ai-automation", name: "Make.com", url: "https://www.make.com/", logo: "/placeholder.png", description: "Visual platform to design, build, and automate anything.", categoryId: "ai-automation", tags: ["AI", "Automation", "No-code"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "Multiple" },
  { id: "bardeen-ai", name: "Bardeen AI", url: "https://www.bardeen.ai/", logo: "/placeholder.png", description: "AI automation for your browser.", categoryId: "ai-automation", tags: ["AI", "Browser", "Automation"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "browse-ai", name: "Browse AI", url: "https://www.browse.ai/", logo: "/placeholder.png", description: "The easiest way to extract and monitor data from any website.", categoryId: "ai-automation", tags: ["AI", "Scraping", "Monitoring"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "relevance-ai", name: "Relevance AI", url: "https://relevanceai.com/", logo: "/placeholder.png", description: "Low-code platform for building and deploying AI agents.", categoryId: "ai-automation", tags: ["AI", "Low-code", "Agents"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "lindy-ai", name: "Lindy AI", url: "https://www.lindy.ai/", logo: "/placeholder.png", description: "AI employee that can handle your repetitive tasks.", categoryId: "ai-automation", tags: ["AI", "Assistant", "Tasks"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "beam-ai", name: "Beam AI", url: "https://www.beam.ai/", logo: "/placeholder.png", description: "AI-powered operations platform for teams.", categoryId: "ai-automation", tags: ["AI", "Operations", "Teams"], badges: ["Freemium"], rating: 4.5, addedAt: "2026-03-14", language: "English" },

  // --- AI DATA ---
  { id: "julius-ai", name: "Julius AI", url: "https://julius.ai/", logo: "/placeholder.png", description: "AI data analyst that can analyze spreadsheets and data.", categoryId: "ai-data", tags: ["AI", "Data", "Analytics"], badges: ["Freemium", "Popular"], rating: 4.9, addedAt: "2026-03-14", language: "English" },
  { id: "obviously-ai", name: "Obviously AI", url: "https://www.obviously.ai/", logo: "/placeholder.png", description: "No-code AI platform for predictive analytics.", categoryId: "ai-data", tags: ["AI", "Predictive", "No-code"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "akkio", name: "Akkio", url: "https://www.akkio.com/", logo: "/placeholder.png", description: "Generative AI for data analytics and predictive modeling.", categoryId: "ai-data", tags: ["AI", "Data", "Business"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "polymer", name: "Polymer", url: "https://www.polymersearch.com/", logo: "/placeholder.png", description: "Transform spreadsheets into powerful AI databases.", categoryId: "ai-data", tags: ["AI", "Data", "Search"], badges: ["Freemium", "Popular"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "browse-ai-data", name: "Browse AI", url: "https://www.browse.ai/", logo: "/placeholder.png", description: "AI tool to extract data from any website.", categoryId: "ai-data", tags: ["AI", "Data Extraction", "Scraping"], badges: ["Freemium"], rating: 4.8, addedAt: "2026-03-14", language: "English" },
  { id: "rows-ai", name: "Rows AI", url: "https://rows.com/", logo: "/placeholder.png", description: "The next-generation spreadsheet with AI features.", categoryId: "ai-data", tags: ["AI", "Spreadsheet", "Analytics"], badges: ["Freemium"], rating: 4.7, addedAt: "2026-03-14", language: "English" },
  { id: "coefficient-ai", name: "Coefficient", url: "https://coefficient.io/", logo: "/placeholder.png", description: "AI-powered data connector for spreadsheets.", categoryId: "ai-data", tags: ["AI", "Data", "Connectivity"], badges: ["Freemium"], rating: 4.6, addedAt: "2026-03-14", language: "English" },
  { id: "equals-ai", name: "Equals", url: "https://equals.com/", logo: "/placeholder.png", description: "Modern spreadsheet with built-in AI and data connections.", categoryId: "ai-data", tags: ["AI", "Spreadsheet", "Data"], badges: ["Paid"], rating: 4.7, addedAt: "2026-03-14", language: "English" },

];

// Helper to get sites by category
export const getSitesByCategory = (categoryId: string) => {
  return featuredSites.filter(site => site.categoryId === categoryId);
};
