# Terminal - Soheil Aghayani

An authored, bilingual terminal-style portfolio for Soheil Aghayani: environmental engineer, researcher, and software builder.

The interface is designed as a quiet research studio rather than a conventional dashboard. A live departure board introduces the work; the terminal then opens into projects, research, education, skills, and the deeper archive. Information is progressively disclosed so the surface stays calm while curious visitors can still go deep.

## What is inside

- **Live research departure board** - animated, character-by-character signal changes with pause controls and reduced-motion support.
- **Project archive** - all public projects in one searchable index, with live links where available.
- **Project case studies** - each project has a focused brief, repository metadata, live/API facts, public GitHub topics and license when available, related public work, and a visible share/copy route action.
- **Research timeline** - chronological research threads that open into the existing detail view instead of duplicating content.
- **Verified public publication records** - the archive and scholarly JSON-LD share one small registry for the three public Google Scholar records, with venue, year, DOI, and citation metadata where available.
- **Field notes bridge** - the Archive exposes a separate public writing space without copying its content into the portfolio.
- **Thesis artifacts** - the public research detail can reveal a metadata-stripped infographic and FTIR visual references without placing them on the first screen.
- **Bilingual interface** - English and Persian content, RTL layout support, localized numerals, and language-specific board signals.
- **Command palette** - keyboard-friendly global search across routes, projects, research evidence, share/copy links, public-profile previews, and external links with `Ctrl`/`⌘` + `K`.
- **Terminal command line** - the Help surface accepts direct commands such as `help`, `ls`, `history`, `status`, `sync`, `open projects`, `max`, `min`, `pause`, `resume`, `lang fa`, and `share`, with ↑/↓ history navigation.
- **Public evidence** - selected publications, courses, field practice, recognition, and Google Scholar links.
- **Profile outputs** - general, academic, and software-focused dossiers open in an in-terminal preview, switch without leaving the preview, support shareable `?profile=` deep links, and can be printed/saved as PDF or downloaded as plain text, with shared public contact links and no private application data.
- **Installable shell** - web app metadata lets mobile visitors add the terminal portfolio to a home screen without claiming offline support.

## Design principles

1. **One source of truth.** Project, route, board, search, and GitHub data are derived from shared records rather than copied into separate views.
2. **Progressive disclosure.** The first screen stays legible; details appear only when a visitor chooses a direction.
3. **Motion with a purpose.** Animation explains the live board and gives route changes a sense of continuity. It pauses on interaction and respects `prefers-reduced-motion`.
4. **Readable terminal language.** MatrixType gives the interface its pixel-display voice while IRANSharp keeps Persian content readable.
5. **No decorative dead ends.** Labels and controls either reveal information, move to a route, filter content, or link to public evidence.

## Keyboard map

The numeric shortcuts mirror the visible terminal file rail:

| Key | Destination |
| --- | --- |
| `0` or `H` | `00` README / home |
| `1` | `01` SIGNALS / projects |
| `2` | `02` FIELD NOTES / research |
| `3` | `03` SKILLS |
| `4` | `04` CONTACT |
| `5-9` | No shortcut; the terminal reports it with a toast |
| `C` | Contact |
| `?` | Help on the home surface |
| `M` | Toggle terminal MAX / MIN; `Esc` minimizes an expanded terminal |
| `[` / `]` | Previous / next project while reading a case study |
| `Ctrl`/`⌘` + `K` | Command palette |

The Help surface also accepts direct terminal commands; commands are intentionally limited to local navigation, presentation state, language, board state, public GitHub metadata refresh, route sharing, and the current-session command history.

## Technology

This is a dependency-free static site:

- semantic HTML
- modern CSS with responsive RTL support
- vanilla JavaScript organized around shared content, renderers, and route state
- GitHub’s public REST API for repository language, stars, forks, and update signals
- local storage caching for GitHub metadata when available

There is no build step and no package manager. Serve the repository with any static HTTP server.

For example:

```powershell
python -m http.server 4174
```

Then open `http://127.0.0.1:4174/`.

## File map

| File | Role |
| --- | --- |
| `index.html` | Semantic shell, accessibility landmarks, icons, metadata, and JSON-LD |
| `app.js` | Shared content records, translations, routes, interaction, animation, and GitHub enrichment |
| `styles.css` | Terminal layout, responsive behavior, typography, pixel board motion, and reduced-motion rules |
| `favicon.svg` | Pixel mark used by the browser tab |
| `site.webmanifest` | Mobile install metadata and terminal theme settings |
| `social-card.svg` | Terminal-style Open Graph and Twitter share image |
| `llms.txt` | Curated public summary for retrieval and generative search |
| `robots.txt` / `sitemap.xml` | Crawl guidance for the canonical public site |
| `MatrixType*.ttf` | Licensed display and terminal typefaces |
| `iransharp_*.woff2` | Persian interface typeface |

## SEO and sharing

The document includes route-aware descriptions and titles, a canonical URL, robots directives, Open Graph and Twitter metadata, bilingual language hints, `Person`, `WebSite`, project, and public research JSON-LD, social identity links, a sitemap, and an `llms.txt` retrieval summary. If the deployment URL changes, update the canonical URL, Open Graph URL, JSON-LD URLs, `llms.txt`, `robots.txt`, and `sitemap.xml` together so search engines receive one consistent identity.

## Accessibility and responsive behavior

- keyboard focus states are visible
- route controls use semantic buttons and links
- the live board exposes changing values through labels rather than relying only on animation
- the command palette supports keyboard navigation
- motion pauses when the board is focused, hovered, paused, hidden, or when reduced motion is requested
- route changes keep the terminal frame in view on compact screens so detail pages retain their context
- mobile layouts allow natural document scrolling without introducing horizontal overflow

## License and typefaces

The site source is personal portfolio software. The included MatrixType files are distributed under the accompanying `matrixtype-license.txt`; that license governs the typeface files and should be retained with them.

## Author

**Soheil Aghayani**

- GitHub: [Soheil-Aghayani](https://github.com/Soheil-Aghayani)
- Portfolio: [agseyl.ir](https://agseyl.ir/)
- LinkedIn: [AgSeyl](https://www.linkedin.com/in/AgSeyl)
- Google Scholar: [public profile](https://scholar.google.com/citations?user=bnprOf8AAAAJ&hl=en)
- Telegram: [@agseyl](https://t.me/agseyl)
