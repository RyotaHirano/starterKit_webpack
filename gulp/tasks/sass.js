import gulp from 'gulp';
import { sass, postcss, cssnano } from '../plugins';
import { sass as conf, AUTOPREFIXER } from '../conf';

const postcssProcessors = [
  require('autoprefixer')({ browsers: AUTOPREFIXER }),
  require('css-mqpacker'),
  require('postcss-flexbugs-fixes'),
  require('postcss-partial-import')()
];
gulp.task('sass', () => {
  return gulp.src(['src/css/style.scss'])
    // .pipe(if(!isProduction, sourcemaps.init()))
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    // .pipe(if(!isProduction, sourcemaps.write()))
    .pipe(if(isProduction, cssnano()))
    .pipe(gulp.dest(conf.dst));
});
