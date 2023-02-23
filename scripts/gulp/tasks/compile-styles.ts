/* eslint-disable @typescript-eslint/no-var-requires */
import { join } from 'path';
import { task, src, dest, series } from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass';
import * as gulpSass from 'gulp-sass';
import merge2 from 'merge2';
const sass = gulpSass(dartSass);
const clean = require('gulp-clean');
const concatCss = require('gulp-concat-css');
import { buildConfig } from '../../build-config';
import { execNodeTask } from '../util/task-helpers';
//px tailwindcss -i ./projects/va/ui-sdk/assets/css/input.css -o ./dist/output.css --watch
task(
  'style:compile-tailwind',
  execNodeTask('tailwindcss', 'tailwindcss', [
    '-i',
    join(buildConfig.componentsDir, 'assets/css/input.css'),
    '-o',
    join(buildConfig.componentsDir, 'assets/css/output.css'),
    '--watch',
  ]),
);
task('style:concat', function () {
  return src(
    ['styles.css', 'output.css'].map(url =>
      join(buildConfig.componentsDir, 'assets/css', url),
    ),
  )
    .pipe(concatCss('concat.css'))
    .pipe(dest('out/'));
});

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
