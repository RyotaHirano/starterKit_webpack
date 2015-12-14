import gulp from 'gulp';
import { plumber, notify, webpack } from '../plugins';
import { webpack as conf } from '../conf';

gulp.task('webpack', () => {
  return gulp.src(conf.src)
    .pipe(plumber(
      {
        errorHandler: notify.onError('<%= error.message %>')
      }
    ))
    .pipe(webpack(conf.config))
    .pipe(gulp.dest(conf.dst));
});
