import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      mode: 'development',
      manifest: {
        name: 'vite-react-pwa',
        short_name: 'vite-react-pwa',
        theme_color: '#333333',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        start_url: '/',
        background_color: '#333333'
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: '/src'
      }
    ]
  },
  server: {
    fs: {
      allow: ['..'],
      strict: false
    }
  }
})
