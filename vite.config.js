import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

export default defineConfig({
  define: {
    'process.env': {
      ...process.env,
      VITE_APP_VERSION: process.env.npm_package_version
    }
  },
  plugins: [vue()], // https://vitejs.dev/config/
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/wave-ui/scss/variables";@import "@/documentation/scss/_variables.scss";` }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src")
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/wave-ui/index.js'),
      name: 'WaveUI'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
