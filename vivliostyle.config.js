// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
module.exports = {
  title: 'vivliostyle-intro-2', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'yas-ako', // default to `author` in `package.json` or undefined.
  // language: 'ja', // default to undefined.
  // size: 'A4', // paper size.
  // theme: '@yas-ako/vivliostyle-theme-enhanced-slide@^0.1.1',
  theme: ['@yas-ako/vivliostyle-theme-enhanced-slide@^0.1.1',
    'style.css',
  ], // .css or local dir or npm package. default to undefined.
  entryContext: 'entry/',
  entry: [
    '_title.md',
    'chapter1.md',
    'chapter2.md',
    'chapter3.md',
    'chapter4.md',
    'chapter5.md',
    'chapter6.md',
    // 'manuscript.md', // `title` is automatically guessed from the file (frontmatter > first heading).
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set individually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
