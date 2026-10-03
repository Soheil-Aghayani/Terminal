const translations = {
  en: {
    "header.studio": "PERSONAL RESEARCH PORTFOLIO",
    "language.switchToFa": "Switch to Persian",
    "language.switchToEn": "Switch to English",
    "nav.index": "Index",
    "nav.indexAria": "Site index",
    "nav.skip": "Skip to main content",
    "nav.contact": "Contact",
    "nav.commands": "Commands",
    "nav.commandsAria": "Open command palette",
    "nav.home": "Home",
    "nav.build": "Projects",
    "nav.research": "Research",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.archive": "Archive",
    "index.label": "Index",
    "index.note": "Choose a section here, or return to the live board.",
    "home.kicker": "Environmental systems",
    "home.titleA": "I study systems.",
    "home.titleB": "I build useful things.",
    "home.description": "Environmental engineer, researcher, and builder. I move between real-world questions and digital tools.",
    "home.identity": "{{projectCount}} public signals / {{terminalFileCount}} terminal files.",
    "surface.label": "Studio terminal",
    "surface.hint": "Live board",
    "surface.mode": "README / PROFILE",
    "surface.status": "Open",
    "surface.help": "Help",
    "surface.helpClose": "Close",
    "surface.maximize": "MAX",
    "surface.minimize": "MIN",
    "surface.maximizeAria": "Maximize terminal",
    "surface.minimizeAria": "Minimize terminal",
    "surface.helpAria": "Open terminal help",
    "surface.helpCloseAria": "Close terminal help",
    "surface.helpRegionAria": "Terminal keyboard shortcuts",
    "surface.helpTitle": "COMMANDS",
    "surface.helpReady": "READY / ESC",
    "surface.helpHome": "0 / H  HOME",
    "surface.helpHomeMeta": "RETURN",
    "surface.helpRoute": "{{shortcutRange}}  TERMINAL FILES",
    "surface.helpRouteMeta": "OPEN",
    "surface.helpInspect": "CLICK / ENTER",
    "surface.helpInspectMeta": "INSPECT",
    "surface.helpFilter": "/  FILTER PROJECTS",
    "surface.helpFilterMeta": "SEARCH",
    "surface.helpContact": "C  CONTACT",
    "surface.helpContactMeta": "DIRECT",
    "surface.helpCloseLine": "ESC / ?",
    "surface.helpCloseMeta": "CLOSE",
    "surface.helpPalette": "CTRL K COMMANDS",
    "surface.helpPaletteMeta": "PALETTE",
    "surface.helpMaximize": "M  MAX / MIN TERMINAL · ESC MINIMIZE",
    "surface.helpMaximizeMeta": "RESIZE",
    "surface.helpBrowse": "[ ]  NEXT / PREVIOUS PROJECT",
    "surface.helpBrowseMeta": "BROWSE",
    "surface.commandLabel": "TERMINAL INPUT",
    "surface.commandInputAria": "Type a terminal command",
    "surface.commandPlaceholder": "help / open projects / max",
    "surface.commandRun": "RUN",
    "surface.commandReady": "READY / TYPE HELP",
    "surface.commandHelp": "HELP / LS / OPEN ROUTE / OPEN PROJECT / CV / VCARD / MAX / MIN",
    "surface.commandList": "FILES: README / SIGNALS / FIELD NOTES / SKILLS / CONTACT",
    "surface.commandHistory": "HISTORY: {{commands}}",
    "surface.commandHistoryEmpty": "EMPTY",
    "surface.commandStatus": "STUDIO: {{view}} / {{language}} / GITHUB {{sync}}",
    "surface.commandSync": "GITHUB SYNC: {{state}}",
    "surface.commandSyncLoading": "LOADING",
    "surface.commandSyncReady": "READY",
    "surface.commandSyncUnavailable": "UNAVAILABLE",
    "surface.commandResized": "TERMINAL {{state}}",
    "surface.commandBoard": "LIVE BOARD {{state}}",
    "surface.commandLanguage": "LANGUAGE: {{language}}",
    "surface.commandShared": "ROUTE COPIED",
    "surface.commandShareFailed": "ROUTE COPY FAILED",
    "surface.commandContactDownloaded": "CONTACT CARD DOWNLOADED",
    "surface.commandOpenedProject": "PROJECT OPENED: {{project}}",
    "surface.commandProjectUnknown": "PROJECT SIGNAL NOT FOUND: {{project}}",
    "surface.commandUnknown": "COMMAND NOT FOUND: {{command}}",
    "surface.railAria": "Studio terminal files",
    "surface.railPathAria": "Return to the studio root",
    "surface.railCommandAria": "Show the studio file list",
    "surface.railLabel": "FILES",
    "surface.railEntries": "{{terminalFileCount}} ENTRIES",
    "surface.railReadme": "README",
    "surface.railReadmeMeta": "profile",
    "surface.railSignals": "SIGNALS",
    "surface.railSignalsMeta": "live output",
    "surface.railFieldNotes": "FIELD NOTES",
    "surface.railFieldNotesMeta": "observations",
    "surface.railSkills": "SKILLS",
    "surface.railSkillsMeta": "working stack",
    "surface.railContact": "CONTACT",
    "surface.railContactMeta": "direct line",
    "surface.railSession": "SESSION",
    "surface.railLive": "LIVE",
    "surface.railShell": "SHELL",
    "surface.railReady": "READY",
    "surface.activeStatus": "ACTIVE",
    "surface.back": "Back to the surface",
    "surface.backToList": "Back to the list",
    "detail.repository": "View GitHub repository",
    "detail.liveSite": "Open live site",
    "detail.openPublicSource": "OPEN PUBLIC SOURCE",
    "detail.openPublicSourceAria": "Open the public source",
    "detail.caseStudy": "PROJECT / CASE STUDY",
    "detail.caseStudyAria": "Project case study",
    "detail.brief": "BRIEF",
    "detail.format": "FORMAT",
    "detail.repositoryKey": "REPOSITORY",
    "detail.publicSurface": "PUBLIC SURFACE",
    "detail.liveSurface": "LIVE DEMO",
    "detail.sourceOnly": "SOURCE ONLY",
    "detail.githubSource": "PUBLIC API",
    "detail.githubLanguage": "LANGUAGE",
    "detail.githubTopics": "TOPICS",
    "detail.relatedWork": "RELATED PUBLIC WORK",
    "detail.evidence": "SELECTED EVIDENCE",
    "detail.scholarRecord": "PUBLIC SCHOLAR RECORD",
    "detail.copyCitation": "COPY CITATION",
    "detail.copyCitations": "COPY CITATIONS",
    "detail.copyCitationAria": "Copy this citation",
    "detail.copyCitationsAria": "Copy these citations",
    "detail.artifactLabel": "THESIS ARTIFACT",
    "detail.artifactOpen": "OPEN",
    "detail.artifactOpenAria": "Open public artifact full view",
    "detail.artifactViewerLabel": "PUBLIC ARTIFACT / VIEW",
    "detail.artifactClose": "CLOSE",
    "detail.artifactAlt": "Thesis infographic showing waste cooking oil converted to biodiesel with a catalyst made from waste seashells.",
    "detail.artifactCaption": "A visual map of the waste cooking oil to biodiesel workflow and the waste-shell catalyst route.",
    "detail.ftirPeaksLabel": "FTIR / PEAK SIGNAL",
    "detail.ftirPeaksAlt": "FTIR spectrum with labeled wavenumber peaks from the public thesis artifact.",
    "detail.ftirPeaksCaption": "A metadata-stripped peak view kept as a public visual reference for the thesis workflow.",
    "detail.ftirSearchLabel": "FTIR / LIBRARY MATCH",
    "detail.ftirSearchAlt": "FTIR library comparison showing calcium carbonate reference matches.",
    "detail.ftirSearchCaption": "A public library-comparison view with no raw project identifiers or private source files.",
    "board.title": "RESEARCH DEPARTURES",
    "board.live": "LIVE",
    "board.paused": "PAUSED",
    "board.pauseAria": "Pause live board",
    "board.resumeAria": "Resume live board",
    "board.no": "NO",
    "board.destination": "DESTINATION",
    "board.signal": "SIGNAL",
    "board.state": "STATE",
    "board.countSuffix": "PUBLIC SIGNALS",
    "board.githubSignals": "GITHUB / SOURCE",
    "board.aria": "Live research departure board",
    "projects.filterLabel": "FILTER SIGNALS",
    "projects.filterPlaceholder": "$ search projects",
    "projects.filterAria": "Filter projects",
    "projects.filterCount": "SHOWING",
    "projects.filterEmpty": "NO SIGNALS MATCH",
    "projects.liveDemo": "LIVE",
    "projects.sortLabel": "SORT",
    "projects.sortAria": "Sort public projects",
    "projects.sortCatalog": "STUDIO ORDER",
    "projects.sortUpdated": "RECENTLY UPDATED",
    "projects.sortStars": "MOST STARRED",
    "projects.sortAlpha": "A–Z",
    "projects.githubMetaAria": "GitHub metadata: {{summary}}",
    "board.openBuild": "Open projects",
    "board.openResearch": "Open research",
    "board.openEducation": "Open education",
    "board.openSkills": "Open skills",
    "board.openArchive": "Open archive",
    "research.timelineLabel": "RESEARCH TIMELINE",
    "research.timelineAria": "Research timeline",
    "research.timelineCount": "PUBLIC THREADS",
    "contact.surfaceLabel": "CONTACT / DIRECT",
    "contact.title": "If the work is useful, let us talk.",
    "contact.description": "For research, software, environmental systems, or a good question that does not fit a form.",
    "contact.github": "GitHub",
    "contact.portfolio": "Portfolio",
    "contact.email": "Email",
    "contact.orcid": "ORCID",
    "contact.linkedin": "LinkedIn",
    "contact.telegram": "Telegram",
    "contact.scholar": "Google Scholar",
    "contact.profileOutputs": "PROFILE OUTPUTS",
    "contact.generalProfile": "General profile",
    "contact.academicProfile": "Academic profile",
    "contact.technicalProfile": "Software profile",
    "contact.profilePrintMeta": "VIEW / PRINT",
    "contact.saveContact": "SAVE CONTACT",
    "contact.saveContactAria": "Download a public contact card",
    "contact.generalProfileAria": "Open the general profile",
    "contact.academicProfileAria": "Open the academic profile",
    "contact.technicalProfileAria": "Open the software profile",
    "profile.previewLabel": "PROFILE / VIEW",
    "profile.previewHint": "PUBLIC PROFILE / SHARE, EXPORT OR PRINT",
    "profile.close": "CLOSE",
    "profile.share": "SHARE ROUTE",
    "profile.shareAria": "Share this profile route",
    "profile.print": "PRINT / PDF",
    "profile.printAria": "Print or save this profile as PDF",
    "profile.download": "DOWNLOAD .TXT",
    "profile.downloadAria": "Download this public profile as text",
    "profile.downloadMarkdown": "DOWNLOAD .MD",
    "profile.downloadMarkdownAria": "Download this public profile as Markdown",
    "profile.switchLabel": "PROFILE VIEW",
    "profile.switchAria": "Choose profile output",
    "profile.general": "General",
    "palette.label": "Command palette",
    "palette.title": "Find a signal.",
    "palette.close": "Close",
    "palette.searchLabel": "Search the studio",
    "palette.placeholder": "Search sections, projects, research...",
    "palette.hint": "TYPE TO FILTER / ↑↓ MOVE / ENTER OPEN/RUN / ESC CLOSE",
    "palette.resultsAria": "Command palette results",
    "palette.empty": "NO SIGNALS MATCH",
    "palette.kindSection": "Section",
    "palette.kindProject": "Project",
    "palette.kindResearch": "Research",
    "palette.kindEducation": "Education",
    "palette.kindSkill": "Skill",
    "palette.kindArchive": "Archive",
    "palette.kindContact": "Contact",
    "palette.kindCommand": "Command",
    "palette.kindEvidence": "Public evidence",
    "palette.actionHelp": "Open help",
    "palette.actionHelpMeta": "Keyboard commands",
    "palette.actionLanguage": "Switch to Persian",
    "palette.actionLanguageMeta": "Change display language",
    "palette.actionPause": "Pause live board",
    "palette.actionPauseMeta": "Freeze departure signals",
    "palette.actionResume": "Resume live board",
    "palette.actionResumeMeta": "Restart departure signals",
    "palette.actionMaximize": "Maximize terminal",
    "palette.actionMaximizeMeta": "Expand the active surface",
    "palette.actionMinimize": "Minimize terminal",
    "palette.actionMinimizeMeta": "Restore the surface size",
    "palette.actionShareRoute": "Share current route",
    "palette.actionShareRouteMeta": "Native share on mobile / copy on desktop",
    "palette.actionPrint": "Open profile / PDF",
    "palette.actionPrintMeta": "Public dossier preview",
    "palette.actionPrintAcademic": "Open academic profile",
    "palette.actionPrintAcademicMeta": "Research and education dossier",
    "palette.actionPrintTechnical": "Open software profile",
    "palette.actionPrintTechnicalMeta": "Projects and working stack",
    "palette.actionMarkdown": "Download profile Markdown",
    "palette.actionMarkdownMeta": "Public export from the active profile",
    "palette.actionContactCard": "Save contact card",
    "palette.actionContactCardMeta": "Download a public vCard",
    "palette.actionGithub": "Open GitHub",
    "palette.actionGithubMeta": "Public source and projects",
    "palette.actionLinkedin": "Open LinkedIn",
    "palette.actionLinkedinMeta": "Professional profile",
    "palette.actionTelegram": "Open Telegram",
    "palette.actionTelegramMeta": "Direct line / @agseyl",
    "palette.actionScholar": "Open Google Scholar",
    "palette.actionScholarMeta": "Public papers and citations",
    "palette.actionAbout": "Inspect personal signal",
    "palette.actionAboutMeta": "A quiet note for curious visitors",
    "sections.filterLabel": "FILTER RECORDS",
    "sections.filterPlaceholder": "$ search records",
    "sections.filterAria": "Filter records",
    "sections.filterCount": "SHOWING",
    "sections.filterEmpty": "NO RECORDS MATCH",
    "detail.githubData": "GITHUB SIGNAL",
    "detail.githubLoading": "Repository metadata pending",
    "detail.githubUnavailable": "Repository metadata unavailable",
    "detail.githubUpdated": "updated",
    "detail.githubStars": "stars",
    "detail.githubForks": "forks",
    "detail.githubLicense": "license",
    "detail.notAvailable": "N/A",
    "detail.projectPosition": "PROJECTS / {{current}} / {{total}}",
    "detail.previousProject": "PREV [",
    "detail.nextProject": "NEXT ]",
    "detail.previousProjectAria": "Open previous project",
    "detail.nextProjectAria": "Open next project",
    "detail.shareRoute": "SHARE / COPY ROUTE",
    "detail.shareRouteAria": "Share or copy this route",
    "toast.routeCopied": "ROUTE COPIED",
    "toast.routeShared": "ROUTE READY TO SHARE",
    "toast.routeCopyFailed": "COPY FAILED",
    "toast.citationCopied": "CITATION COPIED",
    "toast.citationCopyFailed": "CITATION COPY FAILED",
    "toast.shortcutUnavailable": "NO SHORTCUT FOR NUMBER {{shortcut}}",
    "toast.about": "A quiet signal: environmental questions, software, and a habit of looking closer.",
    "toast.profileDownloaded": "PROFILE TEXT DOWNLOADED",
    "toast.profileMarkdownDownloaded": "PROFILE MARKDOWN DOWNLOADED",
    "toast.contactDownloaded": "CONTACT CARD DOWNLOADED",
    "print.label": "PROFILE / PRINT",
    "print.title": "Soheil Aghayani",
    "print.subtitle": "Environmental engineer / researcher / builder",
    "print.summary": "Environmental engineer, researcher, and builder. I move between real-world questions and digital tools.",
    "print.projects": "SELECTED PROJECTS",
    "print.research": "RESEARCH DIRECTION",
    "print.education": "EDUCATION",
    "print.experience": "SELECTED EXPERIENCE",
    "print.skills": "WORKING STACK",
    "print.evidence": "PUBLIC EVIDENCE",
    "print.contactLabel": "PUBLIC CONTACT",
    "print.academicLabel": "ACADEMIC PROFILE / PRINT",
    "print.academicSubtitle": "Environmental engineering / research dossier",
    "print.academicSummary": "Research-focused profile covering waste systems, biofuel, life-cycle thinking, and public evidence.",
    "print.technicalLabel": "SOFTWARE PROFILE / PRINT",
    "print.technicalSubtitle": "Projects / interfaces / research tools",
    "print.technicalSummary": "A practical software profile built from public projects, research tools, and working methods.",
    "footer.left": "Environmental engineer / researcher / builder",
    "footer.right": "GitHub"
  },
  fa: {
    "header.studio": "پرتفولیوی پژوهش شخصی",
    "language.switchToFa": "تغییر به فارسی",
    "language.switchToEn": "تغییر به انگلیسی",
    "nav.index": "فهرست",
    "nav.indexAria": "فهرست سایت",
    "nav.skip": "رفتن به محتوای اصلی",
    "nav.contact": "تماس",
    "nav.commands": "فرمان‌ها",
    "nav.commandsAria": "باز کردن پالت فرمان",
    "nav.home": "خانه",
    "nav.build": "پروژه‌ها",
    "nav.research": "پژوهش",
    "nav.education": "تحصیلات",
    "nav.skills": "مهارت‌ها",
    "nav.archive": "آرشیو",
    "index.label": "فهرست",
    "index.note": "از اینجا یک بخش را انتخاب کن یا به بورد زنده برگرد.",
    "home.kicker": "سیستم‌های محیط‌زیستی",
    "home.titleA": "سیستم‌ها را مطالعه می‌کنم.",
    "home.titleB": "چیزهای مفید می‌سازم.",
    "home.description": "مهندس محیط‌زیست، پژوهشگر و سازنده. بین پرسش‌های واقعی و ابزارهای دیجیتال حرکت می‌کنم.",
    "home.identity": "{{projectCount}} سیگنال عمومی / {{terminalFileCount}} فایل ترمینال.",
    "surface.label": "ترمینال استودیو",
    "surface.hint": "بورد زنده",
    "surface.mode": "README / پروفایل",
    "surface.status": "باز",
    "surface.help": "راهنما",
    "surface.helpClose": "بستن",
    "surface.maximize": "MAX",
    "surface.minimize": "MIN",
    "surface.maximizeAria": "بزرگ‌نمایی ترمینال",
    "surface.minimizeAria": "کوچک‌نمایی ترمینال",
    "surface.helpAria": "باز کردن راهنمای ترمینال",
    "surface.helpCloseAria": "بستن راهنمای ترمینال",
    "surface.helpRegionAria": "میانبرهای صفحه‌کلید ترمینال",
    "surface.helpTitle": "فرمان‌ها",
    "surface.helpReady": "آماده / ESC",
    "surface.helpHome": "۰ / H  خانه",
    "surface.helpHomeMeta": "بازگشت",
    "surface.helpRoute": "{{shortcutRange}}  فایل‌های ترمینال",
    "surface.helpRouteMeta": "باز کردن",
    "surface.helpInspect": "کلیک / Enter",
    "surface.helpInspectMeta": "بررسی",
    "surface.helpFilter": "/  فیلتر پروژه‌ها",
    "surface.helpFilterMeta": "جست‌وجو",
    "surface.helpContact": "C  تماس",
    "surface.helpContactMeta": "مستقیم",
    "surface.helpCloseLine": "ESC / ?",
    "surface.helpCloseMeta": "بستن",
    "surface.helpPalette": "CTRL K فرمان‌ها",
    "surface.helpPaletteMeta": "پالت",
    "surface.helpMaximize": "M  بزرگ / کوچک ترمینال · ESC کوچک‌نمایی",
    "surface.helpMaximizeMeta": "اندازه",
    "surface.helpBrowse": "[ ]  پروژه‌ی بعد / قبل",
    "surface.helpBrowseMeta": "مرور",
    "surface.commandLabel": "ورودی ترمینال",
    "surface.commandInputAria": "نوشتن فرمان ترمینال",
    "surface.commandPlaceholder": "help / open projects / max",
    "surface.commandRun": "اجرا",
    "surface.commandReady": "آماده / HELP را بنویس",
    "surface.commandHelp": "HELP / LS / OPEN ROUTE / OPEN PROJECT / CV / VCARD / MAX / MIN",
    "surface.commandList": "فایل‌ها: README / SIGNALS / FIELD NOTES / SKILLS / CONTACT",
    "surface.commandHistory": "تاریخچه: {{commands}}",
    "surface.commandHistoryEmpty": "خالی",
    "surface.commandStatus": "استودیو: {{view}} / {{language}} / گیت‌هاب {{sync}}",
    "surface.commandSync": "همگام‌سازی گیت‌هاب: {{state}}",
    "surface.commandSyncLoading": "در حال بارگذاری",
    "surface.commandSyncReady": "آماده",
    "surface.commandSyncUnavailable": "در دسترس نیست",
    "surface.commandResized": "ترمینال: {{state}}",
    "surface.commandBoard": "بورد زنده: {{state}}",
    "surface.commandLanguage": "زبان: {{language}}",
    "surface.commandShared": "مسیر کپی شد",
    "surface.commandShareFailed": "کپی مسیر ناموفق بود",
    "surface.commandContactDownloaded": "کارت تماس دانلود شد",
    "surface.commandOpenedProject": "پروژه باز شد: {{project}}",
    "surface.commandProjectUnknown": "سیگنال پروژه پیدا نشد: {{project}}",
    "surface.commandUnknown": "فرمان پیدا نشد: {{command}}",
    "surface.railAria": "فایل‌های ترمینال استودیو",
    "surface.railPathAria": "بازگشت به ریشه‌ی استودیو",
    "surface.railCommandAria": "نمایش فهرست فایل‌های استودیو",
    "surface.railLabel": "فایل‌ها",
    "surface.railEntries": "{{terminalFileCount}} فایل",
    "surface.railReadme": "README.md",
    "surface.railReadmeMeta": "پروفایل",
    "surface.railSignals": "signals.log",
    "surface.railSignalsMeta": "خروجی زنده",
    "surface.railFieldNotes": "field-notes/",
    "surface.railFieldNotesMeta": "مشاهده‌ها",
    "surface.railSkills": "مهارت‌ها",
    "surface.railSkillsMeta": "جعبه‌ابزار",
    "surface.railContact": "contact.txt",
    "surface.railContactMeta": "خط مستقیم",
    "surface.railSession": "نشست",
    "surface.railLive": "زنده",
    "surface.railShell": "پوسته",
    "surface.railReady": "آماده",
    "surface.activeStatus": "فعال",
    "surface.back": "بازگشت به سطح اصلی",
    "surface.backToList": "بازگشت به فهرست",
    "detail.repository": "مشاهده‌ی مخزن گیت‌هاب",
    "detail.liveSite": "باز کردن نسخه‌ی آنلاین",
    "detail.openPublicSource": "باز کردن منبع عمومی",
    "detail.openPublicSourceAria": "باز کردن منبع عمومی",
    "detail.caseStudy": "پروژه / مطالعه‌ی موردی",
    "detail.caseStudyAria": "مطالعه‌ی موردی پروژه",
    "detail.brief": "خلاصه",
    "detail.format": "نوع کار",
    "detail.repositoryKey": "مخزن",
    "detail.publicSurface": "سطح عمومی",
    "detail.liveSurface": "نسخه‌ی زنده",
    "detail.sourceOnly": "فقط منبع",
    "detail.githubSource": "منبع عمومی",
    "detail.githubLanguage": "زبان",
    "detail.githubTopics": "موضوع‌ها",
    "detail.relatedWork": "کارهای عمومی مرتبط",
    "detail.evidence": "شواهد منتخب",
    "detail.scholarRecord": "رکورد عمومی اسکالر",
    "detail.copyCitation": "کپی استناد",
    "detail.copyCitations": "کپی استنادها",
    "detail.copyCitationAria": "کپی کردن این استناد",
    "detail.copyCitationsAria": "کپی کردن این استنادها",
    "detail.artifactLabel": "اثر پایان‌نامه",
    "detail.artifactOpen": "باز کردن",
    "detail.artifactOpenAria": "باز کردن نمای کامل اثر عمومی",
    "detail.artifactViewerLabel": "اثر عمومی / مشاهده",
    "detail.artifactClose": "بستن",
    "detail.artifactAlt": "اینفوگرافیک پایان‌نامه درباره‌ی تبدیل روغن پخت‌وپز به بیودیزل با کاتالیستی ساخته‌شده از پوسته‌ی دورریختنی صدف.",
    "detail.artifactCaption": "نقشه‌ای بصری از مسیر روغن پخت‌وپز تا بیودیزل و مسیر کاتالیست حاصل از پسماند صدف.",
    "detail.ftirPeaksLabel": "FTIR / سیگنال قله‌ها",
    "detail.ftirPeaksAlt": "طیف FTIR با قله‌های عددگذاری‌شده از اثر عمومی پایان‌نامه.",
    "detail.ftirPeaksCaption": "نمایی بدون فراداده‌ی خصوصی از قله‌ها که به‌عنوان مرجع بصری جریان پایان‌نامه نگه داشته شده است.",
    "detail.ftirSearchLabel": "FTIR / تطبیق کتابخانه‌ای",
    "detail.ftirSearchAlt": "مقایسه‌ی کتابخانه‌ای FTIR با تطبیق‌های مرجع کربنات کلسیم.",
    "detail.ftirSearchCaption": "نمایی عمومی از مقایسه‌ی کتابخانه‌ای، بدون شناسه‌ی خام پروژه یا فایل خصوصی.",
    "board.title": "حرکت‌های پژوهش",
    "board.live": "زنده",
    "board.paused": "مکث",
    "board.pauseAria": "مکث بورد زنده",
    "board.resumeAria": "ادامه‌ی بورد زنده",
    "board.no": "شماره",
    "board.destination": "مقصد",
    "board.signal": "سیگنال",
    "board.state": "وضعیت",
    "board.countSuffix": "سیگنال عمومی",
    "board.githubSignals": "گیت‌هاب / منبع",
    "board.aria": "بورد زنده‌ی حرکت‌های پژوهش",
    "projects.filterLabel": "فیلتر سیگنال‌ها",
    "projects.filterPlaceholder": "$ جست‌وجوی پروژه‌ها",
    "projects.filterAria": "فیلتر پروژه‌ها",
    "projects.filterCount": "نمایش",
    "projects.filterEmpty": "سیگنالی پیدا نشد",
    "projects.liveDemo": "زنده",
    "projects.sortLabel": "مرتب‌سازی",
    "projects.sortAria": "مرتب‌سازی پروژه‌های عمومی",
    "projects.sortCatalog": "ترتیب استودیو",
    "projects.sortUpdated": "تازه‌ترین به‌روزرسانی",
    "projects.sortStars": "بیشترین ستاره",
    "projects.sortAlpha": "الفبا",
    "projects.githubMetaAria": "فراداده‌ی گیت‌هاب: {{summary}}",
    "board.openBuild": "باز کردن پروژه‌ها",
    "board.openResearch": "باز کردن پژوهش",
    "board.openEducation": "باز کردن تحصیلات",
    "board.openSkills": "باز کردن مهارت‌ها",
    "board.openArchive": "باز کردن آرشیو",
    "research.timelineLabel": "خط زمانی پژوهش",
    "research.timelineAria": "خط زمانی پژوهش",
    "research.timelineCount": "مسیر عمومی",
    "contact.surfaceLabel": "تماس / مستقیم",
    "contact.title": "اگر این کار به درد می‌خورد، صحبت کنیم.",
    "contact.description": "برای پژوهش، نرم‌افزار، سیستم‌های محیط‌زیستی یا سؤالی که در فرم جا نمی‌شود.",
    "contact.github": "گیت‌هاب",
    "contact.portfolio": "نمونه‌کار",
    "contact.email": "ایمیل",
    "contact.orcid": "ORCID",
    "contact.linkedin": "لینکدین",
    "contact.telegram": "تلگرام",
    "contact.scholar": "گوگل اسکالر",
    "contact.profileOutputs": "خروجی پروفایل",
    "contact.generalProfile": "پروفایل عمومی",
    "contact.academicProfile": "پروفایل دانشگاهی",
    "contact.technicalProfile": "پروفایل نرم‌افزار",
    "contact.profilePrintMeta": "مشاهده / چاپ",
    "contact.saveContact": "ذخیره‌ی تماس",
    "contact.saveContactAria": "دانلود کارت تماس عمومی",
    "contact.generalProfileAria": "باز کردن پروفایل عمومی",
    "contact.academicProfileAria": "باز کردن پروفایل دانشگاهی",
    "contact.technicalProfileAria": "باز کردن پروفایل نرم‌افزار",
    "profile.previewLabel": "پروفایل / مشاهده",
    "profile.previewHint": "پروفایل عمومی / اشتراک، خروجی یا چاپ",
    "profile.close": "بستن",
    "profile.share": "اشتراک مسیر",
    "profile.shareAria": "اشتراک‌گذاری مسیر این پروفایل",
    "profile.print": "چاپ / PDF",
    "profile.printAria": "چاپ یا ذخیره‌ی این پروفایل به‌صورت PDF",
    "profile.download": "دانلود TXT.",
    "profile.downloadAria": "دانلود متن این پروفایل عمومی",
    "profile.downloadMarkdown": "دانلود MD.",
    "profile.downloadMarkdownAria": "دانلود این پروفایل عمومی به‌صورت Markdown",
    "profile.switchLabel": "نمایش پروفایل",
    "profile.switchAria": "انتخاب خروجی پروفایل",
    "profile.general": "عمومی",
    "palette.label": "پالت فرمان",
    "palette.title": "یک سیگنال پیدا کن.",
    "palette.close": "بستن",
    "palette.searchLabel": "جست‌وجو در استودیو",
    "palette.placeholder": "جست‌وجوی بخش‌ها، پروژه‌ها، پژوهش...",
    "palette.hint": "تایپ برای فیلتر / ↑↓ حرکت / Enter باز کردن/اجرا / Esc بستن",
    "palette.resultsAria": "نتایج پالت فرمان",
    "palette.empty": "سیگنالی مطابق پیدا نشد",
    "palette.kindSection": "بخش",
    "palette.kindProject": "پروژه",
    "palette.kindResearch": "پژوهش",
    "palette.kindEducation": "تحصیلات",
    "palette.kindSkill": "مهارت",
    "palette.kindArchive": "آرشیو",
    "palette.kindContact": "تماس",
    "palette.kindCommand": "فرمان",
    "palette.kindEvidence": "شاهد عمومی",
    "palette.actionHelp": "باز کردن راهنما",
    "palette.actionHelpMeta": "فرمان‌های صفحه‌کلید",
    "palette.actionLanguage": "تغییر به انگلیسی",
    "palette.actionLanguageMeta": "تغییر زبان نمایش",
    "palette.actionPause": "مکث بورد زنده",
    "palette.actionPauseMeta": "توقف سیگنال‌های حرکت",
    "palette.actionResume": "ادامه‌ی بورد زنده",
    "palette.actionResumeMeta": "شروع دوباره‌ی سیگنال‌ها",
    "palette.actionMaximize": "بزرگ‌نمایی ترمینال",
    "palette.actionMaximizeMeta": "باز کردن سطح فعال",
    "palette.actionMinimize": "کوچک‌نمایی ترمینال",
    "palette.actionMinimizeMeta": "برگرداندن اندازه‌ی سطح",
    "palette.actionShareRoute": "اشتراک‌گذاری مسیر فعلی",
    "palette.actionShareRouteMeta": "اشتراک‌گذاری در گوشی / کپی در دسکتاپ",
    "palette.actionPrint": "باز کردن پروفایل / PDF",
    "palette.actionPrintMeta": "پیش‌نمایش پرونده‌ی عمومی",
    "palette.actionPrintAcademic": "باز کردن پروفایل دانشگاهی",
    "palette.actionPrintAcademicMeta": "پرونده‌ی پژوهش و تحصیلات",
    "palette.actionPrintTechnical": "باز کردن پروفایل نرم‌افزار",
    "palette.actionPrintTechnicalMeta": "پروژه‌ها و جعبه‌ابزار کاری",
    "palette.actionMarkdown": "دانلود Markdown پروفایل",
    "palette.actionMarkdownMeta": "خروجی عمومی از پروفایل فعال",
    "palette.actionContactCard": "ذخیره‌ی کارت تماس",
    "palette.actionContactCardMeta": "دانلود vCard عمومی",
    "palette.actionGithub": "باز کردن گیت‌هاب",
    "palette.actionGithubMeta": "منبع عمومی و پروژه‌ها",
    "palette.actionLinkedin": "باز کردن لینکدین",
    "palette.actionLinkedinMeta": "پروفایل حرفه‌ای",
    "palette.actionTelegram": "باز کردن تلگرام",
    "palette.actionTelegramMeta": "راه مستقیم / @agseyl",
    "palette.actionScholar": "باز کردن گوگل اسکالر",
    "palette.actionScholarMeta": "مقاله‌ها و استنادهای عمومی",
    "palette.actionAbout": "بررسی سیگنال شخصی",
    "palette.actionAboutMeta": "یادداشتی آرام برای کنجکاوها",
    "sections.filterLabel": "فیلتر رکوردها",
    "sections.filterPlaceholder": "$ جست‌وجوی رکوردها",
    "sections.filterAria": "فیلتر رکوردها",
    "sections.filterCount": "نمایش",
    "sections.filterEmpty": "رکوردی پیدا نشد",
    "detail.githubData": "سیگنال گیت‌هاب",
    "detail.githubLoading": "اطلاعات مخزن در انتظار است",
    "detail.githubUnavailable": "اطلاعات مخزن در دسترس نیست",
    "detail.githubUpdated": "به‌روزرسانی",
    "detail.githubStars": "ستاره",
    "detail.githubForks": "فورک",
    "detail.githubLicense": "مجوز",
    "detail.notAvailable": "ندارد",
    "detail.projectPosition": "پروژه‌ها / {{current}} / {{total}}",
    "detail.previousProject": "قبلی [",
    "detail.nextProject": "بعدی ]",
    "detail.previousProjectAria": "باز کردن پروژه‌ی قبلی",
    "detail.nextProjectAria": "باز کردن پروژه‌ی بعدی",
    "detail.shareRoute": "اشتراک / کپی مسیر",
    "detail.shareRouteAria": "اشتراک‌گذاری یا کپی کردن این مسیر",
    "toast.routeCopied": "مسیر کپی شد",
    "toast.routeShared": "مسیر آماده‌ی اشتراک‌گذاری است",
    "toast.routeCopyFailed": "کپی انجام نشد",
    "toast.citationCopied": "استناد کپی شد",
    "toast.citationCopyFailed": "کپی استناد انجام نشد",
    "toast.shortcutUnavailable": "برای عدد {{shortcut}} میانبری وجود ندارد",
    "toast.about": "یک سیگنال آرام: پرسش‌های محیط‌زیستی، نرم‌افزار و عادتِ دقیق‌تر نگاه کردن.",
    "toast.profileDownloaded": "متن پروفایل دانلود شد",
    "toast.profileMarkdownDownloaded": "Markdown پروفایل دانلود شد",
    "toast.contactDownloaded": "کارت تماس دانلود شد",
    "print.label": "پروفایل / چاپ",
    "print.title": "سهیل آقایانی",
    "print.subtitle": "مهندس محیط‌زیست / پژوهشگر / سازنده",
    "print.summary": "مهندس محیط‌زیست، پژوهشگر و سازنده. بین پرسش‌های واقعی و ابزارهای دیجیتال حرکت می‌کنم.",
    "print.projects": "پروژه‌های منتخب",
    "print.research": "مسیر پژوهش",
    "print.education": "تحصیلات",
    "print.experience": "تجربه‌ی منتخب",
    "print.skills": "جعبه‌ابزار کاری",
    "print.evidence": "شواهد عمومی",
    "print.contactLabel": "راه‌های تماس عمومی",
    "print.academicLabel": "پروفایل دانشگاهی / چاپ",
    "print.academicSubtitle": "مهندسی محیط‌زیست / پرونده‌ی پژوهشی",
    "print.academicSummary": "پروفایلی پژوهش‌محور درباره‌ی سیستم‌های پسماند، سوخت زیستی، تفکر چرخه‌ی عمر و شواهد عمومی.",
    "print.technicalLabel": "پروفایل نرم‌افزار / چاپ",
    "print.technicalSubtitle": "پروژه‌ها / رابط‌ها / ابزارهای پژوهشی",
    "print.technicalSummary": "پروفایلی عملی از پروژه‌های عمومی، ابزارهای پژوهشی و روش‌های کاری.",
    "footer.left": "مهندس محیط‌زیست / پژوهشگر / سازنده",
    "footer.right": "گیت‌هاب"
  }
};

const publicWritingUrl = "https://soheil-aghayani.github.io/Coffpen/";

const content = {
  en: {
    build: {
      title: "Things I make.",
      description: "{{projectCount}} public projects across research tools, interfaces, utilities, experiments, and playful software. The board samples the full signal; this is the closer look.",
      items: [
        { title: "Portfolio", repo: "Portfolio", live: "https://agseyl.ir/", meta: "Personal studio", detail: "A living portfolio where environmental research, software architecture, experiments, and visual systems meet." },
        { title: "Solid-Waste-Laboratory", repo: "Solid-Waste-Laboratory", live: "https://soheil-aghayani.github.io/Solid-Waste-Laboratory/", meta: "Lab systems", detail: "A searchable, practical safety manual for chemical, environmental, and catalysis laboratories." },
        { title: "ScholarPulse", repo: "ScholarPulse", live: "https://soheil-aghayani.github.io/ScholarPulse/", meta: "Research toolkit", detail: "A free academic research toolkit for scholar search, profiles, citation formatting, bibliometrics, and exports." },
        { title: "Soheil-Aghayani", repo: "Soheil-Aghayani", meta: "Profile hub", detail: "A bilingual GitHub profile hub for an environmental engineer, sustainability researcher, and software builder." },
        { title: "MagIranPlus", repo: "MagIranPlus", live: "https://soheil-aghayani.github.io/MagIranPlus/", meta: "Academic tool", detail: "A Persian academic tool for Magiran search results, citation formatting, and Word bibliography exports." },
        { title: "CivilicaPulse", repo: "CivilicaPulse", live: "https://soheil-aghayani.github.io/CivilicaPulse/", meta: "Academic tool", detail: "A Persian academic tool for Civilica researcher profiles, co-author metadata, citation formatting, and Word bibliography exports." },
        { title: "Design-Suite", repo: "Design-Suite", live: "https://soheil-aghayani.github.io/Design-Suite/", meta: "Creative workspace", detail: "A no-build browser workspace for diagrams, visual generators, technical utilities, and fast creative work." },
        { title: "svg-scrapper", repo: "svg-scrapper", live: "https://soheil-aghayani.github.io/svg-scrapper/", meta: "Icon workbench", detail: "A Chrome-styled SVG icon workbench for searching, customizing, extracting, and batch-downloading icons." },
        { title: "Coffpen", repo: "Coffpen", live: publicWritingUrl, meta: "Writing space", detail: "A Persian writing space for short stories, series, and reflective notes: where coffee meets the pen." },
        { title: "Deutschly", repo: "Deutschly", live: "https://soheil-aghayani.github.io/Deutschly/", meta: "Language PWA", detail: "A focused German flashcard PWA for Menschen A1.1 with adaptive review, drills, word banks, and sync." },
        { title: "Gamify-Garden", repo: "Gamify-Garden", live: "https://soheil-aghayani.github.io/Gamify-Garden/", meta: "Daily garden", detail: "Apricity: a gentle RTL daily-gamification garden for tiny steps, visible growth, and no-pressure progress." },
        { title: "font-installer", repo: "font-installer", meta: "Desktop utility", detail: "A PyQt5 terminal-style font library manager with preview, search, duplicate cleanup, backups, and safe installation." },
        { title: "ncbi", repo: "ncbi", live: "https://soheil-aghayani.github.io/ncbi/", meta: "Research explainer", detail: "An interactive visual explainer for navigating NCBI research tools, databases, and BLAST workflows." },
        { title: "food-recipe", repo: "food-recipe", live: "https://soheil-aghayani.github.io/food-recipe/", meta: "Playful desktop", detail: "A macOS-inspired browser world with Finder, Safari, recipes, music, and a playful desktop experience." },
        { title: "egg-timer", repo: "egg-timer", live: "https://soheil-aghayani.github.io/egg-timer/", meta: "Mini interaction", detail: "A whimsical interactive egg timer that turns choosing breakfast into a tiny, playful experience." },
        { title: "dodge-game", repo: "dodge-game", meta: "Arcade experiment", detail: "Ashfall Embers Trial: a PyQt5 arcade survival game about dodging falling blocks, hazards, and abnormal events." },
        { title: "pahlavan", repo: "pahlavan", live: "https://soheil-aghayani.github.io/pahlavan/", meta: "Musical web", detail: "An atmospheric 3D musical manuscript inspired by Persian mythology, epic storytelling, and immersive web audio." },
        { title: "x-clone", repo: "x-clone", meta: "Java client", detail: "A native JavaFX social client inspired by X, backed by a shared Java API and Turso/libSQL." },
        { title: "iriswa", repo: "iriswa", live: "https://soheil-aghayani.github.io/iriswa/", meta: "Publishing system", detail: "A static publishing system and website for the Iranian Solid Waste Management Association." },
        { title: "Terminal", repo: "Terminal", live: "https://agseyl.ir/", meta: "This portfolio", detail: "The bilingual terminal portfolio itself: a public research studio for environmental systems, software, and selected evidence." }
      ]
    },
    research: {
      title: "Questions I follow.",
      description: "Environmental systems, waste valorization, biofuel, life cycle thinking, and the tools around them.",
      items: [
        { title: "Waste cooking oil to biofuel", meta: "Thesis", period: "2024 / PRESENT", detail: "A study of transesterification using a catalyst synthesized from waste seashells." },
        { title: "Waste systems and life cycle thinking", meta: "Research direction", period: "2025 / 2026", detail: "Looking at how materials, energy, and decisions move through environmental systems." },
        { title: "Conference writing", meta: "Selected record", period: "2023 / 2025", detail: "A growing body of work on landfill gas, biomass resources, municipal waste, and cleaner processes." }
      ]
    },
    education: {
      title: "The route so far.",
      description: "A civil engineering foundation moving toward environmental research and computational tools.",
      items: [
        { title: "MSc Environmental Engineering (in progress)", meta: "University of Tehran · 2024-present", detail: "Focused on solid waste management and a thesis on waste-derived catalyst systems for biofuel." },
        { title: "BSc Civil Engineering", meta: "Shahed University", detail: "The starting point for a path that connects infrastructure, materials, and environmental responsibility." },
        { title: "Methods in progress", meta: "LCA / Python / modelling", detail: "Building a practical toolkit across LCA software, Python, environmental models, and visual explanation." }
      ]
    },
    skills: {
      title: "Tools I use.",
      description: "A working stack across software, research workflows, visual systems, and environmental methods. The list follows public work, not a keyword cloud.",
      items: [
        { title: "JavaScript / TypeScript", meta: "Web systems", detail: "Building browser tools, interactive interfaces, visual experiments, and TypeScript products." },
        { title: "Python / PyQt5", meta: "Research + desktop", detail: "Turning research workflows and small utilities into practical desktop tools and explainers." },
        { title: "React / PWA / RTL", meta: "Product interfaces", detail: "Designing responsive, bilingual experiences where content, state, and interaction stay clear." },
        { title: "SVG / UI systems", meta: "Visual tooling", detail: "Working with icons, visual generators, interface patterns, and precise small-scale graphics." },
        { title: "Java / JavaFX", meta: "Native clients", detail: "Exploring structured desktop clients, shared APIs, and data-backed application surfaces." },
        { title: "SimaPro / LandGEM", meta: "Environmental models", detail: "Using life-cycle assessment workflows and landfill-gas modelling to turn environmental questions into traceable estimates." },
        { title: "ChemDraw / OpenLCA", meta: "Research tooling", detail: "Working across chemical diagrams and open life-cycle workflows alongside environmental research." },
        { title: "LCA / waste systems", meta: "Environmental methods", detail: "Connecting software and research practice to solid waste, biofuel, life-cycle thinking, and cleaner systems." }
      ]
    },
    archive: {
      title: "The deeper record.",
      description: "Selected publications, field practice, learning records, and public recognitions for people who want to look closer.",
      items: [
        { title: "12 publications", meta: "4 journal / 8 conf.", detail: "A concise view of four journal papers and eight conference papers, with selected public records linked below." },
        { title: "Field practice", meta: "HSE / R&D / construction", detail: "Technical practice across HSE training, energy-efficient building research and construction supervision for industrial systems." },
        { title: "Research recognition", meta: "University of Tehran / Dec 2025", detail: "A certificate of appreciation from the 26th Exhibition of Research, Technology, and Tech-Market Achievements." },
        { title: "2 verified courses", meta: "LCA / sustainable regions", detail: "Two verified learning records covering life-cycle assessment, SimaPro, sustainable planning, and regional principles." },
        { title: "COP29 delegation", meta: "Baku / Nov 2024", detail: "A public record of participation in the COP29 summit delegation, kept here as part of the wider professional archive." },
        { title: "Field notes", meta: "Coffpen / public writing", href: publicWritingUrl, detail: "A separate public writing space for short stories, series, and reflective notes: the quieter side of the studio." }
      ]
    }
  },
  fa: {
    build: {
      title: "چیزهایی که می‌سازم.",
      description: "{{projectCount}} پروژه‌ی عمومی در زمینه‌ی ابزارهای پژوهشی، رابط‌ها، ابزارهای کاربردی، آزمایش‌ها و نرم‌افزارهای بازیگوشانه. بورد کل سیگنال را نشان می‌دهد؛ اینجا می‌توانی نزدیک‌تر نگاه کنی.",
      items: [
        { title: "پرتفولیو", meta: "استودیوی شخصی", detail: "نمونه‌کاری زنده که پژوهش محیط‌زیست، معماری نرم‌افزار، آزمایش‌ها و سیستم‌های بصری را کنار هم می‌آورد." },
        { title: "آزمایشگاه پسماند جامد", meta: "سیستم آزمایشگاه", detail: "راهنمایی قابل جست‌وجو و کاربردی برای ایمنی آزمایشگاه‌های شیمی، محیط‌زیست و کاتالیز." },
        { title: "اسکالر پلاس", meta: "ابزار پژوهشی", detail: "جعبه‌ابزاری رایگان برای جست‌وجوی پژوهشگر، پروفایل‌ها، قالب‌بندی ارجاع، علم‌سنجی و خروجی گرفتن." },
        { title: "هاب پروفایل سهیل", meta: "هاب معرفی", detail: "هاب دوزبانه‌ی گیت‌هاب برای معرفی یک مهندس محیط‌زیست، پژوهشگر پایداری و سازنده‌ی نرم‌افزار." },
        { title: "مگ‌ایران پلاس", meta: "ابزار دانشگاهی", detail: "ابزاری فارسی برای نتایج جست‌وجوی مگیران، قالب‌بندی ارجاع و خروجی کتاب‌نامه برای ورد." },
        { title: "سیولیکا پلاس", meta: "ابزار دانشگاهی", detail: "ابزاری فارسی برای پروفایل پژوهشگران سیولیکا، اطلاعات هم‌نویسندگان، قالب‌بندی ارجاع و کتاب‌نامه‌ی ورد." },
        { title: "سوئیت طراحی", meta: "فضای کار خلاق", detail: "فضای کاری مرورگری بدون نیاز به ساخت برای نمودارها، مولدهای بصری، ابزارهای فنی و کار سریع خلاقانه." },
        { title: "اس‌وی‌جی اسکرپر", meta: "کارگاه آیکون", detail: "کارگاه آیکون SVG با ظاهر کروم برای جست‌وجو، شخصی‌سازی، استخراج و دانلود گروهی آیکون‌ها." },
        { title: "کاف‌پن", meta: "فضای نوشتن", detail: "فضایی فارسی برای داستان کوتاه، مجموعه‌داستان و یادداشت‌های تأملی؛ جایی که قهوه با قلم ملاقات می‌کند." },
        { title: "دویچلی", meta: "پی‌دبلیو‌ای زبان", detail: "فلش‌کارت متمرکز آلمانی برای Menschen A1.1 با مرور تطبیقی، تمرین، واژه‌بانک شخصی و همگام‌سازی." },
        { title: "گیمیفای گاردن", meta: "باغ روزانه", detail: "آپرِسیتی؛ باغی روزانه و راست‌به‌چپ برای قدم‌های کوچک، رشد قابل مشاهده و پیشرفت بدون فشار." },
        { title: "نصب‌کننده‌ی فونت", meta: "ابزار دسکتاپ", detail: "مدیر کتابخانه‌ی فونت با PyQt5 و ظاهر ترمینال، همراه با پیش‌نمایش، جست‌وجو، پاک‌سازی، پشتیبان‌گیری و نصب امن." },
        { title: "ان‌سی‌بی‌آی", meta: "توضیح پژوهشی", detail: "توضیح‌دهنده‌ای بصری و تعاملی برای مسیر‌یابی در ابزارها، پایگاه‌های داده و جریان‌های BLAST ان‌سی‌بی‌آی." },
        { title: "دنیای دستور غذا", meta: "دسکتاپ بازیگوش", detail: "دنیایی مرورگری با الهام از macOS، همراه با Finder، Safari، دستور غذا، موسیقی و تجربه‌ای بازیگوشانه." },
        { title: "تایمر تخم‌مرغ", meta: "تعامل کوچک", detail: "تایمر تعاملی و خیال‌انگیزی که انتخاب صبحانه را به یک تجربه‌ی کوچک و بازیگوش تبدیل می‌کند." },
        { title: "بازی داج", meta: "آزمایش آرکید", detail: "Ashfall Embers Trial؛ بازی بقای آرکیدی با PyQt5 درباره‌ی جاخالی دادن از بلوک‌ها، خطرها و رویدادهای غیرعادی." },
        { title: "پهلوان", meta: "وب موسیقایی", detail: "دستنوشته‌ای موسیقایی و سه‌بعدی با الهام از اسطوره‌شناسی فارسی، روایت حماسی و صدای فراگیر وب." },
        { title: "کلون ایکس", meta: "کلاینت جاوا", detail: "کلاینت اجتماعی بومی JavaFX با الهام از X که به یک API جاوا و Turso/libSQL متصل است." },
        { title: "ایریسوا", meta: "سیستم انتشار", detail: "سیستم انتشار ایستا و وب‌سایت انجمن مدیریت پسماند جامد ایران." },
        { title: "ترمینال", meta: "این پرتفولیو", detail: "خودِ پرتفولیوی ترمینال دوزبانه؛ استودیویی عمومی برای سیستم‌های محیط‌زیستی، نرم‌افزار و شواهد منتخب." }
      ]
    },
    research: {
      title: "سؤال‌هایی که دنبال می‌کنم.",
      description: "سیستم‌های محیط‌زیستی، ارزش‌آفرینی از پسماند، سوخت زیستی، تفکر چرخه‌ی عمر و ابزارهای اطراف آن‌ها.",
      items: [
        { title: "روغن پخت‌وپز تا سوخت زیستی", meta: "پایان‌نامه", period: "۱۴۰۳ / اکنون", detail: "مطالعه‌ی ترانس‌استریفیکاسیون با استفاده از کاتالیستی که از پوسته‌ی دورریختنی‌ی صدف ساخته شده است." },
        { title: "سیستم‌های پسماند و چرخه‌ی عمر", meta: "مسیر پژوهش", period: "۱۴۰۴ / ۱۴۰۵", detail: "بررسی حرکت مواد، انرژی و تصمیم‌ها درون سیستم‌های محیط‌زیستی." },
        { title: "نوشتن مقاله‌های کنفرانسی", meta: "بخشی از آرشیو", period: "۱۴۰۲ / ۱۴۰۴", detail: "مجموعه‌ای رو به رشد درباره‌ی گاز دفنگاه، منابع زیست‌توده، پسماند شهری و فرایندهای پاک‌تر." }
      ]
    },
    education: {
      title: "مسیر تا اینجا.",
      description: "پایه‌ای در مهندسی عمران که به سمت پژوهش محیط‌زیست و ابزارهای محاسباتی حرکت کرده است.",
      items: [
        { title: "کارشناسی ارشد مهندسی محیط‌زیست (در حال تکمیل)", meta: "دانشگاه تهران · ۱۴۰۳ تا امروز", detail: "با تمرکز بر مدیریت پسماند و پایان‌نامه‌ای درباره‌ی سیستم‌های کاتالیستی حاصل از پسماند برای سوخت زیستی." },
        { title: "کارشناسی مهندسی عمران", meta: "دانشگاه شاهد", detail: "نقطه‌ی شروع مسیری که زیرساخت، مواد و مسئولیت محیط‌زیستی را به هم وصل می‌کند." },
        { title: "روش‌هایی که در حال توسعه‌اند", meta: "ارزیابی چرخه‌ی عمر / پایتون / مدل‌سازی", detail: "ساختن جعبه‌ابزاری عملی از نرم‌افزارهای ارزیابی چرخه‌ی عمر، پایتون، مدل‌های محیط‌زیستی و توضیح بصری." }
      ]
    },
    skills: {
      title: "ابزارهایی که استفاده می‌کنم.",
      description: "جعبه‌ابزاری در حال کار میان نرم‌افزار، جریان‌های پژوهشی، سیستم‌های بصری و روش‌های محیط‌زیستی؛ برآمده از کارهای عمومی، نه فهرستی از کلیدواژه‌ها.",
      items: [
        { title: "جاوااسکریپت / تایپ‌اسکریپت", meta: "سیستم‌های وب", detail: "ساخت ابزارهای مرورگری، رابط‌های تعاملی، آزمایش‌های بصری و محصولات تایپ‌اسکریپتی." },
        { title: "پایتون / PyQt5", meta: "پژوهش و دسکتاپ", detail: "تبدیل جریان‌های پژوهشی و ابزارهای کوچک به برنامه‌های دسکتاپ و توضیح‌دهنده‌های کاربردی." },
        { title: "React / PWA / RTL", meta: "رابط‌های محصول", detail: "طراحی تجربه‌های دوزبانه و واکنش‌گرا که محتوا، وضعیت و تعامل را روشن نگه می‌دارند." },
        { title: "SVG / سیستم‌های رابط", meta: "ابزارهای بصری", detail: "کار با آیکون‌ها، مولدهای بصری، الگوهای رابط و گرافیک‌های دقیق در مقیاس کوچک." },
        { title: "Java / JavaFX", meta: "کلاینت‌های بومی", detail: "بررسی کلاینت‌های دسکتاپ ساختاریافته، APIهای مشترک و سطوح کاربردی متصل به داده." },
        { title: "SimaPro / LandGEM", meta: "مدل‌های محیط‌زیستی", detail: "کار با جریان‌های ارزیابی چرخه‌ی عمر و مدل‌سازی گاز دفنگاه برای تبدیل پرسش‌های محیط‌زیستی به برآوردهای قابل‌ردیابی." },
        { title: "ChemDraw / OpenLCA", meta: "ابزارهای پژوهشی", detail: "کار میان ترسیم‌های شیمیایی و جریان‌های باز ارزیابی چرخه‌ی عمر در کنار پژوهش محیط‌زیست." },
        { title: "ارزیابی چرخه‌ی عمر / پسماند", meta: "روش‌های محیط‌زیستی", detail: "وصل کردن نرم‌افزار و تجربه‌ی پژوهشی به پسماند جامد، سوخت زیستی، تفکر چرخه‌ی عمر و سیستم‌های پاک‌تر." }
      ]
    },
    archive: {
      title: "سابقه‌ی عمیق‌تر.",
      description: "مقاله‌ها، تجربه‌ی حرفه‌ای، سابقه‌های آموزشی و تقدیرنامه‌های عمومی برای کسانی که می‌خواهند دقیق‌تر نگاه کنند.",
      items: [
        { title: "۱۲ مقاله", meta: "۴ ژورنال / ۸ کنفرانس", detail: "نمایی فشرده از چهار مقاله‌ی ژورنالی و هشت مقاله‌ی کنفرانسی؛ چند رکورد عمومی منتخب در ادامه لینک شده‌اند." },
        { title: "تجربه‌ی حرفه‌ای", meta: "HSE / تحقیق‌وتوسعه / ساخت", detail: "تجربه‌ی فنی در آموزش HSE، پژوهش ساختمان‌های کم‌مصرف و نظارت بر ساخت سامانه‌های صنعتی." },
        { title: "تقدیر پژوهشی", meta: "دانشگاه تهران / آذر ۱۴۰۴", detail: "گواهی تقدیر از بیست‌وششمین نمایشگاه دستاوردهای پژوهش، فناوری و فن‌بازار دانشگاه تهران." },
        { title: "۲ دوره‌ی تأییدشده", meta: "چرخه‌ی عمر / منطقه‌ی پایدار", detail: "دو سابقه‌ی آموزشی تأییدشده درباره‌ی ارزیابی چرخه‌ی عمر، سیمَپرو، برنامه‌ریزی پایدار و اصول منطقه‌ای." },
        { title: "هیئت COP29", meta: "باکو / نوامبر ۱۴۰۳", detail: "سابقه‌ی عمومی حضور در هیئت اجلاس COP29 که به‌عنوان بخشی از آرشیو حرفه‌ای نگه داشته شده است." },
        { title: "یادداشت‌های میدانی", meta: "کاف‌پن / نوشتن عمومی", href: publicWritingUrl, detail: "فضایی عمومی و جدا برای داستان کوتاه، مجموعه‌داستان و یادداشت‌های تأملی؛ سویه‌ی آرام‌تر استودیو." }
      ]
    }
  }
};

/* One catalog powers the project list, routes, board signals, search, and GitHub enrichment. */
const portfolioCatalog = content.en.build.items.map((item, index) => ({
  index,
  repo: item.repo,
  live: item.live || "",
  en: item,
  fa: content.fa.build.items[index] || item,
})).filter((record) => record.repo);

const projectRepositorySlugs = portfolioCatalog.map(({ repo }) => repo);
const githubUsername = "Soheil-Aghayani";
const githubMetadataCacheKey = "soheil-studio-github-metadata-v3";
const githubMetadataCacheTtl = 1000 * 60 * 60;
const githubMetadata = new Map();
let githubSyncState = "idle";

const relatedProjectMap = {
  skills: [
    [0, 6, 7, 9],
    [1, 11, 15],
    [0, 9, 10],
    [6, 7],
    [17],
    [1, 18],
  ],
  research: [
    [1],
    [1, 18],
    [2, 4, 5],
  ],
};

const projectRelationGroups = Object.freeze([
  Object.freeze(["Terminal", "Portfolio", "Soheil-Aghayani", "Design-Suite"]),
  Object.freeze(["ScholarPulse", "MagIranPlus", "CivilicaPulse", "NCBI"]),
  Object.freeze(["Solid-Waste-Laboratory", "IRISWA", "NCBI"]),
  Object.freeze(["Design-Suite", "svg-scrapper", "font-installer", "x-clone"]),
  Object.freeze(["Coffpen", "Deutschly", "Gamify-Garden", "food-recipe", "egg-timer", "dodge-game", "pahlavan"]),
]);

const publicEvidenceLinks = Object.freeze({
  scholar: "https://scholar.google.com/citations?user=bnprOf8AAAAJ&hl=en",
  biomass: "https://jpoll.ut.ac.ir/article_105139.html",
  landfill: "https://aet.irost.ir/article_1686.html",
  transfer: "https://jpoll.ut.ac.ir/article_101760.html",
  lcaCourse: "https://coursera.org/verify/TSN51X42BCZR",
  sustainableCourse: "https://www.coursera.org/account/accomplishments/verify/97ENWJ7STLNH",
});

/* Verified public Scholar records feed the archive and structured data from one source. */
const scholarPublicationRecords = Object.freeze([
  {
    href: publicEvidenceLinks.biomass,
    year: "2026",
    venue: "Pollution",
    citations: 2,
    doi: "10.22059/poll.2025.393545.2928",
    en: {
      title: "Assessment of Biomass Resources in Iran and Worldwide: Diversity Analysis in Rural Areas with a Focus on Municipal Solid Waste and Livestock Manure",
      meta: "Pollution · 2026 · Aghayani et al. · 2 citations · DOI 10.22059/poll.2025.393545.2928",
    },
    fa: {
      title: "ارزیابی منابع زیست‌توده در ایران و جهان: تحلیل تنوع در نواحی روستایی با تمرکز بر پسماند جامد شهری و کود دام",
      meta: "Pollution · ۲۰۲۶ · Aghayani و همکاران · ۲ استناد · DOI 10.22059/poll.2025.393545.2928",
    },
  },
  {
    href: publicEvidenceLinks.landfill,
    year: "2026",
    venue: "Advances in Environmental Technology",
    citations: 0,
    en: {
      title: "Assessment of Landfill Gas Production in Saveh City Using the LandGEM Model: A Comprehensive Analysis",
      meta: "Advances in Environmental Technology · 2026 · Mollasalehi et al. · indexed record",
    },
    fa: {
      title: "ارزیابی تولید گاز دفنگاه در شهر ساوه با استفاده از مدل LandGEM: تحلیلی جامع",
      meta: "Advances in Environmental Technology · ۲۰۲۶ · Mollasalehi و همکاران · رکورد نمایه‌شده",
    },
  },
  {
    href: publicEvidenceLinks.transfer,
    year: "2025",
    venue: "Pollution",
    citations: 1,
    doi: "10.22059/poll.2025.388834.2751",
    en: {
      title: "Siting a Waste Transfer Station in District 6 of Karaj Municipality to Reduce Pollution",
      meta: "Pollution · 2025 · Samiee-Zafarghandi & Aghayani · 1 citation · DOI 10.22059/poll.2025.388834.2751",
    },
    fa: {
      title: "مکان‌یابی ایستگاه انتقال پسماند در منطقه‌ی ۶ شهرداری کرج برای کاهش آلودگی",
      meta: "Pollution · ۲۰۲۵ · Samiee-Zafarghandi و آقایانی · ۱ استناد · DOI 10.22059/poll.2025.388834.2751",
    },
  },
]);

const scholarEvidence = Object.fromEntries(
  ["en", "fa"].map((language) => [
    language,
    scholarPublicationRecords.map((record) => ({
      ...record[language],
      href: record.href,
      sourceKey: "detail.scholarRecord",
      citation: `${record[language].title}. ${record[language].meta}. ${record.href}`,
    })),
  ]),
);

const archiveEvidence = {
  en: [
    [
      { title: "4 journal papers", meta: "2025-2026 / selected record" },
      { title: "8 conference papers", meta: "2023-2025 / selected record" },
      { title: "Google Scholar profile", meta: "3 indexed papers · h-index 1 · public snapshot", href: publicEvidenceLinks.scholar },
      ...scholarEvidence.en,
      { title: "Biofuel production from biomass by transesterification", meta: "National conference record · 2025" },
      { title: "Pharmaceutical-waste management strategies", meta: "National conference record · 2025" },
      { title: "Textile-industry pollution assessment", meta: "National conference record · 2024" },
      { title: "Steel-industry pollution review", meta: "National conference record · 2024" },
    ],
    [
      { title: "Arvin Sarouj Pay", meta: "HSE / energy-efficient buildings · 2024-2025" },
      { title: "Sedna", meta: "Factory construction supervision · 2022-2024" },
    ],
    [
      { title: "Certificate of Appreciation", meta: "26th Research, Technology & Tech-Market Exhibition · Dec 2025" },
    ],
    [
      { title: "Life Cycle Assessment", meta: "University of Michigan · 35 hours", href: publicEvidenceLinks.lcaCourse },
      { title: "Sustainable Regional Principles", meta: "Johns Hopkins University · 7 hours", href: publicEvidenceLinks.sustainableCourse },
    ],
    [
      { title: "COP29 Summit Delegation", meta: "Baku, Azerbaijan · Nov 2024" },
    ],
  ],
  fa: [
    [
      { title: "۴ مقاله‌ی ژورنالی", meta: "۱۴۰۴-۱۴۰۵ / رکورد منتخب" },
      { title: "۸ مقاله‌ی کنفرانسی", meta: "۱۴۰۲-۱۴۰۴ / رکورد منتخب" },
      { title: "پروفایل گوگل اسکالر", meta: "۳ مقاله‌ی نمایه‌شده · h-index برابر ۱ · snapshot عمومی", href: publicEvidenceLinks.scholar },
      ...scholarEvidence.fa,
      { title: "تولید سوخت زیستی از زیست‌توده با ترانس‌استریفیکاسیون", meta: "رکورد کنفرانسی ملی · ۱۴۰۴" },
      { title: "راهبردهای مدیریت پسماند دارویی", meta: "رکورد کنفرانسی ملی · ۱۴۰۴" },
      { title: "ارزیابی آلاینده‌های صنعت نساجی", meta: "رکورد کنفرانسی ملی · ۱۴۰۳" },
      { title: "مرور آلاینده‌های صنعت فولاد", meta: "رکورد کنفرانسی ملی · ۱۴۰۳" },
    ],
    [
      { title: "Arvin Sarouj Pay", meta: "HSE / ساختمان‌های کم‌مصرف · ۱۴۰۳-۱۴۰۴" },
      { title: "Sedna", meta: "نظارت بر ساخت کارخانه · ۱۴۰۱-۱۴۰۳" },
    ],
    [
      { title: "گواهی تقدیر", meta: "بیست‌وششمین نمایشگاه پژوهش، فناوری و فن‌بازار · آذر ۱۴۰۴" },
    ],
    [
      { title: "ارزیابی چرخه‌ی عمر", meta: "دانشگاه میشیگان · ۳۵ ساعت", href: publicEvidenceLinks.lcaCourse },
      { title: "اصول منطقه‌ی پایدار", meta: "دانشگاه جانز هاپکینز · ۷ ساعت", href: publicEvidenceLinks.sustainableCourse },
    ],
    [
      { title: "هیئت اجلاس COP29", meta: "باکو، جمهوری آذربایجان · نوامبر ۱۴۰۳" },
    ],
  ],
};

const researchEvidence = {
  en: [
    [
      { title: "Master's thesis", meta: "University of Tehran · Environmental Engineering" },
      { title: "Waste cooking oil to biofuel", meta: "Transesterification / waste-shell catalyst" },
    ],
    [
      { title: "Biomass resources and waste-to-energy", meta: "Co-authored research · 2025-2026", href: publicEvidenceLinks.biomass, citation: scholarEvidence.en[0].citation },
      { title: "Landfill-gas and methane modelling", meta: "Saveh case study · LandGEM · 2025-2026", href: publicEvidenceLinks.landfill, citation: scholarEvidence.en[1].citation },
    ],
    [
      { title: "Municipal solid-waste transfer-station design", meta: "Karaj Municipality District 6 · 2024", href: publicEvidenceLinks.transfer, citation: scholarEvidence.en[2].citation },
      { title: "Conference writing", meta: "Biofuel, pharmaceutical, textile and steel systems" },
    ],
  ],
  fa: [
    [
      { title: "پایان‌نامه‌ی کارشناسی ارشد", meta: "دانشگاه تهران · مهندسی محیط‌زیست" },
      { title: "روغن پخت‌وپز تا سوخت زیستی", meta: "ترانس‌استریفیکاسیون / کاتالیست پوسته‌ی صدف" },
    ],
    [
      { title: "منابع زیست‌توده و سوخت از پسماند", meta: "پژوهش مشترک · ۱۴۰۴-۱۴۰۵", href: publicEvidenceLinks.biomass, citation: scholarEvidence.fa[0].citation },
      { title: "مدل‌سازی گاز دفنگاه و متان", meta: "مطالعه‌ی ساوه · LandGEM · ۱۴۰۴-۱۴۰۵", href: publicEvidenceLinks.landfill, citation: scholarEvidence.fa[1].citation },
    ],
    [
      { title: "طراحی ایستگاه انتقال پسماند شهری", meta: "منطقه‌ی ۶ شهرداری کرج · ۱۴۰۳", href: publicEvidenceLinks.transfer, citation: scholarEvidence.fa[2].citation },
      { title: "نوشتن مقاله‌های کنفرانسی", meta: "سوخت زیستی، پسماند دارویی، نساجی و فولاد" },
    ],
  ],
};

const detailEvidenceSources = {
  archive: archiveEvidence,
  research: researchEvidence,
};

const publicArtifacts = Object.freeze({
  research: Object.freeze({
    0: [
      {
        src: "assets/thesis-infographic.jpg",
        labelKey: "detail.artifactLabel",
        altKey: "detail.artifactAlt",
        captionKey: "detail.artifactCaption",
      },
      {
        src: "assets/thesis-ftir-peaks.png",
        labelKey: "detail.ftirPeaksLabel",
        altKey: "detail.ftirPeaksAlt",
        captionKey: "detail.ftirPeaksCaption",
      },
      {
        src: "assets/thesis-ftir-library-search.png",
        labelKey: "detail.ftirSearchLabel",
        altKey: "detail.ftirSearchAlt",
        captionKey: "detail.ftirSearchCaption",
      },
    ],
  }),
});

function updatePortfolioStructuredData() {
  const structuredData = document.getElementById("portfolioStructuredData");
  if (!structuredData) return;

  const projectItems = portfolioCatalog.map((record, index) => {
    const repositoryUrl = `https://github.com/${githubUsername}/${record.repo}`;
    const githubRecord = githubMetadata.get(record.repo.toLocaleLowerCase());
    const projectItem = {
      "@type": "SoftwareSourceCode",
      name: record.en.title,
      description: record.en.detail,
      codeRepository: repositoryUrl,
      url: record.live || repositoryUrl,
      author: { "@id": "https://agseyl.ir/#person" },
      sameAs: [repositoryUrl, ...(record.live ? [record.live] : [])],
    };

    if (githubRecord?.language) projectItem.programmingLanguage = githubRecord.language;
    if (githubRecord?.topics?.length) projectItem.keywords = githubRecord.topics;
    if (githubRecord?.license) projectItem.license = githubRecord.license;
    if (githubRecord?.updatedAt) projectItem.dateModified = githubRecord.updatedAt;

    return {
      "@type": "ListItem",
      position: index + 1,
      item: projectItem,
    };
  });

  const researchItems = scholarPublicationRecords.map((record, index) => {
    const scholarlyArticle = {
      "@type": "ScholarlyArticle",
      name: record.en.title,
      url: record.href,
      sameAs: [record.href, ...(record.doi ? [`https://doi.org/${record.doi}`] : [])],
      datePublished: record.year,
      isPartOf: { "@type": "Periodical", name: record.venue },
      author: { "@id": "https://agseyl.ir/#person" },
      inLanguage: "en",
    };

    if (record.doi) {
      scholarlyArticle.identifier = {
        "@type": "PropertyValue",
        propertyID: "DOI",
        value: record.doi,
      };
    }

    return {
      "@type": "ListItem",
      position: index + 1,
      item: scholarlyArticle,
    };
  });

  structuredData.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://agseyl.ir/#public-work",
    name: "Public work by Soheil Aghayani",
    url: "https://agseyl.ir/",
    isPartOf: { "@id": "https://agseyl.ir/#website" },
    about: { "@id": "https://agseyl.ir/#person" },
    image: { "@id": "https://agseyl.ir/#thesis-artifact" },
    mainEntity: {
      "@type": "ItemList",
      name: "Public software projects",
      numberOfItems: projectItems.length,
      itemListElement: projectItems,
    },
    hasPart: {
      "@type": "ItemList",
      name: "Selected public research records",
      numberOfItems: researchItems.length,
      itemListElement: researchItems,
    },
    subjectOf: {
      "@type": "CreativeWork",
      "@id": "https://agseyl.ir/#thesis",
      name: "Waste cooking oil to biodiesel thesis",
      description: "Research on transesterification using a catalyst synthesized from waste seashells.",
      author: { "@id": "https://agseyl.ir/#person" },
      image: { "@id": "https://agseyl.ir/#thesis-artifact" },
    },
  });
}

function projectRepositoryUrl(section, itemIndex) {
  if (section !== "build") return "";
  const slug = projectRecord(itemIndex)?.repo;
  return slug ? `https://github.com/Soheil-Aghayani/${slug}` : "";
}

function projectLiveUrl(section, itemIndex) {
  if (section !== "build") return "";
  return portfolioCatalog[itemIndex]?.live || "";
}

function projectRecord(itemIndex) {
  return portfolioCatalog[itemIndex] || null;
}

function githubUpdatedTimestamp(itemIndex) {
  const timestamp = Date.parse(githubRecordFor(itemIndex)?.updatedAt || "");
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function githubStarCount(itemIndex) {
  const stars = Number(githubRecordFor(itemIndex)?.stars);
  return Number.isFinite(stars) ? stars : -1;
}

function projectGithubSummary(itemIndex) {
  const record = githubRecordFor(itemIndex);
  if (!record) return "";

  const stars = Number(record.stars);
  return [
    record.language || "",
    Number.isFinite(stars) ? `★ ${localizeDigits(stars)}` : "",
  ].filter(Boolean).join(" · ");
}

function projectGithubAriaLabel(summary) {
  return translate("projects.githubMetaAria", { summary });
}

function sortProjectEntries(entries) {
  if (projectSortMode === "catalog") return entries;

  return [...entries].sort((left, right) => {
    if (projectSortMode === "updated") {
      return githubUpdatedTimestamp(right.index) - githubUpdatedTimestamp(left.index) || left.index - right.index;
    }

    if (projectSortMode === "stars") {
      return githubStarCount(right.index) - githubStarCount(left.index) || left.index - right.index;
    }

    return normalizeSearchText(left.item.title).localeCompare(normalizeSearchText(right.item.title)) || left.index - right.index;
  });
}

function readGithubMetadataCache() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(githubMetadataCacheKey) || "null");
    if (!saved || Date.now() - saved.savedAt > githubMetadataCacheTtl || !Array.isArray(saved.records)) return null;
    return saved.records;
  } catch {
    return null;
  }
}

function saveGithubMetadataCache(records) {
  try {
    window.localStorage.setItem(githubMetadataCacheKey, JSON.stringify({ savedAt: Date.now(), records }));
  } catch {
    // The static catalog remains authoritative when storage is unavailable.
  }
}

function applyGithubMetadata(records) {
  records.forEach((record) => {
    if (!record?.repo) return;
    githubMetadata.set(record.repo.toLocaleLowerCase(), record);
  });
}

function githubRecordFor(itemIndex) {
  const repo = projectRecord(itemIndex)?.repo;
  return repo ? githubMetadata.get(repo.toLocaleLowerCase()) : null;
}

function githubSearchTerms(itemIndex) {
  const record = githubRecordFor(itemIndex);
  if (!record) return [];

  return [record.language, record.license, ...(record.topics || [])].filter(Boolean);
}

function formatGithubDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(currentLang === "fa" ? "fa-IR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function renderGithubSignal(itemIndex) {
  const record = githubRecordFor(itemIndex);
  const project = projectRecord(itemIndex);
  if (!project) return "";

  const stats = record
    ? [
      [translate("detail.githubLanguage"), record.language || translate("detail.notAvailable")],
      [translate("detail.githubStars"), localizeDigits(record.stars)],
      [translate("detail.githubForks"), localizeDigits(record.forks)],
      [translate("detail.githubUpdated"), formatGithubDate(record.updatedAt) || translate("detail.notAvailable")],
      [translate("detail.githubLicense"), record.license || translate("detail.notAvailable")],
    ]
    : [];
  const topics = record?.topics?.filter(Boolean).slice(0, 6) || [];
  const remainingTopicCount = Math.max((record?.topics?.length || 0) - topics.length, 0);
  const topicText = topics.length
    ? `${topics.join(" / ")}${remainingTopicCount ? ` / +${remainingTopicCount}` : ""}`
    : translate("detail.notAvailable");

  return `
    <section class="detail-github-signal" data-github-signal="${itemIndex}" aria-label="${escapeHtml(translate("detail.githubData"))}">
      <div class="detail-github-header">
        <span class="detail-github-label">${escapeHtml(translate("detail.githubData"))}</span>
        <span class="detail-github-source">${escapeHtml(translate("detail.githubSource"))}</span>
      </div>
      <div class="detail-github-grid">
        ${stats.length
          ? stats.map(([label, value]) => `
            <div class="detail-github-stat">
              <small>${escapeHtml(label)}</small>
              <strong>${escapeHtml(value)}</strong>
            </div>
          `).join("")
          : `<span class="detail-github-pending">${escapeHtml(["idle", "loading"].includes(githubSyncState) ? translate("detail.githubLoading") : translate("detail.githubUnavailable"))}</span>`}
      </div>
      ${record ? `
        <div class="detail-github-topics">
          <small>${escapeHtml(translate("detail.githubTopics"))}</small>
          <span>${escapeHtml(topicText)}</span>
        </div>
      ` : ""}
    </section>
  `;
}

function refreshGithubMetadataUI() {
  document.querySelectorAll("[data-github-signal]").forEach((element) => {
    const itemIndex = Number(element.dataset.githubSignal);
    const replacement = renderGithubSignal(itemIndex);
    if (replacement) element.outerHTML = replacement.trim();
  });

  document.querySelectorAll('[data-section-list="build"] [data-item]').forEach((button) => {
    const itemIndex = Number(button.dataset.item);
    const item = content[currentLang].build.items[itemIndex];
    if (item) button.dataset.search = sectionSearchText("build", itemIndex, item);
  });
  document.querySelectorAll("[data-project-github-meta]").forEach((element) => {
    const summary = projectGithubSummary(Number(element.dataset.projectGithubMeta));
    element.textContent = summary;
    element.setAttribute("aria-label", projectGithubAriaLabel(summary));
    element.hidden = !summary;
  });
  if (currentSection === "build" && currentItem === null && projectSortMode !== "catalog") {
    const activeElement = document.activeElement;
    const restoreFilterFocus = activeElement?.matches("[data-section-filter='build']");
    const restoreSortFocus = activeElement?.matches("[data-project-sort]");
    renderSection("build");
    window.requestAnimationFrame(() => {
      const selector = restoreSortFocus ? "[data-project-sort]" : restoreFilterFocus ? "[data-section-filter='build']" : "";
      if (selector) document.querySelector(selector)?.focus({ preventScroll: true });
    });
  } else if (currentSection === "build") {
    filterSectionList("build", sectionFilterQueries.build || "");
  }
  if (commandPaletteOpen) renderCommandResults();
  updatePortfolioStructuredData();
}

async function syncGithubMetadata() {
  const cachedRecords = readGithubMetadataCache();
  if (cachedRecords) {
    applyGithubMetadata(cachedRecords);
    githubSyncState = "ready";
    refreshGithubMetadataUI();
  }

  if (!navigator.onLine) {
    githubSyncState = cachedRecords ? "ready" : "unavailable";
    refreshGithubMetadataUI();
    return;
  }

  githubSyncState = "loading";
  refreshGithubMetadataUI();

  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`, {
      headers: { Accept: "application/vnd.github+json" },
      credentials: "omit",
    });
    if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);

    const repositories = await response.json();
    const knownRepositories = new Set(projectRepositorySlugs.map((slug) => slug.toLocaleLowerCase()));
    const records = repositories
      .filter((repository) => repository?.name && knownRepositories.has(repository.name.toLocaleLowerCase()))
      .map((repository) => ({
        repo: repository.name,
        language: repository.language || "SOURCE",
        stars: Number(repository.stargazers_count) || 0,
        forks: Number(repository.forks_count) || 0,
        updatedAt: repository.pushed_at || repository.updated_at || "",
        license: repository.license?.spdx_id || repository.license?.name || "",
        topics: Array.isArray(repository.topics) ? repository.topics : [],
      }));

    saveGithubMetadataCache(records);
    githubMetadata.clear();
    applyGithubMetadata(records);
    githubSyncState = "ready";
  } catch {
    githubSyncState = cachedRecords ? "ready" : "unavailable";
  }

  refreshGithubMetadataUI();
}

function externalIconMarkup() {
  return '<svg class="external-icon" aria-hidden="true" focusable="false"><use href="#pixel-external"></use></svg>';
}

function relatedProjectItems(section, itemIndex) {
  if (section === "build") {
    const project = projectRecord(itemIndex);
    if (!project) return [];

    const groupPeers = new Set(
      projectRelationGroups
        .filter((group) => group.includes(project.repo))
        .flat()
        .filter((repo) => repo !== project.repo),
    );
    const currentGithubRecord = githubRecordFor(itemIndex);
    const currentTopics = new Set((currentGithubRecord?.topics || []).map((topic) => topic.toLocaleLowerCase()));
    const currentLanguage = currentGithubRecord?.language?.toLocaleLowerCase() || "";
    const rankedProjects = portfolioCatalog
      .map((candidate, candidateIndex) => {
        if (candidateIndex === itemIndex) return null;

        const candidateGithubRecord = githubMetadata.get(candidate.repo.toLocaleLowerCase());
        const candidateTopics = new Set((candidateGithubRecord?.topics || []).map((topic) => topic.toLocaleLowerCase()));
        const sharedTopicCount = [...currentTopics].filter((topic) => candidateTopics.has(topic)).length;
        const sameLanguage = Boolean(currentLanguage && candidateGithubRecord?.language?.toLocaleLowerCase() === currentLanguage);
        const score = (groupPeers.has(candidate.repo) ? 5 : 0) + (sharedTopicCount * 3) + (sameLanguage ? 1 : 0);

        return score > 0 ? { projectIndex: candidateIndex, score } : null;
      })
      .filter(Boolean)
      .sort((left, right) => right.score - left.score || left.projectIndex - right.projectIndex)
      .slice(0, 3);

    return rankedProjects.map(({ projectIndex }) => ({
      projectIndex,
      item: content[currentLang].build.items[projectIndex],
    })).filter(({ item }) => item);
  }

  const projectIndexes = relatedProjectMap[section]?.[itemIndex] || [];

  return projectIndexes
    .map((projectIndex) => ({
      projectIndex,
      item: content[currentLang].build.items[projectIndex],
    }))
    .filter(({ item }) => item);
}

function detailEvidenceItems(section, itemIndex) {
  return detailEvidenceSources[section]?.[currentLang]?.[itemIndex] || [];
}

function detailCitationItems(section, itemIndex) {
  return detailEvidenceItems(section, itemIndex)
    .map((evidence) => evidence.citation)
    .filter(Boolean);
}

function renderEvidenceRow(evidence) {
  const content = `
    <strong>${escapeHtml(evidence.title)}</strong>
    <span class="detail-evidence-meta">
      ${evidence.sourceKey ? `<span class="detail-evidence-source">${escapeHtml(translate(evidence.sourceKey))}</span>` : ""}
      <small>${escapeHtml(evidence.meta)}</small>
      ${evidence.href ? externalIconMarkup() : ""}
    </span>
  `;

  if (!evidence.href) return `<div class="detail-evidence-row">${content}</div>`;

  return `
    <a class="detail-evidence-row" href="${escapeRawHtml(evidence.href)}" target="_blank" rel="noreferrer">
      ${content}
    </a>
  `;
}

function renderCitationCopyAction(citations) {
  if (!citations.length) return "";

  const plural = citations.length > 1;
  const labelKey = plural ? "detail.copyCitations" : "detail.copyCitation";
  const ariaKey = plural ? "detail.copyCitationsAria" : "detail.copyCitationAria";
  return `
    <button class="detail-link detail-copy-button" type="button" data-action="copy-citations" data-citations="${escapeRawHtml(JSON.stringify(citations))}" aria-label="${escapeHtml(translate(ariaKey))}">
      <span class="contact-link-label"><svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#pixel-download"></use></svg><span>${escapeHtml(translate(labelKey))}</span></span>
    </button>
  `;
}

function renderPublicArtifact(section, itemIndex) {
  const artifactRecords = publicArtifacts[section]?.[itemIndex];
  if (!artifactRecords) return "";
  const artifacts = Array.isArray(artifactRecords)
    ? artifactRecords
    : [{ src: artifactRecords, labelKey: "detail.artifactLabel", altKey: "detail.artifactAlt", captionKey: "detail.artifactCaption" }];

  return `
    <div class="detail-artifacts">
      ${artifacts.map(({ src, labelKey, altKey, captionKey }) => `
        <figure class="detail-artifact">
          <div class="detail-artifact-topline">
            <span>${escapeHtml(translate(labelKey))}</span>
            <span class="detail-artifact-action"><svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#pixel-expand"></use></svg>${escapeHtml(translate("detail.artifactOpen"))}</span>
          </div>
          <button class="detail-artifact-open" type="button" data-action="artifact-open" data-artifact-src="${escapeRawHtml(src)}" data-artifact-alt="${escapeRawHtml(translate(altKey))}" data-artifact-caption="${escapeRawHtml(translate(captionKey))}" aria-label="${escapeRawHtml(translate("detail.artifactOpenAria"))}">
            <span class="detail-artifact-frame">
              <img src="${escapeRawHtml(src)}" alt="${escapeRawHtml(translate(altKey))}" loading="lazy" decoding="async" />
            </span>
          </button>
          <figcaption>${escapeHtml(translate(captionKey))}</figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

const languageStorageKey = "soheil-studio-language";

function readSavedLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    return savedLanguage === "fa" ? "fa" : "en";
  } catch {
    return "en";
  }
}

function readInitialLanguage() {
  const requestedLanguage = new URL(window.location.href).searchParams.get("lang");
  return requestedLanguage === "fa" || requestedLanguage === "en"
    ? requestedLanguage
    : readSavedLanguage();
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // The interface still works when storage is unavailable.
  }
}

let currentLang = readInitialLanguage();
let currentMode = "home";
let currentSection = "home";
let currentItem = null;
let indexOpen = false;
let helpOpen = false;
let commandPaletteOpen = false;
let surfaceMaximized = false;
const filterableSections = new Set(["build", "skills", "archive"]);
const projectSortModes = new Set(["catalog", "updated", "stars", "alpha"]);

function projectSortModeFromLocation() {
  const requestedSort = new URL(window.location.href).searchParams.get("sort");
  return projectSortModes.has(requestedSort) ? requestedSort : "catalog";
}

function projectFilterFromLocation() {
  return new URL(window.location.href).searchParams.get("filter")?.trim() || "";
}

let projectSortMode = projectSortModeFromLocation();
const initialProjectFilter = projectFilterFromLocation();
const sectionFilterQueries = { build: initialProjectFilter, skills: "", archive: "" };

function syncProjectSortHistory() {
  const nextUrl = new URL(window.location.href);
  if (projectSortMode === "catalog") nextUrl.searchParams.delete("sort");
  else nextUrl.searchParams.set("sort", projectSortMode);

  window.history.replaceState({
    ...(window.history.state || {}),
    projectSort: projectSortMode,
  }, "", nextUrl);
}

function syncProjectFilterHistory() {
  const nextUrl = new URL(window.location.href);
  const query = sectionFilterQueries.build.trim();
  if (query) nextUrl.searchParams.set("filter", query);
  else nextUrl.searchParams.delete("filter");

  window.history.replaceState({
    ...(window.history.state || {}),
    projectFilter: query,
  }, "", nextUrl);
}

function syncLanguageHistory() {
  const nextUrl = new URL(window.location.href);
  if (currentLang === "fa") nextUrl.searchParams.set("lang", "fa");
  else nextUrl.searchParams.delete("lang");

  window.history.replaceState({
    ...(window.history.state || {}),
    language: currentLang,
  }, "", nextUrl);
}

let indexReturnFocus = null;
let helpReturnFocus = null;
let commandPaletteReturnFocus = null;
let commandQuery = "";
let commandSelectedIndex = 0;
let commandResultEntries = [];
let profilePreviewOpen = false;
let profilePreviewReturnFocus = null;
let activeProfile = "general";
let artifactPreviewOpen = false;
let artifactPreviewReturnFocus = null;
let surfaceMaximizedScrollY = 0;

const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

function normalizeSearchText(value) {
  return String(value)
    .replace(/[۰-۹]/g, (digit) => String(persianDigits.indexOf(digit)))
    .toLocaleLowerCase();
}

function localizeDigits(value) {
  const text = String(value);
  if (currentLang !== "fa") return text;
  return text.replace(/\d/g, (digit) => persianDigits[Number(digit)]);
}

const root = document.documentElement;
const descriptionMeta = document.querySelector('meta[name="description"]');
const openGraphTitleMeta = document.querySelector('meta[property="og:title"]');
const openGraphDescriptionMeta = document.querySelector('meta[property="og:description"]');
const openGraphLocaleMeta = document.querySelector('meta[property="og:locale"]');
const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
const homeView = document.querySelector('[data-view-panel="home"]');
const surface = document.getElementById("studioSurface");
const surfaceModeLabel = document.getElementById("surfaceModeLabel");
const surfaceStatus = document.getElementById("surfaceStatus");
const surfaceCenter = document.getElementById("surfaceCenter");
const surfaceContent = document.getElementById("surfaceContent");
const surfaceHomeButton = document.getElementById("surfaceHomeButton");
const surfaceHelpButton = document.getElementById("surfaceHelpButton");
const commandToggle = document.getElementById("commandToggle");
const surfaceMaximizeButton = document.getElementById("surfaceMaximizeButton");
const surfaceMaximizeIcon = document.getElementById("surfaceMaximizeIcon");
const surfaceMaximizeLabel = document.getElementById("surfaceMaximizeLabel");
const surfaceHelpLabel = document.querySelector(".surface-help-label");
const surfaceHelp = document.getElementById("surfaceHelp");
const surfaceCommandForm = document.getElementById("surfaceCommandForm");
const surfaceCommandInput = document.getElementById("surfaceCommandInput");
const surfaceCommandStatus = document.getElementById("surfaceCommandStatus");
const departureBoard = document.getElementById("departureBoard");
const indexPanel = document.getElementById("indexPanel");
const indexToggle = document.getElementById("indexToggle");
const indexNav = document.getElementById("indexNav");
const languageToggle = document.getElementById("languageToggle");
const surfaceRailTree = document.getElementById("surfaceRailTree");
const boardRowsContainer = document.getElementById("boardRows");
let boardRows = [];
let railEntries = [];
const boardClock = document.getElementById("boardClock");
const boardProjectCount = document.getElementById("boardProjectCount");
const boardLiveToggle = document.getElementById("boardLiveToggle");
const boardLiveLabel = document.getElementById("boardLiveLabel");
const studioShell = document.querySelector(".studio-shell");
const commandPalette = document.getElementById("commandPalette");
const commandPaletteClose = document.getElementById("commandPaletteClose");
const commandSearch = document.getElementById("commandSearch");
const commandResults = document.getElementById("commandResults");
const studioToast = document.getElementById("studioToast");
const printProfile = document.getElementById("printProfile");
const profilePreview = document.getElementById("profilePreview");
const profilePreviewClose = document.getElementById("profilePreviewClose");
const profilePreviewSwitch = document.getElementById("profilePreviewSwitch");
const profilePreviewContent = document.getElementById("profilePreviewContent");
const profilePreviewPrint = document.getElementById("profilePreviewPrint");
const profilePreviewDownload = document.getElementById("profilePreviewDownload");
const profilePreviewMarkdown = document.getElementById("profilePreviewMarkdown");
const artifactPreview = document.getElementById("artifactPreview");
const artifactPreviewClose = document.getElementById("artifactPreviewClose");
const artifactPreviewImage = document.getElementById("artifactPreviewImage");
const artifactPreviewCaption = document.getElementById("artifactPreviewCaption");
let toastTimer = null;
let surfaceCommandStatusKey = "surface.commandReady";
let surfaceCommandStatusValues = {};
const surfaceCommandHistory = [];
let surfaceCommandHistoryIndex = -1;

const projectDepartures = [
  { value: "PORTFOLIO", faValue: "پرتفولیو", signal: "LIVE", faSignal: "زنده" },
  { value: "SOLID WASTE LAB", faValue: "آزمایشگاه پسماند جامد", signal: "SIGNAL", faSignal: "سیگنال" },
  { value: "SCHOLAR PULSE", faValue: "اسکالر پلاس", signal: "SIGNAL", faSignal: "سیگنال" },
  { value: "MAGIRAN PLUS", faValue: "مگ‌ایران پلاس", signal: "SIGNAL", faSignal: "سیگنال" },
  { value: "CIVILICA PLUS", faValue: "سیولیکا پلاس", signal: "SIGNAL", faSignal: "سیگنال" },
  { value: "DESIGN SUITE", faValue: "سوئیت طراحی", signal: "OPEN", faSignal: "باز" },
  { value: "SVG SCRAPPER", faValue: "اس‌وی‌جی اسکرپر", signal: "INDEXED", faSignal: "نمایه" },
  { value: "COFFPEN", faValue: "کاف‌پن", signal: "OPEN", faSignal: "باز" },
  { value: "DEUTSCHLY", faValue: "دویچلی", signal: "ROUTE", faSignal: "مسیر" },
  { value: "GAMIFY GARDEN", faValue: "گیمیفای گاردن", signal: "ACTIVE", faSignal: "فعال" },
  { value: "FONT INSTALLER", faValue: "نصب‌کننده‌ی فونت", signal: "TOOL", faSignal: "ابزار" },
  { value: "NCBI", faValue: "ان‌سی‌بی‌آی", signal: "SIGNAL", faSignal: "سیگنال" },
  { value: "FOOD RECIPE", faValue: "دنیای دستور غذا", signal: "OPEN", faSignal: "باز" },
  { value: "EGG TIMER", faValue: "تایمر تخم‌مرغ", signal: "PLAY", faSignal: "بازی" },
  { value: "DODGE GAME", faValue: "بازی داج", signal: "PLAY", faSignal: "بازی" },
  { value: "PAHLAVAN", faValue: "پهلوان", signal: "OPEN", faSignal: "باز" },
  { value: "X CLONE", faValue: "کلون ایکس", signal: "BUILD", faSignal: "ساخت" },
  { value: "IRISWA", faValue: "ایریسوا", signal: "LIVE", faSignal: "زنده" },
  { value: "TERMINAL", faValue: "ترمینال", signal: "LIVE", faSignal: "زنده" },
  { value: "SOHEIL AGHAYANI", faValue: "هاب پروفایل سهیل", signal: "GATE OPEN", faSignal: "درگاه باز" },
];

const boardCycles = {
  en: [
    {
      values: projectDepartures.map((project) => project.value),
      states: projectDepartures.map((project) => project.signal),
    },
    {
      values: ["BIOFUEL SYSTEMS", "SCHOLARLY DATA", "WASTE SYSTEMS", "LIFE CYCLE"],
      states: ["ACTIVE", "SIGNAL", "ACTIVE", "TRACE"],
    },
    {
      values: ["TEHRAN / ENV. ENG.", "SHAHED / CIVIL ENG.", "METHODS / LCA"],
      states: ["ROUTE", "ROUTE", "BUILD"],
    },
    {
      values: ["JAVASCRIPT", "PYTHON", "TYPESCRIPT", "RTL / PWA", "SVG / UI"],
      states: ["INDEXED", "INDEXED", "INDEXED", "INDEXED", "INDEXED"],
    },
    {
      values: ["PUBLICATIONS", "CERTIFICATES", "FIELD NOTES"],
      states: ["OPEN", "INDEXED", "OPEN"],
    },
  ],
  fa: [
    {
      values: projectDepartures.map((project) => project.faValue),
      states: projectDepartures.map((project) => project.faSignal),
    },
    {
      values: ["سیستم‌های سوخت زیستی", "داده‌های پژوهشی", "سیستم‌های پسماند", "چرخه‌ی عمر"],
      states: ["فعال", "سیگنال", "فعال", "ردیابی"],
    },
    {
      values: ["تهران / محیط‌زیست", "شاهد / عمران", "روش‌ها / چرخه‌ی عمر"],
      states: ["مسیر", "مسیر", "ساخت"],
    },
    {
      values: ["جاوااسکریپت", "پایتون", "تایپ‌اسکریپت", "راست‌به‌چپ / PWA", "SVG / رابط"],
      states: ["نمایه", "نمایه", "نمایه", "نمایه", "نمایه"],
    },
    {
      values: ["مقاله‌ها", "گواهی‌ها", "یادداشت‌های میدانی"],
      states: ["باز", "نمایه", "باز"],
    },
  ],
};

let boardCursor = 0;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let boardRotationTimer = null;
let boardPaused = false;
let boardPointerActive = false;
let boardFocusActive = false;

function displayBoardCharacter(character) {
  return character === " " ? "\u00a0" : character;
}

function getBoardCycles() {
  return boardCycles[currentLang] || boardCycles.en;
}

function getBoardCycleIndex(rowIndex, cursor = boardCursor) {
  return Math.floor((cursor + boardRows.length - 1 - rowIndex) / boardRows.length);
}

function renderBoardValue(value, text, maxLength) {
  value.textContent = "";

  if (currentLang === "fa") {
    const word = document.createElement("span");
    word.className = "flap-word";
    word.setAttribute("aria-hidden", "true");
    word.textContent = text;
    value.append(word);
    return;
  }

  for (let index = 0; index < maxLength; index += 1) {
    const slot = document.createElement("span");
    const character = Array.from(text)[index] || " ";
    slot.className = "flap-char";
    slot.dataset.character = character;
    slot.setAttribute("aria-hidden", "true");
    slot.textContent = displayBoardCharacter(character);
    value.append(slot);
  }
}

function initializeBoardValue(row, rowIndex) {
  const value = row.querySelector("[data-board-value]");
  const cycle = getBoardCycles()[rowIndex];
  const initialText = cycle.values[0];
  const maxLength = Math.max(
    ...Object.values(boardCycles).flatMap((languageCycles) =>
      languageCycles[rowIndex].values.map((item) => Array.from(item).length),
    ),
  );

  value.dataset.maxLength = String(maxLength);
  value.dataset.value = initialText;
  value.setAttribute("aria-label", localizeDigits(initialText));
  renderBoardValue(value, initialText, maxLength);
}

function setBoardValue(value, nextText) {
  const previousText = value.dataset.value || "";
  const maxLength = Number(value.dataset.maxLength || 0);

  value.dataset.value = nextText;
  value.setAttribute("aria-label", localizeDigits(nextText));

  if (currentLang === "fa") {
    const word = value.querySelector(".flap-word");
    if (!word) {
      renderBoardValue(value, nextText, maxLength);
      return;
    }

    word.classList.remove("is-flipping");
    word.textContent = nextText;
    if (previousText !== nextText) {
      void word.offsetWidth;
      word.classList.add("is-flipping");
    }
    return;
  }

  let slots = [...value.querySelectorAll(".flap-char")];
  if (!slots.length) {
    renderBoardValue(value, nextText, maxLength);
    slots = [...value.querySelectorAll(".flap-char")];
  }

  const previousCharacters = Array.from(previousText);
  const nextCharacters = Array.from(nextText);

  slots.forEach((slot, index) => {
    const previousCharacter = previousCharacters[index] || " ";
    const nextCharacter = nextCharacters[index] || " ";
    const delay = index * 24;

    slot.classList.remove("is-flipping");
    slot.style.setProperty("--flap-delay", `${delay}ms`);
    slot.textContent = displayBoardCharacter(nextCharacter);
    slot.dataset.character = nextCharacter;

    if (previousCharacter !== nextCharacter) {
      void slot.offsetWidth;
      slot.classList.add("is-flipping");
      window.setTimeout(() => slot.classList.remove("is-flipping"), 460 + delay);
    }
  });
}

function updateBoardClock() {
  if (!boardClock) return;

  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  boardClock.textContent = localizeDigits(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
  boardClock.dateTime = now.toISOString();
}

function updateBoardProjectCount() {
  if (!boardProjectCount) return;
  boardProjectCount.textContent = `${localizeDigits(projectDepartures.length)} ${translate("board.countSuffix")}`;
}

function updateBoardLiveToggle() {
  if (!boardLiveToggle || !boardLiveLabel) return;

  boardLiveLabel.textContent = translate(boardPaused ? "board.paused" : "board.live");
  boardLiveToggle.setAttribute("aria-pressed", String(boardPaused));
  boardLiveToggle.setAttribute(
    "aria-label",
    translate(boardPaused ? "board.resumeAria" : "board.pauseAria"),
  );
  boardLiveToggle.classList.toggle("is-paused", boardPaused);
}

function toggleBoardPause() {
  boardPaused = !boardPaused;
  updateBoardLiveToggle();
  syncBoardRotation();
}

function rotateDepartureBoard() {
  if (!boardRows.length) return;

  const rowIndex = boardCursor % boardRows.length;
  const cycleIndex = getBoardCycleIndex(rowIndex);
  const cycle = getBoardCycles()[rowIndex];
  const row = boardRows[rowIndex];
  const value = row.querySelector("[data-board-value]");
  const state = row.querySelector(".board-state");
  const nextIndex = (cycleIndex + 1) % cycle.values.length;

  setBoardValue(value, cycle.values[nextIndex]);
  state.textContent = cycle.states[nextIndex];
  boardCursor += 1;
}

function stopBoardRotation() {
  if (boardRotationTimer === null) return;
  window.clearInterval(boardRotationTimer);
  boardRotationTimer = null;
}

function syncBoardRotation() {
  if (
    document.hidden
    || reducedMotionQuery.matches
    || currentMode !== "home"
    || indexOpen
    || helpOpen
    || commandPaletteOpen
    || boardPaused
    || boardPointerActive
    || boardFocusActive
  ) {
    stopBoardRotation();
    return;
  }

  if (boardRotationTimer === null) {
    boardRotationTimer = window.setInterval(rotateDepartureBoard, 1800);
  }
}

function refreshBoardLanguage() {
  if (!boardRows.length || !boardRows[0].querySelector("[data-board-value]")) return;

  const cycles = getBoardCycles();
  boardRows.forEach((row, rowIndex) => {
    const cycle = cycles[rowIndex];
    const cycleIndex = getBoardCycleIndex(rowIndex);
    const nextIndex = cycleIndex % cycle.values.length;
    const value = row.querySelector("[data-board-value]");
    const state = row.querySelector(".board-state");

    setBoardValue(value, cycle.values[nextIndex]);
    state.textContent = cycle.states[nextIndex];
  });
}

function translate(key, extraValues = {}) {
  const template = translations[currentLang][key] || key;
  const values = {
    projectCount: projectRepositorySlugs.length,
    terminalFileCount: railEntries.length,
    sectionCount: boardRows.length,
    shortcutRange: `0-${Math.max(railEntries.length - 1, 0)}`,
    ...extraValues,
  };

  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{{${name}}}`, String(value)),
    template,
  );
}

function escapeRawHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeHtml(value) {
  return escapeRawHtml(localizeDigits(value));
}

const contactLinks = [
  { key: "github", href: "https://github.com/Soheil-Aghayani", icon: "pixel-github", external: true },
  { key: "portfolio", href: "https://agseyl.ir/", icon: "pixel-person", external: true },
  { key: "email", href: "mailto:soheyl.aghayani+github@gmail.com", icon: "pixel-envelope", external: false },
  { key: "orcid", href: "https://orcid.org/0009-0008-4889-920X", icon: "pixel-research", external: true },
  { key: "linkedin", href: "https://www.linkedin.com/in/AgSeyl", icon: "pixel-linkedin", external: true },
  { key: "telegram", href: "https://t.me/agseyl", icon: "pixel-telegram", external: true },
  { key: "scholar", href: "https://scholar.google.com/citations?user=bnprOf8AAAAJ&hl=en", icon: "pixel-scholar", external: true },
];

function renderContactLinks() {
  return contactLinks.map(({ key, href, icon, external }) => `
    <a class="contact-link" href="${escapeRawHtml(href)}"${external ? ' target="_blank" rel="noreferrer"' : ""}>
      <span class="contact-link-label">
        <svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#${icon}"></use></svg>
        <span>${escapeHtml(translate(`contact.${key}`))}</span>
      </span>
      ${externalIconMarkup()}
    </a>
  `).join("");
}

const profileOutputDefinitions = [
  {
    id: "general",
    commandId: "print",
    contactKey: "generalProfile",
    icon: "pixel-archive",
    switchLabelKey: "profile.general",
    paletteTitleKey: "palette.actionPrint",
    paletteMetaKey: "palette.actionPrintMeta",
    searchKeys: ["cv", "resume", "dossier", "print", "pdf"],
  },
  {
    id: "academic",
    commandId: "print-academic",
    contactKey: "academicProfile",
    icon: "pixel-research",
    switchLabelKey: "contact.academicProfile",
    paletteTitleKey: "palette.actionPrintAcademic",
    paletteMetaKey: "palette.actionPrintAcademicMeta",
    searchKeys: ["academic", "research", "university", "cv", "resume"],
  },
  {
    id: "technical",
    commandId: "print-technical",
    contactKey: "technicalProfile",
    icon: "pixel-project",
    switchLabelKey: "contact.technicalProfile",
    paletteTitleKey: "palette.actionPrintTechnical",
    paletteMetaKey: "palette.actionPrintTechnicalMeta",
    searchKeys: ["software", "projects", "developer", "cv", "resume"],
  },
];

function renderProfilePreviewSwitch(profile = activeProfile) {
  if (!profilePreviewSwitch) return;

  profilePreviewSwitch.innerHTML = `
    <span class="profile-preview-switch-label">${escapeHtml(translate("profile.switchLabel"))}</span>
    <div class="profile-preview-switch-options" role="group" aria-label="${escapeHtml(translate("profile.switchAria"))}">
      ${profileOutputDefinitions.map(({ id, icon, switchLabelKey }) => `
        <button class="profile-preview-switch-button${id === profile ? " is-active" : ""}" type="button" data-action="profile-switch" data-profile="${id}" aria-pressed="${id === profile}">
          <svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#${icon}"></use></svg>
          <span>${escapeHtml(translate(switchLabelKey))}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderProfileActions() {
  const profiles = profileOutputDefinitions.filter(({ contactKey }) => contactKey);

  return `
    <section class="contact-profile-actions" aria-label="${escapeHtml(translate("contact.profileOutputs"))}">
      <p class="contact-profile-label">${escapeHtml(translate("contact.profileOutputs"))}</p>
      <div class="contact-profile-list">
        ${profiles.map(({ id, contactKey, icon }) => `
          <button class="contact-profile-button" type="button" data-action="profile-preview" data-profile="${id}" aria-label="${escapeHtml(translate(`contact.${contactKey}Aria`))}">
            <span class="contact-profile-button-label">
              <svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#${icon}"></use></svg>
              <span>${escapeHtml(translate(`contact.${contactKey}`))}</span>
            </span>
            <small>${escapeHtml(translate("contact.profilePrintMeta"))}</small>
          </button>
        `).join("")}
        <button class="contact-profile-button contact-save-button" type="button" data-action="contact-vcard" aria-label="${escapeHtml(translate("contact.saveContactAria"))}">
          <span class="contact-profile-button-label">
            <svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#pixel-envelope"></use></svg>
            <span>${escapeHtml(translate("contact.saveContact"))}</span>
          </span>
          <small>VCARD</small>
        </button>
      </div>
    </section>
  `;
}

function formatContentText(value) {
  return String(value).replaceAll("{{projectCount}}", localizeDigits(projectRepositorySlugs.length));
}

function currentContent(section = currentSection) {
  return content[currentLang][section];
}

const viewDefinitions = [
  {
    view: "home",
    icon: "pixel-person",
    labelKey: "nav.home",
    kindKey: "palette.kindSection",
    isSection: false,
    rail: { views: ["home", "education"], titleKey: "surface.railReadme", metaKey: "surface.railReadmeMeta" },
    render: renderHomeSurface,
  },
  {
    view: "build",
    icon: "pixel-project",
    labelKey: "nav.build",
    kindKey: "palette.kindProject",
    isSection: true,
    rail: { views: ["build"], titleKey: "surface.railSignals", metaKey: "surface.railSignalsMeta" },
    board: { rowClass: "board-row-projects", openKey: "board.openBuild" },
  },
  {
    view: "research",
    icon: "pixel-research",
    labelKey: "nav.research",
    kindKey: "palette.kindResearch",
    isSection: true,
    rail: { views: ["research", "archive"], titleKey: "surface.railFieldNotes", metaKey: "surface.railFieldNotesMeta" },
    board: { rowClass: "board-row-research", openKey: "board.openResearch" },
  },
  {
    view: "education",
    icon: "pixel-classical-building",
    labelKey: "nav.education",
    kindKey: "palette.kindEducation",
    isSection: true,
    board: { rowClass: "board-row-education", openKey: "board.openEducation" },
  },
  {
    view: "skills",
    icon: "pixel-tools",
    labelKey: "nav.skills",
    kindKey: "palette.kindSkill",
    isSection: true,
    rail: { views: ["skills"], titleKey: "surface.railSkills", metaKey: "surface.railSkillsMeta" },
    board: { rowClass: "board-row-skills", openKey: "board.openSkills" },
  },
  {
    view: "archive",
    icon: "pixel-archive",
    labelKey: "nav.archive",
    kindKey: "palette.kindArchive",
    isSection: true,
    board: { rowClass: "board-row-archive", openKey: "board.openArchive" },
  },
  {
    view: "contact",
    icon: "pixel-envelope",
    labelKey: "nav.contact",
    kindKey: "palette.kindContact",
    isSection: false,
    rail: { views: ["contact"], titleKey: "surface.railContact", metaKey: "surface.railContactMeta" },
    render: renderContact,
  },
];

function renderTerminalNavigation() {
  if (!indexNav || !surfaceRailTree || !boardRowsContainer) return;

  indexNav.innerHTML = viewDefinitions
    .filter(({ view }) => view !== "contact")
    .map(({ view, labelKey }, indexPosition) => {
      const number = String(indexPosition).padStart(2, "0");
      return `
        <button type="button" data-view="${view}">
          <span data-number="${number}">${number}</span>
          <strong data-i18n="${labelKey}"></strong>
        </button>
      `;
    })
    .join("");

  surfaceRailTree.innerHTML = viewDefinitions
    .filter(({ rail }) => rail)
    .map(({ view, rail }, railPosition) => {
      const number = String(railPosition).padStart(2, "0");
      return `
        <button class="surface-rail-entry${view === "home" ? " is-active" : ""}" type="button" data-view="${view}" data-rail-view="${rail.views.join(" ")}">
          <span data-number="${number}">${number}</span>
          <div>
            <strong data-i18n="${rail.titleKey}"></strong>
            <small data-i18n="${rail.metaKey}"></small>
          </div>
        </button>
      `;
    })
    .join("");

  boardRowsContainer.innerHTML = viewDefinitions
    .filter(({ board }) => board)
    .map(({ view, icon, labelKey, board }, rowIndex) => {
      const cycle = getBoardCycles()[rowIndex] || { values: [""], states: [""] };
      const number = String(rowIndex + 1).padStart(2, "0");
      return `
        <button class="board-row ${board.rowClass}" type="button" data-view="${view}" data-i18n-aria="${board.openKey}" data-board-row="${rowIndex}">
          <span class="board-number" data-number="${number}">${number}</span>
          <span class="board-label">
            <svg class="board-label-icon" aria-hidden="true" focusable="false"><use href="#${icon}"></use></svg>
            <span class="board-label-text" data-i18n="${labelKey}"></span>
          </span>
          <span class="board-value" data-board-value>${cycle.values[0]}</span>
          <span class="board-state">${cycle.states[0]}</span>
        </button>
      `;
    })
    .join("");

  boardRows = [...boardRowsContainer.querySelectorAll("[data-board-row]")];
  railEntries = [...surfaceRailTree.querySelectorAll("[data-rail-view]")];
}

renderTerminalNavigation();
updatePortfolioStructuredData();

const terminalShortcutViews = Object.fromEntries(
  viewDefinitions
    .filter(({ rail }) => rail)
    .map(({ view }, railPosition) => [String(railPosition), view]),
);

const sectionIconIds = Object.fromEntries(viewDefinitions.map(({ view, icon }) => [view, icon]));
const viewLabelKeys = Object.fromEntries(viewDefinitions.map(({ view, labelKey }) => [view, labelKey]));
const commandSectionViews = viewDefinitions.map(({ view }) => view);
const commandKindKeys = Object.fromEntries(viewDefinitions.map(({ view, kindKey }) => [view, kindKey]));

function viewLabel(view) {
  return translate(viewLabelKeys[view]);
}

const terminalCommandViews = Object.freeze({
  home: "home",
  readme: "home",
  profile: "home",
  projects: "build",
  project: "build",
  signals: "build",
  research: "research",
  "field notes": "research",
  "field-notes": "research",
  education: "education",
  edu: "education",
  skills: "skills",
  stack: "skills",
  archive: "archive",
  records: "archive",
  contact: "contact",
  contacts: "contact",
});

const terminalCommandProfiles = Object.freeze({
  cv: "general",
  resume: "general",
  dossier: "general",
  general: "general",
  academic: "academic",
  "academic profile": "academic",
  "research profile": "academic",
  software: "technical",
  technical: "technical",
  developer: "technical",
  "software profile": "technical",
});

function resolveTerminalCommandView(value) {
  const query = normalizeSearchText(value).trim().replace(/\s+/g, " ");
  return terminalCommandViews[query] || null;
}

function resolveTerminalCommandProfile(value) {
  const query = normalizeSearchText(value).trim().replace(/\s+/g, " ");
  return terminalCommandProfiles[query] || null;
}

function normalizeProjectCommandKey(value) {
  return normalizeSearchText(value).replace(/[\s_\-/.]+/g, "");
}

function resolveTerminalProject(value) {
  const rawQuery = normalizeSearchText(value).trim().replace(/\s+/g, " ");
  const query = rawQuery.replace(/^(?:project|projects|repo|repository)\s+/, "").trim();
  if (!query || /^(?:project|projects|repo|repository)$/.test(query)) return null;

  const queryKey = normalizeProjectCommandKey(query);
  if (!queryKey) return null;

  const candidates = portfolioCatalog.flatMap((record, index) => {
    const labels = [
      record.repo,
      record.en.title,
      record.fa.title,
    ].map(normalizeProjectCommandKey);
    const exact = labels.some((label) => label === queryKey);
    const partial = labels.some((label) => label.includes(queryKey) || queryKey.includes(label));
    return exact || partial ? [{ index, exact }] : [];
  });

  const exactMatch = candidates.find((candidate) => candidate.exact);
  if (exactMatch) return exactMatch.index;
  return candidates.length === 1 ? candidates[0].index : null;
}

function rememberSurfaceCommand(rawCommand) {
  const command = normalizeSearchText(rawCommand).trim().replace(/\s+/g, " ");
  if (!command) return;

  if (surfaceCommandHistory.at(-1) !== command) surfaceCommandHistory.push(command);
  if (surfaceCommandHistory.length > 12) surfaceCommandHistory.shift();
  surfaceCommandHistoryIndex = -1;
}

function moveSurfaceCommandHistory(direction) {
  if (!surfaceCommandInput || !surfaceCommandHistory.length) return;

  if (direction < 0) {
    surfaceCommandHistoryIndex = surfaceCommandHistoryIndex === -1
      ? surfaceCommandHistory.length - 1
      : Math.max(surfaceCommandHistoryIndex - 1, 0);
    surfaceCommandInput.value = surfaceCommandHistory[surfaceCommandHistoryIndex];
  } else if (surfaceCommandHistoryIndex !== -1) {
    if (surfaceCommandHistoryIndex >= surfaceCommandHistory.length - 1) {
      surfaceCommandHistoryIndex = -1;
      surfaceCommandInput.value = "";
    } else {
      surfaceCommandHistoryIndex += 1;
      surfaceCommandInput.value = surfaceCommandHistory[surfaceCommandHistoryIndex];
    }
  }
}

function githubSyncStatusLabel() {
  const statusKeys = {
    loading: "surface.commandSyncLoading",
    ready: "surface.commandSyncReady",
    unavailable: "surface.commandSyncUnavailable",
  };
  return translate(statusKeys[githubSyncState] || "surface.commandSyncLoading");
}

function runSurfaceCommand(rawCommand) {
  const normalized = normalizeSearchText(rawCommand).trim().replace(/\s+/g, " ");
  if (!normalized) {
    setSurfaceCommandStatus("surface.commandReady");
    return;
  }

  const [verb, ...rest] = normalized.split(" ");
  const argument = rest.join(" ");

  if (verb === "help" || verb === "?") {
    setSurfaceCommandStatus("surface.commandHelp");
    return;
  }

  if (verb === "ls" || verb === "dir") {
    setSurfaceCommandStatus("surface.commandList");
    return;
  }

  if (verb === "history") {
    const commands = surfaceCommandHistory.slice(-5).join(" / ") || translate("surface.commandHistoryEmpty");
    setSurfaceCommandStatus("surface.commandHistory", { commands });
    return;
  }

  if (verb === "status") {
    setSurfaceCommandStatus("surface.commandStatus", {
      view: viewLabel(currentMode),
      language: currentLang === "fa" ? "فارسی" : "ENGLISH",
      sync: githubSyncStatusLabel(),
    });
    return;
  }

  if (["vcard", "vcf", "contact card", "save contact", "download contact", "download vcard"].includes(normalized)) {
    downloadContactCard();
    setSurfaceCommandStatus("surface.commandContactDownloaded");
    return;
  }

  if (verb === "sync" || verb === "refresh") {
    setSurfaceCommandStatus("surface.commandSync", { state: githubSyncStatusLabel() });
    syncGithubMetadata().then(() => {
      setSurfaceCommandStatus("surface.commandSync", { state: githubSyncStatusLabel() });
    });
    return;
  }

  if (verb === "open" || verb === "go" || verb === "cd") {
    const profile = resolveTerminalCommandProfile(argument);
    if (profile) {
      setSurfaceHelpOpen(false, { restoreFocus: false });
      openProfilePreview(profile);
      return;
    }

    const projectIndex = resolveTerminalProject(argument);
    if (projectIndex !== null) {
      setSurfaceHelpOpen(false, { restoreFocus: false });
      renderView("build", { itemIndex: projectIndex });
      setSurfaceCommandStatus("surface.commandOpenedProject", {
        project: content[currentLang].build.items[projectIndex]?.title || argument,
      });
      return;
    }

    const view = resolveTerminalCommandView(argument);
    if (!view) {
      const explicitProject = /^(?:project|projects|repo|repository)\b/.test(argument);
      setSurfaceCommandStatus(explicitProject ? "surface.commandProjectUnknown" : "surface.commandUnknown", {
        [explicitProject ? "project" : "command"]: explicitProject ? argument.replace(/^(?:project|projects|repo|repository)\s*/i, "") : normalized,
      });
      return;
    }

    setSurfaceHelpOpen(false, { restoreFocus: false });
    renderView(view);
    return;
  }

  const directProfile = resolveTerminalCommandProfile(normalized);
  if (directProfile) {
    setSurfaceHelpOpen(false, { restoreFocus: false });
    openProfilePreview(directProfile);
    return;
  }

  const directView = resolveTerminalCommandView(normalized);
  if (directView) {
    setSurfaceHelpOpen(false, { restoreFocus: false });
    renderView(directView);
    return;
  }

  const directProjectIndex = resolveTerminalProject(normalized);
  if (directProjectIndex !== null) {
    setSurfaceHelpOpen(false, { restoreFocus: false });
    renderView("build", { itemIndex: directProjectIndex });
    setSurfaceCommandStatus("surface.commandOpenedProject", {
      project: content[currentLang].build.items[directProjectIndex]?.title || normalized,
    });
    return;
  }

  if (["max", "maximize", "expand"].includes(verb)) {
    setSurfaceMaximized(true);
    setSurfaceCommandStatus("surface.commandResized", { state: translate("surface.minimize") });
    return;
  }

  if (["min", "minimize", "restore"].includes(verb)) {
    setSurfaceMaximized(false);
    setSurfaceCommandStatus("surface.commandResized", { state: translate("surface.maximize") });
    return;
  }

  if (verb === "pause" || verb === "resume") {
    const shouldPause = verb === "pause";
    if (boardPaused !== shouldPause) toggleBoardPause();
    setSurfaceCommandStatus("surface.commandBoard", { state: translate(boardPaused ? "board.paused" : "board.live") });
    return;
  }

  if (verb === "lang" || verb === "language") {
    const requestedLanguage = argument === "fa" || argument === "en" ? argument : null;
    if (!requestedLanguage || requestedLanguage !== currentLang) toggleLanguage();
    setSurfaceCommandStatus("surface.commandLanguage", { language: currentLang === "fa" ? "فارسی" : "ENGLISH" });
    return;
  }

  if (verb === "share") {
    shareCurrentRoute().then((shared) => {
      setSurfaceCommandStatus(shared ? "surface.commandShared" : "surface.commandShareFailed");
    });
    return;
  }

  setSurfaceCommandStatus("surface.commandUnknown", { command: normalized });
}

const commandActionDefinitions = [
  {
    id: "help",
    icon: "pixel-tools",
    titleKey: "palette.actionHelp",
    metaKey: "palette.actionHelpMeta",
    searchKeys: ["surface.help", "surface.helpTitle", "surface.helpPalette"],
  },
  {
    id: "language",
    icon: "pixel-classical-building",
    titleKey: "palette.actionLanguage",
    metaKey: "palette.actionLanguageMeta",
    searchKeys: ["language.switchToFa", "language.switchToEn", "header.studio"],
  },
  {
    id: "board",
    icon: "pixel-research",
    titleKey: () => boardPaused ? "palette.actionResume" : "palette.actionPause",
    metaKey: () => boardPaused ? "palette.actionResumeMeta" : "palette.actionPauseMeta",
    searchKeys: [
      "palette.actionPause",
      "palette.actionResume",
      "palette.actionPauseMeta",
      "palette.actionResumeMeta",
      "board.live",
      "board.paused",
    ],
  },
  {
    id: "terminal-size",
    icon: () => surfaceMaximized ? "pixel-collapse" : "pixel-expand",
    titleKey: () => surfaceMaximized ? "palette.actionMinimize" : "palette.actionMaximize",
    metaKey: () => surfaceMaximized ? "palette.actionMinimizeMeta" : "palette.actionMaximizeMeta",
    searchKeys: ["palette.actionMaximize", "palette.actionMinimize", "palette.actionMaximizeMeta", "palette.actionMinimizeMeta", "max", "min", "terminal"],
  },
  {
    id: "share-route",
    icon: "pixel-external",
    titleKey: "palette.actionShareRoute",
    metaKey: "palette.actionShareRouteMeta",
    searchKeys: ["palette.actionShareRoute", "palette.actionShareRouteMeta", "share", "copy", "link"],
  },
  ...profileOutputDefinitions.map(({ commandId, icon, paletteTitleKey, paletteMetaKey, searchKeys }) => ({
    id: commandId,
    icon,
    titleKey: paletteTitleKey,
    metaKey: paletteMetaKey,
    searchKeys: [paletteTitleKey, paletteMetaKey, ...searchKeys],
  })),
  {
    id: "profile-markdown",
    icon: "pixel-download",
    titleKey: "palette.actionMarkdown",
    metaKey: "palette.actionMarkdownMeta",
    searchKeys: ["palette.actionMarkdown", "palette.actionMarkdownMeta", "markdown", "md", "export", "download"],
  },
  {
    id: "contact-card",
    icon: "pixel-envelope",
    titleKey: "palette.actionContactCard",
    metaKey: "palette.actionContactCardMeta",
    searchKeys: ["palette.actionContactCard", "palette.actionContactCardMeta", "contact", "vcard", "vcf", "save"],
  },
  {
    id: "github",
    icon: "pixel-github",
    titleKey: "palette.actionGithub",
    metaKey: "palette.actionGithubMeta",
    searchKeys: ["palette.actionGithub", "palette.actionGithubMeta", "github", "source", "repositories"],
  },
  ...[
    { key: "linkedin", metaKey: "palette.actionLinkedinMeta", searchKeys: ["linkedin", "professional profile"] },
    { key: "telegram", metaKey: "palette.actionTelegramMeta", searchKeys: ["telegram", "direct line", "agseyl"] },
    { key: "scholar", metaKey: "palette.actionScholarMeta", searchKeys: ["google scholar", "papers", "citations"] },
  ].map(({ key, metaKey, searchKeys }) => {
    const contactLink = contactLinks.find((link) => link.key === key);
    return {
      id: key,
      icon: contactLink?.icon || "pixel-external",
      titleKey: `contact.${key}`,
      metaKey,
      searchKeys: [`contact.${key}`, metaKey, ...searchKeys],
    };
  }),
];

const curiosityCommandDefinition = {
  id: "about",
  icon: "pixel-person",
  titleKey: "palette.actionAbout",
  metaKey: "palette.actionAboutMeta",
  searchKeys: ["about:soheil", "about soheil", "inspect personal signal"],
};

function commandActionEntries() {
  return commandActionDefinitions.map((definition) => {
    const icon = typeof definition.icon === "function" ? definition.icon() : definition.icon;
    const titleKey = typeof definition.titleKey === "function" ? definition.titleKey() : definition.titleKey;
    const metaKey = typeof definition.metaKey === "function" ? definition.metaKey() : definition.metaKey;
    const title = translate(titleKey);
    const meta = translate(metaKey);
    const translatedSearchKeys = definition.searchKeys.flatMap((key) => [
      translations.en[key],
      translations.fa[key],
      key,
    ]);

    return {
      id: `command-action-${definition.id}`,
      type: "action",
      actionId: definition.id,
      view: null,
      itemIndex: null,
      icon,
      kindKey: "palette.kindCommand",
      title,
      meta,
      search: [title, meta, ...translatedSearchKeys].filter(Boolean).join(" "),
    };
  });
}

function curiosityCommandEntry() {
  const title = translate(curiosityCommandDefinition.titleKey);
  const meta = translate(curiosityCommandDefinition.metaKey);
  return {
    id: "command-action-about",
    type: "action",
    actionId: curiosityCommandDefinition.id,
    view: null,
    itemIndex: null,
    icon: curiosityCommandDefinition.icon,
    kindKey: "palette.kindCommand",
    title,
    meta,
    search: [title, meta, ...curiosityCommandDefinition.searchKeys].join(" "),
  };
}

function commandSectionLabel(view) {
  return viewLabel(view);
}

function commandSectionSearchText(view) {
  if (view === "home") {
    return [
      translate("nav.home"),
      translate("surface.mode"),
      translate("home.kicker"),
      translate("home.titleA"),
      translate("home.titleB"),
      translate("home.description"),
    ].join(" ");
  }

  if (view === "contact") {
    return [
      translate("nav.contact"),
      translate("contact.surfaceLabel"),
      translate("contact.title"),
      translate("contact.description"),
    ].join(" ");
  }

  const selected = currentContent(view);
  return [viewLabel(view), selected.title, selected.description].join(" ");
}

function commandEvidenceEntries() {
  return Object.entries(detailEvidenceSources).flatMap(([view, source]) => {
    const currentEvidenceGroups = source[currentLang] || [];

    return currentEvidenceGroups.flatMap((evidenceItems, itemIndex) => evidenceItems.map((evidence, evidenceIndex) => {
      const englishEvidence = source.en?.[itemIndex]?.[evidenceIndex] || evidence;
      const persianEvidence = source.fa?.[itemIndex]?.[evidenceIndex] || evidence;

      return {
        id: `command-evidence-${view}-${itemIndex}-${evidenceIndex}`,
        type: "evidence",
        view,
        itemIndex,
        icon: sectionIconIds[view] || "pixel-archive",
        kindKey: "palette.kindEvidence",
        title: evidence.title,
        meta: evidence.meta,
        search: [
          evidence.title,
          evidence.meta,
          evidence.href || "",
          englishEvidence.title,
          englishEvidence.meta,
          persianEvidence.title,
          persianEvidence.meta,
        ].join(" "),
      };
    }));
  });
}

function commandEntries() {
  const normalizedQuery = normalizeSearchText(commandQuery.trim());
  const hiddenCuriosity = normalizedQuery.includes("about") || normalizedQuery.includes("inspect");
  const sectionEntries = commandSectionViews.flatMap((view) => {
    const sectionEntry = {
      id: `command-${view}`,
      view,
      itemIndex: null,
      icon: sectionIconIds[view] || "pixel-person",
      kindKey: commandKindKeys[view],
      title: commandSectionLabel(view),
      meta: view === "home" ? translate("surface.mode") : view === "contact" ? translate("contact.surfaceLabel") : currentContent(view).title,
      search: commandSectionSearchText(view),
    };

    if (view === "home" || view === "contact") return [sectionEntry];

    const selected = currentContent(view);
    const sectionItems = selected.items.map((item, itemIndex) => {
      const englishItem = content.en[view]?.items?.[itemIndex] || item;
      const persianItem = content.fa[view]?.items?.[itemIndex] || item;
      const repository = view === "build" ? projectRepositorySlugs[itemIndex] || "" : "";
      const githubTerms = view === "build" ? githubSearchTerms(itemIndex) : [];

      return {
        id: `command-${view}-${itemIndex}`,
        view,
        itemIndex,
        icon: sectionIconIds[view],
        kindKey: commandKindKeys[view],
        title: item.title,
        meta: item.meta,
        search: [
          item.title,
          item.meta,
          item.detail,
          englishItem.title,
          englishItem.meta,
          englishItem.detail,
          persianItem.title,
          persianItem.meta,
          persianItem.detail,
          repository,
          ...githubTerms,
        ].join(" "),
      };
    });

    return [sectionEntry, ...sectionItems];
  });

  const evidenceEntries = normalizedQuery ? commandEvidenceEntries() : [];
  return [...commandActionEntries(), ...(hiddenCuriosity ? [curiosityCommandEntry()] : []), ...evidenceEntries, ...sectionEntries];
}

function syncCommandSelection() {
  if (!commandSearch || !commandResults) return;

  const resultNodes = [...commandResults.querySelectorAll("[data-command-result]")];
  resultNodes.forEach((result, index) => {
    const selected = index === commandSelectedIndex;
    result.classList.toggle("is-selected", selected);
    result.setAttribute("aria-selected", String(selected));
  });

  const selectedResult = resultNodes[commandSelectedIndex];
  if (selectedResult) {
    commandSearch.setAttribute("aria-activedescendant", selectedResult.id);
    selectedResult.scrollIntoView({ block: "nearest" });
  } else {
    commandSearch.removeAttribute("aria-activedescendant");
  }
}

function renderCommandResults() {
  if (!commandResults) return;

  const normalizedQuery = normalizeSearchText(commandQuery.trim());
  commandResultEntries = commandEntries().filter((entry) => {
    return !normalizedQuery || normalizeSearchText(entry.search).includes(normalizedQuery);
  });
  commandSelectedIndex = Math.min(commandSelectedIndex, Math.max(commandResultEntries.length - 1, 0));

  if (!commandResultEntries.length) {
    commandResults.innerHTML = `<p class="command-palette-empty" role="status">${escapeHtml(translate("palette.empty"))}</p>`;
    commandSearch?.removeAttribute("aria-activedescendant");
    return;
  }

  commandResults.innerHTML = commandResultEntries.map((entry, index) => `
    <button
      class="command-result${index === commandSelectedIndex ? " is-selected" : ""}"
      id="command-result-${index}"
      type="button"
      role="option"
      tabindex="-1"
      aria-selected="${index === commandSelectedIndex}"
      data-command-result="${index}"
    >
      <svg class="command-result-icon pixel-icon" aria-hidden="true" focusable="false"><use href="#${entry.icon}"></use></svg>
      <span class="command-result-copy">
        <strong>${escapeHtml(entry.title)}</strong>
        <small>${escapeHtml(entry.meta)}</small>
      </span>
      <span class="command-result-kind">${escapeHtml(translate(entry.kindKey))}</span>
    </button>
  `).join("");

  syncCommandSelection();
}

function renderSectionKicker(section) {
  const iconId = sectionIconIds[section];
  if (!iconId) return "";

  return `
    <div class="section-terminal-kicker" aria-hidden="true">
      <svg class="pixel-icon" focusable="false"><use href="#${iconId}"></use></svg>
    </div>
  `;
}

function applyTranslations() {
  root.lang = currentLang;
  root.dir = currentLang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = localizeDigits(translate(element.dataset.i18n));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", localizeDigits(translate(element.dataset.i18nAria)));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", localizeDigits(translate(element.dataset.i18nPlaceholder)));
  });

  document.querySelectorAll("[data-number]").forEach((element) => {
    element.textContent = localizeDigits(element.dataset.number);
  });

  document.querySelectorAll("[data-language]").forEach((element) => {
    element.classList.toggle("is-active", element.dataset.language === currentLang);
  });

  languageToggle.setAttribute(
    "aria-label",
    translate(currentLang === "en" ? "language.switchToFa" : "language.switchToEn"),
  );

  updateSurfaceHelpToggleLabel();
  updateSurfaceMaximizeControl();
  updateSurfaceCommandStatus();
  updateBoardProjectCount();
  updateBoardLiveToggle();
  refreshBoardLanguage();
  updateBoardClock();
  if (commandPaletteOpen) renderCommandResults();
  if (profilePreviewOpen) {
    renderPrintProfile(activeProfile);
    renderProfilePreviewSwitch(activeProfile);
  }
  syncProfilePreviewControls(activeProfile);
  updateDocumentTitle();
}

function syncProfilePreviewControls(profile = activeProfile) {
  const controls = [profilePreviewPrint, profilePreviewDownload, profilePreviewMarkdown];
  controls.forEach((control) => control?.setAttribute("data-profile", profile));
  profilePreviewPrint?.setAttribute("aria-label", localizeDigits(translate("profile.printAria")));
  profilePreviewDownload?.setAttribute("aria-label", localizeDigits(translate("profile.downloadAria")));
  profilePreviewMarkdown?.setAttribute("aria-label", localizeDigits(translate("profile.downloadMarkdownAria")));
}

function setSurfaceHomeButtonVisible(visible) {
  if (!surfaceHomeButton) return;
  surfaceHomeButton.hidden = !visible;
}

function setSurfaceHelpButtonVisible(visible) {
  if (!surfaceHelpButton) return;
  surfaceHelpButton.hidden = !visible;
}

function updateSurfaceHelpToggleLabel() {
  if (!surfaceHelpButton) return;

  const labelKey = helpOpen ? "surface.helpClose" : "surface.help";
  const ariaKey = helpOpen ? "surface.helpCloseAria" : "surface.helpAria";
  if (surfaceHelpLabel) surfaceHelpLabel.textContent = translate(labelKey);
  surfaceHelpButton.setAttribute("aria-label", translate(ariaKey));
}

function updateSurfaceMaximizeControl() {
  if (!surfaceMaximizeButton) return;

  const labelKey = surfaceMaximized ? "surface.minimize" : "surface.maximize";
  const ariaKey = surfaceMaximized ? "surface.minimizeAria" : "surface.maximizeAria";
  surfaceMaximizeButton.setAttribute("aria-pressed", String(surfaceMaximized));
  surfaceMaximizeButton.setAttribute("aria-label", translate(ariaKey));
  if (surfaceMaximizeLabel) surfaceMaximizeLabel.textContent = translate(labelKey);
  surfaceMaximizeIcon?.querySelector("use")?.setAttribute(
    "href",
    surfaceMaximized ? "#pixel-collapse" : "#pixel-expand",
  );
}

function setSurfaceMaximized(maximized, { restoreFocus = false } = {}) {
  const nextState = Boolean(maximized);
  const wasMaximized = surfaceMaximized;
  if (nextState && !wasMaximized) surfaceMaximizedScrollY = window.scrollY;
  surfaceMaximized = nextState;
  surface?.classList.toggle("is-maximized", surfaceMaximized);
  document.body.classList.toggle("is-terminal-maximized", surfaceMaximized);
  root.classList.toggle("is-terminal-maximized", surfaceMaximized);
  updateSurfaceMaximizeControl();

  if (wasMaximized && !surfaceMaximized) {
    const scrollY = surfaceMaximizedScrollY;
    window.requestAnimationFrame(() => window.scrollTo({ top: scrollY, left: 0, behavior: "auto" }));
  }

  if (!surfaceMaximized && restoreFocus) {
    surfaceMaximizeButton?.focus({ preventScroll: true });
  }
}

function toggleSurfaceMaximized() {
  setSurfaceMaximized(!surfaceMaximized);
}

function updateSurfaceCommandStatus() {
  if (!surfaceCommandStatus) return;
  surfaceCommandStatus.textContent = localizeDigits(translate(surfaceCommandStatusKey, surfaceCommandStatusValues));
}

function setSurfaceCommandStatus(key, values = {}) {
  surfaceCommandStatusKey = key;
  surfaceCommandStatusValues = values;
  updateSurfaceCommandStatus();
}

function setSurfaceStatus(text = "", visible = true) {
  if (!surfaceStatus) return;
  const statusText = localizeDigits(text);
  const isLongStatus = statusText.length > 16;
  surfaceStatus.textContent = statusText;
  surfaceStatus.classList.toggle("is-long", isLongStatus);
  surfaceStatus.classList.toggle("is-short", Boolean(statusText) && !isLongStatus);
  surfaceStatus.hidden = !visible;
}

function setSurfaceHelpOpen(open, { restoreFocus = false } = {}) {
  const opening = open && !helpOpen;
  if (opening) {
    const activeElement = document.activeElement;
    helpReturnFocus = activeElement instanceof HTMLElement && activeElement !== document.body
      ? activeElement
      : surfaceHelpButton;
  }

  helpOpen = open;
  if (surfaceHelp) surfaceHelp.hidden = !open;
  if (surfaceCenter) surfaceCenter.classList.toggle("is-help", open);
  if (departureBoard) departureBoard.hidden = false;
  if (surfaceHelpButton) surfaceHelpButton.setAttribute("aria-expanded", String(open));
  if (opening) {
    if (surfaceCommandInput) surfaceCommandInput.value = "";
    setSurfaceCommandStatus("surface.commandReady");
  }
  updateSurfaceHelpToggleLabel();
  syncBoardRotation();

  if (!open && restoreFocus) {
    const target = helpReturnFocus && document.contains(helpReturnFocus)
      ? helpReturnFocus
      : surfaceHelpButton;
    helpReturnFocus = null;
    target?.focus({ preventScroll: true });
    return;
  }

  if (open) {
    window.requestAnimationFrame(() => {
      if (helpOpen && surfaceHelp && !surfaceHelp.hidden) {
        surfaceHelp.focus({ preventScroll: true });
      }
    });
  }
}

function prepareSurfaceContentView(section, options = {}) {
  const {
    modeLabel = section === "contact" ? translate("contact.surfaceLabel") : viewLabel(section),
    statusText = translate("surface.activeStatus"),
  } = options;

  currentMode = section;
  currentSection = section;
  homeView.hidden = false;
  surface.dataset.mode = section;
  syncRailSelection(section);
  surface.classList.add("is-open");
  setSurfaceHomeButtonVisible(true);
  setSurfaceHelpButtonVisible(false);
  setSurfaceHelpOpen(false);
  surfaceModeLabel.textContent = modeLabel;
  setSurfaceStatus(statusText);
  surfaceCenter.hidden = true;
  surfaceContent.hidden = false;
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "fa" : "en";
  saveLanguage(currentLang);
  syncLanguageHistory();
  Object.keys(sectionFilterQueries).forEach((section) => { sectionFilterQueries[section] = ""; });
  syncProjectFilterHistory();
  applyTranslations();

  if (currentMode === "contact") renderContact();
  else if (currentItem !== null) renderDetail(currentSection, currentItem);
  else if (currentSection !== "home") renderSection(currentSection);
  else renderHomeSurface();

  syncBoardRotation();
}

function focusSurfaceContext() {
  const target = currentMode === "home"
    ? departureBoard
    : surfaceContent?.querySelector("h2") || surfaceContent;

  if (!target || target.hidden) return;

  if (target.tagName === "H2" && !target.hasAttribute("tabindex")) {
    target.tabIndex = -1;
  }

  const compactViewport = window.matchMedia("(max-width: 960px)").matches;
  if (compactViewport) {
    surface?.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: reducedMotionQuery.matches ? "auto" : "smooth",
    });
  }

  target.focus({ preventScroll: compactViewport });
}

function syncRailSelection(view) {
  indexNav?.querySelectorAll("[data-view]").forEach((control) => {
    control.classList.toggle("is-active", control.dataset.view === view);
  });

  railEntries.forEach((entry) => {
    const views = entry.dataset.railView.split(" ");
    entry.classList.toggle("is-active", views.includes(view));
  });

  boardRows.forEach((row) => {
    row.classList.toggle("is-active", row.dataset.view === view);
  });

  document.querySelectorAll("[data-view]").forEach((control) => {
    if (control.dataset.view === view) control.setAttribute("aria-current", "page");
    else control.removeAttribute("aria-current");
  });
}

function clipMetadata(value, maxLength = 160) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 3).trim()}...`;
}

function updateDocumentTitle() {
  let title;
  let description;

  if (profilePreviewOpen) {
    const definition = printProfileDefinitions[activeProfile] || printProfileDefinitions.general;
    title = `${translate(definition.labelKey)} / ${translate("print.title")}`;
    description = translate(definition.summaryKey);
  } else if (currentMode === "home") {
    title = currentLang === "fa"
      ? "سهیل آقایانی / استودیوی پژوهش شخصی"
      : "Soheil Aghayani / Quiet Research Studio";
    description = translate("home.description");
  } else if (currentMode === "contact") {
    title = currentLang === "fa"
      ? "تماس / سهیل آقایانی"
      : "Contact / Soheil Aghayani";
    description = translate("contact.description");
  } else {
    const selected = currentContent(currentMode);
    const item = currentItem === null ? null : selected.items[currentItem];
    const subject = item?.title || "";
    title = subject
      ? `${subject} / ${viewLabel(currentMode)} / Soheil Aghayani`
      : `${viewLabel(currentMode)} / Soheil Aghayani`;
    description = item ? `${item.title}. ${item.detail}` : formatContentText(selected.description);
  }

  document.title = title;
  const clippedDescription = clipMetadata(description);
  descriptionMeta?.setAttribute("content", clippedDescription);
  openGraphTitleMeta?.setAttribute("content", title);
  openGraphDescriptionMeta?.setAttribute("content", clippedDescription);
  openGraphLocaleMeta?.setAttribute("content", currentLang === "fa" ? "fa_IR" : "en_US");
  twitterTitleMeta?.setAttribute("content", title);
  twitterDescriptionMeta?.setAttribute("content", clippedDescription);
}

function renderHomeSurface() {
  currentMode = "home";
  currentSection = "home";
  currentItem = null;
  boardPointerActive = false;
  boardFocusActive = false;
  homeView.hidden = false;
  surface.dataset.mode = "home";
  syncRailSelection("home");
  surface.classList.remove("is-open");
  surfaceModeLabel.textContent = translate("surface.mode");
  setSurfaceStatus("", false);
  setSurfaceHomeButtonVisible(false);
  setSurfaceHelpButtonVisible(true);
  setSurfaceHelpOpen(false);
  surfaceCenter.hidden = false;
  surfaceContent.hidden = true;
  surfaceContent.innerHTML = "";
  updateDocumentTitle();
}

function renderContact() {
  currentItem = null;
  prepareSurfaceContentView("contact");
  surfaceContent.innerHTML = `
    <div class="contact-copy">
      <h2 id="contactTitle">${escapeHtml(translate("contact.title"))}</h2>
      <p class="plain-description">${escapeHtml(translate("contact.description"))}</p>
      <div class="contact-links">${renderContactLinks()}</div>
      ${renderProfileActions()}
    </div>
  `;
  updateDocumentTitle();
}

function showToast(message) {
  if (!studioToast) return;
  studioToast.textContent = localizeDigits(message);
  studioToast.classList.add("is-visible");
  if (toastTimer !== null) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    studioToast.classList.remove("is-visible");
    toastTimer = null;
  }, 2600);
}

function currentShareUrl() {
  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.delete("preview");
  shareUrl.searchParams.delete("cache");
  return shareUrl.toString();
}

async function copyRouteToClipboard(shareUrl) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(shareUrl);
    return;
  }

  const fallback = document.createElement("textarea");
  fallback.value = shareUrl;
  fallback.setAttribute("readonly", "true");
  fallback.style.position = "fixed";
  fallback.style.opacity = "0";
  document.body.append(fallback);
  fallback.select();
  const copied = document.execCommand("copy");
  fallback.remove();
  if (!copied) throw new Error("Clipboard unavailable");
}

async function copyCitations(citations) {
  try {
    await copyRouteToClipboard(citations.join("\n\n"));
    showToast(translate("toast.citationCopied"));
  } catch (error) {
    showToast(translate("toast.citationCopyFailed"));
  }
}

async function shareCurrentRoute() {
  const shareUrl = currentShareUrl();
  const supportsNativeShare = typeof navigator.share === "function"
    && (navigator.maxTouchPoints > 0 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent));

  try {
    if (supportsNativeShare) {
      await navigator.share({
        title: document.title,
        text: translate("home.description"),
        url: shareUrl,
      });
      showToast(translate("toast.routeShared"));
      return true;
    }

    await copyRouteToClipboard(shareUrl);
    showToast(translate("toast.routeCopied"));
    return true;
  } catch (error) {
    if (error?.name === "AbortError") return false;
    showToast(translate("toast.routeCopyFailed"));
    return false;
  }
}

const printProfileDefinitions = {
  general: {
    labelKey: "print.label",
    subtitleKey: "print.subtitle",
    summaryKey: "print.summary",
    sections: [
      { titleKey: "print.projects", source: (language) => content[language].build.items, limit: 6 },
      { titleKey: "print.research", source: (language) => content[language].research.items, limit: 3 },
      { titleKey: "print.education", source: (language) => content[language].education.items, limit: 3 },
      { titleKey: "print.experience", source: (language) => [...archiveEvidence[language][1], ...archiveEvidence[language][2]], limit: 3 },
      { titleKey: "print.skills", source: (language) => content[language].skills.items, limit: 5 },
    ],
  },
  academic: {
    labelKey: "print.academicLabel",
    subtitleKey: "print.academicSubtitle",
    summaryKey: "print.academicSummary",
    sections: [
      { titleKey: "print.research", source: (language) => content[language].research.items, limit: 3 },
      { titleKey: "print.education", source: (language) => content[language].education.items, limit: 3 },
      { titleKey: "print.evidence", source: (language) => archiveEvidence[language].flat(), limit: 8 },
      { titleKey: "print.skills", source: (language) => content[language].skills.items, limit: 4 },
    ],
  },
  technical: {
    labelKey: "print.technicalLabel",
    subtitleKey: "print.technicalSubtitle",
    summaryKey: "print.technicalSummary",
    sections: [
      { titleKey: "print.projects", source: (language) => content[language].build.items, limit: 8 },
      { titleKey: "print.skills", source: (language) => content[language].skills.items, limit: 8 },
      { titleKey: "print.research", source: (language) => content[language].research.items, limit: 2 },
      { titleKey: "print.education", source: (language) => content[language].education.items, limit: 2 },
    ],
  },
};

function renderProfileMarkup(profile = "general") {
  const definition = printProfileDefinitions[profile] || printProfileDefinitions.general;
  const printableContactKeys = new Set(["github", "portfolio", "email", "linkedin", "telegram", "scholar", "orcid"]);
  const printableContacts = contactLinks.filter(({ key }) => printableContactKeys.has(key));
  const printContactLabel = (href) => String(href)
    .replace(/^mailto:/, "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  const renderPrintItems = (items, limit) => items.slice(0, limit).map((item) => `
    <li>
      ${item.href
        ? `<a class="print-profile-item-link" href="${escapeRawHtml(item.href)}" target="_blank" rel="noreferrer"><strong>${escapeHtml(item.title)}</strong></a>`
        : `<strong>${escapeHtml(item.title)}</strong>`}
      <span>${escapeHtml(item.meta)}</span>
    </li>
  `).join("");

  return `
    <header class="print-profile-header">
      <p class="print-profile-label">${escapeHtml(translate(definition.labelKey))}</p>
      <h1>${escapeHtml(translate("print.title"))}</h1>
      <p class="print-profile-subtitle">${escapeHtml(translate(definition.subtitleKey))}</p>
      <p class="print-profile-summary">${escapeHtml(translate(definition.summaryKey))}</p>
      <div class="print-profile-contact" aria-label="${escapeHtml(translate("print.contactLabel"))}">
        <span class="print-profile-contact-label">${escapeHtml(translate("print.contactLabel"))}</span>
        <div class="print-profile-contact-links">
          ${printableContacts.map(({ key, href }) => `
            <a href="${escapeRawHtml(href)}"${href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>
              <strong>${escapeHtml(translate(`contact.${key}`))}</strong>
              <span>${escapeHtml(printContactLabel(href))}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </header>
    <div class="print-profile-grid">
      ${definition.sections.map(({ titleKey, source, limit }) => `
        <section>
          <h2>${escapeHtml(translate(titleKey))}</h2>
          <ul>${renderPrintItems(source(currentLang), limit)}</ul>
        </section>
      `).join("")}
    </div>
  `;
}

function renderPrintProfile(profile = "general") {
  const markup = renderProfileMarkup(profile);
  if (printProfile) {
    printProfile.dataset.profile = profile;
    printProfile.innerHTML = markup;
  }
  if (profilePreviewContent) {
    profilePreviewContent.dataset.profile = profile;
    profilePreviewContent.innerHTML = markup;
  }
}

function resetProfilePreviewScroll({ defer = false } = {}) {
  const reset = () => profilePreviewContent?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  reset();

  if (defer) {
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      if (profilePreviewOpen) reset();
    }));
  }
}

function createProfileExportData(profile = activeProfile) {
  const definition = profileOutputDefinitions.find(({ id }) => id === profile) || profileOutputDefinitions[0];
  const source = document.createElement("div");
  source.innerHTML = renderProfileMarkup(definition.id);
  const readText = (element) => element?.textContent.replace(/\s+/g, " ").trim() || "";

  return {
    definition,
    label: readText(source.querySelector(".print-profile-label")),
    title: readText(source.querySelector("h1")),
    subtitle: readText(source.querySelector(".print-profile-subtitle")),
    summary: readText(source.querySelector(".print-profile-summary")),
    contactLabel: readText(source.querySelector(".print-profile-contact-label")),
    contacts: [...source.querySelectorAll(".print-profile-contact-links > a")].map((link) => ({
      label: readText(link.querySelector("strong")),
      value: readText(link.querySelector("span")),
      href: link.getAttribute("href") || "",
    })),
    sections: [...source.querySelectorAll(".print-profile-grid > section")].map((section) => ({
      title: readText(section.querySelector("h2")),
      items: [...section.querySelectorAll("li")].map((item) => ({
        title: readText(item.querySelector("strong")),
        meta: readText(item.querySelector("span")),
        href: item.querySelector("a")?.getAttribute("href") || "",
      })),
    })),
  };
}

function profileExportText(data) {
  const lines = [data.label, data.title, data.subtitle, data.summary];
  if (data.contactLabel) {
    lines.push("", data.contactLabel);
    data.contacts.forEach(({ label, value }) => lines.push(`${label}: ${value}`));
  }
  data.sections.forEach(({ title, items }) => {
    lines.push("", title);
    items.forEach(({ title: itemTitle, meta }) => lines.push(meta ? `${itemTitle} — ${meta}` : itemTitle));
  });
  return `${lines.filter((line) => line !== undefined && line !== null).join("\n")}\n`;
}

function escapeMarkdownText(value) {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll("`", "\\`")
    .replaceAll("*", "\\*")
    .replaceAll("_", "\\_")
    .replaceAll("[", "\\[")
    .replaceAll("]", "\\]");
}

function escapeMarkdownUrl(value) {
  return String(value).replaceAll(")", "%29");
}

function profileExportMarkdown(data) {
  const lines = [];
  if (data.label) lines.push(`> ${escapeMarkdownText(data.label)}`);
  if (data.title) lines.push(`# ${escapeMarkdownText(data.title)}`);
  if (data.subtitle) lines.push(`_${escapeMarkdownText(data.subtitle)}_`);
  if (data.summary) lines.push("", escapeMarkdownText(data.summary));
  if (data.contactLabel) {
    lines.push("", `## ${escapeMarkdownText(data.contactLabel)}`);
    data.contacts.forEach(({ label, value, href }) => {
      const display = escapeMarkdownText(value || href);
      const linkedValue = href ? `[${display}](${escapeMarkdownUrl(href)})` : display;
      lines.push(`- **${escapeMarkdownText(label)}:** ${linkedValue}`);
    });
  }
  data.sections.forEach(({ title, items }) => {
    lines.push("", `## ${escapeMarkdownText(title)}`);
    items.forEach(({ title: itemTitle, meta, href }) => {
      const linkedTitle = href
        ? `[**${escapeMarkdownText(itemTitle)}**](${escapeMarkdownUrl(href)})`
        : `**${escapeMarkdownText(itemTitle)}**`;
      lines.push(`- ${linkedTitle}${meta ? ` — ${escapeMarkdownText(meta)}` : ""}`);
    });
  });
  return `${lines.join("\n")}\n`;
}

function downloadFile({ content, fileName, mimeType, toastKey }) {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
  if (toastKey) showToast(translate(toastKey));
}

function downloadProfileExport({ definition, content, extension, mimeType, toastKey }) {
  downloadFile({
    content,
    fileName: `soheil-aghayani-${definition.id}-profile-${currentLang}.${extension}`,
    mimeType,
    toastKey,
  });
}

function downloadProfileText(profile = activeProfile) {
  const data = createProfileExportData(profile);
  downloadProfileExport({
    definition: data.definition,
    content: profileExportText(data),
    extension: "txt",
    mimeType: "text/plain",
    toastKey: "toast.profileDownloaded",
  });
}

function downloadProfileMarkdown(profile = activeProfile) {
  const data = createProfileExportData(profile);
  downloadProfileExport({
    definition: data.definition,
    content: profileExportMarkdown(data),
    extension: "md",
    mimeType: "text/markdown",
    toastKey: "toast.profileMarkdownDownloaded",
  });
}

function escapeVCardValue(value) {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replaceAll(/\r?\n/g, "\\n");
}

function publicContactCard() {
  const links = Object.fromEntries(contactLinks.map(({ key, href }) => [key, href]));
  const email = (links.email || "").replace(/^mailto:/i, "");
  const socialFields = contactLinks
    .filter(({ key, href }) => key !== "email" && key !== "portfolio" && href)
    .map(({ key, href }) => `X-SOCIALPROFILE;TYPE=${key.toUpperCase()}:${escapeVCardValue(href)}`);
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Soheil Aghayani",
    "N:Aghayani;Soheil;;;",
    "TITLE:Environmental engineer / researcher / software builder",
    links.portfolio ? `URL:${escapeVCardValue(links.portfolio)}` : "",
    email ? `EMAIL;TYPE=INTERNET:${escapeVCardValue(email)}` : "",
    ...socialFields,
    "END:VCARD",
  ].filter(Boolean);
  return `${lines.join("\r\n")}\r\n`;
}

function downloadContactCard() {
  downloadFile({
    content: publicContactCard(),
    fileName: "soheil-aghayani-contact.vcf",
    mimeType: "text/vcard",
    toastKey: "toast.contactDownloaded",
  });
}

function dialogFocusableElements(dialog) {
  if (!dialog) return [];

  return [...dialog.querySelectorAll("button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])")]
    .filter((element) => !element.disabled && element.getAttribute("aria-hidden") !== "true");
}

function profilePreviewFocusableElements() {
  return dialogFocusableElements(profilePreview);
}

function artifactPreviewFocusableElements() {
  return dialogFocusableElements(artifactPreview);
}

function openProfilePreview(profile = "general", { historyMode = "push" } = {}) {
  if (!profilePreview || profilePreviewOpen) return;

  const nextProfile = profileOutputDefinitions.some(({ id }) => id === profile) ? profile : "general";
  const activeElement = document.activeElement;
  profilePreviewReturnFocus = activeElement instanceof HTMLElement && activeElement !== document.body
    ? activeElement
    : null;
  activeProfile = nextProfile;
  renderPrintProfile(nextProfile);
  renderProfilePreviewSwitch(nextProfile);
  resetProfilePreviewScroll({ defer: true });
  syncProfilePreviewControls(nextProfile);
  profilePreviewOpen = true;
  profilePreview.hidden = false;
  profilePreview.setAttribute("aria-hidden", "false");
  syncProfilePreviewHistory(nextProfile, historyMode);
  studioShell.inert = true;
  document.body.classList.add("is-profile-preview-open");
  updateDocumentTitle();
  syncBoardRotation();

  window.requestAnimationFrame(() => {
    if (profilePreviewOpen) profilePreviewClose?.focus({ preventScroll: true });
  });
}

function switchProfilePreview(profile) {
  if (!profilePreviewOpen || !profileOutputDefinitions.some(({ id }) => id === profile)) return;

  activeProfile = profile;
  renderPrintProfile(activeProfile);
  renderProfilePreviewSwitch(activeProfile);
  resetProfilePreviewScroll();
  syncProfilePreviewControls(activeProfile);
  syncProfilePreviewHistory(activeProfile, "replace");
  updateDocumentTitle();
  profilePreviewSwitch?.querySelector(`[data-profile="${activeProfile}"]`)?.focus({ preventScroll: true });
}

function closeProfilePreview({ restoreFocus = false, historyMode = "replace" } = {}) {
  if (!profilePreview || !profilePreviewOpen) return;

  profilePreviewOpen = false;
  profilePreview.hidden = true;
  profilePreview.setAttribute("aria-hidden", "true");
  syncProfilePreviewHistory(null, historyMode);
  studioShell.inert = false;
  document.body.classList.remove("is-profile-preview-open");
  updateDocumentTitle();
  syncBoardRotation();

  if (restoreFocus) {
    const target = profilePreviewReturnFocus && document.contains(profilePreviewReturnFocus)
      ? profilePreviewReturnFocus
      : null;
    profilePreviewReturnFocus = null;
    if (target) target.focus({ preventScroll: true });
    else focusSurfaceContext();
  }
}

function openArtifactPreview({ src, alt, caption } = {}) {
  if (!artifactPreview || artifactPreviewOpen || !src) return;

  const activeElement = document.activeElement;
  artifactPreviewReturnFocus = activeElement instanceof HTMLElement && activeElement !== document.body
    ? activeElement
    : null;
  artifactPreviewImage.src = src;
  artifactPreviewImage.alt = alt || "";
  artifactPreviewCaption.textContent = caption || "";
  artifactPreviewOpen = true;
  artifactPreview.hidden = false;
  artifactPreview.setAttribute("aria-hidden", "false");
  studioShell.inert = true;
  document.body.classList.add("is-artifact-preview-open");
  syncBoardRotation();

  window.requestAnimationFrame(() => {
    if (artifactPreviewOpen) artifactPreviewClose?.focus({ preventScroll: true });
  });
}

function closeArtifactPreview({ restoreFocus = false } = {}) {
  if (!artifactPreview || !artifactPreviewOpen) return;

  artifactPreviewOpen = false;
  artifactPreview.hidden = true;
  artifactPreview.setAttribute("aria-hidden", "true");
  artifactPreviewImage.removeAttribute("src");
  artifactPreviewImage.alt = "";
  artifactPreviewCaption.textContent = "";
  studioShell.inert = false;
  document.body.classList.remove("is-artifact-preview-open");
  syncBoardRotation();

  if (restoreFocus) {
    const target = artifactPreviewReturnFocus && document.contains(artifactPreviewReturnFocus)
      ? artifactPreviewReturnFocus
      : null;
    artifactPreviewReturnFocus = null;
    if (target) target.focus({ preventScroll: true });
    else focusSurfaceContext();
  }
}

function syncProfilePreviewFromLocation({ restoreFocus = false } = {}) {
  const profile = profilePreviewFromLocation();

  if (!profile) {
    if (profilePreviewOpen) closeProfilePreview({ restoreFocus, historyMode: "none" });
    return;
  }

  if (!profilePreviewOpen) {
    openProfilePreview(profile, { historyMode: "none" });
    return;
  }

  if (activeProfile !== profile) {
    activeProfile = profile;
    renderPrintProfile(profile);
    renderProfilePreviewSwitch(profile);
    resetProfilePreviewScroll({ defer: true });
    syncProfilePreviewControls(profile);
    updateDocumentTitle();
  }
}

function printProfileAndOpen(profile = "general") {
  renderPrintProfile(profile);
  window.setTimeout(() => window.print(), 0);
}

function filterSectionList(section, query = sectionFilterQueries[section] || "") {
  const normalizedQuery = normalizeSearchText(query.trim());
  const liveQuery = normalizeSearchText(translate("projects.liveDemo"));
  const liveOnly = section === "build" && (normalizedQuery === "live" || normalizedQuery === liveQuery);
  const buttons = [...document.querySelectorAll(`[data-section-list="${section}"] button`)]
    .filter((button) => !button.disabled);
  const emptyState = document.querySelector(`[data-section-filter-empty="${section}"]`);
  const count = document.querySelector(`[data-section-filter-count="${section}"]`);
  let visibleCount = 0;

  sectionFilterQueries[section] = query;
  buttons.forEach((button) => {
    const searchableText = normalizeSearchText(button.dataset.search || button.textContent);
    const matches = liveOnly
      ? button.dataset.live === "true"
      : !normalizedQuery || searchableText.includes(normalizedQuery);
    button.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  if (count) {
    const countKey = section === "build" ? "projects.filterCount" : "sections.filterCount";
    count.textContent = `${translate(countKey)} ${localizeDigits(visibleCount)} / ${localizeDigits(buttons.length)}`;
  }

  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

function sectionSearchText(section, index, item) {
  const languageItems = [content.en[section]?.items[index], content.fa[section]?.items[index]].filter(Boolean);
  const repository = section === "build" ? projectRecord(index)?.repo || "" : "";
  const liveUrl = section === "build" ? projectLiveUrl(section, index) : "";
  const githubTerms = section === "build" ? githubSearchTerms(index) : [];

  return [
    section,
    repository,
    liveUrl,
    item.title,
    item.meta,
    item.detail,
    item.href || "",
    ...githubTerms,
    ...languageItems.flatMap((record) => [record.title, record.meta, record.detail]),
  ].join(" ");
}

function renderSectionFilter(section, itemCount) {
  if (!filterableSections.has(section)) return "";

  const isProjects = section === "build";
  const prefix = isProjects ? "projects" : "sections";
  const inputId = isProjects ? "projectFilter" : `sectionFilter-${section}`;
  const query = sectionFilterQueries[section] || "";
  const sortOptions = [
    ["catalog", "projects.sortCatalog"],
    ["updated", "projects.sortUpdated"],
    ["stars", "projects.sortStars"],
    ["alpha", "projects.sortAlpha"],
  ];

  return `
    <div class="project-filter section-filter${isProjects ? " project-filter-projects" : ""}" data-filter-shell="${section}" role="search">
      <div class="project-filter-line">
        <label class="project-filter-label" for="${inputId}"><span class="project-filter-caret" aria-hidden="true">&gt;</span>${escapeHtml(translate(`${prefix}.filterLabel`))}</label>
        <span class="project-filter-count" data-section-filter-count="${section}" role="status" aria-live="polite" aria-atomic="true">${escapeHtml(translate(`${prefix}.filterCount`))} ${localizeDigits(itemCount)} / ${localizeDigits(itemCount)}</span>
      </div>
      <input id="${inputId}" data-section-filter="${section}" type="search" autocomplete="off" spellcheck="false" value="${escapeHtml(query)}" placeholder="${escapeHtml(translate(`${prefix}.filterPlaceholder`))}" aria-label="${escapeHtml(translate(`${prefix}.filterAria`))}" aria-keyshortcuts="/" />
      ${isProjects ? `
        <label class="project-sort-control" for="projectSort">
          <span class="project-sort-label">${escapeHtml(translate("projects.sortLabel"))}</span>
          <select id="projectSort" data-project-sort aria-label="${escapeHtml(translate("projects.sortAria"))}">
            ${sortOptions.map(([value, key]) => `<option value="${value}"${projectSortMode === value ? " selected" : ""}>${escapeHtml(translate(key))}</option>`).join("")}
          </select>
        </label>
      ` : ""}
      <p class="project-filter-empty" data-section-filter-empty="${section}" hidden>${escapeHtml(translate(`${prefix}.filterEmpty`))}</p>
    </div>
  `;
}

function renderSectionItem(section, item, index, displayIndex = index) {
  const liveUrl = projectLiveUrl(section, index);
  const githubSummary = section === "build" ? projectGithubSummary(index) : "";
  const githubAriaLabel = projectGithubAriaLabel(githubSummary);
  const searchableText = [sectionSearchText(section, index, item), liveUrl ? translate("projects.liveDemo") : ""].join(" ");

  return `
    <button class="surface-list-item${section === "build" ? " project-record" : ""}" type="button" data-item="${index}" data-live="${liveUrl ? "true" : "false"}" data-search="${escapeRawHtml(searchableText)}">
      ${section === "build" ? `<span class="project-record-index" aria-hidden="true">${escapeHtml(String(displayIndex + 1).padStart(2, "0"))}</span><span class="project-record-main">` : ""}
        <strong>${escapeHtml(item.title)}</strong>
        <small>
          <span>${escapeHtml(item.meta)}</span>
          ${liveUrl ? `<span class="project-live-mark" aria-label="${escapeHtml(translate("projects.liveDemo"))}"><i aria-hidden="true"></i>${escapeHtml(translate("projects.liveDemo"))}</span>` : ""}
          ${section === "build" ? `<span class="project-record-github-meta" data-project-github-meta="${index}" aria-label="${escapeHtml(githubAriaLabel)}"${githubSummary ? "" : " hidden"}>${escapeHtml(githubSummary)}</span>` : ""}
        </small>
      ${section === "build" ? "</span>" : ""}
    </button>
  `;
}

function renderResearchTimeline(items) {
  const timelineItems = items
    .map((item, index) => ({ item, index }))
    .sort((left, right) => {
      const englishItems = content.en.research.items;
      const firstYear = (record) => Number(String(record?.period || "").match(/\d{4}/)?.[0] || 0);
      const yearDifference = firstYear(englishItems[left.index]) - firstYear(englishItems[right.index]);
      return yearDifference || left.index - right.index;
    });

  return `
    <section class="research-timeline" aria-label="${escapeHtml(translate("research.timelineAria"))}">
      <div class="research-timeline-topline">
        <span>${escapeHtml(translate("research.timelineLabel"))}</span>
        <span>${localizeDigits(items.length)} ${escapeHtml(translate("research.timelineCount"))}</span>
      </div>
      <div class="research-timeline-list" data-section-list="research">
        ${timelineItems.map(({ item, index }) => `
          <button class="research-timeline-entry" type="button" data-item="${index}" data-live="false" data-search="${escapeRawHtml(sectionSearchText("research", index, item))}">
            <time class="research-timeline-period">${escapeHtml(localizeDigits(item.period || item.meta))}</time>
            <span class="research-timeline-body">
              <strong>${escapeHtml(item.title)}</strong>
              <small>${escapeHtml(item.meta)}</small>
            </span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderProjectDetailNavigation(itemIndex) {
  const total = portfolioCatalog.length;
  const previousIndex = itemIndex - 1;
  const nextIndex = itemIndex + 1;
  const previousDisabled = previousIndex < 0;
  const nextDisabled = nextIndex >= total;

  return `
    <nav class="detail-navigation" aria-label="${escapeHtml(translate("detail.caseStudyAria"))}">
      <span class="detail-navigation-position">${escapeHtml(translate("detail.projectPosition", {
        current: localizeDigits(itemIndex + 1),
        total: localizeDigits(total),
      }))}</span>
      <div class="detail-navigation-actions">
        <button class="detail-navigation-button" type="button" data-action="project-previous" data-project-index="${previousIndex}" aria-label="${escapeHtml(translate("detail.previousProjectAria"))}"${previousDisabled ? " disabled" : ""}>
          ${escapeHtml(translate("detail.previousProject"))}
        </button>
        <button class="detail-navigation-button" type="button" data-action="project-next" data-project-index="${nextIndex}" aria-label="${escapeHtml(translate("detail.nextProjectAria"))}"${nextDisabled ? " disabled" : ""}>
          ${escapeHtml(translate("detail.nextProject"))}
        </button>
      </div>
    </nav>
  `;
}

function renderSectionList(section, items) {
  if (section === "research") return renderResearchTimeline(items);

  const entries = section === "build"
    ? sortProjectEntries(items.map((item, index) => ({ item, index })))
    : items.map((item, index) => ({ item, index }));

  return `
    <div class="surface-list${section === "build" ? " surface-list-projects" : ""}" data-section-list="${section}">
      ${entries.map(({ item, index }, displayIndex) => renderSectionItem(section, item, index, displayIndex)).join("")}
    </div>
  `;
}

function renderSection(section) {
  const selected = currentContent(section);
  currentItem = null;
  prepareSurfaceContentView(section, { modeLabel: viewLabel(section) });
  surfaceContent.innerHTML = `
    <div class="section-copy${section === "build" ? " projects-copy" : ""}" data-section="${section}">
      ${renderSectionKicker(section)}
      <h2>${escapeHtml(selected.title)}</h2>
      <p>${escapeHtml(formatContentText(selected.description))}</p>
      ${renderSectionFilter(section, selected.items.length)}
      ${renderSectionList(section, selected.items)}
    </div>
  `;
  if (filterableSections.has(section)) filterSectionList(section, sectionFilterQueries[section] || "");
  updateDocumentTitle();
}

function renderProjectCaseStudy(item, itemIndex) {
  const project = projectRecord(itemIndex);
  if (!project) return "";
  const publicSurface = project.live
    ? translate("detail.liveSurface")
    : translate("detail.sourceOnly");

  return `
    <section class="project-case-study" aria-label="${escapeHtml(translate("detail.caseStudyAria"))}">
      <div class="project-case-study-topline">
        <span>${escapeHtml(translate("detail.caseStudy"))}</span>
      </div>
      <div class="project-case-study-brief">
        <span class="project-case-study-label">${escapeHtml(translate("detail.brief"))}</span>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      <dl class="project-case-study-facts">
        <div>
          <dt>${escapeHtml(translate("detail.format"))}</dt>
          <dd>${escapeHtml(item.meta)}</dd>
        </div>
        <div>
          <dt>${escapeHtml(translate("detail.repositoryKey"))}</dt>
          <dd>${escapeHtml(project.repo)}</dd>
        </div>
        <div>
          <dt>${escapeHtml(translate("detail.publicSurface"))}</dt>
          <dd>${escapeHtml(publicSurface)}</dd>
        </div>
      </dl>
    </section>
  `;
}

function renderDetail(section, itemIndex, { historyMode = "push", focus = true } = {}) {
  const selected = currentContent(section);
  const item = selected.items[itemIndex];
  if (!item) return renderSection(section);

  syncViewHistory(section, itemIndex, historyMode);
  currentItem = itemIndex;
  prepareSurfaceContentView(section, { modeLabel: viewLabel(section), statusText: item.meta });
  setSurfaceHomeButtonVisible(false);
  const repositoryUrl = projectRepositoryUrl(section, itemIndex);
  const liveUrl = projectLiveUrl(section, itemIndex);
  const publicSourceUrl = item.href || "";
  const relatedProjects = relatedProjectItems(section, itemIndex);
  const evidence = detailEvidenceItems(section, itemIndex);
  const citations = detailCitationItems(section, itemIndex);
  const detailClass = ["skills", "research", "education", "archive"].includes(section) ? ` ${section}-detail` : "";
  surfaceContent.innerHTML = `
    <div class="detail-copy${detailClass}">
      <button class="detail-back" type="button" data-action="section-back">${escapeHtml(translate("surface.backToList"))}</button>
      ${section === "build" ? renderProjectDetailNavigation(itemIndex) : ""}
      <h2>${escapeHtml(item.title)}</h2>
      ${section === "build" ? renderProjectCaseStudy(item, itemIndex) : `<p>${escapeHtml(item.detail)}</p>`}
      ${renderPublicArtifact(section, itemIndex)}
      ${section === "build" ? renderGithubSignal(itemIndex) : ""}
      ${relatedProjects.length ? `
        <div class="detail-related">
          <p class="detail-related-label">${escapeHtml(translate("detail.relatedWork"))}</p>
          <div class="detail-related-list">
            ${relatedProjects.map(({ projectIndex, item: project }) => `
              <a class="detail-related-link" href="#build/${projectIndex}">
                <strong>${escapeHtml(project.title)}</strong>
                <small>${escapeHtml(project.meta)}</small>
              </a>
            `).join("")}
          </div>
        </div>
      ` : ""}
      ${evidence.length ? `
        <div class="detail-evidence">
          <p class="detail-evidence-label">${escapeHtml(translate("detail.evidence"))}</p>
          <div class="detail-evidence-list">
             ${evidence.map(renderEvidenceRow).join("")}
          </div>
        </div>
      ` : ""}
      ${renderCitationCopyAction(citations)}
      <div class="detail-links">
        <button class="detail-link detail-share-button" type="button" data-action="share-route" aria-label="${escapeHtml(translate("detail.shareRouteAria"))}">
          <span class="contact-link-label"><svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#pixel-external"></use></svg><span>${escapeHtml(translate("detail.shareRoute"))}</span></span>
          ${externalIconMarkup()}
        </button>
        ${repositoryUrl || liveUrl || publicSourceUrl ? `
          ${repositoryUrl ? `
            <a class="detail-link" href="${repositoryUrl}" target="_blank" rel="noreferrer">
              <span class="contact-link-label"><svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#pixel-github"></use></svg><span>${escapeHtml(translate("detail.repository"))}</span></span>
              ${externalIconMarkup()}
            </a>
          ` : ""}
          ${liveUrl ? `
            <a class="detail-link" href="${liveUrl}" target="_blank" rel="noreferrer">
              <span class="contact-link-label"><svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#pixel-person"></use></svg><span>${escapeHtml(translate("detail.liveSite"))}</span></span>
              ${externalIconMarkup()}
            </a>
          ` : ""}
          ${publicSourceUrl ? `
            <a class="detail-link" href="${escapeRawHtml(publicSourceUrl)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(translate("detail.openPublicSourceAria"))}">
              <span class="contact-link-label"><svg class="pixel-icon" aria-hidden="true" focusable="false"><use href="#pixel-archive"></use></svg><span>${escapeHtml(translate("detail.openPublicSource"))}</span></span>
              ${externalIconMarkup()}
            </a>
          ` : ""}
        ` : ""}
      </div>
    </div>
  `;
  updateDocumentTitle();
  if (focus) focusSurfaceContext();
}

const routableViews = new Set(viewDefinitions.map(({ view }) => view));
const sectionViews = new Set(viewDefinitions.filter(({ isSection }) => isSection).map(({ view }) => view));
const viewDefinitionMap = Object.fromEntries(viewDefinitions.map((definition) => [definition.view, definition]));

function routeStateFromLocation() {
  const route = decodeURIComponent(window.location.hash.replace(/^#\/?/, ""));
  const [view, rawItemIndex] = route.split("/");
  const itemIndex = /^\d+$/.test(rawItemIndex || "") ? Number(rawItemIndex) : null;

  return {
    view: routableViews.has(view) ? view : "home",
    itemIndex: sectionViews.has(view) ? itemIndex : null,
  };
}

function profilePreviewFromLocation() {
  const profile = new URL(window.location.href).searchParams.get("profile");
  return profileOutputDefinitions.some(({ id }) => id === profile) ? profile : null;
}

function syncProfilePreviewHistory(profile, historyMode) {
  if (historyMode === "none") return;

  const nextUrl = new URL(window.location.href);
  const currentProfile = nextUrl.searchParams.get("profile");
  const nextProfile = profile || null;
  if ((currentProfile || null) === nextProfile) return;

  if (nextProfile) nextUrl.searchParams.set("profile", nextProfile);
  else nextUrl.searchParams.delete("profile");

  window.history[`${historyMode}State`]({
    ...(window.history.state || {}),
    profile: nextProfile,
  }, "", nextUrl);
}

function syncViewHistory(view, itemIndex, historyMode) {
  if (historyMode === "none") return;

  const route = itemIndex === null ? view : `${view}/${itemIndex}`;
  const nextHash = view === "home" ? "" : `#${route}`;
  if (window.location.hash === nextHash) return;

  const nextUrl = new URL(window.location.href);
  nextUrl.hash = nextHash;
  window.history[`${historyMode}State`]({ view, itemIndex }, "", nextUrl);
}

function renderView(view, { historyMode = "push", itemIndex = null, focus = true } = {}) {
  if (commandPaletteOpen) closeCommandPalette();
  const nextView = routableViews.has(view) ? view : "home";
  const detailIndex = sectionViews.has(nextView) && Number.isInteger(itemIndex) && itemIndex >= 0 ? itemIndex : null;
  syncViewHistory(nextView, detailIndex, historyMode);
  currentMode = nextView;
  homeView.hidden = false;

  const renderRootView = viewDefinitionMap[nextView]?.render;
  if (renderRootView) {
    renderRootView();
  } else if (sectionViews.has(nextView)) {
    renderSection(nextView);
    if (detailIndex !== null) renderDetail(nextView, detailIndex, { historyMode: "none", focus: false });
  }

  syncBoardRotation();
  syncRailSelection(nextView);
  closeIndex();
  if (focus) focusSurfaceContext();
}

function openIndex() {
  indexOpen = true;
  syncBoardRotation();
  const activeElement = document.activeElement;
  indexReturnFocus = activeElement instanceof HTMLElement && activeElement !== document.body
    ? activeElement
    : indexToggle;
  indexPanel.classList.add("is-open");
  indexPanel.setAttribute("aria-hidden", "false");
  indexPanel.inert = false;
  indexToggle.setAttribute("aria-expanded", "true");

  window.requestAnimationFrame(() => {
    if (!indexOpen) return;
    indexPanel.querySelector("button")?.focus({ preventScroll: true });
  });
}

function closeIndex({ restoreFocus = false } = {}) {
  indexOpen = false;
  indexPanel.classList.remove("is-open");
  indexPanel.setAttribute("aria-hidden", "true");
  indexPanel.inert = true;
  indexToggle.setAttribute("aria-expanded", "false");
  syncBoardRotation();

  if (restoreFocus) {
    const target = indexReturnFocus && document.contains(indexReturnFocus)
      ? indexReturnFocus
      : indexToggle;
    indexReturnFocus = null;
    target?.focus({ preventScroll: true });
  }
}

function commandPaletteFocusableElements() {
  return [commandSearch, commandPaletteClose].filter((element) => element && !element.disabled);
}

function openCommandPalette() {
  if (!commandPalette || commandPaletteOpen) return;

  const activeElement = document.activeElement;
  commandPaletteReturnFocus = activeElement instanceof HTMLElement && activeElement !== document.body
    ? activeElement
    : commandToggle;

  if (indexOpen) closeIndex();
  if (helpOpen) setSurfaceHelpOpen(false);

  commandPaletteOpen = true;
  commandQuery = "";
  commandSelectedIndex = 0;
  commandSearch.value = "";
  renderCommandResults();
  commandPalette.hidden = false;
  commandPalette.setAttribute("aria-hidden", "false");
  commandToggle?.setAttribute("aria-expanded", "true");
  studioShell.inert = true;
  document.body.classList.add("is-command-open");
  syncBoardRotation();

  window.requestAnimationFrame(() => {
    if (commandPaletteOpen) commandSearch.focus({ preventScroll: true });
  });
}

function closeCommandPalette({ restoreFocus = false } = {}) {
  if (!commandPalette || !commandPaletteOpen) return;

  commandPaletteOpen = false;
  commandPalette.hidden = true;
  commandPalette.setAttribute("aria-hidden", "true");
  commandToggle?.setAttribute("aria-expanded", "false");
  studioShell.inert = false;
  document.body.classList.remove("is-command-open");
  commandQuery = "";
  commandSelectedIndex = 0;
  commandResultEntries = [];
  commandSearch.value = "";
  commandResults.innerHTML = "";
  syncBoardRotation();

  if (restoreFocus) {
    const target = commandPaletteReturnFocus && document.contains(commandPaletteReturnFocus)
      ? commandPaletteReturnFocus
      : commandToggle;
    commandPaletteReturnFocus = null;
    target?.focus({ preventScroll: true });
  }
}

function moveCommandSelection(direction) {
  if (!commandResultEntries.length) return;
  commandSelectedIndex = (commandSelectedIndex + direction + commandResultEntries.length) % commandResultEntries.length;
  syncCommandSelection();
}

function activateCommandAction(actionId) {
  if (actionId === "help") {
    renderView("home", { focus: false });
    setSurfaceHelpOpen(true);
    return;
  }

  if (actionId === "language") {
    toggleLanguage();
    return;
  }

  if (actionId === "board") {
    toggleBoardPause();
    return;
  }

  if (actionId === "terminal-size") {
    toggleSurfaceMaximized();
    return;
  }

  if (actionId === "share-route") {
    shareCurrentRoute();
    return;
  }

  if (actionId === "profile-markdown") {
    const profile = profilePreviewOpen ? activeProfile : "general";
    if (!profilePreviewOpen) openProfilePreview(profile);
    downloadProfileMarkdown(profile);
    return;
  }

  if (actionId === "contact-card") {
    downloadContactCard();
    return;
  }

  const profileOutput = profileOutputDefinitions.find(({ commandId }) => commandId === actionId);
  if (profileOutput) {
    openProfilePreview(profileOutput.id);
    return;
  }

  if (actionId === "github") {
    window.open(`https://github.com/${githubUsername}`, "_blank", "noopener,noreferrer");
    return;
  }

  const contactLink = contactLinks.find(({ key }) => key === actionId);
  if (contactLink) {
    if (contactLink.external) {
      window.open(contactLink.href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = contactLink.href;
    }
    return;
  }

  if (actionId === "about") {
    showToast(translate("toast.about"));
  }
}

function activateCommandResult(index = commandSelectedIndex) {
  const entry = commandResultEntries[index];
  if (!entry) return;

  if (entry.type === "action") {
    closeCommandPalette({ restoreFocus: true });
    activateCommandAction(entry.actionId);
    return;
  }

  closeCommandPalette();
  renderView(entry.view, { itemIndex: entry.itemIndex });
}

function toggleCommandPalette() {
  if (commandPaletteOpen) closeCommandPalette({ restoreFocus: true });
  else openCommandPalette();
}

function moveProjectDetail(direction) {
  if (currentSection !== "build" || currentItem === null) return;

  const nextIndex = currentItem + direction;
  if (nextIndex < 0 || nextIndex >= portfolioCatalog.length) return;
  renderDetail("build", nextIndex);
}

function toggleIndex() {
  if (indexOpen) closeIndex({ restoreFocus: true });
  else openIndex();
}

surfaceCommandForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = surfaceCommandInput?.value || "";
  rememberSurfaceCommand(command);
  runSurfaceCommand(command);
  if (surfaceCommandInput) {
    surfaceCommandInput.value = "";
    surfaceCommandHistoryIndex = -1;
  }
});

document.addEventListener("click", (event) => {
  const artifactCloseTarget = event.target.closest("[data-action='artifact-close']");
  if (artifactCloseTarget) {
    closeArtifactPreview({ restoreFocus: true });
    return;
  }

  const artifactTarget = event.target.closest("[data-action='artifact-open']");
  if (artifactTarget) {
    openArtifactPreview({
      src: artifactTarget.dataset.artifactSrc,
      alt: artifactTarget.dataset.artifactAlt,
      caption: artifactTarget.dataset.artifactCaption,
    });
    return;
  }

  const profileCloseTarget = event.target.closest("[data-action='profile-close']");
  if (profileCloseTarget) {
    closeProfilePreview({ restoreFocus: true });
    return;
  }

  const commandCloseTarget = event.target.closest("[data-action='command-close']");
  if (commandCloseTarget) {
    closeCommandPalette({ restoreFocus: true });
    return;
  }

  const commandResult = event.target.closest("[data-command-result]");
  if (commandResult && commandPaletteOpen) {
    activateCommandResult(Number(commandResult.dataset.commandResult));
    return;
  }

  const boardTarget = event.target.closest(".board-row[data-view]");
  if (boardTarget) {
    renderView(boardTarget.dataset.view);
    return;
  }

  if (indexOpen && !event.target.closest("#indexPanel, #indexToggle")) {
    closeIndex();
  }

  const target = event.target.closest("button, a");
  if (!target) return;

  if (target.id === "indexToggle") {
    toggleIndex();
    return;
  }

  if (target.id === "commandToggle") {
    toggleCommandPalette();
    return;
  }

  if (target.dataset.action === "surface-toggle-maximize") {
    toggleSurfaceMaximized();
    return;
  }

  if (target.id === "languageToggle") {
    toggleLanguage();
    return;
  }

  if (target.dataset.action === "board-toggle") {
    toggleBoardPause();
    return;
  }

  if (target.dataset.view) {
    renderView(target.dataset.view);
    return;
  }

  if (target.dataset.action === "surface-home") {
    renderView("home");
    return;
  }

  if (target.dataset.action === "surface-help") {
    setSurfaceHelpOpen(!helpOpen, { restoreFocus: helpOpen });
    return;
  }

  if (target.dataset.action === "share-route") {
    shareCurrentRoute();
    return;
  }

  if (target.dataset.action === "copy-citations") {
    try {
      const citations = JSON.parse(target.dataset.citations || "[]");
      if (Array.isArray(citations) && citations.length) copyCitations(citations);
    } catch (error) {
      showToast(translate("toast.citationCopyFailed"));
    }
    return;
  }

  if (target.dataset.action === "profile-preview") {
    openProfilePreview(target.dataset.profile);
    return;
  }

  if (target.dataset.action === "profile-switch") {
    switchProfilePreview(target.dataset.profile);
    return;
  }

  if (target.dataset.action === "profile-print") {
    printProfileAndOpen(target.dataset.profile);
    return;
  }

  if (target.dataset.action === "profile-download") {
    downloadProfileText(target.dataset.profile || activeProfile);
    return;
  }

  if (target.dataset.action === "profile-markdown") {
    downloadProfileMarkdown(target.dataset.profile || activeProfile);
    return;
  }

  if (target.dataset.action === "contact-vcard") {
    downloadContactCard();
    return;
  }

  if (target.dataset.action === "section-back") {
    renderView(currentSection);
    return;
  }

  if (target.dataset.action === "project-previous") {
    moveProjectDetail(-1);
    return;
  }

  if (target.dataset.action === "project-next") {
    moveProjectDetail(1);
    return;
  }

  if (target.dataset.item !== undefined) {
    renderDetail(currentSection, Number(target.dataset.item));
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.matches("#commandSearch")) {
    commandQuery = target.value;
    commandSelectedIndex = 0;
    renderCommandResults();
    return;
  }

  if (!target.matches("[data-section-filter]")) return;
  const section = target.dataset.sectionFilter;
  if (!filterableSections.has(section)) return;
  sectionFilterQueries[section] = target.value;
  if (section === "build") syncProjectFilterHistory();
  filterSectionList(section, target.value);
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.matches("[data-project-sort]")) return;

  projectSortMode = projectSortModes.has(target.value) ? target.value : "catalog";
  syncProjectSortHistory();
  renderSection("build");
  window.requestAnimationFrame(() => document.querySelector("[data-project-sort]")?.focus({ preventScroll: true }));
});

document.addEventListener("keydown", (event) => {
  if (artifactPreviewOpen) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeArtifactPreview({ restoreFocus: true });
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = artifactPreviewFocusableElements();
      const currentFocusIndex = focusableElements.indexOf(document.activeElement);
      const nextFocusIndex = event.shiftKey
        ? (currentFocusIndex <= 0 ? focusableElements.length - 1 : currentFocusIndex - 1)
        : (currentFocusIndex === focusableElements.length - 1 ? 0 : currentFocusIndex + 1);

      event.preventDefault();
      focusableElements[nextFocusIndex]?.focus({ preventScroll: true });
      return;
    }

    return;
  }

  if (profilePreviewOpen) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeProfilePreview({ restoreFocus: true });
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = profilePreviewFocusableElements();
      const currentFocusIndex = focusableElements.indexOf(document.activeElement);
      const nextFocusIndex = event.shiftKey
        ? (currentFocusIndex <= 0 ? focusableElements.length - 1 : currentFocusIndex - 1)
        : (currentFocusIndex === focusableElements.length - 1 ? 0 : currentFocusIndex + 1);

      event.preventDefault();
      focusableElements[nextFocusIndex]?.focus({ preventScroll: true });
      return;
    }

    return;
  }

  if (commandPaletteOpen) {
    if (event.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      closeCommandPalette({ restoreFocus: true });
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeCommandPalette({ restoreFocus: true });
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveCommandSelection(1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveCommandSelection(-1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      commandSelectedIndex = 0;
      syncCommandSelection();
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      commandSelectedIndex = Math.max(commandResultEntries.length - 1, 0);
      syncCommandSelection();
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      activateCommandResult();
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = commandPaletteFocusableElements();
      const currentFocusIndex = focusableElements.indexOf(document.activeElement);
      const nextFocusIndex = event.shiftKey
        ? (currentFocusIndex <= 0 ? focusableElements.length - 1 : currentFocusIndex - 1)
        : (currentFocusIndex === focusableElements.length - 1 ? 0 : currentFocusIndex + 1);

      event.preventDefault();
      focusableElements[nextFocusIndex]?.focus({ preventScroll: true });
      return;
    }

    return;
  }

  if (event.target === surfaceCommandInput && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
    event.preventDefault();
    moveSurfaceCommandHistory(event.key === "ArrowUp" ? -1 : 1);
    return;
  }

  if (event.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    openCommandPalette();
    return;
  }

  if (event.key === "Escape" && event.target.matches("[data-section-filter]")) {
    event.preventDefault();
    event.target.value = "";
    const section = event.target.dataset.sectionFilter;
    sectionFilterQueries[section] = "";
    if (section === "build") syncProjectFilterHistory();
    filterSectionList(section, "");
    return;
  }

  if (event.key === "Escape" && helpOpen) {
    setSurfaceHelpOpen(false, { restoreFocus: true });
    return;
  }

  if (event.key === "Escape" && indexOpen) {
    closeIndex({ restoreFocus: true });
    return;
  }

  if (event.key === "Escape" && surfaceMaximized) {
    event.preventDefault();
    setSurfaceMaximized(false, { restoreFocus: true });
    return;
  }

  if (event.key === "Escape" && currentMode !== "home") {
    event.preventDefault();
    renderView(currentItem === null ? "home" : currentSection);
    return;
  }

  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.target.matches("input, textarea, select, [contenteditable='true']")) return;

  if (event.key === "/" && currentMode === "home") {
    event.preventDefault();
    renderView("build", { focus: false });
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => document.querySelector("[data-section-filter=build]")?.focus());
    });
    return;
  }

  if (event.key === "/" && currentMode === "build" && currentItem === null) {
    const filter = document.querySelector("[data-section-filter=build]");
    if (filter) {
      event.preventDefault();
      filter.focus();
      return;
    }
  }

  if (event.key === "?" && currentMode === "home") {
    setSurfaceHelpOpen(!helpOpen, { restoreFocus: helpOpen });
    return;
  }

  if (event.key.toLowerCase() === "m") {
    event.preventDefault();
    toggleSurfaceMaximized();
    return;
  }

  if (currentSection === "build" && currentItem !== null && (event.key === "[" || event.key === "]")) {
    event.preventDefault();
    moveProjectDetail(event.key === "]" ? 1 : -1);
    return;
  }

  if (/^\d$/.test(event.key)) {
    const numericShortcutView = terminalShortcutViews[event.key];
    if (numericShortcutView) {
      event.preventDefault();
      renderView(numericShortcutView);
    } else {
      showToast(translate("toast.shortcutUnavailable", { shortcut: event.key }));
    }
    return;
  }

  const shortcutViews = {
    h: "home",
    c: "contact",
  };
  const shortcutView = shortcutViews[event.key.toLowerCase()];
  if (shortcutView) {
    event.preventDefault();
    renderView(shortcutView);
  }
});

boardRows.forEach((row, index) => initializeBoardValue(row, index));
boardRows.forEach((row) => {
  row.addEventListener("pointerenter", () => {
    boardPointerActive = true;
    syncBoardRotation();
  });
  row.addEventListener("pointerleave", () => {
    boardPointerActive = false;
    syncBoardRotation();
  });
  row.addEventListener("focusin", () => {
    boardFocusActive = true;
    syncBoardRotation();
  });
  row.addEventListener("focusout", () => {
    boardFocusActive = false;
    syncBoardRotation();
  });
});
updateBoardProjectCount();
applyTranslations();
const restoreViewFromLocation = ({ focus = false } = {}) => {
  const { view, itemIndex } = routeStateFromLocation();
  renderView(view, {
    historyMode: "none",
    itemIndex,
    focus: focus || view !== "home" || itemIndex !== null,
  });
  syncProfilePreviewFromLocation({ restoreFocus: focus });
};
window.addEventListener("popstate", () => restoreViewFromLocation({ focus: true }));
window.addEventListener("hashchange", () => restoreViewFromLocation({ focus: true }));
restoreViewFromLocation();
updateBoardClock();
window.setInterval(updateBoardClock, 1000);
document.addEventListener("visibilitychange", syncBoardRotation);
if (typeof reducedMotionQuery.addEventListener === "function") {
  reducedMotionQuery.addEventListener("change", syncBoardRotation);
} else if (typeof reducedMotionQuery.addListener === "function") {
  reducedMotionQuery.addListener(syncBoardRotation);
}
syncBoardRotation();
syncGithubMetadata();
