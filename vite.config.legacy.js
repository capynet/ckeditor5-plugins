import path, {resolve} from 'path';
import {defineConfig} from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((command, mode) => {
  const COMPILATION_MODE = 'dll'

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
      minify: false,
      lib: {
        entry: resolve(__dirname, 'src/bundle.ts'),
        name: 'CKEditor5.qz',
        formats: ['umd'],
        fileName: 'ckeditor5-qz-bundle.js'
      },
      rollupOptions: {
        onwarn(warning, warn) {
          // Let's ignore unused imports since is part of the
          // unification of both compilation methods.
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') {
            return;
          }
          warn(warning);
        },
        external: [
          'ckeditor5',
          /^ckeditor5\/src\/.+/
        ],
        output: {
          globals: {
            ckeditor5: 'CKEDITOR',
            'ckeditor5/src/core': 'CKEditor5.core',
            'ckeditor5/src/engine': 'CKEditor5.engine',
            'ckeditor5/src/ui': 'CKEditor5.ui',
            'ckeditor5/src/widget': 'CKEditor5.widget',
            'ckeditor5/src/utils': 'CKEditor5.utils'
          }
        }
      },
    },
    publicDir: 'assets',
  }
});
