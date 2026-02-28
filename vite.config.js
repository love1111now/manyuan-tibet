import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // 未來如果您新增了子頁面，請將它們取消註解
        // blackDzambhala: resolve(__dirname, 'black-dzambhala.html'),
        // ganapati: resolve(__dirname, 'ganapati.html'),
        // yellowDzambhala: resolve(__dirname, 'yellow-dzambhala.html'),
        // kurukulla: resolve(__dirname, 'kurukulla.html'),
        // terms: resolve(__dirname, 'terms.html'),
      }
    }
  }
})