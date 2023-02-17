/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/* eslint-disable import/no-unassigned-import */
import { series, task, parallel } from 'gulp';
import './tasks/clean';
import './tasks/library';
import './tasks/compile-styles';
import './tasks/showcase';
task('build:release', series('clean', 'library:build'));
task('start', series('clean', 'library:build', 'showcase:start'));
task('build', series('clean', 'library:build', 'showcase:build'));
task('test', series('clean', parallel('library:test', 'showcase:test')));
