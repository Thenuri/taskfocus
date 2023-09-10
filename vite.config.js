import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'], 
      manifest: {
        name: 'Task App',
        short_name: 'App',
        description: 'Website description(Could be same with index.html file)',  
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
           

          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
           

          },
          {
            src:'/maskable_icon.png',
            sizes: '1024x1024',
            type: 'image/png',

          }
        ],
        theme_color: '#ffffff',
        background_color: '#dddddd',
        // display: 'standalone',
        display: 'fullscreen',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
      } 
    })
  ],
})
