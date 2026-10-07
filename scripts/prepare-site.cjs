const { copyFileSync, mkdirSync } = require('node:fs');
const path = require('node:path');

const sourceDirectory = path.resolve(__dirname, '..');
const publishDirectory = path.join(sourceDirectory, 'public');

mkdirSync(publishDirectory, { recursive: true });

for (const filename of ['index.html', 'CNAME']) {
  copyFileSync(path.join(sourceDirectory, filename), path.join(publishDirectory, filename));
}
