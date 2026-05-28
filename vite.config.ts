import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { glob } from "glob";
import { defineConfig, Plugin, loadEnv } from 'vite';
import { InputOptions } from 'rollup';
import { do_render } from './src/template/render'
import { ProxyAgent, setGlobalDispatcher } from "undici";

const proxy = process.env.https_proxy
  || process.env.HTTPS_PROXY;

if (proxy) {
  console.log("Using proxy:", proxy);

  setGlobalDispatcher(
    new ProxyAgent(proxy)
  );
}

const OUT_DIR = 'dist'

const index_html = glob.sync(resolve(__dirname, "**", "index.html")).filter(
  p=>!p.includes('/public/') && !p.includes(`/${OUT_DIR}/`)
)


// https://vitejs.dev/config/
export default ({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: "./",
    build: {
      rollupOptions: {
        input: index_html,
      },
      outDir: OUT_DIR
    },
    plugins: [
      {
        name: 'render-templates',
        async buildStart(options: InputOptions) {
          await do_render(env);
        },
      },
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
