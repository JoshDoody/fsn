# Site notes

## Fix
- primary navigation/drop down
- Update 1-on-1 help section (image/layout)
- lazy load on blog post
- bring over salary calculator
- need adobe fonts setup by Josh
  - pre-launch fix where we will swap out script in real-time


## Completed
- ~~Josh to provide Wufoo form creds~~
- ~~use https://github.com/kenwheeler/slick for carousels/sliders~~
- ~~implemented SASS~~
- ~~need font awesome icons set up by Josh~~
- ~~abandon base, used started tailwind install with everything I need below~~
- ~~add CSS color variables~~

# Jekyll Starter Tailwind
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

A starter kit for using [Tailwind](https://tailwindcss.com) with [Jekyll](https://jekyllrb.com/) that includes:
* A barebones Jekyll starter theme
* A Gulpfile that does the following:

    * Compiles Tailwind
    * Strips out unused CSS using Tailwind's `purge` option
    * Runs [Autoprefixer](https://github.com/postcss/autoprefixer)
    * Minifies your CSS
    * Compiles Jekyll
    * Runs [Browsersync](https://www.browsersync.io/) for local development

## What is Tailwind?
>"Tailwind is a utility-first CSS framework for rapidly building custom user interfaces."
–[Tailwind](https://tailwindcss.com)

## What is Jekyll?
>"Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Think of it like a file-based CMS, without all the complexity. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by Apache, Nginx or another web server. Jekyll is the engine behind GitHub Pages, which you can use to host sites right from your GitHub repositories."
–[Jekyll](https://jekyllrb.com/)

## Requirements
* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Ruby](https://www.ruby-lang.org/en/)

## Get started
* `bundle install` to install Ruby gems
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync

## Build your site
* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production


## Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/taylorbryant/jekyll-starter-tailwind)

Note: By default, Netlify uses `jekyll build` as the build command. The included `netlify.toml` file will override it to use `npm run build`.

## License
[MIT](https://github.com/taylorbryant/jekyll-starter-tailwind/blob/master/LICENSE.md)