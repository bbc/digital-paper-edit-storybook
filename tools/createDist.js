const fs = require('fs').promises;
const path = require('path');

const createDist = async () => {
  let packageJson, packageObject;
  const depsToRemove = [ 'react', 'react-dom', 'react-router', 'react-router-dom', 'postinstall' ];

  console.log(`Removing dependencies [${ depsToRemove }] from package.json and writing to ./dist/package.json`);
  try {
    packageJson = await fs.readFile(path.resolve('./package.json'), { encoding: 'utf8' });
    packageObject = JSON.parse(packageJson);
  } catch (e) {
    console.error('Error reading ./package.json:\n', e.message);
    process.exit();
  }

  const { dependencies } = packageObject;

  const remainingDeps = depsToRemove.reduce((deps, depToRemove) => {
    // eslint-disable-next-line no-unused-vars
    const { [depToRemove]: _, ...remaining } = deps;

    return remaining;
  }, dependencies);

  const distPackage = { ...packageObject, ...{ dependencies: remainingDeps } };

  try {
    await fs.writeFile(path.resolve('./dist/package.json'), JSON.stringify(distPackage, null, '\t'));
    console.log('Wrote ./dist/package.json');
  }
  catch (e) {
    console.error('Error writing ./dist/package.json:\n', e.message);
    process.exit();
  }
};

createDist();
