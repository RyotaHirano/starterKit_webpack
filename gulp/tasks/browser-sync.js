import gulp from 'gulp';
import browserSync from 'browser-sync';
import { serve as conf } from '../conf';

gulp.task('serve', cd => {
  browserSync.init({
    proxy: conf.ip
  });
});
