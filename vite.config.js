import path, {resolve} from 'path';
import {defineConfig} from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  const COMPILATION_MODE = 'standard'

  console.info(`--------- Compiling "${COMPILATION_MODE}" mode ---------`);

  return {
    plugins: [tsconfigPaths()],
    resolve: {
      alias: {
        '@ckeditor-imports': path.resolve(__dirname, `./src/ckeditor-imports/${COMPILATION_MODE}`)
      }
    },
    build: {
      sourcemap: false,
      lib: {
        entry: {
          "ckeditor5-qz--bundle": resolve(__dirname, 'src/bundle.ts'),

          // Compile each plugin on an independent dir in case you need only one of them.
          "ckeditor5-qz-link": resolve(__dirname, 'src/plugins/QzLink/Plugin.ts'),
          "ckeditor5-qz-icons": resolve(__dirname, 'src/plugins/QzIcons/Plugin.ts'),
          "ckeditor5-qz-tooltip": resolve(__dirname, 'src/plugins/QzTooltip/Plugin.ts'),
        },
        formats: ['es'],
      },
      rollupOptions: {
        external: [
          'ckeditor5',
          /^ckeditor5\/src\/.+/
        ],
      },
    },
    publicDir: 'assets',
  }
});
