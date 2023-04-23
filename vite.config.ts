import { fileURLToPath, URL } from 'node:url'
import htmlConfig from 'vite-plugin-html-config'
import { defineConfig, loadEnv } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ((mode: string) => {
  const env = loadEnv(mode, process.cwd())
  console.log('mode:' + mode)
  console.log('env:' + env)
  const htmlConfigs = htmlConfig({
    headScripts: [
      { src: './lib/cesium/Cesium.js' }
    ],
    links: [
      { rel: 'stylesheet', href: './lib/cesium/Widgets/widgets.css' }
    ]
  })
  const externalConfig = viteExternalsPlugin({
    cesium: 'Cesium'
  })
  return defineConfig({
    root: './',
    build: {
      assetsDir: './',
      minify: ['false'].includes(env.VITE_IS_MINIFY) ? false : true
    },
    plugins: [vue(), htmlConfigs, externalConfig],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
})





