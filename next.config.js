// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require("@layer0/next/config");
const withPWA = require("next-pwa");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const _preLayer0Export = withPWA(
  withBundleAnalyzer({
    reactStrictMode: true,
    pwa: {
      dest: "public",
    },
  })
);

module.exports = (phase, config) =>
  withLayer0(
    withServiceWorker({
      // Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
      // the logs in the Layer0 developer console.
      layer0SourceMaps: true,
      pwa: {
        dest: "public",
      },
      ..._preLayer0Export,
    })
  );
