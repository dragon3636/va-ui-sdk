import { series, task } from 'gulp';
import { execNodeTask } from '../util/task-helpers';
task(
  'showcase:start',
  execNodeTask('@angular/cli', 'ng', ['serve', 'showcase'])
);
task(
  'showcase:build',
  execNodeTask('@angular/cli', 'ng', ['build', 'showcase'])
);
task(
  'showcase:watch',
  execNodeTask('@angular/cli', 'ng', [
    'build',
    'showcase',
    '--watch',
    '--configuration',
    'development',
  ])
);
task('showcase:test', execNodeTask('@angular/cli', 'ng', ['test', 'showcase']));
task(
  'showcase:test-coverage',
  execNodeTask('@angular/cli', 'ng', [
    'test',
    'showcase',
    ' --no-watch',
    ' --code-coverage',
  ])
);
