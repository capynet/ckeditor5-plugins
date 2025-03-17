# CKEditor5 Quarts
Provides CKEditor5 plugins for Quartz components.

## Compilation mode
This repo is able to compile the same code for two kind of targets:

* `npm run build` will generate the newest way to generate CKEditor plugins. They can be used basically on any project.  
* `npm run build:legacy` instead, generates a UMD version (Since Drupal/CKEditor5requires this compilation way). This build uses the same source code but "imports" are taken on a different way. What's important here is this compilation style is the one Drupal needs.  

## Showcase
* `npm run dev` http://localhost:5173/ if you want ot start developing. It offers a sandbox where you can add your new plugins and start developing it in detail.
* [dist-index-bundle.html](dist-index-bundle.html) (first run  `npm run build`) for checking the compiled plugins in action as a bundle.
* [dist-index-individual-plugins.html](dist-index-individual-plugins.html) (first run  `npm run build`) for checking the compiled plugins in action as independent plugins.

## More details about Drupal and "DLL" (legacy)
Drupal still uses DLL way to compile plugins. 

This is the reason you have two ways to compile the plugins. `npm run build:legacy` will generate `dist/ckeditor5-qz-bundle.js.umd.cjs` which is compatible with Drupal.

For managing the different imports (DLL requires import of CKEditor modules from a different place than the normal CKEditor) you can use the `ckeditor-imports` dir. Inside of it you have dll and standard. You will just need to add any import missing at `/dll/index.ts` and done. 

