// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require("@layer0/next/config");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const isProduction = process.env.NODE_ENV === "production";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const _preLayer0Export = withPWA(
  withBundleAnalyzer({
    reactStrictMode: true,
    pwa: {
      disable: !isProduction,
      dest: "public",
      runtimeCaching,
      publicExcludes: ["!robots.txt"],
      modifyURLPrefix: {
        "../public": "",
      },
    },
  })
);

module.exports = (phase, config) =>
  withLayer0(
    withServiceWorker({
      // Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
      // the logs in the Layer0 developer console.
      layer0SourceMaps: true,
      ..._preLayer0Export,
    })
  );
