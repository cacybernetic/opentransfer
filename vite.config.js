// Dependencies.
import {ViteMinifyPlugin} from "vite-plugin-minify";
import react from "@vitejs/plugin-react";
import {VitePWA} from "vite-plugin-pwa";
import {defineConfig} from "vite";

// https://vitejs.dev/config.
export default defineConfig({
  base: "/opentransfer/",
  server: {port: 5400},
  build: {
    target: [
      "firefox78",
      "chrome87",
      "safari14",
      "es2020",
      "edge88"
    ]
  },
  plugins: [
    react(),
    ViteMinifyPlugin({}),
    VitePWA({
      devOptions: {enabled: true},
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,json,txt}"
        ]
      },
      manifest: {
        description: "A quick mobile payment tool.",
        orientation: "portrait-primary",
        background_color: "white",
        start_url: "./index.html",
        name: "Open Transfer",
        display: "standalone",
        theme_color: "white",
        id: "opentransfer",
        short_name: "OTR",
        lang: "fr",
        categories: [
          "ussd automation",
          "mobile payment",
          "financial app"
        ],
        screenshots: [
          {
            src: "./assets/render/render_4.png",
            type: "image/png",
            sizes: "1366x768"
          },
          {
            src: "./assets/render/render_1.png",
            form_factor: "wide",
            type: "image/png",
            sizes: "1366x768"
          },
          {
            src: "./assets/render/render_2.png",
            form_factor: "wide",
            type: "image/png",
            sizes: "1366x768"
          },
          {
            src: "./assets/render/render_3.png",
            form_factor: "wide",
            type: "image/png",
            sizes: "1366x768"
          }
        ],
        icons: [
          {
            src: "./assets/logos/logo-16.png",
            type: "image/png",
            sizes: "16x16"
          },
          {
            src: "./assets/logos/logo-32.png",
            type: "image/png",
            sizes: "32x32"
          },
          {
            src: "./assets/logos/logo-48.png",
            type: "image/png",
            sizes: "48x48"
          },
          {
            src: "./assets/logos/logo-64.png",
            type: "image/png",
            sizes: "64x64"
          },
          {
            src: "./assets/logos/logo-72.png",
            type: "image/png",
            sizes: "72x72"
          },
          {
            src: "./assets/logos/logo-96.png",
            type: "image/png",
            sizes: "96x96"
          },
          {
            src: "./assets/logos/logo-128.png",
            type: "image/png",
            sizes: "128x128"
          },
          {
            src: "./assets/logos/logo-144.png",
            type: "image/png",
            sizes: "144x144"
          },
          {
            src: "./assets/logos/logo-171.png",
            type: "image/png",
            sizes: "171x171"
          },
          {
            src: "./assets/logos/logo-192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "./assets/logos/logo-256.png",
            type: "image/png",
            sizes: "256x256"
          },
          {
            src: "./assets/logos/logo-341.png",
            type: "image/png",
            sizes: "341x341"
          },
          {
            src: "./assets/logos/logo-384.png",
            type: "image/png",
            sizes: "384x384"
          },
          {
            src: "./assets/logos/logo-512.png",
            type: "image/png",
            sizes: "512x512"
          }
        ]
      }
    })
  ]
});
