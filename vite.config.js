const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'pelilauta_store',
      fileName: (format) => `pelilauta_store.${format}.js`
    }
  }
});