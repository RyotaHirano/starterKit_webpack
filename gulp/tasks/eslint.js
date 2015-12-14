import gulp from 'gulp';
import { eslint } from '../plugins';
import { eslint as conf } from '../conf';

gulp.task('eslint', () => {
  return gulp.src(conf.src)
    .pipe(eslint(conf.opts))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
