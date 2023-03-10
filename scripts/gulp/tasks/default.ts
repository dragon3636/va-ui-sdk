/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import chart from 'chalk';
import { parallel, task } from 'gulp';

task('help', (done) => {
  console.log();
  console.log('Please specify a gulp task you want to run.');
  console.log(chart.yellow('start:dev    '), 'Start development.');
  console.log(
    chart.yellow('library:build'),
    'Build ng-zorro-antd-lib to publish/ directory.'
  );
  console.log(
    chart.yellow('build:preview'),
    'Build preview site to dist/ directory.'
  );
  console.log(
    chart.yellow('build:release'),
    'Build releaseable library to publish/ directory and deployable site to dist/ directory.',
  );
  console.log();
  done();
});

task('default', parallel('help'));
