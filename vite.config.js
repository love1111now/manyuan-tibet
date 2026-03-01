import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        black: resolve(__dirname, 'black-dzambhala.html'),
        ganapati: resolve(__dirname, 'ganapati.html'),
        yellow: resolve(__dirname, 'yellow-dzambhala.html'),
        kurukulla: resolve(__dirname, 'kurukulla.html'),
        // 如果您有新增 terms.html，請把下面這行的斜線 // 拿掉
        // terms: resolve(__dirname, 'terms.html') 
      }
    }
  }
});