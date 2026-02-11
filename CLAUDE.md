# Project: Fearless Salary Negotiation

A content marketing Jekyll site at fearlesssalarynegotiation.com, focused on salary negotiation coaching, courses, and resources.

## Tech Stack

### Core
- **Jekyll** static site generator
- **Ruby 3.2.9** (`.ruby-version`) with `github-pages` gem
- **Node 16** (`.nvmrc`)
- **Deployed on Netlify** (`netlify.toml`) with Bundler 2.7.2

### Build Tooling
- **Gulp 4.0.2** (`gulpfile.babel.js`) - orchestrates Jekyll builds, style processing, BrowserSync (port 4000)
- **Babel** - JS transpilation (ES2015+ via `babel-preset-env`)
- **PostCSS** pipeline: autoprefixer, cssnano minification, Tailwind

### CSS & Styling
- **Tailwind CSS 2.0.4** (`tailwind.config.js`) - custom md breakpoint at 876px; purges `_site/**/*.html`
- **SASS/SCSS** - 10 partials in `_sass/` (global, header, hero, buttons, footer, forms, callout-boxes, calculator, content, variables)
- **Adobe Typekit** (kit `xkl6thl`)
- **Font Awesome 5.11.2** via CDN

### JavaScript
- **jQuery 1.12.4** (CDN)
- **Slick Carousel** - testimonials, press, podcasts, TOC carousels
- **Bootstrap Slider** - salary calculator sliders
- **Match Height** - card equalization
- Custom `assets/js/scripts.js` - salary counter-offer calculator, category filtering, lazy loading, accordions, sticky CTAs, mobile nav

### Jekyll Plugins
- jekyll-paginate (blog pagination)
- jekyll-sitemap (XML sitemap)

## Content Architecture

### Collections (7)
- `_book_chapters/` → `/book/:title/`
- `_book_excerpts/` → `/book/:path/`
- `_resources/` → `/resource-library/:title/`
- `_success-stories/` (187 files) → `/results/:path/` (layout: success_story)
- `_case-studies/` → `/results/:path/`
- `_media_podcasts/` (no output)
- `_media_articles/` (no output)

### Other Content
- `_posts/` - 60+ blog posts
- `_data/categories.yml` - 9 category slugs (negotiate-lowball, coach, raise, promotion, negotiate, salary-questions, interview, executive, case-study)
- 18 layouts in `_layouts/`
- 33 includes in `_includes/`

## Third-Party Integrations
- **Google Analytics** - Universal (UA-67642804-1) and GA4 (G-Z30RWWMDHP), production only
- **Hotjar** (site 274804) - heatmaps/session recordings, production only
- **RightMessage** (ID 1676380240) - content personalization, production only
- **ConvertKit** - email marketing, 16 form variations in `_includes/convertkit-forms/`
- **SendOwl** - payment processing for 3 products
- **SavvyCal** - coaching call scheduling
- **Drip** - legacy, commented out

## SEO
- JSON-LD structured data (Article, FAQPage, Service, WebSite schemas)
- Open Graph & Twitter Card meta tags in `_includes/header.html`
- Canonical URL support with 301 redirect handling
- Dynamic SEO fallback logic for success story titles/descriptions

## Dev Commands
- `npm run dev` - local development with hot reload
- `npm run build:production` - production build
- `npm run build:dev` - development build
- `npm run serve:jekyll` - direct Jekyll serve
- `npm run assets:watch` - watch/process styles only
