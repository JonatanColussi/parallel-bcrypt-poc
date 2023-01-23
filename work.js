import { parentPort } from 'node:worker_threads';

import { compareSync, hashSync } from 'bcrypt';

const hashedPassword = hashSync('62717765', 12);

parentPort?.on('message', password => {
  parentPort?.postMessage(compareSync(password, hashedPassword));
});
