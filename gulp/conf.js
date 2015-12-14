import WEBPACK from "webpack";

export const DIR = {
  SRC: 'src',
  DST: 'dst',
  BUILD: 'public',
  IMG: 'images'
};

export const sass = {
  src: [
    `${DIR.SRC}/**/*.{scss,sass}`
  ],
  dst: `${DIR.DST}/css`
};

export const jade = {
  src: [
    `${DIR.SRC}/**/*.jade`,
    `!${DIR.SRC}/**/_**/*.jade`,
    `!${DIR.SRC}/**/_*.jade`
  ],
  dst: `${DIR.DST}/`,
  opts: {
    pretty: true
  }
};

export const webpack = {
  src: [`${DIR.SRC}/**/*.js`],
  dst: `${DIR.DST}/js`,
  config: {
    progress: true,
    // **For multiple files**
    // entry: {
    //   hoge: `./${DIR.SRC}/js/hoge.js`,
    //   fuga: `./${DIR.SRC}/js/fuga.js`
    // },
    // output: {
    //   filename: '[name].js'
    // },
    entry: `./${DIR.SRC}/js/main.js`,
    output: {
      filename: 'index.js'
    },
    plugins: [
      new WEBPACK.optimize.DedupePlugin(),            // ライブラリ間で依存しているモジュールが重複している場合、二重に読み込まないようにする
      new WEBPACK.optimize.AggressiveMergingPlugin(), // ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
};

export const serve = {
  open: 'external',
  reloadDebounce: 2000,
  ui: false,
  notify: false,
  startPath: DIR.SITE_ROOT_PATH,
  ghostMode: false,
  server: {
    baseDir: './',
    index: `${DIR.DST}/`,
    routes: {
      ['']: `${DIR.DST}/`
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
  dst: `${DIR.BUILD}/${DIR.IMG}`,
  opts: {
    //options
  }
};

export const uglify = {
  src: [`${DIR.DST}/**/*.js`],
  dst: `${DIR.BUILD}/js`
};

export const copy = {
  img: {
    src: [`${DIR.SRC}/${DIR.IMG}/**`],
    dst: `${DIR.DST}/${DIR.IMG}`
  },
  build: {
    src: [
      `${DIR.DST}/**`,
      `!${DIR.DST}/js/**`,
      `!${DIR.DST}/${DIR.IMG}`,
      `!${DIR.DST}/${DIR.IMG}/**`
    ],
    dst: `${DIR.BUILD}`
  }
};
