import { series, task } from 'gulp';
import { execNodeTask } from '../util/task-helpers';
import '../tasks/compile-styles';

task(
  'library:build',
  series(
    'styles:build',
    execNodeTask('@angular/cli', 'ng', ['build', '@va/ui-sdk']),
  ),
);
task(
  'library:watch',
  execNodeTask('@angular/cli', 'ng', [
    'build',
    '@va/ui-sdk',
    '--watch',
    '--configuration',
    'development',
  ]),
);

task(
  'library:test',
  execNodeTask('@angular/cli', 'ng', ['test', '@va/ui-sdk']),
);

task(
  'library:test-coverage',
  execNodeTask('@angular/cli', 'ng', [
    'test',
    '@va/ui-sdk',
    '--no-watch',
    '--code-coverage',
  ]),
);
