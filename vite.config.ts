import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { glob } from "glob";
import { defineConfig, Plugin } from 'vite';
import { InputOptions } from 'rollup';
import { do_render } from './hbs/render'


import vue from '@vitejs/plugin-vue'

const OUT_DIR = 'dist'

const customBuildStartPlugin: Plugin = {
  name: 'custom-build-start-plugin',
  async buildStart(options: InputOptions) {
    await do_render();
  },
};

const index_html = glob.sync(resolve(__dirname, "**", "index.html")).filter(
  p=>!p.includes('/public/') && !p.includes(`/${OUT_DIR}/`)
)


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: index_html,
    },
    outDir: OUT_DIR
  },
  plugins: [
    customBuildStartPlugin,
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
