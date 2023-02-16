import { join } from 'path';
import { task, src, dest, series } from 'gulp';
var clean = require('gulp-clean');
import * as sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass';
import * as gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import { buildConfig } from '../../build-config';

task('library:compile-css', () => {
  return src(join(buildConfig.componentsDir, 'assets/sass/*.scss'))
  .pipe(sourcemaps.init())
  .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(dest(join(buildConfig.componentsDir, 'assets/css/')));
});

// task('styles:copy', () => {
//   return src([
//     join(buildConfig.componentsDir, 'styles/**/*'),
//     `!${join(buildConfig.componentsDir, 'styles/themse/*')}`,
//   ]).pipe(dest(join(buildConfig.componentsDir, 'assets')));
// });
task('styles:clean', () => {
  return src(join(buildConfig.componentsDir, 'styles/css/*.css'), {
    read: false,
  }).pipe(clean());
});

// task('styles:build', series(['styles']));
