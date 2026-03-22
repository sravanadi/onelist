const fs = require('fs');
let code = fs.readFileSync('src/data/category-seo.ts', 'utf8');

// The replacement for music
const musicReplace = `music: {
    intro: {
      title: "Best Free Music Streaming & Download Sites 2026",
      paragraphs: [
        "Finding the best free music streaming sites 2026 can be challenging as the industry shifts more heavily towards subscription models. However, there are still excellent options available if you want to stream music free online. Our global directory highlights platforms that provide high-quality audio without requiring a monthly fee. These sites vary from community-driven open-source projects to specialized audio extraction tools that give you access to virtually any song.",
        "For users who prefer to build a local library, free MP3 download sites are a crucial resource. The tools and platforms listed in this category allow you to obtain lossless audio and high-bitrate MP3s directly to your device. This is especially useful in regions with unstable internet connections, allowing a premium listening experience entirely offline.",
        "One of the biggest demands from users worldwide is finding music streaming no account required services. The platforms we feature respect your digital privacy. By offering immediate access to their music catalogs without sign-up forms, these alternatives to major players like Spotify provide a barrier-free gateway to endless entertainment. Explore the directory to find the safest, fastest, and most comprehensive music platforms currently available."
      ],
      faqs: [
        {
          question: "What is the best free music streaming site in 2026?",
          answer: "While Spotify has a free tier, the best completely free alternative is Spotube or setting up a personal instance using open-source tools. These provide ad-free, premium-like experiences without tracking."
        },
        {
          question: "Where can I download music for free legally?",
          answer: "Sites like Free Music Archive and Jamendo offer millions of legally free tracks. For commercial music, various extraction tools (like Cobalt) allow users to download audio, though legality depends on your local jurisdiction."
        },
        {
          question: "Are there free alternatives to Spotify?",
          answer: "Yes, Spotube and InnerTune are excellent open-source Spotify alternatives that pull from public APIs (like YouTube Music) to deliver an ad-free music streaming experience globally."
        },
        {
          question: "What free music sites work without sign-up?",
          answer: "Most of the tools and platforms listed in our directory, including open-source desktop clients and web-based audio extractors, require zero registration to start listening or downloading."
        },
        {
          question: "Can I download MP3s legally for free in 2026?",
          answer: "Downloading copyright-free or CC-licensed music is fully legal everywhere. Downloading copyrighted music from third-party sites violates copyright law in many countries, though enforcement varies heavily by region."
        },
        {
          question: "What is the best free music app for offline listening?",
          answer: "Open-source apps like ViMusic or Spotube allow Android users to cache and save tracks for offline listening effortlessly, offering features usually locked behind premium paywalls on mainstream apps."
        }
      ],
      safetyNote: "When downloading audio files, ensure you are using reputable extraction tools rather than sketchy MP3 converter sites that often bundle malware or aggressive pop-ups. Always use an adblocker and scan downloaded files if using an unfamiliar source."
    }
  }`;

// The replacement for live-tv
const liveTvReplace = `"live-tv": {
    intro: {
      title: "Best Free Live TV Streaming Sites 2026 — Watch TV Online",
      paragraphs: [
        "Cord-cutting has become a global movement, driving massive demand for free live TV streaming 2026. Fortunately, you no longer need an expensive cable package to access top-tier television networks. Our directory provides verified links where you can watch TV online free, accessing everything from breaking international news streams to localized entertainment channels. These platforms bring the traditional TV experience directly to your browser or mobile device.",
        "If you are looking for live TV without cable 2026, the solutions range from official ad-supported networks like Pluto TV to public IPTV aggregators. The platforms we list offer wide-ranging channel guides, simple web players, and high uptime. While finding a perfectly stable 24/7 stream can sometimes be tricky on free platforms, our curated list ensures you have the best possible options covering US, UK, and global stations.",
        "For those seeking free TV channels online, it’s important to find sites that categorize their networks efficiently. The best directories allow you to filter by news, sports, documentaries, or kids' programming. Explore our comprehensive list of live TV platforms to stay connected to live global events, entirely for free."
      ],
      faqs: [
        {
          question: "What are the best free live TV streaming sites in 2026?",
          answer: "Top choices include DaddyLive for an enormous directory of global channels, and The TV App for incredibly stable US network streams. Official ad-supported platforms like Tubi and Pluto TV also remain excellent choices."
        },
        {
          question: "Can I watch live TV online without a cable subscription?",
          answer: "Absolutely. Between official FAST (Free Ad-supported Streaming TV) services and the third-party web players listed in our directory, you can replicate almost the entire cable experience globally for zero cost."
        },
        {
          question: "Are there free alternatives to cable TV?",
          answer: "Yes, millions of internet users have completely replaced cable by combining SVOD services with free live TV directories like DaddyLive or by utilizing open-source IPTV playlists."
        },
        {
          question: "What live TV channels can I watch free online?",
          answer: "Virtually everything. From major US networks (ABC, NBC, CBS) and UK broadcasters (BBC, ITV) to specialized sports and international news channels, global live TV is entirely accessible online."
        },
        {
          question: "Do free live TV sites require a VPN?",
          answer: "Yes, a VPN is highly recommended. Many live TV channels are strictly geo-blocked (like BBC iPlayer restricting non-UK IPs). A VPN allows you to bypass these restrictions to watch any channel globally."
        },
        {
          question: "What is the best free TV streaming app for mobile?",
          answer: "While web-based players work well universally, the Pluto TV app offers the most polished, legal mobile experience. For unrestricted global channels, utilizing an IPTV player app with public m3u links is the best approach."
        }
      ],
      safetyNote: "Live TV streaming sites are notorious for aggressive overlay ads. Use a strict adblocker like uBlock Origin to keep the video player clean. A VPN is also crucial, as accessing international live broadcasts frequently requires bypassing strict geo-blocks."
    }
  }`;

// The replacement for ebooks
const ebooksReplace = `ebooks: {
    intro: {
      title: "Best Free eBook Download Sites 2026 — PDFs & EPUBs",
      paragraphs: [
        "Whether you are a student, researcher, or casual reader, finding dependable free ebook sites 2026 is essential for accessing knowledge globally. Our directory connects you with the world's most comprehensive shadow libraries and digital archives, offering instant access to millions of titles. From the latest fiction bestsellers to highly specialized academic textbooks, these platforms provide a borderless library.",
        "The demand for free PDF books download portals and EPUB repositories has grown as traditional education and publishing costs rise. We curate platforms that offer these formats specifically, ensuring compatibility with all major reading devices, including Kindles, iPads, and Android e-readers. These sites eliminate digital rights management (DRM) barriers, giving you true ownership of the files you download.",
        "For users seeking the best library genesis alternative, the landscape in 2026 is robust. Projects like Anna’s Archive have aggregated multiple databases to ensure that information remains free and accessible. Browse our listings to find secure, high-speed portals where you can download the books you need without registration or geographic restrictions."
      ],
      faqs: [
        {
          question: "What are the best sites to download free eBooks in 2026?",
          answer: "Anna's Archive and Z-Library remain the most comprehensive databases for free eBooks globally, offering millions of titles in various formats including EPUB, PDF, and MOBI."
        },
        {
          question: "Where can I find free PDF textbooks online?",
          answer: "Library Genesis (Libgen) and Anna's Archive are the premier destinations for students worldwide, hosting almost every major academic textbook and peer-reviewed paper in PDF format."
        },
        {
          question: "Are free eBook download sites legal?",
          answer: "Downloading copyrighted books for free violates copyright laws in most countries. However, reading public domain books from sites like Project Gutenberg is 100% legal everywhere."
        },
        {
          question: "What are the best Library Genesis alternatives in 2026?",
          answer: "Anna's Archive is currently the ultimate Libgen alternative, as it serves as a meta-search engine that actually indexes Libgen, Z-Library, and Sci-Hub into one unified, incredibly fast platform."
        },
        {
          question: "What free eBook formats are best for Kindle?",
          answer: "In 2026, Amazon Kindle devices natively support EPUB files (via the Send to Kindle feature) and the proprietary KFX/AZW3 formats. EPUB is universally considered the best format to download."
        },
        {
          question: "Can I download free eBooks without registration?",
          answer: "Yes, platforms like Library Genesis and Anna's Archive allow unlimited, completely anonymous downloads without requiring any account creation or personal data sharing."
        }
      ],
      safetyNote: "When downloading eBooks, ensure the file extension matches what you requested (.epub or .pdf). Be highly suspicious of sites requiring you to download a software 'downloader' or executable file (.exe) just to read a book."
    }
  }`;

// Replace aitools safety note (it only had bullets, we add safetyNote)
code = code.replace(/("Globally accessible tools for every professional field"\s*\])/, '$1,\n      safetyNote: "When using free AI tools, review their privacy policy before uploading personal documents, images, or sensitive data. Free AI services may use your inputs to train their models. Use a VPN for an additional privacy layer when accessing AI platforms in regions with data restrictions."');

// Add games, comics, domains
const appendData = `,
  games: {
    intro: {
      title: "Best Free Online Games & Download Sites 2026",
      paragraphs: [
        "Finding high-quality gaming experiences shouldn't require a premium subscription. The landscape of free online games 2026 has evolved tremendously, offering everything from massive multiplayer universes to quick, addictive puzzle games. Our directory points you to platforms hosting the best browser games no download required, perfect for casual sessions on any device globally.",
        "For hardcore gamers, discovering reliable free PC game download sites is a priority. We list trusted repositories and repack sites where you can download indie hits and AAA titles for offline play. These platforms often serve as vital free alternatives to Steam for PC games, especially for users who want to bypass DRM restrictions or test a game before committing to a purchase.",
        "Whether you are looking for free indie games online or massive full-scale adventure titles, safety and download speed are paramount. The curated list below focuses on platforms with active, community-moderated comment sections that verify the integrity of the game files, ensuring a secure and seamless gaming experience for players everywhere."
      ],
      faqs: [
        {
          question: "What are the best sites to play free games online in 2026?",
          answer: "For browser-based gaming, sites like Poki, CrazyGames, and Itch.io offer massive libraries of instant-play titles that require zero downloads and run smoothly on both desktop and mobile globally."
        },
        {
          question: "Where can I download PC games for free legally?",
          answer: "The Epic Games Store provides high-quality free games weekly. Itch.io is excellent for free indie titles, and GOG occasionally offers DRM-free classics at no cost."
        },
        {
          question: "Are free game download sites safe to use?",
          answer: "Official stores are completely safe. However, third-party repack or cracking sites carry significant risks. You must use well-moderated platforms like FitGirl Repacks and always scan downloaded executables with Windows Defender or Malwarebytes."
        },
        {
          question: "What browser games don't require sign-up?",
          answer: "The vast majority of HTML5 games hosted on portals like Poki and CrazyGames allow you to play instantly without creating an account or sharing any personal data."
        },
        {
          question: "What are the best free game sites for mobile?",
          answer: "While the App Store and Google Play dominate, browser-based aggregators like Poki are perfectly optimized for mobile touchscreens, offering thousands of free games without installing individual apps."
        },
        {
          question: "Are there free alternatives to Steam for PC games?",
          answer: "Yes, Itch.io is the best platform for free indie games. For massive AAA experiences, users often turn to established, moderated repack scenes found in our gaming and torrent directories."
        }
      ],
      safetyNote: "Free game download sites may bundle software with additional installers. Always use a reputable antivirus when downloading executable files. For browser-based games, an adblocker prevents intrusive pop-ups and tracks scripts."
    }
  },
  comics: {
    intro: {
      title: "Best Free Online Comics & Graphic Novel Sites 2026",
      paragraphs: [
        "The digital era has made it easier than ever to read comics online free 2026. Whether you are a lifelong fan of western superheroes or discovering the medium for the first time, our directory connects you with the best platforms globally. These sites offer high-resolution scans and intuitive reader interfaces, allowing you to enjoy free graphic novels online from any device.",
        "Fans specifically looking to read DC Marvel comics free will find curated databases that archive decades of comic history. From golden age classics to the latest weekly releases, the top comic reading sites update their catalogs continuously. This ensures readers worldwide can keep up with their favorite storylines without paying premium digital prices.",
        "While navigating the landscape of digital comics, finding the best comic reading sites requires platforms that prioritize speed and lack intrusive ads. The aggregators listed here are chosen for their clean user interfaces and massive, well-organized libraries, offering the ultimate reading experience for comic enthusiasts across the globe."
      ],
      faqs: [
        {
          question: "Where can I read comics online for free in 2026?",
          answer: "Sites like ReadComicOnline and GetComics are leading platforms that provide access to thousands of western comics and graphic novels in high quality, accessible globally."
        },
        {
          question: "Are there legal free comic reading platforms?",
          answer: "Yes, official apps like Webtoon and Tapas offer thousands of free webcomics. Traditional publishers like Marvel and DC also occasionally offer free first issues on their official apps."
        },
        {
          question: "Where can I read Marvel and DC comics online free?",
          answer: "Aggregator sites listed in our directory host near-complete archives of DC and Marvel publications, updated weekly with the newest releases right after their physical publication date."
        },
        {
          question: "What are the best webcomic sites in 2026?",
          answer: "For vertical-scrolling webcomics, Webtoon remains the undisputed king globally, offering a massive catalog of free, creator-owned stories in every imaginable genre."
        },
        {
          question: "Can I download comics for offline reading for free?",
          answer: "Yes, sites like GetComics allow users to download full issues in high-quality .CBR and .CBZ formats, which can be read offline using any standard digital comic reader app."
        },
        {
          question: "What are the best ComiXology alternatives in 2026?",
          answer: "Since Amazon's integration of ComiXology, many readers have moved to independent DRM-free storefronts or utilize the free aggregator platforms in our directory to maintain a dedicated, easy-to-use digital library."
        }
      ],
      safetyNote: "Digital comic sites often use heavy advertisement overlays. Using an adblocker like uBlock Origin ensures that your reading experience isn't interrupted by pop-ups when clicking to the next page."
    }
  },
  domains: {
    intro: {
      title: "Best Domain Registrars 2026 — Register Domains Cheap",
      paragraphs: [
        "Building a digital presence starts with finding the best domain registrar 2026. Whether you are launching a startup, a personal blog, or an eCommerce store, securing your identity online is the first critical step. Our directory reviews the top registrars globally to help you find cheap domain registration without sacrificing security or customer support. The right registrar makes managing your DNS settings and renewals effortless.",
        "For absolute beginners, navigating domain pricing can be confusing due to steep renewal fees. We focus on highlighting the best place to buy domain names that offer transparent pricing models. Additionally, if you are working on a tight budget or an experimental project, we also provide resources for securing free domain names 2026 under certain country codes or promotions.",
        "A quality registrar does more than just sell a name; it protects your privacy. We specifically curate platforms that include free WHOIS privacy protection, ensuring your personal contact data isn't exposed to spammers worldwide. Explore our directory to compare the most reliable and affordable domain registration services available today."
      ],
      faqs: [
        {
          question: "What is the cheapest domain registrar in 2026?",
          answer: "Porkbun and Namecheap consistently offer the most competitive, transparent pricing globally. Unlike older registrars like GoDaddy, they do not rely on aggressive upselling or massive renewal price hikes."
        },
        {
          question: "Can I get a free domain name?",
          answer: "Yes, platforms like Freenom historically offered free country-code TLDs (like .tk or .ml), though reliability varies. Many web hosting companies also provide a free domain for the first year when you purchase an annual hosting plan."
        },
        {
          question: "What is the best domain registrar for beginners?",
          answer: "Namecheap and Google Domains (now managed by Squarespace) are renowned for their incredibly clean, beginner-friendly user interfaces and stellar 24/7 global customer support."
        },
        {
          question: "What is the difference between a domain registrar and web host?",
          answer: "A domain registrar is where you lease your website's name (like onelist.pro). A web host is where you rent server space to store the actual files, code, and images that make up your website."
        },
        {
          question: "How do I transfer a domain to a new registrar?",
          answer: "You unlock your domain at your current registrar, obtain a transfer authorization code (EPP code), and provide that code to your new registrar. The process usually takes a few days to complete globally."
        },
        {
          question: "What TLDs are cheapest to register in 2026?",
          answer: "While .com domains have a standard wholesale price, alternative TLDs like .xyz, .icu, and .site are frequently heavily discounted for the first year, making them excellent choices for temporary projects."
        }
      ],
      safetyNote: "When registering a domain, enable WHOIS privacy protection to prevent your personal contact details from appearing in public domain records. Use 2FA on your registrar account to prevent unauthorized domain transfers."
    }
  }
};`;

code = code.replace(/music:\s*\{\s*intro:\s*\{(?:[^{}]*|\{(?:[^{}]*|\{[^{}]*\})*\})*\}\s*\}/, musicReplace);
code = code.replace(/"live-tv":\s*\{\s*intro:\s*\{(?:[^{}]*|\{(?:[^{}]*|\{[^{}]*\})*\})*\}\s*\}/, liveTvReplace);
code = code.replace(/ebooks:\s*\{\s*intro:\s*\{(?:[^{}]*|\{(?:[^{}]*|\{[^{}]*\})*\})*\}\s*\}/, ebooksReplace);

code = code.replace(/};\s*$/, appendData);

fs.writeFileSync('src/data/category-seo.ts', code);
console.log('Update complete');
