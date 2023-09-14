import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'pelilauta_store',
      fileName: (format) => `pelilauta_store.${format}.js`
    }
  },
  plugins: [dts()]
});