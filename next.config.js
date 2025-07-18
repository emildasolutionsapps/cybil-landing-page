/** next.config.js
 * Use an env var to control the embed base path.
 * Local dev: no EMBED_BASE_PATH -> serves at "/"
 * Netlify prod: set EMBED_BASE_PATH="/landingpage" -> builds under that subpath
 */

const embedBase = process.env.EMBED_BASE_PATH?.trim() || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // ---- Sub-directory embed settings ----
  basePath: embedBase,                 // e.g. "/landingpage" in Netlify
  assetPrefix: embedBase || undefined, // let Next default in dev when empty

  // ---- Static export for Netlify ----
  output: 'export',                    // generates /out
  images: { unoptimized: true },       // required for export unless all static

  // ---- Build tolerances (optional; remove if you want strict) ----
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
