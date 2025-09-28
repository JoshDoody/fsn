import autoprefixer from "autoprefixer";
import browserSync from "browser-sync";
import spawn from "cross-spawn";
import cssnano from "cssnano";
import { dest, series, src, task, watch } from "gulp";
import postcss from "gulp-postcss";
import atimport from "postcss-import";
import tailwindcss from "tailwindcss";

const SITE_ROOT = "./_site";
const POST_BUILD_STYLESHEET = `${SITE_ROOT}/assets/css/`;
const PRE_BUILD_STYLESHEET = "./src/style.css";
const TAILWIND_CONFIG = "./tailwind.config.js";

// Windows-friendly jekyll executable name
const jekyllExe = process.platform === "win32" ? "jekyll.bat" : "jekyll";

// Env
const isDev = process.env.NODE_ENV === "development";

// Build Jekyll via Bundler, return a promise so Gulp knows when it’s done
task("buildJekyll", () => {
  browserSync.notify("Building Jekyll site...");

  const args = ["exec", jekyllExe, "build"];
  if (isDev) args.push("--incremental");

  return new Promise((resolve, reject) => {
    const child = spawn("bundle", args, { stdio: "inherit" });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Jekyll build failed with exit code ${code}`));
    });
    child.on("error", (err) => reject(err));
  });
});

// Build CSS with PostCSS/Tailwind; add autoprefixer+cssnano only in production
task("processStyles", () => {
  browserSync.notify("Compiling styles...");

  const plugins = [atimport(), tailwindcss(TAILWIND_CONFIG)];
  if (!isDev) plugins.push(autoprefixer(), cssnano());

  return src(PRE_BUILD_STYLESHEET)
    .pipe(postcss(plugins))
    .pipe(dest(POST_BUILD_STYLESHEET));
});

// Combined site build
const buildSite = series("buildJekyll", "processStyles");

// BrowserSync static server (serves the _site folder). No custom client/snippet.
task("startServer", () => {
  const bs = browserSync.create();

  bs.init({
    files: [], // we’ll manually trigger reloads after builds
    open: "local",
    port: 4000,
    server: {
      baseDir: SITE_ROOT,
      serveStaticOptions: { extensions: ["html"] },
    },
    // Let BrowserSync inject its own client; no custom client path.
  });

  // Watch for changes in sources (NOT in _site / node_modules / vendor / .bundle)
  watch(
    [
      "**/*.{html,md,markdown,liquid}",
      "**/*.{css,scss}",
      "**/*.js",
      "!_site/**/*",
      "!node_modules/**/*",
      "!vendor/**/*",
      "!.bundle/**/*",
      "!.jekyll-cache/**/*",
      "!tmp/**/*",
    ],
    { interval: 500 },
    series(buildSite, (done) => {
      // Reload the browser after the site is rebuilt
      bs.reload();
      done();
    })
  );
});

// Public tasks
exports.default = series(buildSite);
exports.serve = series(buildSite, "startServer");
