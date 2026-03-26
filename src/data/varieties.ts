export interface VarietyLink {
  title: string;
  url: string;
  description?: string;
  icon?: string;
  isImportant?: boolean;
}

export interface VarietyCategory {
  title: string;
  links: VarietyLink[];
}

export const varietiesData: VarietyCategory[] = [
  {
    title: "Indexes",
    links: [
      {
        title: "Awesome List Index",
        url: "https://github.com/sindresorhus/awesome",
        description: "All Awesome Lists",
        icon: "🌐"
      },
      {
        title: "Lists",
        url: "https://github.com/jnv/lists",
        description: "List of Lists Index",
        icon: "🌐"
      },
      {
        title: "AI Indexes",
        url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/ai#wiki_.25BA_ai_indexes",
        icon: "↪️"
      },
      {
        title: "FMHY Search",
        url: "https://fmhy.net/posts/search",
        description: "Search the Wiki",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Awesome Search",
        url: "https://awesomelists.top/",
        description: "Awesome List Search",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Couleur Tweak Tips",
        url: "https://ctt.cx/",
        description: "Comprehensive Hub of Resources and Tools",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "r/InternetIsBeautiful",
        url: "https://reddit.com/r/InternetIsBeautiful",
        description: "Helpful / Fun Sites",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Track Awesome List",
        url: "https://www.trackawesomelist.com/",
        description: "Daily Awesome List Updates"
      },
      {
        title: "ForumDirectory",
        url: "https://www.forumdirectory.net/",
        description: "Big List of Forums"
      }
    ]
  },
  {
    title: "General Sites",
    links: [
      {
        title: "Find a Website Like",
        url: "https://www.findawebsitelike.com/",
        description: "Similar Sites Search",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Sites Like",
        url: "http://www.siteslike.com/",
        description: "Similar Sites Search"
      },
      {
        title: "AlternativeTo",
        url: "https://alternativeto.net/",
        description: "Software / Site Alternatives",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "LibreProjects",
        url: "https://libreprojects.net/",
        description: "FOSS Web Services"
      },
      {
        title: "Switching.software",
        url: "https://switching.software/",
        description: "Ethical Software Alternatives"
      },
      {
        title: "Open Store",
        url: "https://open-store.io/",
        description: "Open Source Apps"
      },
      {
        title: "G2",
        url: "https://www.g2.com/",
        description: "Software Comparison / Reviews"
      },
      {
        title: "Product Hunt",
        url: "https://www.producthunt.com/",
        description: "New Product Releases",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Futurepedia",
        url: "https://www.futurepedia.io/",
        description: "AI Tools Directory"
      },
      {
        title: "There's An AI For That",
        url: "https://theresanaiforthat.com/",
        description: "AI Tools Directory"
      },
      {
        title: "TinyWow",
        url: "https://tinywow.com/",
        description: "Free Online Tools",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "123Apps",
        url: "https://123apps.com/",
        description: "Web Apps Hub"
      },
      {
        title: "Omnicalculator",
        url: "https://www.omnicalculator.com/",
        description: "Calculators for Everything"
      },
      {
        title: "ManualsLib",
        url: "https://www.manualslib.com/",
        description: "Product Manuals Database"
      },
      {
        title: "Central Manuals",
        url: "https://www.central-manuals.com/",
        description: "Product Manuals Database"
      },
      {
        title: "Manuals Online",
        url: "https://www.manualsonline.com/",
        description: "Product Manuals Database"
      },
      {
        title: "The Noun Project",
        url: "https://thenounproject.com/",
        description: "Icons / Photos for Everything"
      },
      {
        title: "Unsplash",
        url: "https://unsplash.com/",
        description: "High Quality Stock Photos",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Pexels",
        url: "https://www.pexels.com/",
        description: "Free Stock Photos / Videos"
      },
      {
        title: "Pixabay",
        url: "https://pixabay.com/",
        description: "Free Stock Media Hub"
      }
    ]
  },
  {
    title: "Privacy / Security / Safety",
    links: [
      {
        title: "Privacy Guides",
        url: "https://www.privacyguides.org/",
        description: "Privacy Resources / Recommendations",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "PrivacyTools",
        url: "https://www.privacytools.io/",
        description: "Knowledge / Tools to Protect Privacy"
      },
      {
        title: "Restore Privacy",
        url: "https://restoreprivacy.com/",
        description: "Privacy / Security Tests & Guides"
      },
      {
        title: "The New Oil",
        url: "https://thenewoil.org/",
        description: "Privacy / Security Guides"
      },
      {
        title: "Techlore",
        url: "https://techlore.tech/",
        description: "Privacy / Security Content Hub"
      },
      {
        title: "Have I Been Pwned",
        url: "https://haveibeenpwned.com/",
        description: "Check for Data Breaches",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "VirusTotal",
        url: "https://www.virustotal.com/",
        description: "File / URL Scanner",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Hybrid Analysis",
        url: "https://www.hybrid-analysis.com/",
        description: "Free Malware Analysis Service"
      },
      {
        title: "URL Void",
        url: "https://www.urlvoid.com/",
        description: "Check Website Safety"
      },
      {
        title: "Plex",
        url: "https://www.plex.tv/",
        description: "Media Server Software",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Jellyfin",
        url: "https://jellyfin.org/",
        description: "OSS Media System"
      },
      {
        title: "Stremio",
        url: "https://www.stremio.com/",
        description: "Video Streaming Hub",
        icon: "⭐",
        isImportant: true
      }
    ]
  },
  {
    title: "Knowledge / Learning",
    links: [
      {
        title: "Khan Academy",
        url: "https://www.khanacademy.org/",
        description: "Free Online Courses / Lessons",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "OpenLibrary",
        url: "https://openlibrary.org/",
        description: "Million+ Book Library",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Project Gutenberg",
        url: "https://www.gutenberg.org/",
        description: "60k+ Free eBooks",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Z-Library",
        url: "https://z-lib.io/",
        description: "Shadow Library Hub"
      },
      {
        title: "Anna's Archive",
        url: "https://annas-archive.org/",
        description: "Shadow Library Search",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Library Genesis",
        url: "https://libgen.is/",
        description: "Sci-tech / Fiction Library"
      },
      {
        title: "WolframAlpha",
        url: "https://www.wolframalpha.com/",
        description: "Computational Intelligence",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Ted Talks",
        url: "https://www.ted.com/talks",
        description: "Inspirational / Educational Videos"
      },
      {
        title: "Duolingo",
        url: "https://www.duolingo.com/",
        description: "Language Learning App",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Codecademy",
        url: "https://www.codecademy.com/",
        description: "Learn to Code for Free"
      },
      {
        title: "FreeCodeCamp",
        url: "https://www.freecodecamp.org/",
        description: "Learn Coding / Get Certs",
        icon: "⭐",
        isImportant: true
      }
    ]
  },
  {
    title: "Helpful / Useful Tools",
    links: [
      {
        title: "Temp Mail",
        url: "https://temp-mail.org/",
        description: "Disposable Email Service",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "10 Minute Mail",
        url: "https://10minutemail.com/",
        description: "Disposable Email Service"
      },
      {
        title: "WeTransfer",
        url: "https://wetransfer.com/",
        description: "Large File Sharing",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Snapdrop",
        url: "https://snapdrop.net/",
        description: "Local File Sharing (P2P)",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "ToffeeShare",
        url: "https://toffeeshare.com/",
        description: "P2P Web File Sharing"
      },
      {
        title: "Bitly",
        url: "https://bitly.com/",
        description: "URL Shortener & Link Mgmt"
      },
      {
        title: "Wayback Machine",
        url: "https://archive.org/web/",
        description: "Internet Archive Search",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Privnote",
        url: "https://privnote.com/",
        description: "Self-Destructing Notes"
      },
      {
        title: "Speedtest",
        url: "https://www.speedtest.net/",
        description: "Internet Speed Test",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Fast.com",
        url: "https://fast.com/",
        description: "Netflix's Speed Test"
      },
      {
        title: "DownDetector",
        url: "https://downdetector.com/",
        description: "Service Outage Checker",
        icon: "⭐",
        isImportant: true
      }
    ]
  },
  {
    title: "Internet History",
    links: [
      {
        title: "The Old Net",
        url: "https://theoldnet.com/",
        description: "Vintage Web Proxy",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Protoweb",
        url: "https://protoweb.org/",
        description: "The 90s Web Restored"
      },
      {
        title: "OldWeb.today",
        url: "https://oldweb.today/",
        description: "Run Old Browsers in Browser"
      },
      {
        title: "Netscape Navigator",
        url: "https://home.mcom.com/",
        description: "Netscape's 1994 Home Page"
      },
      {
        title: "SpaceJam (Original)",
        url: "https://www.spacejam.com/1996/",
        description: "Original 1996 Movie Site"
      },
      {
        title: "Million Dollar Homepage",
        url: "http://www.milliondollarhomepage.com/",
        description: "Iconic Pixel Advertising"
      }
    ]
  },
  {
    title: "Fun / Interesting Sites",
    links: [
      {
        title: "The Useless Web",
        url: "https://theuselessweb.com/",
        description: "Random / Fun Websites",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Radio Garden",
        url: "http://radio.garden/",
        description: "Listen to Global Radio",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Pointer Pointer",
        url: "https://pointerpointer.com/",
        description: "Points at Your Cursor"
      },
      {
        title: "EarthCam",
        url: "https://www.earthcam.com/",
        description: "Live Global Cams",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Gnoosic",
        url: "https://www.gnoosic.com/",
        description: "Music Recommendation Engine"
      },
      {
        title: " Akinator",
        url: "https://en.akinator.com/",
        description: "The Web Genie"
      },
      {
        title: "The Wiki Game",
        url: "https://www.thewikigame.com/",
        description: "Wikipedia Racing Game"
      }
    ]
  },
  {
    title: "Maps / Earth / Space",
    links: [
      {
        title: "Google Earth",
        url: "https://earth.google.com/",
        description: "3D Earth Explorer",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Windy",
        url: "https://www.windy.com/",
        description: "Live Weather / Wind Map",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "FlightRadar24",
        url: "https://www.flightradar24.com/",
        description: "Live Air Traffic Map",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "MarineTraffic",
        url: "https://www.marinetraffic.com/",
        description: "Live Global Ship Tracking"
      },
      {
        title: "Stellarium Web",
        url: "https://stellarium-web.org/",
        description: "Online Planetarium",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "NASA Image Gallery",
        url: "https://www.nasa.gov/galleries",
        description: "Space / Science Media"
      }
    ]
  },
  {
    title: "News / Events",
    links: [
      {
        title: "Newsmap",
        url: "https://newsmap.jp/",
        description: "Visual News Aggregator",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Ground News",
        url: "https://ground.news/",
        description: "News Bias Checker",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "AllSides",
        url: "https://www.allsides.com/",
        description: "Multi-Perspective News"
      },
      {
        title: "Media Bias / Fact Check",
        url: "https://mediabiasfactcheck.com/",
        description: "Check News Reliability"
      },
      {
        title: "Bellingcat",
        url: "https://www.bellingcat.com/",
        description: "Investigative Journalism Hub",
        icon: "⭐",
        isImportant: true
      }
    ]
  },
  {
    title: "Graphics / Design",
    links: [
      {
        title: "Photopea",
        url: "https://www.photopea.com/",
        description: "Online Photoshop Alternative",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Remove.bg",
        url: "https://www.remove.bg/",
        description: "AI Background Remover",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Canva",
        url: "https://www.canva.com/",
        description: "Easy Graphic Design Tool",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Pixlr",
        url: "https://pixlr.com/",
        description: "Online Photo Editor"
      },
      {
        title: "Figma",
        url: "https://www.figma.com/",
        description: "Pro Collaborative Design",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Coolors",
        url: "https://coolors.co/",
        description: "Color Palette Generator"
      },
      {
        title: "FontSquirrel",
        url: "https://www.fontsquirrel.com/",
        description: "Free Commercial Fonts"
      }
    ]
  },
  {
    title: "OS / System / Software",
    links: [
      {
        title: "Ninite",
        url: "https://ninite.com/",
        description: "Bulk Software Installer",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "PortableApps",
        url: "https://portableapps.com/",
        description: "Library of Portable Apps",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Chris Titus Tech",
        url: "https://christitus.com/",
        description: "Windows / Linux Utility Hub",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "OldVersion",
        url: "http://www.oldversion.com/",
        description: "Download Old Software Versions"
      },
      {
        title: "FileHippo",
        url: "https://filehippo.com/",
        description: "Software Download Site"
      },
      {
        title: "SnapFiles",
        url: "https://www.snapfiles.com/",
        description: "Software Reviews / Downloads"
      }
    ]
  },
  {
    title: "Automation / Scraping / Coding",
    links: [
      {
        title: "IFTTT",
        url: "https://ifttt.com/",
        description: "Connect Your Web Services",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Zapier",
        url: "https://zapier.com/",
        description: "Automate Your Workflows",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Web Scraper",
        url: "https://webscraper.io/",
        description: "Browser Data Extraction",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Greasy Fork",
        url: "https://greasyfork.org/",
        description: "User Scripts Repository",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Stack Overflow",
        url: "https://stackoverflow.com/",
        description: "Developer Q&A Hub",
        icon: "⭐",
        isImportant: true
      },
      {
        title: "Repl.it",
        url: "https://replit.com/",
        description: "Collaborative Browser IDE",
        icon: "⭐",
        isImportant: true
      }
    ]
  }
];
