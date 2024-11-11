import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: [
        resolve(__dirname, 'src/main.ts'),
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['ckeditor5'],
    },
  },
  publicDir: 'assets',
});
