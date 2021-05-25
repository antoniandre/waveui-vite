import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

export default defineConfig({
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
  }
})
