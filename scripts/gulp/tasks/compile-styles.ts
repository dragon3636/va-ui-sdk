/* eslint-disable @typescript-eslint/no-var-requires */
import { join } from 'path';
import { task, src, dest, series } from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass';
import * as gulpSass from 'gulp-sass';
import * as cleanCSS from 'gulp-clean-css';
import * as pump from 'pump';
const sass = gulpSass(dartSass);
const clean = require('gulp-clean');
const concatCss = require('gulp-concat-css');
import { buildConfig } from '../../build-config';
import { execNodeTask } from '../util/task-helpers';
//px tailwindcss -i ./projects/va/ui-sdk/assets/css/input.css -o ./dist/output.css --watch
task('style:compile-css', () => {
  return pump([
    src(join(buildConfig.componentsDir, 'assets/sass/**/*.scss')),
    sourcemaps.init(),
    sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError),
    sourcemaps.write('../maps', { addComment: false }),
    dest(join(buildConfig.componentsDir, 'assets/css/')),
  ]);
});

task(
  'style:compile-tailwind',
  execNodeTask('tailwindcss', 'tailwindcss', [
    '-i',
    join(buildConfig.componentsDir, 'assets/css/tailwind-input.css'),
    '-o',
    join(buildConfig.componentsDir, 'assets/css/tailwind-output.css'),
  ]),
);
task('style:concat', function () {
  return pump([
    src(
      ['tailwind-output.css', 'styles.css'].map(url =>
        join(buildConfig.componentsDir, 'assets/css', url),
      ),
      { allowEmpty: true },
    ),
    concatCss('style-concat.css'),
    sourcemaps.init(),
    cleanCSS(),
    sourcemaps.write('../maps', { addComment: false }),
    dest(join(buildConfig.componentsDir, 'assets/css')),
  ]);
});

task('style:clean', () => {
  return pump([
    src(
      [
        'css/styles.css',
        'css/style-concat.css',
        'css/tailwind-output.css',
        'maps/**',
      ].map(url => join(buildConfig.componentsDir, 'assets', url)),
      {
        read: false,
        allowEmpty: true,
      },
    ),
    clean(),
  ]);
});

task(
  'style:build',
  series([
    'style:clean',
    'style:compile-css',
    'style:compile-tailwind',
    'style:concat',
  ]),
);
