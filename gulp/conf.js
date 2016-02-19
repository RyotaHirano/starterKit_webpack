import WEBPACK from "webpack";

export const DIR = {
  PATH: '/',
  SRC: 'src',
  DST: 'dst',
  BUILD: 'public',
  IMG: 'images'
};

export const sass = {
  src: [
    `${DIR.SRC}/**/*.{scss,sass}`
  ],
  dst: `${DIR.DST}${DIR.PATH}/css`
};

export const jade = {
  src: [
    `${DIR.SRC}/**/*.jade`,
    `!${DIR.SRC}/**/_**/*.jade`,
    `!${DIR.SRC}/**/_*.jade`
  ],
  dst: `${DIR.DST}${DIR.PATH}/`,
  opts: {
    pretty: true
  }
};

export const serve = {
  open: 'external',
  reloadDebounce: 2000,
  ui: false,
  notify: false,
  startPath: DIR.PATH,
  ghostMode: false,
  server: {
    baseDir: './',
    index: `${DIR.DST}${DIR.PATH}/`,
    routes: {
      [DIR.PATH]: `${DIR.DST}${DIR.PATH}/`
    }
  }
};

export const eslint = {
  src: [`${DIR.SRC}/**/*.js`]
};

export const clean = {
  path: [
    `${DIR.BUILD}`
  ]
};

export const imagemin = {
  src: [`${DIR.SRC}/${DIR.IMG}/**`],
  dst: `${DIR.BUILD}${DIR.PATH}/${DIR.IMG}`,
  opts: {
    //options
  }
};

export const uglify = {
  src: [`${DIR.DST}${DIR.PATH}/**/*.js`],
  dst: `${DIR.BUILD}/js`
};

export const copy = {
  img: {
    src: [`${DIR.SRC}/${DIR.IMG}/**`],
    dst: `${DIR.DST}${DIR.PATH}${DIR.IMG}`
  },
  build: {
    src: [
      `${DIR.DST}/**`,
      `!${DIR.DST}/js/**`,
      `!${DIR.DST}/${DIR.IMG}`,
      `!${DIR.DST}/${DIR.IMG}/**`
    ],
    dst: `${DIR.BUILD}${DIR.PATH}`
  }
};
