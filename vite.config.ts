import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { glob } from "glob";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const index_html = glob.sync(resolve(__dirname, "**", "index.html")).filter(
  p=>!p.includes('/public/')// && !p.includes('/_')
)


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: index_html,
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
