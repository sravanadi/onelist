import { openSourceTools } from './open-source-tools';
import { jobs } from './jobs';
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
    "id": "52",
    "name": "Vegamovies",
    "url": "https://vegamovies.actor",
    "logo": "/placeholder.png",
    "description": "Watch and download latest Bollywood, Hollywood and South Indian movies in HD.",
    "categoryId": "movies",
    "tags": [
      "Movies",
      "HD",
      "Download"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "Hindi, English"
  },
  {
    "id": "53",
    "name": "36Filmywap",
    "url": "https://36filmywap.com",
    "logo": "/placeholder.png",
    "description": "Download free Bollywood, Hollywood and Punjabi movies in various qualities.",
    "categoryId": "movies",
    "tags": [
      "Movies",
      "Free",
      "Download"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-20",
    "language": "Hindi, Punjabi, English"
  },
  {
    "id": "54",
    "name": "Bollyflix",
    "url": "https://bollyflix.sarl",
    "logo": "/placeholder.png",
    "description": "Stream and download the latest Bollywood movies and TV series online.",
    "categoryId": "movies",
    "tags": [
      "Bolly",
      "Movies",
      "Streaming"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-20",
    "language": "Hindi, English"
  },
  {
    "id": "55",
    "name": "Fawesome TV",
    "url": "https://fawesome.tv",
    "logo": "/placeholder.png",
    "description": "Watch free movies and TV shows across various genres including Action, Comedy, and Drama.",
    "categoryId": "movies",
    "tags": [
      "Free",
      "Streaming",
      "No Signup"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "56",
    "name": "5Movierulz",
    "url": "https://5movierulz.codes",
    "logo": "/placeholder.png",
    "description": "Watch latest movies and TV shows online for free. Popular source for South Indian movies.",
    "categoryId": "movies",
    "tags": [
      "Movies",
      "Telugu",
      "Tamil",
      "Hindi"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-20",
    "language": "Multiple"
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
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "url": "https://chat.openai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated ChatGPT for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "claude",
    "name": "Claude",
    "url": "https://claude.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Claude for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "gemini",
    "name": "Gemini",
    "url": "https://gemini.google.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Gemini for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "meta-ai",
    "name": "Meta AI",
    "url": "https://meta.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Meta AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "copilot",
    "name": "Copilot",
    "url": "https://copilot.microsoft.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Copilot for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "url": "https://perplexity.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Perplexity for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "grok",
    "name": "Grok",
    "url": "https://grok.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Grok for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "deeps",
    "name": "DeepS",
    "url": "https://eekchat.deepseek.com",
    "logo": "/placeholder.png",
    "description": "Top-rated DeepS for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mistral",
    "name": "Mistral",
    "url": "https://mistral.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Mistral for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "huggingc",
    "name": "HuggingC",
    "url": "https://hathuggingface.co/chat",
    "logo": "/placeholder.png",
    "description": "Top-rated HuggingC for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pi-ai",
    "name": "Pi AI",
    "url": "https://pi.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Pi AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "youcom",
    "name": "You.com",
    "url": "https://you.com",
    "logo": "/placeholder.png",
    "description": "Top-rated You.com for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "poe",
    "name": "Poe",
    "url": "https://poe.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Poe for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "phind",
    "name": "Phind",
    "url": "https://phind.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Phind for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "kimi",
    "name": "Kimi",
    "url": "https://kimi.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Kimi for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "qwen",
    "name": "Qwen",
    "url": "https://qwen.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Qwen for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "le-c",
    "name": "Le C",
    "url": "https://hatchat.mistral.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Le C for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "character-ai",
    "name": "Character AI",
    "url": "https://character.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Character AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cohere",
    "name": "Cohere",
    "url": "https://cohere.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Cohere for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "inflection-ai",
    "name": "Inflection AI",
    "url": "https://inflection.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Inflection AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "replika",
    "name": "Replika",
    "url": "https://replika.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Replika for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "jasper-c",
    "name": "Jasper C",
    "url": "https://hatjasper.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Jasper C for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "c",
    "name": "C",
    "url": "https://hatsonicwritesonic.com/chat",
    "logo": "/placeholder.png",
    "description": "Top-rated C for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "forefront-ai",
    "name": "Forefront AI",
    "url": "https://forefront.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Forefront AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "openrouter",
    "name": "OpenRouter",
    "url": "https://openrouter.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated OpenRouter for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "together-ai",
    "name": "Together AI",
    "url": "https://together.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Together AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "groq",
    "name": "Groq",
    "url": "https://groq.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Groq for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cerebras",
    "name": "Cerebras",
    "url": "https://cerebras.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Cerebras for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fireworks-ai",
    "name": "Fireworks AI",
    "url": "https://fireworks.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Fireworks AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "anyscale",
    "name": "Anyscale",
    "url": "https://anyscale.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Anyscale for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ai21-l",
    "name": "AI21 L",
    "url": "https://absai21.com",
    "logo": "/placeholder.png",
    "description": "Top-rated AI21 L for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "aleph-a",
    "name": "Aleph A",
    "url": "https://lphaaleph-alpha.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Aleph A for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "nous-r",
    "name": "Nous R",
    "url": "https://esearchnousresearch.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Nous R for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mistral-le-p",
    "name": "Mistral Le P",
    "url": "https://latformeconsole.mistral.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Mistral Le P for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "moonshot-ai",
    "name": "Moonshot AI",
    "url": "https://moonshot.cn",
    "logo": "/placeholder.png",
    "description": "Top-rated Moonshot AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "baidu-e",
    "name": "Baidu E",
    "url": "https://rnieyiyan.baidu.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Baidu E for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "zhipu-ai",
    "name": "Zhipu AI",
    "url": "https://zhipuai.cn",
    "logo": "/placeholder.png",
    "description": "Top-rated Zhipu AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "clova-x",
    "name": "Clova X",
    "url": "https://clova.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Clova X for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "maritaca-ai",
    "name": "Maritaca AI",
    "url": "https://maritaca.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Maritaca AI for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tiiuae-f",
    "name": "Tiiuae F",
    "url": "https://alconfalconllm.tii.ae",
    "logo": "/placeholder.png",
    "description": "Top-rated Tiiuae F for chat.",
    "categoryId": "ai-chat",
    "tags": [
      "AI",
      "Chat"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "midjourney",
    "name": "Midjourney",
    "url": "https://midjourney.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Midjourney for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dall-e",
    "name": "DALL-E",
    "url": "https://3openai.com/dall-e-3",
    "logo": "/placeholder.png",
    "description": "Top-rated DALL-E for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "stable-d",
    "name": "Stable D",
    "url": "https://iffusionstability.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Stable D for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "adobe-f",
    "name": "Adobe F",
    "url": "https://ireflyfirefly.adobe.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Adobe F for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ideogram",
    "name": "Ideogram",
    "url": "https://ideogram.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Ideogram for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "leonardo-ai",
    "name": "Leonardo AI",
    "url": "https://leonardo.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Leonardo AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "playground-ai",
    "name": "Playground AI",
    "url": "https://playground.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Playground AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "canva-ai",
    "name": "Canva AI",
    "url": "https://canva.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Canva AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "nightcafe",
    "name": "NightCafe",
    "url": "https://nightcafe.studio",
    "logo": "/placeholder.png",
    "description": "Top-rated NightCafe for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dreamstudio",
    "name": "DreamStudio",
    "url": "https://dreamstudio.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated DreamStudio for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "bing-image-c",
    "name": "Bing Image C",
    "url": "https://reatorbing.com/images/create",
    "logo": "/placeholder.png",
    "description": "Top-rated Bing Image C for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "seaart",
    "name": "SeaArt",
    "url": "https://seaart.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated SeaArt for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tensorart",
    "name": "Tensor.Art",
    "url": "https://tensor.art",
    "logo": "/placeholder.png",
    "description": "Top-rated Tensor.Art for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "craiyon",
    "name": "Craiyon",
    "url": "https://craiyon.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Craiyon for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "krea-ai",
    "name": "Krea AI",
    "url": "https://krea.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Krea AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "flux-ai",
    "name": "Flux AI",
    "url": "https://flux1.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Flux AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "artbreeder",
    "name": "Artbreeder",
    "url": "https://artbreeder.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Artbreeder for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "starry-ai",
    "name": "Starry AI",
    "url": "https://starryai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Starry AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fotor-ai",
    "name": "Fotor AI",
    "url": "https://fotor.com/ai-image-generator",
    "logo": "/placeholder.png",
    "description": "Top-rated Fotor AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "freepik-ai",
    "name": "Freepik AI",
    "url": "https://freepik.com/ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Freepik AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "getimgai",
    "name": "Getimg.ai",
    "url": "https://getimg.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Getimg.ai for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pixai",
    "name": "Pixai",
    "url": "https://pixai.art",
    "logo": "/placeholder.png",
    "description": "Top-rated Pixai for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "novelai",
    "name": "Novelai",
    "url": "https://novelai.net",
    "logo": "/placeholder.png",
    "description": "Top-rated Novelai for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "civitai",
    "name": "Civitai",
    "url": "https://civitai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Civitai for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dezgo",
    "name": "Dezgo",
    "url": "https://dezgo.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Dezgo for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dreamlike-a",
    "name": "Dreamlike A",
    "url": "https://rtdreamlike.art",
    "logo": "/placeholder.png",
    "description": "Top-rated Dreamlike A for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pixlr-ai",
    "name": "Pixlr AI",
    "url": "https://pixlr.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Pixlr AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "p",
    "name": "P",
    "url": "https://hotosonicwritesonic.com/photosonic",
    "logo": "/placeholder.png",
    "description": "Top-rated P for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "stablecog",
    "name": "Stablecog",
    "url": "https://stablecog.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Stablecog for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mage-s",
    "name": "Mage S",
    "url": "https://pacemage.space",
    "logo": "/placeholder.png",
    "description": "Top-rated Mage S for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "prodia",
    "name": "Prodia",
    "url": "https://prodia.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Prodia for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "artsmart-ai",
    "name": "Artsmart AI",
    "url": "https://artsmart.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Artsmart AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hypotenuse-ai",
    "name": "Hypotenuse AI",
    "url": "https://hypotenuse.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Hypotenuse AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "stockimg-ai",
    "name": "Stockimg AI",
    "url": "https://stockimg.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Stockimg AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "picsart-ai",
    "name": "Picsart AI",
    "url": "https://picsart.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Picsart AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "photoleap",
    "name": "Photoleap",
    "url": "https://photoleapapp.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Photoleap for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wombo-d",
    "name": "Wombo D",
    "url": "https://reamdream.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Wombo D for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "deep-d",
    "name": "Deep D",
    "url": "https://reamdeepdreamgenerator.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Deep D for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "simplified-ai",
    "name": "Simplified AI",
    "url": "https://simplified.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Simplified AI for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "imgcreator",
    "name": "Imgcreator",
    "url": "https://imgcreator.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Imgcreator for image.",
    "categoryId": "ai-image",
    "tags": [
      "AI",
      "Image"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "sora",
    "name": "Sora",
    "url": "https://sora.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Sora for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "runway-ml",
    "name": "Runway ML",
    "url": "https://runwayml.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Runway ML for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pika-l",
    "name": "Pika L",
    "url": "https://abspika.art",
    "logo": "/placeholder.png",
    "description": "Top-rated Pika L for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "kling-ai",
    "name": "Kling AI",
    "url": "https://klingai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Kling AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "luma-dream-m",
    "name": "Luma Dream M",
    "url": "https://achinelumalabs.ai/dream-machine",
    "logo": "/placeholder.png",
    "description": "Top-rated Luma Dream M for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "invideo-ai",
    "name": "Invideo AI",
    "url": "https://invideo.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Invideo AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "synthesia",
    "name": "Synthesia",
    "url": "https://synthesia.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Synthesia for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "heygen",
    "name": "HeyGen",
    "url": "https://heygen.com",
    "logo": "/placeholder.png",
    "description": "Top-rated HeyGen for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "veedio",
    "name": "Veed.io",
    "url": "https://veed.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Veed.io for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pictory",
    "name": "Pictory",
    "url": "https://pictory.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Pictory for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "descript",
    "name": "Descript",
    "url": "https://descript.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Descript for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "capcut-ai",
    "name": "CapCut AI",
    "url": "https://capcut.com",
    "logo": "/placeholder.png",
    "description": "Top-rated CapCut AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fliki",
    "name": "Fliki",
    "url": "https://fliki.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Fliki for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "genmo",
    "name": "Genmo",
    "url": "https://genmo.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Genmo for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hailuo-ai",
    "name": "Hailuo AI",
    "url": "https://hailuoai.video",
    "logo": "/placeholder.png",
    "description": "Top-rated Hailuo AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pixverse",
    "name": "Pixverse",
    "url": "https://pixverse.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Pixverse for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wan-ai",
    "name": "Wan AI",
    "url": "https://wan.video",
    "logo": "/placeholder.png",
    "description": "Top-rated Wan AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "viggle-ai",
    "name": "Viggle AI",
    "url": "https://viggle.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Viggle AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "steve-ai",
    "name": "Steve AI",
    "url": "https://steve.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Steve AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "animoto",
    "name": "Animoto",
    "url": "https://animoto.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Animoto for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "visla",
    "name": "Visla",
    "url": "https://visla.us",
    "logo": "/placeholder.png",
    "description": "Top-rated Visla for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mootion",
    "name": "Mootion",
    "url": "https://mootion.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Mootion for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "opus-c",
    "name": "Opus C",
    "url": "https://lipopus.pro",
    "logo": "/placeholder.png",
    "description": "Top-rated Opus C for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "vidyo-ai",
    "name": "Vidyo AI",
    "url": "https://vidyo.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Vidyo AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wisecut",
    "name": "Wisecut",
    "url": "https://wisecut.video",
    "logo": "/placeholder.png",
    "description": "Top-rated Wisecut for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "peech",
    "name": "Peech",
    "url": "https://peech.tech",
    "logo": "/placeholder.png",
    "description": "Top-rated Peech for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "typeframes",
    "name": "Typeframes",
    "url": "https://typeframes.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Typeframes for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "submagic",
    "name": "Submagic",
    "url": "https://submagic.co",
    "logo": "/placeholder.png",
    "description": "Top-rated Submagic for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "m",
    "name": "M",
    "url": "https://unchgetmunch.com",
    "logo": "/placeholder.png",
    "description": "Top-rated M for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "captions-ai",
    "name": "Captions AI",
    "url": "https://captions.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Captions AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lovo-ai",
    "name": "Lovo AI",
    "url": "https://lovo.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Lovo AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "deepbrain-ai",
    "name": "Deepbrain AI",
    "url": "https://deepbrain.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Deepbrain AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "colossyan",
    "name": "Colossyan",
    "url": "https://colossyan.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Colossyan for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "elaiio",
    "name": "Elai.io",
    "url": "https://elai.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Elai.io for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "windsor-ai",
    "name": "Windsor AI",
    "url": "https://windsor.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Windsor AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tavus",
    "name": "Tavus",
    "url": "https://tavus.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Tavus for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "rephrase-ai",
    "name": "Rephrase AI",
    "url": "https://rephrase.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Rephrase AI for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "raw-s",
    "name": "Raw S",
    "url": "https://hortsrawshorts.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Raw S for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "robo-s",
    "name": "Robo S",
    "url": "https://tudiorobostudio.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Robo S for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "moonvalley",
    "name": "Moonvalley",
    "url": "https://moonvalley.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Moonvalley for video.",
    "categoryId": "ai-video",
    "tags": [
      "AI",
      "Video"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "url": "https://cursor.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Cursor for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "boltnew",
    "name": "Bolt.new",
    "url": "https://bolt.new",
    "logo": "/placeholder.png",
    "description": "Top-rated Bolt.new for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lovable",
    "name": "Lovable",
    "url": "https://lovable.dev",
    "logo": "/placeholder.png",
    "description": "Top-rated Lovable for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "v0-by-v",
    "name": "v0 by V",
    "url": "https://ercelv0.dev",
    "logo": "/placeholder.png",
    "description": "Top-rated v0 by V for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "replit-ai",
    "name": "Replit AI",
    "url": "https://replit.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Replit AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "github-c",
    "name": "GitHub C",
    "url": "https://opilotgithub.com/copilot",
    "logo": "/placeholder.png",
    "description": "Top-rated GitHub C for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "w",
    "name": "W",
    "url": "https://indsurfcodeium.com/windsurf",
    "logo": "/placeholder.png",
    "description": "Top-rated W for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wix-ai",
    "name": "Wix AI",
    "url": "https://wix.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Wix AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "framer-ai",
    "name": "Framer AI",
    "url": "https://framer.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Framer AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "webflow-ai",
    "name": "Webflow AI",
    "url": "https://webflow.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Webflow AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "durable-ai",
    "name": "Durable AI",
    "url": "https://durable.co",
    "logo": "/placeholder.png",
    "description": "Top-rated Durable AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "w",
    "name": "W",
    "url": "https://eb10web.io",
    "logo": "/placeholder.png",
    "description": "Top-rated W for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hostinger-ai",
    "name": "Hostinger AI",
    "url": "https://hostinger.com/ai-website-builder",
    "logo": "/placeholder.png",
    "description": "Top-rated Hostinger AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "unicorn-p",
    "name": "Unicorn P",
    "url": "https://latformunicornplatform.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Unicorn P for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "antigravity-ai",
    "name": "Antigravity AI",
    "url": "https://antigravity.dev",
    "logo": "/placeholder.png",
    "description": "Top-rated Antigravity AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "firebase-s",
    "name": "Firebase S",
    "url": "https://tudiofirebase.studio",
    "logo": "/placeholder.png",
    "description": "Top-rated Firebase S for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tempo-l",
    "name": "Tempo L",
    "url": "https://abstempolabs.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Tempo L for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "softgen",
    "name": "Softgen",
    "url": "https://softgen.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Softgen for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "trickle-ai",
    "name": "Trickle AI",
    "url": "https://trickle.so",
    "logo": "/placeholder.png",
    "description": "Top-rated Trickle AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "butternut-ai",
    "name": "Butternut AI",
    "url": "https://butternut.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Butternut AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dorik-ai",
    "name": "Dorik AI",
    "url": "https://dorik.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Dorik AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "stunning-ai",
    "name": "Stunning AI",
    "url": "https://stunning.so",
    "logo": "/placeholder.png",
    "description": "Top-rated Stunning AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tabnine",
    "name": "Tabnine",
    "url": "https://tabnine.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Tabnine for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "codeium",
    "name": "Codeium",
    "url": "https://codeium.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Codeium for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "copilot-s",
    "name": "Copilot S",
    "url": "https://tudiocopilot.microsoft.com/studio",
    "logo": "/placeholder.png",
    "description": "Top-rated Copilot S for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "bubble-ai",
    "name": "Bubble AI",
    "url": "https://bubble.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Bubble AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "glide-ai",
    "name": "Glide AI",
    "url": "https://glideapps.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Glide AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "adalo",
    "name": "Adalo",
    "url": "https://adalo.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Adalo for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "appgyver",
    "name": "Appgyver",
    "url": "https://appgyver.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Appgyver for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "thunkable",
    "name": "Thunkable",
    "url": "https://thunkable.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Thunkable for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "buildship",
    "name": "Buildship",
    "url": "https://buildship.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Buildship for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "stack-ai",
    "name": "Stack AI",
    "url": "https://stack-ai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Stack AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pico-ai",
    "name": "Pico AI",
    "url": "https://picoapps.xyz",
    "logo": "/placeholder.png",
    "description": "Top-rated Pico AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "magic-p",
    "name": "Magic P",
    "url": "https://atternsmagicpatterns.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Magic P for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "kombai",
    "name": "Kombai",
    "url": "https://kombai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Kombai for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "codia-ai",
    "name": "Codia AI",
    "url": "https://codia.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Codia AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "galileo-ai",
    "name": "Galileo AI",
    "url": "https://usegalileo.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Galileo AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "uizard",
    "name": "Uizard",
    "url": "https://uizard.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Uizard for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "zyro-ai",
    "name": "Zyro AI",
    "url": "https://zyro.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Zyro AI for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hocoos",
    "name": "Hocoos",
    "url": "https://hocoos.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Hocoos for code.",
    "categoryId": "ai-code",
    "tags": [
      "AI",
      "Code"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "suno-ai",
    "name": "Suno AI",
    "url": "https://suno.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Suno AI for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "udio",
    "name": "Udio",
    "url": "https://udio.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Udio for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "url": "https://try.elevenlabs.io/2zqn0p2b1snf",
    "logo": "/placeholder.png",
    "description": "Top-rated ElevenLabs for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English",
    "displayUrl": "elevenlabs.io"
  },
  {
    "id": "murf-ai",
    "name": "Murf AI",
    "url": "https://murf.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Murf AI for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "playht",
    "name": "PlayHT",
    "url": "https://play.ht",
    "logo": "/placeholder.png",
    "description": "Top-rated PlayHT for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "adobe-p",
    "name": "Adobe P",
    "url": "https://odcastpodcast.adobe.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Adobe P for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "soundraw",
    "name": "Soundraw",
    "url": "https://soundraw.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Soundraw for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "boomy",
    "name": "Boomy",
    "url": "https://boomy.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Boomy for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "aiva",
    "name": "AIVA",
    "url": "https://aiva.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated AIVA for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "voicemod",
    "name": "Voicemod",
    "url": "https://voicemod.net",
    "logo": "/placeholder.png",
    "description": "Top-rated Voicemod for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "resemble-ai",
    "name": "Resemble AI",
    "url": "https://resemble.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Resemble AI for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "speechify",
    "name": "Speechify",
    "url": "https://speechify.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Speechify for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "listnr",
    "name": "Listnr",
    "url": "https://listnr.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Listnr for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "beatoven-ai",
    "name": "Beatoven AI",
    "url": "https://beatoven.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Beatoven AI for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "musicfy",
    "name": "Musicfy",
    "url": "https://musicfy.lol",
    "logo": "/placeholder.png",
    "description": "Top-rated Musicfy for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "natural-r",
    "name": "Natural R",
    "url": "https://eadernaturalreaders.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Natural R for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "typecast",
    "name": "Typecast",
    "url": "https://typecast.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Typecast for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "loudme",
    "name": "Loudme",
    "url": "https://loudme.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Loudme for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "splash-m",
    "name": "Splash M",
    "url": "https://usicsplashmusic.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Splash M for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "soundful",
    "name": "Soundful",
    "url": "https://soundful.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Soundful for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ecrett-m",
    "name": "Ecrett M",
    "url": "https://usicecrettmusic.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Ecrett M for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "loudly",
    "name": "Loudly",
    "url": "https://loudly.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Loudly for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mubert",
    "name": "Mubert",
    "url": "https://mubert.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Mubert for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "endel",
    "name": "Endel",
    "url": "https://endel.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Endel for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "brainfm",
    "name": "Brain.fm",
    "url": "https://brain.fm",
    "logo": "/placeholder.png",
    "description": "Top-rated Brain.fm for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "voicera",
    "name": "Voicera",
    "url": "https://voicera.co",
    "logo": "/placeholder.png",
    "description": "Top-rated Voicera for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wellsaid-l",
    "name": "Wellsaid L",
    "url": "https://abswellsaidlabs.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Wellsaid L for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "altered-ai",
    "name": "Altered AI",
    "url": "https://altered.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Altered AI for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "replica-s",
    "name": "Replica S",
    "url": "https://tudiosreplicastudios.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Replica S for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "veritone-v",
    "name": "Veritone V",
    "url": "https://oiceveritone.com/voice",
    "logo": "/placeholder.png",
    "description": "Top-rated Veritone V for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "o",
    "name": "O",
    "url": "https://verdubdescript.com/overdub",
    "logo": "/placeholder.png",
    "description": "Top-rated O for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "speechgen",
    "name": "Speechgen",
    "url": "https://speechgen.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Speechgen for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "voicemaker",
    "name": "Voicemaker",
    "url": "https://voicemaker.in",
    "logo": "/placeholder.png",
    "description": "Top-rated Voicemaker for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ttsmaker",
    "name": "TTSMaker",
    "url": "https://ttsmaker.com",
    "logo": "/placeholder.png",
    "description": "Top-rated TTSMaker for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "narakeet",
    "name": "Narakeet",
    "url": "https://narakeet.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Narakeet for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "clipchamp-ai",
    "name": "Clipchamp AI",
    "url": "https://clipchamp.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Clipchamp AI for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "kits-ai",
    "name": "Kits AI",
    "url": "https://kits.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Kits AI for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "moises-ai",
    "name": "Moises AI",
    "url": "https://moises.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Moises AI for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "jasper-ai",
    "name": "Jasper AI",
    "url": "https://jasper.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Jasper AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "copyai",
    "name": "Copy.ai",
    "url": "https://copy.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Copy.ai for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "writesonic",
    "name": "Writesonic",
    "url": "https://writesonic.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Writesonic for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "rytr",
    "name": "Rytr",
    "url": "https://rytr.me",
    "logo": "/placeholder.png",
    "description": "Top-rated Rytr for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "quillbot",
    "name": "Quillbot",
    "url": "https://quillbot.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Quillbot for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "grammarly-ai",
    "name": "Grammarly AI",
    "url": "https://grammarly.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Grammarly AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "notion-ai",
    "name": "Notion AI",
    "url": "https://notion.so",
    "logo": "/placeholder.png",
    "description": "Top-rated Notion AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "sudowrite",
    "name": "Sudowrite",
    "url": "https://sudowrite.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Sudowrite for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wordtune",
    "name": "Wordtune",
    "url": "https://wordtune.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Wordtune for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "anyword",
    "name": "Anyword",
    "url": "https://anyword.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Anyword for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cohesive-ai",
    "name": "Cohesive AI",
    "url": "https://cohesive.so",
    "logo": "/placeholder.png",
    "description": "Top-rated Cohesive AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "narrato",
    "name": "Narrato",
    "url": "https://narrato.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Narrato for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ink-e",
    "name": "Ink E",
    "url": "https://ditorinkforall.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Ink E for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "scalenut",
    "name": "Scalenut",
    "url": "https://scalenut.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Scalenut for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fraseio",
    "name": "Frase.io",
    "url": "https://frase.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Frase.io for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "longshot-ai",
    "name": "Longshot AI",
    "url": "https://longshot.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Longshot AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "article-f",
    "name": "Article F",
    "url": "https://orgearticleforge.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Article F for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "peppertype",
    "name": "Peppertype",
    "url": "https://peppertype.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Peppertype for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wordai",
    "name": "Wordai",
    "url": "https://wordai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Wordai for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "spin-r",
    "name": "Spin R",
    "url": "https://ewriterspinrewriter.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Spin R for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "chimp-r",
    "name": "Chimp R",
    "url": "https://ewriterchimprewriter.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Chimp R for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "copysmith",
    "name": "Copysmith",
    "url": "https://copysmith.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Copysmith for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "writerly",
    "name": "Writerly",
    "url": "https://writerly.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Writerly for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "typeface-ai",
    "name": "Typeface AI",
    "url": "https://typeface.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Typeface AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "writercom",
    "name": "Writer.com",
    "url": "https://writer.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Writer.com for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "textcortex",
    "name": "Textcortex",
    "url": "https://textcortex.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Textcortex for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lex-p",
    "name": "Lex P",
    "url": "https://agelex.page",
    "logo": "/placeholder.png",
    "description": "Top-rated Lex P for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "compose-ai",
    "name": "Compose AI",
    "url": "https://compose.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Compose AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "bearly-ai",
    "name": "Bearly AI",
    "url": "https://bearly.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Bearly AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "m",
    "name": "M",
    "url": "https://oonbeamgomoonbeam.com",
    "logo": "/placeholder.png",
    "description": "Top-rated M for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "paragraph-ai",
    "name": "Paragraph AI",
    "url": "https://paragraphai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Paragraph AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "elephas",
    "name": "Elephas",
    "url": "https://elephas.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Elephas for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "penelope-ai",
    "name": "Penelope AI",
    "url": "https://penelope.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Penelope AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "squibler",
    "name": "Squibler",
    "url": "https://squibler.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Squibler for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "plot-f",
    "name": "Plot F",
    "url": "https://actoryplotfactory.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Plot F for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "shortly-ai",
    "name": "Shortly AI",
    "url": "https://shortlyai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Shortly AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ai-w",
    "name": "AI W",
    "url": "https://riterai-writer.com",
    "logo": "/placeholder.png",
    "description": "Top-rated AI W for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "sassbook",
    "name": "Sassbook",
    "url": "https://sassbook.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Sassbook for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "d-id",
    "name": "D-ID",
    "url": "https://d-id.com",
    "logo": "/placeholder.png",
    "description": "Top-rated D-ID for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "akool",
    "name": "Akool",
    "url": "https://akool.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Akool for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "reface",
    "name": "Reface",
    "url": "https://reface.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Reface for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "photoai",
    "name": "PhotoAI",
    "url": "https://photoai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated PhotoAI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "remini",
    "name": "Remini",
    "url": "https://remini.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Remini for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lensa-ai",
    "name": "Lensa AI",
    "url": "https://prisma-ai.com/lensa",
    "logo": "/placeholder.png",
    "description": "Top-rated Lensa AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pfpmaker",
    "name": "PFPMaker",
    "url": "https://pfpmaker.com",
    "logo": "/placeholder.png",
    "description": "Top-rated PFPMaker for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ready-player-m",
    "name": "Ready Player M",
    "url": "https://ereadyplayer.me",
    "logo": "/placeholder.png",
    "description": "Top-rated Ready Player M for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fotor-a",
    "name": "Fotor A",
    "url": "https://vatarfotor.com/ai-avatar-generator",
    "logo": "/placeholder.png",
    "description": "Top-rated Fotor A for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dawn-ai",
    "name": "Dawn AI",
    "url": "https://dawnai.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Dawn AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "facet-ai",
    "name": "Facet AI",
    "url": "https://facet.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Facet AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "avatarify",
    "name": "Avatarify",
    "url": "https://avatarify.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Avatarify for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "synthesia-a",
    "name": "Synthesia A",
    "url": "https://vatarsynthesia.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Synthesia A for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "heygen-a",
    "name": "HeyGen A",
    "url": "https://vatarheygen.com",
    "logo": "/placeholder.png",
    "description": "Top-rated HeyGen A for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "deepbrain-a",
    "name": "Deepbrain A",
    "url": "https://vatardeepbrain.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Deepbrain A for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "movio",
    "name": "Movio",
    "url": "https://movio.la",
    "logo": "/placeholder.png",
    "description": "Top-rated Movio for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "exh-ai",
    "name": "Exh AI",
    "url": "https://exh.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Exh AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hour-o",
    "name": "Hour O",
    "url": "https://nehourone.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Hour O for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "yepic-ai",
    "name": "Yepic AI",
    "url": "https://yepic.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Yepic AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "personas",
    "name": "Personas",
    "url": "https://personas.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Personas for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ai-photoaip",
    "name": "AI PhotoaiP",
    "url": "https://hoto.app",
    "logo": "/placeholder.png",
    "description": "Top-rated AI PhotoaiP for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "picasso-ai",
    "name": "Picasso AI",
    "url": "https://picassoai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Picasso AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "vi",
    "name": "Vi",
    "url": "https://vid AIvivid.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Vi for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "gradient-a",
    "name": "Gradient A",
    "url": "https://ppgradient.photo",
    "logo": "/placeholder.png",
    "description": "Top-rated Gradient A for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "meitu-ai",
    "name": "Meitu AI",
    "url": "https://meitu.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Meitu AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "youcam-ai",
    "name": "YouCam AI",
    "url": "https://youcam.com",
    "logo": "/placeholder.png",
    "description": "Top-rated YouCam AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "faceapp",
    "name": "FaceApp",
    "url": "https://faceapp.com",
    "logo": "/placeholder.png",
    "description": "Top-rated FaceApp for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "zmoji",
    "name": "Zmoji",
    "url": "https://zmoji.co",
    "logo": "/placeholder.png",
    "description": "Top-rated Zmoji for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "bitmoji-ai",
    "name": "Bitmoji AI",
    "url": "https://bitmoji.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Bitmoji AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "insta3d",
    "name": "Insta3D",
    "url": "https://insta3d.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Insta3D for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cartoonify",
    "name": "Cartoonify",
    "url": "https://cartoonify.de",
    "logo": "/placeholder.png",
    "description": "Top-rated Cartoonify for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "toonme",
    "name": "ToonMe",
    "url": "https://toonme.com",
    "logo": "/placeholder.png",
    "description": "Top-rated ToonMe for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "voila-ai",
    "name": "Voila AI",
    "url": "https://voilaai.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Voila AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pixaroma",
    "name": "Pixaroma",
    "url": "https://pixaroma.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Pixaroma for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ai-photo-a",
    "name": "AI Photo A",
    "url": "https://rtaiphotoart.com",
    "logo": "/placeholder.png",
    "description": "Top-rated AI Photo A for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "digirama",
    "name": "Digirama",
    "url": "https://digirama.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Digirama for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "alter-ai",
    "name": "Alter AI",
    "url": "https://alter.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Alter AI for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "soul-m",
    "name": "Soul M",
    "url": "https://achinessoulmachines.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Soul M for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "genies",
    "name": "Genies",
    "url": "https://genies.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Genies for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wolf3d",
    "name": "Wolf3D",
    "url": "https://wolf3d.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Wolf3D for avatar.",
    "categoryId": "ai-avatar",
    "tags": [
      "AI",
      "Avatar"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "bing-ai",
    "name": "Bing AI",
    "url": "https://bing.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Bing AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "exa-ai",
    "name": "Exa AI",
    "url": "https://exa.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Exa AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tavily",
    "name": "Tavily",
    "url": "https://tavily.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Tavily for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "consensus",
    "name": "Consensus",
    "url": "https://consensus.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Consensus for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "elicit",
    "name": "Elicit",
    "url": "https://elicit.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Elicit for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "semantic-s",
    "name": "Semantic S",
    "url": "https://cholarsemanticscholar.org",
    "logo": "/placeholder.png",
    "description": "Top-rated Semantic S for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "scispace",
    "name": "Scispace",
    "url": "https://scispace.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Scispace for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "kagi",
    "name": "Kagi",
    "url": "https://kagi.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Kagi for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "brave-search-ai",
    "name": "Brave Search AI",
    "url": "https://search.brave.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Brave Search AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "andi-s",
    "name": "Andi S",
    "url": "https://earchandisearch.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Andi S for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "metaphor-ai",
    "name": "Metaphor AI",
    "url": "https://metaphor.systems",
    "logo": "/placeholder.png",
    "description": "Top-rated Metaphor AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "neeva-ai",
    "name": "Neeva AI",
    "url": "https://neeva.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Neeva AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "waldo-ai",
    "name": "Waldo AI",
    "url": "https://waldo.fyi",
    "logo": "/placeholder.png",
    "description": "Top-rated Waldo AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "e",
    "name": "E",
    "url": "https://esel AIeesel.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated E for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "glean-ai",
    "name": "Glean AI",
    "url": "https://glean.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Glean AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "guru-ai",
    "name": "Guru AI",
    "url": "https://getguru.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Guru AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dashworks",
    "name": "Dashworks",
    "url": "https://dashworks.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Dashworks for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hebbia",
    "name": "Hebbia",
    "url": "https://hebbia.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Hebbia for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lexi-ai",
    "name": "Lexi AI",
    "url": "https://lexi.page",
    "logo": "/placeholder.png",
    "description": "Top-rated Lexi AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "yext-ai",
    "name": "Yext AI",
    "url": "https://yext.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Yext AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "algolia-ai",
    "name": "Algolia AI",
    "url": "https://algolia.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Algolia AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "typesense",
    "name": "Typesense",
    "url": "https://typesense.org",
    "logo": "/placeholder.png",
    "description": "Top-rated Typesense for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "meilisearch",
    "name": "Meilisearch",
    "url": "https://meilisearch.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Meilisearch for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "vectara",
    "name": "Vectara",
    "url": "https://vectara.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Vectara for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cohere-s",
    "name": "Cohere S",
    "url": "https://earchcohere.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Cohere S for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pinecone",
    "name": "Pinecone",
    "url": "https://pinecone.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Pinecone for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "weaviate",
    "name": "Weaviate",
    "url": "https://weaviate.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Weaviate for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "qdrant",
    "name": "Qdrant",
    "url": "https://qdrant.tech",
    "logo": "/placeholder.png",
    "description": "Top-rated Qdrant for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "c",
    "name": "C",
    "url": "https://hromatrychroma.com",
    "logo": "/placeholder.png",
    "description": "Top-rated C for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lancedb",
    "name": "LanceDB",
    "url": "https://lancedb.com",
    "logo": "/placeholder.png",
    "description": "Top-rated LanceDB for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "marqo",
    "name": "Marqo",
    "url": "https://marqo.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Marqo for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "zilliz",
    "name": "Zilliz",
    "url": "https://zilliz.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Zilliz for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "turbopuffer",
    "name": "Turbopuffer",
    "url": "https://turbopuffer.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Turbopuffer for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "nuclia",
    "name": "Nuclia",
    "url": "https://nuclia.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Nuclia for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "jina-ai",
    "name": "Jina AI",
    "url": "https://jina.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Jina AI for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cocoindex",
    "name": "Cocoindex",
    "url": "https://cocoindex.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Cocoindex for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "searchbase",
    "name": "Searchbase",
    "url": "https://searchbase.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Searchbase for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "otterai",
    "name": "Otter.ai",
    "url": "https://otter.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Otter.ai for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fireflies-ai",
    "name": "Fireflies AI",
    "url": "https://fireflies.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Fireflies AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "zapier-ai",
    "name": "Zapier AI",
    "url": "https://zapier.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Zapier AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "makecom",
    "name": "Make.com",
    "url": "https://make.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Make.com for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "gamma-ai",
    "name": "Gamma AI",
    "url": "https://gamma.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Gamma AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "beautifulai",
    "name": "Beautiful.ai",
    "url": "https://beautiful.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Beautiful.ai for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tome",
    "name": "Tome",
    "url": "https://tome.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Tome for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "taskade-ai",
    "name": "Taskade AI",
    "url": "https://taskade.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Taskade AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mem-ai",
    "name": "Mem AI",
    "url": "https://mem.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Mem AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "reclaim-ai",
    "name": "Reclaim AI",
    "url": "https://reclaim.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Reclaim AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "motion-ai",
    "name": "Motion AI",
    "url": "https://usemotion.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Motion AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "krisp-ai",
    "name": "Krisp AI",
    "url": "https://krisp.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Krisp AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fathom-ai",
    "name": "Fathom AI",
    "url": "https://fathom.video",
    "logo": "/placeholder.png",
    "description": "Top-rated Fathom AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tldv",
    "name": "Tldv",
    "url": "https://tldv.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Tldv for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "notta-ai",
    "name": "Notta AI",
    "url": "https://notta.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Notta AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "magical-ai",
    "name": "Magical AI",
    "url": "https://getmagical.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Magical AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "superhuman-ai",
    "name": "Superhuman AI",
    "url": "https://superhuman.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Superhuman AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "shortwave",
    "name": "Shortwave",
    "url": "https://shortwave.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Shortwave for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "sanebox",
    "name": "Sanebox",
    "url": "https://sanebox.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Sanebox for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ellie-ai",
    "name": "Ellie AI",
    "url": "https://tryellie.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Ellie AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "missive",
    "name": "Missive",
    "url": "https://missiveapp.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Missive for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "coda-ai",
    "name": "Coda AI",
    "url": "https://coda.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Coda AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "craft-ai",
    "name": "Craft AI",
    "url": "https://craft.do",
    "logo": "/placeholder.png",
    "description": "Top-rated Craft AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "anytype",
    "name": "Anytype",
    "url": "https://anytype.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Anytype for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "obsidian-ai",
    "name": "Obsidian AI",
    "url": "https://obsidian.md",
    "logo": "/placeholder.png",
    "description": "Top-rated Obsidian AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "reflect-ai",
    "name": "Reflect AI",
    "url": "https://reflect.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Reflect AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "logseq",
    "name": "Logseq",
    "url": "https://logseq.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Logseq for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "roam-r",
    "name": "Roam R",
    "url": "https://esearchroamresearch.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Roam R for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tana-ai",
    "name": "Tana AI",
    "url": "https://tana.inc",
    "logo": "/placeholder.png",
    "description": "Top-rated Tana AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "capacities",
    "name": "Capacities",
    "url": "https://capacities.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Capacities for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "heptabase",
    "name": "Heptabase",
    "url": "https://heptabase.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Heptabase for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "napkin-ai",
    "name": "Napkin AI",
    "url": "https://napkin.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Napkin AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "whimsical-ai",
    "name": "Whimsical AI",
    "url": "https://whimsical.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Whimsical AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "miro-ai",
    "name": "Miro AI",
    "url": "https://miro.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Miro AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "figjam-ai",
    "name": "Figjam AI",
    "url": "https://figma.com/figjam",
    "logo": "/placeholder.png",
    "description": "Top-rated Figjam AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lucidspark-ai",
    "name": "Lucidspark AI",
    "url": "https://lucidspark.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Lucidspark AI for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "stormboard",
    "name": "Stormboard",
    "url": "https://stormboard.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Stormboard for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ideaflip",
    "name": "Ideaflip",
    "url": "https://ideaflip.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Ideaflip for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "conceptboard",
    "name": "Conceptboard",
    "url": "https://conceptboard.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Conceptboard for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "luminar-ai",
    "name": "Luminar AI",
    "url": "https://skylum.com/luminar",
    "logo": "/placeholder.png",
    "description": "Top-rated Luminar AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "topaz-ai",
    "name": "Topaz AI",
    "url": "https://topazlabs.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Topaz AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "removebg",
    "name": "Remove.bg",
    "url": "https://remove.bg",
    "logo": "/placeholder.png",
    "description": "Top-rated Remove.bg for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cleanuppictures",
    "name": "Cleanup.pictures",
    "url": "https://cleanup.pictures",
    "logo": "/placeholder.png",
    "description": "Top-rated Cleanup.pictures for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "upscayl",
    "name": "Upscayl",
    "url": "https://upscayl.org",
    "logo": "/placeholder.png",
    "description": "Top-rated Upscayl for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lets-e",
    "name": "Let's E",
    "url": "https://nhanceletsenhance.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Let's E for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "picwish",
    "name": "Picwish",
    "url": "https://picwish.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Picwish for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pixelcut",
    "name": "Pixelcut",
    "url": "https://pixelcut.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Pixelcut for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "photoroom",
    "name": "Photoroom",
    "url": "https://photoroom.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Photoroom for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "claid-ai",
    "name": "Claid AI",
    "url": "https://claid.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Claid AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "evoto-ai",
    "name": "Evoto AI",
    "url": "https://evoto.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Evoto AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cutoutpro",
    "name": "Cutout.pro",
    "url": "https://cutout.pro",
    "logo": "/placeholder.png",
    "description": "Top-rated Cutout.pro for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "i",
    "name": "I",
    "url": "https://npainttheinpaint.com",
    "logo": "/placeholder.png",
    "description": "Top-rated I for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hotpot-ai",
    "name": "Hotpot AI",
    "url": "https://hotpot.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Hotpot AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "photoscape-ai",
    "name": "Photoscape AI",
    "url": "https://photoscape.org",
    "logo": "/placeholder.png",
    "description": "Top-rated Photoscape AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "befunky-ai",
    "name": "BeFunky AI",
    "url": "https://befunky.com",
    "logo": "/placeholder.png",
    "description": "Top-rated BeFunky AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ribbet-ai",
    "name": "Ribbet AI",
    "url": "https://ribbet.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Ribbet AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "canva-p",
    "name": "Canva P",
    "url": "https://hotocanva.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Canva P for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fotojet",
    "name": "FotoJet",
    "url": "https://fotojet.com",
    "logo": "/placeholder.png",
    "description": "Top-rated FotoJet for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fotor",
    "name": "Fotor",
    "url": "https://fotor.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Fotor for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "visme-ai",
    "name": "Visme AI",
    "url": "https://visme.co",
    "logo": "/placeholder.png",
    "description": "Top-rated Visme AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "snapseed-ai",
    "name": "Snapseed AI",
    "url": "https://snapseed.online",
    "logo": "/placeholder.png",
    "description": "Top-rated Snapseed AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "removerapp",
    "name": "Remover.app",
    "url": "https://remover.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Remover.app for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "erasebg",
    "name": "Erase.bg",
    "url": "https://erase.bg",
    "logo": "/placeholder.png",
    "description": "Top-rated Erase.bg for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "slazzer",
    "name": "Slazzer",
    "url": "https://slazzer.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Slazzer for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "removalai",
    "name": "Removal.ai",
    "url": "https://removal.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Removal.ai for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "photokit",
    "name": "Photokit",
    "url": "https://photokit.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Photokit for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pincel-ai",
    "name": "Pincel AI",
    "url": "https://pincel.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Pincel AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "zyng-ai",
    "name": "Zyng AI",
    "url": "https://zyng.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Zyng AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "designify",
    "name": "Designify",
    "url": "https://designify.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Designify for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "icons8-ai",
    "name": "Icons8 AI",
    "url": "https://icons8.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Icons8 AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "unscreen",
    "name": "Unscreen",
    "url": "https://unscreen.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Unscreen for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "jpgremover",
    "name": "Jpgremover",
    "url": "https://jpgremover.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Jpgremover for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "retoucher",
    "name": "Retoucher",
    "url": "https://retoucheronline.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Retoucher for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ai-image-e",
    "name": "AI Image E",
    "url": "https://nlargerimglarger.com",
    "logo": "/placeholder.png",
    "description": "Top-rated AI Image E for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "picmonkey-ai",
    "name": "Picmonkey AI",
    "url": "https://picmonkey.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Picmonkey AI for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "photofeeler",
    "name": "Photofeeler",
    "url": "https://photofeeler.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Photofeeler for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "autogpt",
    "name": "AutoGPT",
    "url": "https://agpt.co",
    "logo": "/placeholder.png",
    "description": "Top-rated AutoGPT for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "agentgpt",
    "name": "AgentGPT",
    "url": "https://agentgpt.reworkd.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated AgentGPT for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "n8n",
    "name": "n8n",
    "url": "https://n8n.io",
    "logo": "/placeholder.png",
    "description": "Top-rated n8n for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "bardeen-ai",
    "name": "Bardeen AI",
    "url": "https://bardeen.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Bardeen AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "browse-ai",
    "name": "Browse AI",
    "url": "https://browse.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Browse AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "relevance-ai",
    "name": "Relevance AI",
    "url": "https://relevanceai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Relevance AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lindy-ai",
    "name": "Lindy AI",
    "url": "https://lindy.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Lindy AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "beam-ai",
    "name": "Beam AI",
    "url": "https://beam.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Beam AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "activepieces",
    "name": "Activepieces",
    "url": "https://activepieces.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Activepieces for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pipedream",
    "name": "Pipedream",
    "url": "https://pipedream.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Pipedream for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "trayio",
    "name": "Tray.io",
    "url": "https://tray.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Tray.io for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "workato",
    "name": "Workato",
    "url": "https://workato.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Workato for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "boomi",
    "name": "Boomi",
    "url": "https://boomi.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Boomi for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "retool-ai",
    "name": "Retool AI",
    "url": "https://retool.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Retool AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "appsmith",
    "name": "Appsmith",
    "url": "https://appsmith.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Appsmith for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tooljet",
    "name": "Tooljet",
    "url": "https://tooljet.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Tooljet for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "superagent",
    "name": "Superagent",
    "url": "https://superagent.sh",
    "logo": "/placeholder.png",
    "description": "Top-rated Superagent for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "langchain",
    "name": "LangChain",
    "url": "https://langchain.com",
    "logo": "/placeholder.png",
    "description": "Top-rated LangChain for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "flowise",
    "name": "Flowise",
    "url": "https://flowiseai.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Flowise for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dify-ai",
    "name": "Dify AI",
    "url": "https://dify.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Dify AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "voiceflow",
    "name": "Voiceflow",
    "url": "https://voiceflow.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Voiceflow for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "botpress",
    "name": "Botpress",
    "url": "https://botpress.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Botpress for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "manychat-ai",
    "name": "Manychat AI",
    "url": "https://manychat.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Manychat AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tidio-ai",
    "name": "Tidio AI",
    "url": "https://tidio.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Tidio AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "intercom-ai",
    "name": "Intercom AI",
    "url": "https://intercom.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Intercom AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "drift-ai",
    "name": "Drift AI",
    "url": "https://drift.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Drift AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "freshdesk-ai",
    "name": "Freshdesk AI",
    "url": "https://freshdesk.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Freshdesk AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "zendesk-ai",
    "name": "Zendesk AI",
    "url": "https://zendesk.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Zendesk AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "custify",
    "name": "Custify",
    "url": "https://custify.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Custify for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "kore-ai",
    "name": "Kore AI",
    "url": "https://kore.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Kore AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "yellow-ai",
    "name": "Yellow AI",
    "url": "https://yellow.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Yellow AI for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "haptik",
    "name": "Haptik",
    "url": "https://haptik.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Haptik for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "cognigy",
    "name": "Cognigy",
    "url": "https://cognigy.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Cognigy for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "rasa",
    "name": "Rasa",
    "url": "https://rasa.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Rasa for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dialogflow",
    "name": "Dialogflow",
    "url": "https://dialogflow.cloud.google.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Dialogflow for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ibm-w",
    "name": "IBM W",
    "url": "https://atsonibm.com/watson",
    "logo": "/placeholder.png",
    "description": "Top-rated IBM W for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "amazon-l",
    "name": "Amazon L",
    "url": "https://exaws.amazon.com/lex",
    "logo": "/placeholder.png",
    "description": "Top-rated Amazon L for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "azure-b",
    "name": "Azure B",
    "url": "https://otazure.microsoft.com/bot-service",
    "logo": "/placeholder.png",
    "description": "Top-rated Azure B for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "julius-ai",
    "name": "Julius AI",
    "url": "https://julius.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Julius AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "obviously-ai",
    "name": "Obviously AI",
    "url": "https://obviously.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Obviously AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "akkio",
    "name": "Akkio",
    "url": "https://akkio.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Akkio for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "polymer",
    "name": "Polymer",
    "url": "https://polymersearch.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Polymer for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "rows-ai",
    "name": "Rows AI",
    "url": "https://rows.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Rows AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "coefficient",
    "name": "Coefficient",
    "url": "https://coefficient.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Coefficient for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "equals",
    "name": "Equals",
    "url": "https://equals.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Equals for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "numerous-ai",
    "name": "Numerous AI",
    "url": "https://numerous.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Numerous AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "sheetai",
    "name": "Sheetai",
    "url": "https://sheetai.app",
    "logo": "/placeholder.png",
    "description": "Top-rated Sheetai for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "gptexcel",
    "name": "GPTExcel",
    "url": "https://gptexcel.app",
    "logo": "/placeholder.png",
    "description": "Top-rated GPTExcel for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "ajelix",
    "name": "Ajelix",
    "url": "https://ajelix.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Ajelix for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "formularizer",
    "name": "Formularizer",
    "url": "https://formularizer.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Formularizer for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tableau-ai",
    "name": "Tableau AI",
    "url": "https://tableau.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Tableau AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "power-bi-ai",
    "name": "Power BI AI",
    "url": "https://powerbi.microsoft.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Power BI AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "looker-ai",
    "name": "Looker AI",
    "url": "https://looker.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Looker AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mixpanel-ai",
    "name": "Mixpanel AI",
    "url": "https://mixpanel.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Mixpanel AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "amplitude-ai",
    "name": "Amplitude AI",
    "url": "https://amplitude.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Amplitude AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "heap-ai",
    "name": "Heap AI",
    "url": "https://heap.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Heap AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hotjar-ai",
    "name": "Hotjar AI",
    "url": "https://hotjar.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Hotjar AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mouseflow",
    "name": "Mouseflow",
    "url": "https://mouseflow.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Mouseflow for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "crazy-e",
    "name": "Crazy E",
    "url": "https://ggcrazyegg.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Crazy E for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "fullstory",
    "name": "Fullstory",
    "url": "https://fullstory.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Fullstory for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "smartlook",
    "name": "Smartlook",
    "url": "https://smartlook.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Smartlook for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "lucky-o",
    "name": "Lucky O",
    "url": "https://rangeluckyorange.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Lucky O for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "contentsquare",
    "name": "Contentsquare",
    "url": "https://contentsquare.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Contentsquare for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "quantum-m",
    "name": "Quantum M",
    "url": "https://etricquantummetric.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Quantum M for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "indicative",
    "name": "Indicative",
    "url": "https://indicative.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Indicative for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "woopra",
    "name": "Woopra",
    "url": "https://woopra.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Woopra for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "kissmetrics",
    "name": "Kissmetrics",
    "url": "https://kissmetrics.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Kissmetrics for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "pendo-ai",
    "name": "Pendo AI",
    "url": "https://pendo.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Pendo AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "gainsight-ai",
    "name": "Gainsight AI",
    "url": "https://gainsight.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Gainsight AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "chartio",
    "name": "Chartio",
    "url": "https://chartio.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Chartio for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "metabase-ai",
    "name": "Metabase AI",
    "url": "https://metabase.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Metabase AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "redash",
    "name": "Redash",
    "url": "https://redash.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Redash for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "superset",
    "name": "Superset",
    "url": "https://superset.apache.org",
    "logo": "/placeholder.png",
    "description": "Top-rated Superset for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "grafana-ai",
    "name": "Grafana AI",
    "url": "https://grafana.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Grafana AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "datadog-ai",
    "name": "Datadog AI",
    "url": "https://datadoghq.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Datadog AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "new-relic-ai",
    "name": "New Relic AI",
    "url": "https://newrelic.com",
    "logo": "/placeholder.png",
    "description": "Top-rated New Relic AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "splunk-ai",
    "name": "Splunk AI",
    "url": "https://splunk.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Splunk AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "elastic-ai",
    "name": "Elastic AI",
    "url": "https://elastic.co",
    "logo": "/placeholder.png",
    "description": "Top-rated Elastic AI for data.",
    "categoryId": "ai-data",
    "tags": [
      "AI",
      "Data"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "khan-academy-ai",
    "name": "Khan Academy AI",
    "url": "https://khanmigo.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Khan Academy AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "socratic",
    "name": "Socratic",
    "url": "https://socratic.org",
    "logo": "/placeholder.png",
    "description": "Top-rated Socratic for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "photomath",
    "name": "Photomath",
    "url": "https://photomath.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Photomath for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "wolfram-a",
    "name": "Wolfram A",
    "url": "https://lphawolframalpha.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Wolfram A for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "duolingo-ai",
    "name": "Duolingo AI",
    "url": "https://duolingo.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Duolingo AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "coursera-ai",
    "name": "Coursera AI",
    "url": "https://coursera.org",
    "logo": "/placeholder.png",
    "description": "Top-rated Coursera AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "synthesis-ai",
    "name": "Synthesis AI",
    "url": "https://synthesis.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Synthesis AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "numerade",
    "name": "Numerade",
    "url": "https://numerade.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Numerade for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "quizlet-ai",
    "name": "Quizlet AI",
    "url": "https://quizlet.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Quizlet AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "knowji",
    "name": "Knowji",
    "url": "https://knowji.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Knowji for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "brainly-ai",
    "name": "Brainly AI",
    "url": "https://brainly.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Brainly AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "chegg-ai",
    "name": "Chegg AI",
    "url": "https://chegg.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Chegg AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "studypool",
    "name": "Studypool",
    "url": "https://studypool.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Studypool for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "tutor-ai",
    "name": "Tutor AI",
    "url": "https://tutorai.me",
    "logo": "/placeholder.png",
    "description": "Top-rated Tutor AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "scholar-ai",
    "name": "Scholar AI",
    "url": "https://scholarai.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Scholar AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "explain-like-im",
    "name": "Explain Like Im",
    "url": "https://5explainlikeimfive.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Explain Like Im for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "caktus-ai",
    "name": "Caktus AI",
    "url": "https://caktus.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Caktus AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "gradescope",
    "name": "Gradescope",
    "url": "https://gradescope.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Gradescope for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "turnitin-ai",
    "name": "Turnitin AI",
    "url": "https://turnitin.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Turnitin AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "grammarly-e",
    "name": "Grammarly E",
    "url": "https://dugrammarly.com/edu",
    "logo": "/placeholder.png",
    "description": "Top-rated Grammarly E for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "scribbr-ai",
    "name": "Scribbr AI",
    "url": "https://scribbr.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Scribbr AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "paperpal",
    "name": "Paperpal",
    "url": "https://paperpal.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Paperpal for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "jenni-ai",
    "name": "Jenni AI",
    "url": "https://jenni.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Jenni AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "typeset-io",
    "name": "Typeset IO",
    "url": "https://typeset.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Typeset IO for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "researchrabbit",
    "name": "ResearchRabbit",
    "url": "https://researchrabbit.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated ResearchRabbit for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "connected-p",
    "name": "Connected P",
    "url": "https://apersconnectedpapers.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Connected P for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "litmaps",
    "name": "Litmaps",
    "url": "https://litmaps.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Litmaps for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "iris-ai",
    "name": "Iris AI",
    "url": "https://iris.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Iris AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "scite-ai",
    "name": "Scite AI",
    "url": "https://scite.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Scite AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "undermind",
    "name": "Undermind",
    "url": "https://undermind.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Undermind for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "humata-ai",
    "name": "Humata AI",
    "url": "https://humata.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Humata AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "explainpaper",
    "name": "Explainpaper",
    "url": "https://explainpaper.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Explainpaper for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "scisummary",
    "name": "SciSummary",
    "url": "https://scisummary.com",
    "logo": "/placeholder.png",
    "description": "Top-rated SciSummary for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "bytesview",
    "name": "Bytesview",
    "url": "https://bytesview.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Bytesview for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "mindgrasp",
    "name": "Mindgrasp",
    "url": "https://mindgrasp.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Mindgrasp for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "recall-ai",
    "name": "Recall AI",
    "url": "https://getrecall.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Recall AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "learnt-ai",
    "name": "Learnt AI",
    "url": "https://learnt.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Learnt AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "practiceproblems",
    "name": "Practiceproblems",
    "url": "https://practiceproblems.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Practiceproblems for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "curipod",
    "name": "Curipod",
    "url": "https://curipod.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Curipod for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "magic-school-ai",
    "name": "Magic School AI",
    "url": "https://magicschool.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Magic School AI for edu.",
    "categoryId": "ai-edu",
    "tags": [
      "AI",
      "Edu"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "komo",
    "name": "Komo",
    "url": "https://komo.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Komo for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "yep",
    "name": "Yep",
    "url": "https://yep.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Yep for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "metaphor",
    "name": "Metaphor",
    "url": "https://exa.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Metaphor for search.",
    "categoryId": "ai-search",
    "tags": [
      "AI",
      "Search"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "portraitpro",
    "name": "PortraitPro",
    "url": "https://portraitpro.com",
    "logo": "/placeholder.png",
    "description": "Top-rated PortraitPro for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "movavi-p",
    "name": "Movavi P",
    "url": "https://movavi.com/picverse",
    "logo": "/placeholder.png",
    "description": "Top-rated Movavi P for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "dxo-p",
    "name": "DxO P",
    "url": "https://dxo.com",
    "logo": "/placeholder.png",
    "description": "Top-rated DxO P for photo.",
    "categoryId": "ai-photo",
    "tags": [
      "AI",
      "Photo"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "amper",
    "name": "Amper",
    "url": "https://ampermusic.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Amper for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "orb-p",
    "name": "Orb P",
    "url": "https://orb-composer.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Orb P for audio.",
    "categoryId": "ai-audio",
    "tags": [
      "AI",
      "Audio"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "prowritingaid",
    "name": "ProWritingAid",
    "url": "https://prowritingaid.com",
    "logo": "/placeholder.png",
    "description": "Top-rated ProWritingAid for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "helleo-ai",
    "name": "Helleo AI",
    "url": "https://helloai.io",
    "logo": "/placeholder.png",
    "description": "Top-rated Helleo AI for writing.",
    "categoryId": "ai-writing",
    "tags": [
      "AI",
      "Writing"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "hexomatic",
    "name": "Hexomatic",
    "url": "https://hexomatic.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Hexomatic for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "levity",
    "name": "Levity",
    "url": "https://levity.ai",
    "logo": "/placeholder.png",
    "description": "Top-rated Levity for automation.",
    "categoryId": "ai-automation",
    "tags": [
      "AI",
      "Automation"
    ],
    "badges": [
      "Freemium"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "sunsama",
    "name": "Sunsama",
    "url": "https://sunsama.com",
    "logo": "/placeholder.png",
    "description": "Top-rated Sunsama for productivity.",
    "categoryId": "ai-productivity",
    "tags": [
      "AI",
      "Productivity"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-14",
    "language": "English"
  },
  {
    "id": "godaddy",
    "name": "GoDaddy",
    "url": "https://godaddy.com",
    "logo": "/placeholder.png",
    "description": "Biggest registrar worldwide.",
    "categoryId": "domains",
    "tags": [
      "World's Best",
      "Trusted"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-15",
    "language": "Multiple"
  },
  {
    "id": "namecheap",
    "name": "Namecheap",
    "url": "https://namecheap.com",
    "logo": "/placeholder.png",
    "description": "Best value + free privacy.",
    "categoryId": "domains",
    "tags": [
      "World's Best",
      "Trusted"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "cloudflare-domains",
    "name": "Cloudflare Registrar",
    "url": "https://cloudflare.com/registrar",
    "logo": "/placeholder.png",
    "description": "At-cost pricing, no markup.",
    "categoryId": "domains",
    "tags": [
      "World's Best",
      "Trusted"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "google-domains",
    "name": "Google Domains",
    "url": "https://domains.google",
    "logo": "/placeholder.png",
    "description": "Simple, clean interface.",
    "categoryId": "domains",
    "tags": [
      "World's Best",
      "Trusted"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "name-dot-com",
    "name": "Name.com",
    "url": "https://name.com",
    "logo": "/placeholder.png",
    "description": "Reliable, good support.",
    "categoryId": "domains",
    "tags": [
      "World's Best",
      "Trusted"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "porkbun",
    "name": "Porkbun",
    "url": "https://porkbun.com",
    "logo": "/placeholder.png",
    "description": "Cheapest .com prices.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "dynadot",
    "name": "Dynadot",
    "url": "https://dynadot.com",
    "logo": "/placeholder.png",
    "description": "Bulk domain buying.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "hover",
    "name": "Hover",
    "url": "https://hover.com",
    "logo": "/placeholder.png",
    "description": "Clean UI, no upsells.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "domain-dot-com",
    "name": "Domain.com",
    "url": "https://domain.com",
    "logo": "/placeholder.png",
    "description": "Beginners.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "network-solutions",
    "name": "Network Solutions",
    "url": "https://networksolutions.com",
    "logo": "/placeholder.png",
    "description": "Enterprise clients.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "register-dot-com",
    "name": "Register.com",
    "url": "https://register.com",
    "logo": "/placeholder.png",
    "description": "Old school reliable.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "gandi",
    "name": "Gandi",
    "url": "https://gandi.net",
    "logo": "/placeholder.png",
    "description": "Developer friendly.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "ionos",
    "name": "1&1 IONOS",
    "url": "https://ionos.com",
    "logo": "/placeholder.png",
    "description": "European businesses.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-15",
    "language": "Multiple"
  },
  {
    "id": "bluehost-domains",
    "name": "Bluehost Domains",
    "url": "https://bluehost.com",
    "logo": "/placeholder.png",
    "description": "WordPress users.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "hostgator-domains",
    "name": "HostGator Domains",
    "url": "https://hostgator.com",
    "logo": "/placeholder.png",
    "description": "Hosting bundle.",
    "categoryId": "domains",
    "tags": [
      "Popular",
      "Reliable"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "squarespace-domains",
    "name": "Squarespace Domains",
    "url": "https://squarespace.com/domains",
    "logo": "/placeholder.png",
    "description": "Design focused.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "wix-domains",
    "name": "Wix Domains",
    "url": "https://wix.com/domain",
    "logo": "/placeholder.png",
    "description": "Website builders.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "siteground-domains",
    "name": "Siteground Domains",
    "url": "https://siteground.com",
    "logo": "/placeholder.png",
    "description": "Speed focused hosting.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "dreamhost-domains",
    "name": "DreamHost",
    "url": "https://dreamhost.com",
    "logo": "/placeholder.png",
    "description": "Privacy focused.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "a2-hosting-domains",
    "name": "A2 Hosting",
    "url": "https://a2hosting.com",
    "logo": "/placeholder.png",
    "description": "Developer hosting.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "inmotion-hosting",
    "name": "InMotion",
    "url": "https://inmotionhosting.com",
    "logo": "/placeholder.png",
    "description": "Business hosting.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "hostinger-domains",
    "name": "Hostinger Domains",
    "url": "https://hostinger.com/ai-website-builder",
    "logo": "/placeholder.png",
    "description": "Cheapest hosting+domain.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "ipage",
    "name": "iPage",
    "url": "https://ipage.com",
    "logo": "/placeholder.png",
    "description": "Budget friendly.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "fastcomet",
    "name": "FastComet",
    "url": "https://fastcomet.com",
    "logo": "/placeholder.png",
    "description": "Fast global CDN.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "namesilo",
    "name": "Namesilo",
    "url": "https://namesilo.com",
    "logo": "/placeholder.png",
    "description": "Bulk domains cheap.",
    "categoryId": "domains",
    "tags": [
      "Good Alternatives"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "bigrock",
    "name": "BigRock",
    "url": "https://bigrock.in",
    "logo": "/placeholder.png",
    "description": "India market.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "godaddy-india",
    "name": "GoDaddy India",
    "url": "https://in.godaddy.com",
    "logo": "/placeholder.png",
    "description": "India pricing INR.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "resellerclub",
    "name": "Resellerclub",
    "url": "https://resellerclub.com",
    "logo": "/placeholder.png",
    "description": "India resellers.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "znetlive",
    "name": "Znetlive",
    "url": "https://znetlive.com",
    "logo": "/placeholder.png",
    "description": "India hosting.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "milesweb",
    "name": "MilesWeb",
    "url": "https://milesweb.com",
    "logo": "/placeholder.png",
    "description": "India based.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "truehost",
    "name": "Truehost",
    "url": "https://truehost.cloud",
    "logo": "/placeholder.png",
    "description": "Africa + Asia.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "123-reg",
    "name": "123 Reg",
    "url": "https://123-reg.co.uk",
    "logo": "/placeholder.png",
    "description": "UK market.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.1,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "fasthosts",
    "name": "Fasthosts",
    "url": "https://fasthosts.co.uk",
    "logo": "/placeholder.png",
    "description": "UK businesses.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.2,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "heart-internet",
    "name": "Heart Internet",
    "url": "https://heartinternet.uk",
    "logo": "/placeholder.png",
    "description": "UK hosting.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "ovhcloud",
    "name": "OVHcloud",
    "url": "https://ovhcloud.com",
    "logo": "/placeholder.png",
    "description": "Europe market.",
    "categoryId": "domains",
    "tags": [
      "Regional",
      "Specialty"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-15",
    "language": "Multiple"
  },
  {
    "id": "sedo",
    "name": "Sedo",
    "url": "https://sedo.com",
    "logo": "/placeholder.png",
    "description": "Buy/sell premium domains.",
    "categoryId": "domains",
    "tags": [
      "Premium",
      "Marketplace"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-15",
    "language": "Multiple"
  },
  {
    "id": "afternic",
    "name": "Afternic",
    "url": "https://afternic.com",
    "logo": "/placeholder.png",
    "description": "Domain marketplace.",
    "categoryId": "domains",
    "tags": [
      "Premium",
      "Marketplace"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "flippa",
    "name": "Flippa",
    "url": "https://flippa.com",
    "logo": "/placeholder.png",
    "description": "Buy websites + domains.",
    "categoryId": "domains",
    "tags": [
      "Premium",
      "Marketplace"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "dan-dot-com",
    "name": "Dan.com",
    "url": "https://dan.com",
    "logo": "/placeholder.png",
    "description": "Domain marketplace.",
    "categoryId": "domains",
    "tags": [
      "Premium",
      "Marketplace"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "namebright",
    "name": "NameBright",
    "url": "https://namebright.com",
    "logo": "/placeholder.png",
    "description": "Domain auctions.",
    "categoryId": "domains",
    "tags": [
      "Premium",
      "Marketplace"
    ],
    "badges": [
      "Paid"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-15",
    "language": "English"
  },
  {
    "id": "comix-to-doc",
    "name": "Comix.to",
    "url": "https://comix.to",
    "logo": "/placeholder.png",
    "description": "Read premium comics and manga online for free.",
    "categoryId": "manga",
    "tags": [
      "Manga",
      "Comics"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "mangafire-to-doc",
    "name": "MangaFire",
    "url": "https://mangafire.to",
    "logo": "/placeholder.png",
    "description": "High-quality manga reading platform with a massive library.",
    "categoryId": "manga",
    "tags": [
      "Manga",
      "Popular"
    ],
    "badges": [
      "Free",
      "Popular"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "mangahaven-net-doc",
    "name": "MangaHaven",
    "url": "https://mangahaven.net",
    "logo": "/placeholder.png",
    "description": "Your safe haven for reading manga and manhwa online.",
    "categoryId": "manga",
    "tags": [
      "Manga",
      "Manhwa"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "mangataro-org-doc",
    "name": "MangaTaro",
    "url": "https://mangataro.org",
    "logo": "/placeholder.png",
    "description": "Discover new manga titles and read chapters instantly.",
    "categoryId": "manga",
    "tags": [
      "Manga"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "mangadex-org-doc",
    "name": "MangaDex",
    "url": "https://mangadex.org",
    "logo": "/placeholder.png",
    "description": "The leading open-source manga reader and community.",
    "categoryId": "manga",
    "tags": [
      "Manga",
      "Community"
    ],
    "badges": [
      "Free",
      "Popular"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-20",
    "language": "Multiple"
  },
  {
    "id": "allmanga-to-doc",
    "name": "AllManga",
    "url": "https://allmanga.to",
    "logo": "/placeholder.png",
    "description": "Streamlined manga reading experience with daily updates.",
    "categoryId": "manga",
    "tags": [
      "Manga"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "mangago-me-doc",
    "name": "MangaGo",
    "url": "https://mangago.me",
    "logo": "/placeholder.png",
    "description": "Popular manga reading site with a vast user base.",
    "categoryId": "manga",
    "tags": [
      "Manga"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "weebcentral-com-doc",
    "name": "WeebCentral",
    "url": "https://weebcentral.com",
    "logo": "/placeholder.png",
    "description": "Central hub for weebs to read manga and discuss series.",
    "categoryId": "manga",
    "tags": [
      "Manga",
      "Community"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "manganato-gg-doc",
    "name": "Manganato",
    "url": "https://manganato.gg",
    "logo": "/placeholder.png",
    "description": "One of the largest manga databases with fast updates.",
    "categoryId": "manga",
    "tags": [
      "Manga"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "kagane-org-doc",
    "name": "Kagane",
    "url": "https://kagane.org",
    "logo": "/placeholder.png",
    "description": "Minimalist manga reader for a focused reading experience.",
    "categoryId": "manga",
    "tags": [
      "Manga",
      "Lightweight"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "spotdownloader-doc",
    "name": "SpotDownloader",
    "url": "https://spotdownloader.com",
    "logo": "/placeholder.png",
    "description": "Download Spotify tracks and playlists as MP3.",
    "categoryId": "music",
    "tags": [
      "Spotify",
      "Spotify Downloader"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "spotifymate-doc",
    "name": "SpotifyMate",
    "url": "https://spotifymate.com",
    "logo": "/placeholder.png",
    "description": "Fast and reliable Spotify music downloader.",
    "categoryId": "music",
    "tags": [
      "Spotify",
      "Spotify Downloader"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "spotmate-online-doc",
    "name": "SpotMate",
    "url": "https://spotmate.online",
    "logo": "/placeholder.png",
    "description": "Online high-quality Spotify downloader.",
    "categoryId": "music",
    "tags": [
      "Spotify",
      "Spotify Downloader"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "y2mate-nu-doc",
    "name": "Y2Mate Music",
    "url": "https://y2mate.nu",
    "logo": "/placeholder.png",
    "description": "Premium YouTube audio extraction tool.",
    "categoryId": "music",
    "tags": [
      "YouTube",
      "YouTube to MP3"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "azmp3-cc-doc",
    "name": "AZMP3",
    "url": "https://azmp3.cc",
    "logo": "/placeholder.png",
    "description": "Simple and unlimited YouTube to MP3 converter.",
    "categoryId": "music",
    "tags": [
      "YouTube",
      "YouTube to MP3"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "ytmp3-cc-doc",
    "name": "YTMP3",
    "url": "https://ytmp3.cc",
    "logo": "/placeholder.png",
    "description": "Reliable YouTube audio download service.",
    "categoryId": "music",
    "tags": [
      "YouTube",
      "YouTube to MP3"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "racoon-music-doc",
    "name": "Racoon",
    "url": "https://racoon.cc",
    "logo": "/placeholder.png",
    "description": "Multi-platform music hub and downloader.",
    "categoryId": "music",
    "tags": [
      "Multi-Platform",
      "Social"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "ytiz-xyz-doc",
    "name": "YTIZ",
    "url": "https://ytiz.xyz",
    "logo": "/placeholder.png",
    "description": "Advanced music downloader for various platforms.",
    "categoryId": "music",
    "tags": [
      "Multi-Platform"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "lucida-to-doc",
    "name": "Lucida",
    "url": "https://lucida.to",
    "logo": "/placeholder.png",
    "description": "Lossless music downloader for multiple services.",
    "categoryId": "music",
    "tags": [
      "Multi-Platform",
      "Tidal"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "cobalt-tools-doc",
    "name": "Cobalt Tools",
    "url": "https://cobalt.tools",
    "logo": "/placeholder.png",
    "description": "The best open-source media downloader.",
    "categoryId": "music",
    "tags": [
      "Multi-Platform",
      "Software"
    ],
    "badges": [
      "Free",
      "Editor Pick"
    ],
    "rating": 5,
    "addedAt": "2026-03-20",
    "language": "Multiple"
  },
  {
    "id": "slsknet-org-doc",
    "name": "Soulseek",
    "url": "https://slsknet.org",
    "logo": "/placeholder.png",
    "description": "Legendary P2P music sharing software.",
    "categoryId": "music",
    "tags": [
      "Software",
      "P2P"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "spotube-dev-doc",
    "name": "Spotube",
    "url": "https://spotube.dev",
    "logo": "/placeholder.png",
    "description": "Open-source Spotify client for desktop and mobile.",
    "categoryId": "music",
    "tags": [
      "Software",
      "Spotify"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "github-io-downline-doc",
    "name": "Downline",
    "url": "https://github.io/downline",
    "logo": "/placeholder.png",
    "description": "Powerful music downloader application.",
    "categoryId": "music",
    "tags": [
      "Software"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "famelack-doc",
    "name": "Famelack",
    "url": "https://famelack.com",
    "logo": "/placeholder.png",
    "description": "Wide range of live TV channels (Note: May be geo-blocked).",
    "categoryId": "live-tv",
    "tags": [
      "Live TV",
      "Global"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "Multiple"
  },
  {
    "id": "the-tv-app-doc",
    "name": "The TV App",
    "url": "https://the-tv.app",
    "logo": "/placeholder.png",
    "description": "Live sports and TV channels in US.",
    "categoryId": "live-tv",
    "tags": [
      "Live TV",
      "US"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "globetv-app-doc",
    "name": "Globe TV",
    "url": "https://globetv.app",
    "logo": "/placeholder.png",
    "description": "International IPTV and live streams.",
    "categoryId": "live-tv",
    "tags": [
      "Live TV",
      "Global"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-20",
    "language": "Multiple"
  },
  {
    "id": "daddylive-mp-doc",
    "name": "DaddyLive",
    "url": "https://daddylive.mp",
    "logo": "/placeholder.png",
    "description": "Huge directory of sports and TV streams.",
    "categoryId": "live-tv",
    "tags": [
      "Live TV",
      "Sports"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "tv247us-live-doc",
    "name": "TV247US",
    "url": "https://tv247us.live",
    "logo": "/placeholder.png",
    "description": "24/7 US TV channels.",
    "categoryId": "live-tv",
    "tags": [
      "Live TV",
      "US"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "ntvstream-cx-doc",
    "name": "NTVStream",
    "url": "https://ntvstream.cx",
    "logo": "/placeholder.png",
    "description": "Free live TV streaming.",
    "categoryId": "live-tv",
    "tags": [
      "Live TV"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "iptv-web-app-doc",
    "name": "IPTV Web App",
    "url": "https://iptv-web.app",
    "logo": "/placeholder.png",
    "description": "Web-based IPTV player for live links.",
    "categoryId": "live-tv",
    "tags": [
      "Live TV",
      "IPTV"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-20",
    "language": "Multiple"
  },
  {
    "id": "publiciptv-com-doc",
    "name": "Public IPTV",
    "url": "https://publiciptv.com",
    "logo": "/placeholder.png",
    "description": "Public IPTV link aggregator.",
    "categoryId": "live-tv",
    "tags": [
      "Live TV",
      "Public"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "z-lib-gd-doc",
    "name": "Z-Library",
    "url": "https://z-lib.gd",
    "logo": "/placeholder.png",
    "description": "Massive shadow library for ebooks.",
    "categoryId": "ebooks",
    "tags": [
      "eBooks",
      "Library"
    ],
    "badges": [
      "Free",
      "Popular"
    ],
    "rating": 4.9,
    "addedAt": "2026-03-20",
    "language": "Multiple"
  },
  {
    "id": "annas-archive-li-doc",
    "name": "Anna's Archive",
    "url": "https://annas-archive.li",
    "logo": "/placeholder.png",
    "description": "Giant database of shadow library books.",
    "categoryId": "ebooks",
    "tags": [
      "eBooks",
      "Library"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.8,
    "addedAt": "2026-03-20",
    "language": "Multiple"
  },
  {
    "id": "libgen-li-doc",
    "name": "Library Genesis",
    "url": "https://libgen.li",
    "logo": "/placeholder.png",
    "description": "Academic and general book library.",
    "categoryId": "ebooks",
    "tags": [
      "eBooks",
      "Library"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-20",
    "language": "Multiple"
  },
  {
    "id": "ebook-hunter-org-doc",
    "name": "eBook Hunter",
    "url": "https://ebook-hunter.org",
    "logo": "/placeholder.png",
    "description": "Find the latest ebook releases.",
    "categoryId": "ebooks",
    "tags": [
      "eBooks"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "galaxyaudiobook-doc",
    "name": "Galaxy Audiobook",
    "url": "https://galaxyaudiobook.com",
    "logo": "/placeholder.png",
    "description": "Stream popular audiobooks for free.",
    "categoryId": "ebooks",
    "tags": [
      "Audiobooks"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.5,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "audiobookbay-lu-doc",
    "name": "AudiobookBay",
    "url": "https://audiobookbay.lu",
    "logo": "/placeholder.png",
    "description": "Leading site for free audiobooks.",
    "categoryId": "ebooks",
    "tags": [
      "Audiobooks"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.7,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "nepu-to-doc",
    "name": "Nepu",
    "url": "https://nepu.to",
    "logo": "/placeholder.png",
    "description": "Simple audiobook portal.",
    "categoryId": "ebooks",
    "tags": [
      "Audiobooks"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.3,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "foxit-com-doc",
    "name": "Foxit PDF Reader",
    "url": "https://foxit.com",
    "logo": "/placeholder.png",
    "description": "Fast and reliable ebook reader.",
    "categoryId": "ebooks",
    "tags": [
      "eBook Reader",
      "Software"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.6,
    "addedAt": "2026-03-20",
    "language": "English"
  },
  {
    "id": "flowoss-com-doc",
    "name": "Flow",
    "url": "https://flowoss.com",
    "logo": "/placeholder.png",
    "description": "Minimalist open-source eBook reader.",
    "categoryId": "ebooks",
    "tags": [
      "eBook Reader",
      "Software"
    ],
    "badges": [
      "Free"
    ],
    "rating": 4.4,
    "addedAt": "2026-03-20",
    "language": "English"
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
    "rating": 4.9,
    "addedAt": "2026-03-22",
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
    "rating": 4.8,
    "addedAt": "2026-03-22",
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
    "rating": 4.7,
    "addedAt": "2026-03-22",
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
    "rating": 4.8,
    "addedAt": "2026-03-22",
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
    "rating": 4.1,
    "addedAt": "2026-03-22",
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
    "rating": 4.8,
    "addedAt": "2026-03-22",
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
    "rating": 4.1,
    "addedAt": "2026-03-22",
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
    "rating": 4.9,
    "addedAt": "2026-03-22",
    "language": "English"
  },
  {
    "id": "7008",
    "name": "Yahoo Games",
    "url": "https://games.yahoo.com",
    "logo": "/placeholder.png",
    "description": "Download free PC games, repacks, and standalone versions directly from Yahoo Games.",
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
    "rating": 4.1,
    "addedAt": "2026-03-22",
    "language": "English"
  }
];

// Helper to get sites by category
export const getSitesByCategory = (categoryId: string) => {
  if (categoryId === 'open-source-tools') {
    return openSourceTools;
  }
  if (categoryId === 'jobs') {
    return jobs;
  }
  return featuredSites.filter(site => site.categoryId === categoryId);
};
