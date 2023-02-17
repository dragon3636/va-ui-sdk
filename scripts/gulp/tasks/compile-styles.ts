import { join } from 'path';
import { task, src, dest, series } from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass';
import * as gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
const clean = require('gulp-clean');
import { buildConfig } from '../../build-config';

task('style:compile-css', () => {
  return src(join(buildConfig.componentsDir, 'assets/sass/**/*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('../maps', { addComment: false }))
    .pipe(dest(join(buildConfig.componentsDir, 'assets/css/')));
});

// task('styles:copy', () => {
//   return src([
//     join(buildConfig.componentsDir, 'styles/**/*'),
//     `!${join(buildConfig.componentsDir, 'styles/themse/*')}`,
//   ]).pipe(dest(join(buildConfig.componentsDir, 'assets')));
// });
task('styles:clean', () => {
  return src(
    ['assets/css/styles.css', 'assets/maps/**'].map(url =>
      join(buildConfig.componentsDir, url),
    ),
    {
      read: false,
      allowEmpty: true,
    },
  ).pipe(clean());
});

task('styles:build', series(['styles:clean', 'style:compile-css']));
