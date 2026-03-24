import { Site } from './sites';

const DEFAULT_PROPS = {
  logo: '/placeholder.png',
  badges: ['Free'] as ('Free' | 'Freemium' | 'Paid' | 'Editor Pick' | 'Popular' | 'New' | '18+')[],
  rating: 4.5,
  addedAt: new Date().toISOString(),
  language: 'English',
  categoryId: 'developer-tools'
};

export const developerTools: Site[] = [
  // ► Dev Communities
  { id: 'dt-1', name: 'StackOverflow', url: 'https://stackoverflow.com/', description: 'The world\'s largest developer forum for questions and answers.', tags: ['dev-community', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-2', name: 'XDA Forums', url: 'https://xdaforums.com/', description: 'Large community for app development, mobile modding, and custom ROMs.', tags: ['dev-community'], ...DEFAULT_PROPS },
  { id: 'dt-3', name: 'Spiceworks Community', url: 'https://community.spiceworks.com/', description: 'Community for IT professionals and developers to share knowledge.', tags: ['dev-community'], ...DEFAULT_PROPS },
  { id: 'dt-4', name: 'DEV Community', url: 'https://dev.to/', description: 'A constructive and inclusive social network for software developers.', tags: ['dev-community'], ...DEFAULT_PROPS },
  { id: 'dt-5', name: 'Blind', url: 'https://www.teamblind.com/', description: 'Anonymous professional network to discuss compensation and workplace culture.', tags: ['dev-community'], ...DEFAULT_PROPS },
  { id: 'dt-6', name: 'IndieHackers', url: 'https://www.indiehackers.com/', description: 'Connect with developers who are starting and growing their own companies.', tags: ['dev-community'], ...DEFAULT_PROPS },
  { id: 'dt-7', name: 'CyberArsenal', url: 'https://cyberarsenal.org/', description: 'Forums focused on cybersecurity and offensive/defensive tools.', tags: ['dev-community'], ...DEFAULT_PROPS },
  { id: 'dt-8', name: 'Tech-Blogs.dev', url: 'https://tech-blogs.dev/', description: 'A curated list of technology blogs written by developers.', tags: ['dev-community'], ...DEFAULT_PROPS },
  { id: 'dt-9', name: 'The Devs Network', url: 'https://thedevs.network/', description: 'A community-driven network for developers to chat and collaborate.', tags: ['dev-community'], ...DEFAULT_PROPS },

  // ► Dev News
  { id: 'dt-10', name: 'KrebsOnSecurity', url: 'https://krebsonsecurity.com/', description: 'In-depth security news and investigation by Brian Krebs.', tags: ['dev-news', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-11', name: 'Lobsters', url: 'https://lobste.rs/', description: 'A computing-focused community centered around link aggregation and discussion.', tags: ['dev-news'], ...DEFAULT_PROPS },
  { id: 'dt-12', name: 'DevURLs', url: 'https://devurls.com/', description: 'A developer news aggregator that pulls from top sources.', tags: ['dev-news'], ...DEFAULT_PROPS },
  { id: 'dt-13', name: 'daily.dev', url: 'https://app.daily.dev/posts', description: 'The fastest way to stay up to date on programming news.', tags: ['dev-news'], ...DEFAULT_PROPS },
  { id: 'dt-14', name: 'This Week in Rust', url: 'https://this-week-in-rust.org/', description: 'Weekly newsletter covering the latest updates in the Rust ecosystem.', tags: ['dev-news'], ...DEFAULT_PROPS },
  { id: 'dt-15', name: 'hackertab.dev', url: 'https://hackertab.dev/', description: 'Turn your new tab into an actionable developer dashboard.', tags: ['dev-news'], ...DEFAULT_PROPS },

  // ► Developer Tools
  { id: 'dt-16', name: 'DevToys', url: 'https://devtoys.app/', description: 'A Swiss Army knife for developers for common tasks like formatting and conversion.', tags: ['dev-tools-multi', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-17', name: 'DevDocs', url: 'https://devdocs.io/', description: 'Fast, offlineable documentation browser for all major programming languages.', tags: ['dev-tools-multi', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-18', name: 'ImHex', url: 'https://imhex.werwolv.net/', description: 'A powerful Hex Editor for reverse engineers and programmers.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-19', name: 'Free for Developers', url: 'https://free-for.dev/', description: 'A curated list of software and SaaS that have free tiers for developers.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-20', name: 'Useful Tools', url: 'https://trolologuy.github.io/useful-tools/', description: 'A collection of useful web-based utilities for developers.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-21', name: 'Tiny Helpers', url: 'https://tiny-helpers.dev/', description: 'A collection of tiny online tools for developers.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-22', name: 'Tiny Tools', url: 'https://tinytools.directory/', description: 'A directory of simple, focused web tools for everyday tasks.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-23', name: 'Free For Life', url: 'https://free.hrsn.dev/', description: 'A curated list of developer tools that are free forever.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-24', name: 'WebdevHome', url: 'https://webdevhome.github.io/', description: 'A directory of useful resources for web developers.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-25', name: 'Free Developer Stuff', url: 'https://freestuff.dev/', description: 'List of free stuff for developers archived by the community.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-26', name: 'Addy Toolkit', url: 'https://toolkit.addy.codes/', description: 'A compilation of design and development resources.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-27', name: 'Prototypr Toolbox', url: 'https://prototypr.io/toolbox/page/1', description: 'Extensive toolbox for designers and developers.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-28', name: 'StackShare', url: 'https://stackshare.io/', description: 'Find out which tools are used by companies and collaborate with other devs.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-29', name: 'Awesome SysAdmin', url: 'https://github.com/awesome-foss/awesome-sysadmin', description: 'A curated list of amazingly awesome open-source sysadmin resources.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-30', name: 'Devhints', url: 'https://devhints.io/', description: 'A collection of developer cheat sheets in a consistent format.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-31', name: 'GitHub Student Pack', url: 'https://education.github.com/pack', description: 'Free access to the best developer tools in one place for students.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-32', name: 'Choose a License', url: 'https://choosealicense.com/', description: 'A simple guide to help you choose an open-source license for your project.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-33', name: 'Eternal Terminal', url: 'https://eternalterminal.dev/', description: 'A remote shell that automatically reconnects without interrupting the session.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-34', name: 'Beszel', url: 'https://beszel.dev/', description: 'A lightweight server monitoring dashboard with a clean UI.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-35', name: 'PuTTY', url: 'https://www.chiark.greenend.org.uk/~sgtatham/putty/', description: 'A free SSH and telnet client for Windows and Unix.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-36', name: 'Webhook.site', url: 'https://webhook.site/', description: 'Easily test and debug webhooks and other HTTP requests.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-37', name: 'XMLComparator', url: 'https://www.xmlcomparator.xyz/', description: 'A free online tool to compare and find differences between XML files.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-38', name: 'Nept', url: 'https://nept.cloud/', description: 'Instantly deploy framework-based applications with one click.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-39', name: 'Libraries.io', url: 'https://libraries.io/', description: 'Gather information about open-source packages and dependencies.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-40', name: 'Deps.dev', url: 'https://deps.dev/', description: 'Deep security and dependency analysis for open-source software.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-41', name: 'N8N', url: 'https://n8n.io/', description: 'Powerful workflow automation tool to connect any apps.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-42', name: 'Mockaroo', url: 'https://mockaroo.com/', description: 'Generate realistic test data in various formats.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },

  // ▷ Online Toolkits
  { id: 'dt-43', name: 'AppDevTools', url: 'https://appdevtools.com/', description: 'A collection of developer tools and utilities for web development.', tags: ['online-toolkits', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-44', name: 'IT Tools', url: 'https://it-tools.tech/', description: 'Handy online tools for developers with a great UI.', tags: ['online-toolkits', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-45', name: 'Web Toolbox', url: 'https://web-toolbox.dev/en', description: 'A comprehensive collection of web-based utilities.', tags: ['online-toolkits'], ...DEFAULT_PROPS },
  { id: 'dt-46', name: 'Devina', url: 'https://devina.io/', description: 'All-in-one platform for developers to manage their growth.', tags: ['online-toolkits'], ...DEFAULT_PROPS },
  { id: 'dt-47', name: 'Coders Tool', url: 'https://www.coderstool.com/', description: 'Free online tools for developers including formatters and hashers.', tags: ['online-toolkits'], ...DEFAULT_PROPS },

  // ▷ Software Dev Tools
  { id: 'dt-48', name: 'Budibase', url: 'https://budibase.com/', description: 'Build internal tools, apps, and workflows in minutes.', tags: ['software-dev'], ...DEFAULT_PROPS },
  { id: 'dt-49', name: 'Appsmith', url: 'https://www.appsmith.com/', description: 'Framework to build, deploy, and maintain internal tools.', tags: ['software-dev'], ...DEFAULT_PROPS },
  { id: 'dt-50', name: 'Open Source Guides', url: 'https://opensource.guide/', description: 'Community-driven guides to starting and growing open-source projects.', tags: ['software-dev'], ...DEFAULT_PROPS },
  { id: 'dt-51', name: 'Dokploy', url: 'https://github.com/dokploy/dokploy', description: 'Self-host your applications with ease using this deployment tool.', tags: ['software-dev'], ...DEFAULT_PROPS },
  { id: 'dt-52', name: 'grep.app', url: 'https://grep.app/', description: 'Search across 500,000 git repositories on GitHub.', tags: ['software-dev'], ...DEFAULT_PROPS },
  { id: 'dt-53', name: 'PM2', url: 'https://pm2.keymetrics.io/', description: 'Advanced, production process manager for Node.js applications.', tags: ['software-dev'], ...DEFAULT_PROPS },
  { id: 'dt-54', name: 'namae.dev', url: 'https://namae.dev/', description: 'Check the availability of your new app name across multiple platforms.', tags: ['software-dev'], ...DEFAULT_PROPS },
  { id: 'dt-55', name: 'Crontab Guru', url: 'https://crontab.guru/', description: 'Quick and simple editor for help with your cron schedules.', tags: ['software-dev'], ...DEFAULT_PROPS },
  { id: 'dt-56', name: 'Slint', url: 'https://slint.dev', description: 'A next-generation UI toolkit as easy to use as HTML/CSS.', tags: ['software-dev'], ...DEFAULT_PROPS },

  // ▷ Mobile Dev Tools
  { id: 'dt-57', name: 'Android Developer Roadmap', url: 'https://github.com/skydoves/android-developer-roadmap', description: 'A comprehensive guide to becoming an Android developer.', tags: ['mobile-dev', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-58', name: 'UXArchive', url: 'https://uxarchive.com/', description: 'A library of mobile user experience flows from popular apps.', tags: ['mobile-dev'], ...DEFAULT_PROPS },
  { id: 'dt-59', name: 'Mobbin', url: 'https://mobbin.com/', description: 'The world\'s largest mobile design reference library.', tags: ['mobile-dev'], ...DEFAULT_PROPS },
  { id: 'dt-60', name: 'IconKitchen', url: 'https://icon.kitchen/', description: 'Create beautiful icons for your Android and iOS apps.', tags: ['mobile-dev', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-61', name: 'App Ideas', url: 'https://github.com/florinpop17/app-ideas', description: 'A curated list of application ideas to build.', tags: ['mobile-dev'], ...DEFAULT_PROPS },
  { id: 'dt-62', name: 'Android Code Search', url: 'https://cs.android.com/', description: 'Search the Android source code quickly and easily.', tags: ['mobile-dev'], ...DEFAULT_PROPS },
  { id: 'dt-63', name: 'useAnimations', url: 'https://useanimations.com/index.html', description: 'A collection of animated icons for Lottie frameworks.', tags: ['mobile-dev'], ...DEFAULT_PROPS },

  // ▷ Database Tools
  { id: 'dt-64', name: 'DB Browser for SQLite', url: 'https://sqlitebrowser.org/', description: 'Visual open source tool to create and edit SQLite database files.', tags: ['database-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-65', name: 'DBeaver', url: 'https://dbeaver.io/', description: 'Free multi-platform database tool for developers and DB admins.', tags: ['database-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-66', name: 'DuckDB', url: 'https://duckdb.org/', description: 'In-process SQL OLAP database management system.', tags: ['database-tools'], ...DEFAULT_PROPS },
  { id: 'dt-67', name: 'Gel (EdgeDB)', url: 'https://www.geldata.com/', description: 'Next-generation relational database designed for performance.', tags: ['database-tools'], ...DEFAULT_PROPS },
  { id: 'dt-68', name: 'Airtable', url: 'https://airtable.com/', description: 'Combines power of database with the ease of a spreadsheet.', tags: ['database-tools'], ...DEFAULT_PROPS },
  { id: 'dt-69', name: 'NocoDB', url: 'https://github.com/nocodb/nocodb', description: 'Turn any database into a smart spreadsheet.', tags: ['database-tools'], ...DEFAULT_PROPS },
  { id: 'dt-70', name: 'Grafana', url: 'https://grafana.com/', description: 'The open observability platform for monitoring and analysis.', tags: ['database-tools'], ...DEFAULT_PROPS },
  { id: 'dt-71', name: 'ChartDB', url: 'https://chartdb.io/', description: 'Visualize your database schema with ease.', tags: ['database-tools'], ...DEFAULT_PROPS },

  // ▷ Git Tools
  { id: 'dt-72', name: 'Fork', url: 'https://git-fork.com/', description: 'A fast and beautiful git client for Windows and Mac.', tags: ['git-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-73', name: 'GitButler', url: 'https://github.com/gitbutlerapp/gitbutler', description: 'The branchless git workflow client.', tags: ['git-tools'], ...DEFAULT_PROPS },
  { id: 'dt-74', name: 'Codeberg', url: 'https://codeberg.org/', description: 'Free hosting service for open-source software.', tags: ['git-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-75', name: 'GitKraken', url: 'https://www.gitkraken.com/', description: 'Powerful and visual git client.', tags: ['git-tools'], ...DEFAULT_PROPS },
  { id: 'dt-76', name: 'Lazygit', url: 'https://github.com/jesseduffield/lazygit', description: 'Simple terminal UI for git commands.', tags: ['git-tools'], ...DEFAULT_PROPS },
  { id: 'dt-77', name: 'Difftastic', url: 'https://difftastic.wilfred.me.uk/', description: 'Structural diff tool that understands syntax.', tags: ['git-tools'], ...DEFAULT_PROPS },
  { id: 'dt-78', name: 'Git Quick Stats', url: 'https://git-quick-stats.sh/', description: 'Access various statistics in git repository.', tags: ['git-tools'], ...DEFAULT_PROPS },

  // ▷ GitHub Tools
  { id: 'dt-79', name: 'Refined GitHub', url: 'https://github.com/refined-github/refined-github', description: 'Browser extension that simplifies GitHub interface.', tags: ['github-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-80', name: 'GitHub Desktop', url: 'https://github.com/apps/desktop', description: 'Simple desktop git client from GitHub.', tags: ['github-tools'], ...DEFAULT_PROPS },
  { id: 'dt-81', name: 'Download Directory', url: 'https://download-directory.github.io/', description: 'Download sub-directories of a GitHub repository.', tags: ['github-tools'], ...DEFAULT_PROPS },
  { id: 'dt-82', name: 'Star History', url: 'https://star-history.com/', description: 'Visualize star history for GitHub repositories.', tags: ['github-tools'], ...DEFAULT_PROPS },
  { id: 'dt-83', name: 'GitHub Readme Stats', url: 'https://github.com/anuraghazra/github-readme-stats', description: 'Dynamic stats for your GitHub readmes.', tags: ['github-tools'], ...DEFAULT_PROPS },
  { id: 'dt-84', name: 'Skill Icons', url: 'https://skillicons.dev/', description: 'Beautiful skill icons to display on your GitHub profile.', tags: ['github-tools'], ...DEFAULT_PROPS },

  // ▷ Docker Tools
  { id: 'dt-85', name: 'Portainer', url: 'https://portainer.io/', description: 'Powerful container management software.', tags: ['docker-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-86', name: 'Podman', url: 'https://podman.io/', description: 'Rootless and daemonless container engine.', tags: ['docker-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-87', name: 'DockGE', url: 'https://dockge.kuma.pet/', description: 'Self-hosted Docker Compose manager.', tags: ['docker-tools'], ...DEFAULT_PROPS },
  { id: 'dt-88', name: 'Composerize', url: 'https://www.composerize.com/', description: 'Convert "docker run" to docker-compose.', tags: ['docker-tools'], ...DEFAULT_PROPS },
  { id: 'dt-89', name: 'LazyDocker', url: 'https://github.com/jesseduffield/lazydocker', description: 'Terminal UI for docker and docker-compose.', tags: ['docker-tools'], ...DEFAULT_PROPS },

  // ▷ CLI Tools
  { id: 'dt-90', name: 'ripgrep', url: 'https://github.com/BurntSushi/ripgrep', description: 'Fastest grep alternative search tool.', tags: ['cli-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-91', name: 'Oh My Posh', url: 'https://ohmyposh.dev/', description: 'Prompt theme engine for any shell.', tags: ['cli-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-92', name: 'Zoxide', url: 'https://github.com/ajeetdsouza/zoxide', description: 'Smarter cd command.', tags: ['cli-tools'], ...DEFAULT_PROPS },
  { id: 'dt-93', name: 'Atuin', url: 'https://atuin.sh/', description: 'Sync and search shell history.', tags: ['cli-tools'], ...DEFAULT_PROPS },
  { id: 'dt-94', name: 'VisiData', url: 'https://www.visidata.org/', description: 'Explore tabular data in the terminal.', tags: ['cli-tools'], ...DEFAULT_PROPS },

  // ▷ API Tools
  { id: 'dt-95', name: 'Hoppscotch', url: 'https://hoppscotch.io/', description: 'Open source API development ecosystem.', tags: ['api-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-96', name: 'Public APIs', url: 'https://github.com/public-apis/public-apis', description: 'Collective list of free APIs.', tags: ['api-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-97', name: 'Insomnia', url: 'https://insomnia.rest/', description: 'API development platform for design and testing.', tags: ['api-tools'], ...DEFAULT_PROPS },
  { id: 'dt-98', name: 'Bruno', url: 'https://www.usebruno.com/', description: 'Fast and light git-friendly API client.', tags: ['api-tools'], ...DEFAULT_PROPS },
  { id: 'dt-99', name: 'Beeceptor', url: 'https://beeceptor.com/', description: 'Intercept and mock API requests.', tags: ['api-tools'], ...DEFAULT_PROPS },

  // ► Game Dev Tools
  { id: 'dt-100', name: 'EnginesDatabase', url: 'https://enginesdatabase.com/', description: 'Database of game engines and features.', tags: ['game-dev', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-101', name: 'Kenney Assets', url: 'https://www.kenney.nl/', description: 'Free, high-quality game assets.', tags: ['game-dev', 'game-assets', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-102', name: 'Itch.io Assets', url: 'https://itch.io/game-assets/free', description: 'Find free game assets online.', tags: ['game-dev', 'game-assets'], ...DEFAULT_PROPS },
  { id: 'dt-103', name: 'OpenGameArt', url: 'https://opengameart.org/', description: 'Art repository for open-source games.', tags: ['game-dev', 'game-assets'], ...DEFAULT_PROPS },
  { id: 'dt-104', name: 'Sprite Fusion', url: 'https://www.spritefusion.com/', description: 'Tile-based map editor for 2D games.', tags: ['game-dev', 'map-creators'], ...DEFAULT_PROPS },

  // ► IDEs / Code Editors
  { id: 'dt-105', name: 'VSCodium', url: 'https://vscodium.com/', description: 'Free/libre distribution of VS Code.', tags: ['ide-code-editors', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-106', name: 'Zed', url: 'https://zed.dev/', description: 'High-performance multiplayer code editor.', tags: ['ide-code-editors', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-107', name: 'Neovim', url: 'https://neovim.io/', description: 'Hyperextensible Vim-based editor.', tags: ['ide-code-editors', 'featured', 'vim-neovim'], ...DEFAULT_PROPS },
  { id: 'dt-108', name: 'JetBrains', url: 'https://jetbrains.com/', description: 'Essential tools for developers.', tags: ['ide-code-editors'], ...DEFAULT_PROPS },
  { id: 'dt-109', name: 'Emacs', url: 'https://www.gnu.org/software/emacs/', description: 'Extensible, customizable, free editor.', tags: ['ide-code-editors'], ...DEFAULT_PROPS },
  { id: 'dt-110', name: 'CodeSandbox', url: 'https://codesandbox.io/', description: 'Cloud development for web projects.', tags: ['ide-code-editors', 'cloud-ide-collab'], ...DEFAULT_PROPS },

  // ► AI Tools
  { id: 'dt-111', name: 'Aider', url: 'https://aider.chat/', description: 'AI pair programming in terminal.', tags: ['ai-coding-agents', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-112', name: 'Windsurf', url: 'https://www.windsurf.com/', description: 'Agentic IDE with tab completion.', tags: ['ai-coding-agents', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-113', name: 'Cline', url: 'https://cline.bot/', description: 'Autonomous VS Code agent.', tags: ['ai-coding-agents', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-114', name: 'Arena AI', url: 'https://arena.ai/code', description: 'AI website builder with multiple models.', tags: ['web-app-builders-ai', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-115', name: 'v0.dev', url: 'https://v0.app/', description: 'AI user interface generator for React.', tags: ['web-app-builders-ai', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-116', name: 'Bolt.new', url: 'https://bolt.new/', description: 'Build and deploy full-stack apps in browser.', tags: ['web-app-builders-ai'], ...DEFAULT_PROPS },

  // ► Programming Languages
  { id: 'dt-117', name: 'Automate The Boring Stuff', url: 'https://automatetheboringstuff.com/', description: 'Learn Python by making projects.', tags: ['programming-langs', 'python-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-118', name: '30 Seconds of Code', url: 'https://www.30secondsofcode.org/', description: 'Short code snippets for all needs.', tags: ['programming-langs', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-119', name: 'Learn X in Y minutes', url: 'https://learnxinyminutes.com/', description: 'Fast language overviews.', tags: ['programming-langs'], ...DEFAULT_PROPS },
  { id: 'dt-120', name: 'Compiler Explorer', url: 'https://compiler-explorer.com/', description: 'Explore assembly output of your code.', tags: ['programming-langs'], ...DEFAULT_PROPS },

  // ► Web Development
  { id: 'dt-121', name: 'HTML Reference', url: 'https://htmlreference.io/', description: 'Guide to every HTML element.', tags: ['web-dev-html', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-122', name: 'Modern CSS', url: 'https://moderncss.dev/', description: 'Modern CSS features with examples.', tags: ['web-dev-css', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-123', name: 'Component Party', url: 'https://component-party.dev/', description: 'Compare JS frameworks.', tags: ['web-dev-js', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-124', name: 'Shadcn UI', url: 'https://ui.shadcn.com/', description: 'Designed components for copy-paste.', tags: ['web-dev-tools-misc', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-125', name: 'Astro', url: 'https://astro.build/', description: 'Framework for content-driven sites.', tags: ['website-builders', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-126', name: 'Eleventy', url: 'https://11ty.dev/', description: 'Static site generator with multi-template system.', tags: ['website-builders'], ...DEFAULT_PROPS },

  // ► Hosting & Tools
  { id: 'dt-127', name: 'Cloudflare Workers', url: 'https://workers.cloudflare.com/', description: 'Deploy serverless code instantly.', tags: ['dynamic-hosting', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-128', name: 'Vercel', url: 'https://vercel.com/', description: 'Platform for frontend developers.', tags: ['dynamic-hosting', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-129', name: 'Netlify', url: 'https://www.netlify.com/', description: 'Modern web projects platform.', tags: ['dynamic-hosting'], ...DEFAULT_PROPS },
  { id: 'dt-130', name: 'Check-Host', url: 'https://check-host.net/', description: 'Check site uptime globally.', tags: ['hosting-tools'], ...DEFAULT_PROPS },

  // ► Cybersecurity
  { id: 'dt-131', name: 'pyWhat', url: 'https://github.com/bee-san/pyWhat', description: 'Identify files, hashes and more.', tags: ['cybersecurity-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-132', name: 'Nuclei', url: 'https://docs.projectdiscovery.io/tools/nuclei', description: 'YAML-based vulnerability scanner.', tags: ['cybersecurity-tools'], ...DEFAULT_PROPS },
  { id: 'dt-133', name: 'Metasploit', url: 'https://www.metasploit.com/', description: 'Penetration testing framework.', tags: ['pen-testing', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-134', name: 'GHIDRA', url: 'https://github.com/NationalSecurityAgency/ghidra', description: 'Reverse engineering suite from NSA.', tags: ['reverse-engineering', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-135', name: 'x64dbg', url: 'https://x64dbg.com/', description: 'Open-source binary debugger.', tags: ['reverse-engineering'], ...DEFAULT_PROPS },

  // New additions from user list
  { id: 'dt-136', name: 'Wolfram Alpha (Computational)', url: 'https://www.wolframalpha.com/', description: 'Computational intelligence engine for complex math and science questions.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-137', name: 'Symbolab', url: 'https://www.symbolab.com/', description: 'Step-by-step math solver and graphing calculator.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-138', name: 'PhET Simulations', url: 'https://phet.colorado.edu/', description: 'Interactive simulations for science and math.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-139', name: 'Desmos', url: 'https://www.desmos.com/', description: 'Advanced graphing calculator and math tools.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-140', name: 'Cyberchef', url: 'https://gchq.github.io/CyberChef/', description: 'The Cyber Swiss Army Knife for data processing.', tags: ['dev-tools-multi', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-141', name: 'Regex101', url: 'https://regex101.com/', description: 'Online regex tester and debugger.', tags: ['regex-tools', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-142', name: 'JSON Hero', url: 'https://jsonhero.io/', description: 'A beautiful JSON viewer and editor.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-143', name: 'Tableau Public', url: 'https://public.tableau.com/', description: 'Free data visualization software.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
  { id: 'dt-144', name: 'Draw.io', url: 'https://app.diagrams.net/', description: 'Free online diagram software.', tags: ['dev-tools-multi', 'featured'], ...DEFAULT_PROPS },
  { id: 'dt-145', name: 'Mermaid Live Editor', url: 'https://mermaid.live/', description: 'Generate diagrams and charts from text.', tags: ['dev-tools-multi'], ...DEFAULT_PROPS },
];
