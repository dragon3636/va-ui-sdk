/* eslint-disable @typescript-eslint/no-var-requires */
import { series, task } from 'gulp';
import { execShellScript } from '../util/task-helpers';

// child_process.exec('ls -la', (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// })
task('travel', execShellScript(['scripts/gulp/tasks/consumer.sh']));
