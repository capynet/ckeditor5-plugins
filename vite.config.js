import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: [
        resolve(__dirname, 'src/main.ts'),
        resolve(__dirname, 'src/style.css'),
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['ckeditor5'],
    },
  },
  publicDir: 'assets',
});
