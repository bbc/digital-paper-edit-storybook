# Digital Paper Edit - React Components Catalogue

[The Storybook](https://bbc.github.io/digital-paper-edit-storybook/?path=/story/breadcrumb--projects)

---> _Work in progress_ <--

**! What is published in the Storybook may be different to what is being actively used in Digital-Paper-Edit-Client, as the components are currently being migrated. !**

This repository uses [storybook](https://storybook.js.org) to gather the components of the React front end. You can read about the "why" in [this ADR](https://github.com/bbc/digital-paper-edit-storybook/blob/9755e2c62343decf05ec87b9c7d85678d58e2186/docs/ADR/reason-09-11.md).

See [here](https://github.com/bbc/digital-paper-edit-client#project-architecture) for the overall project architecture.

## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

```sh
git clone git@github.com:bbc/digital-paper-edit-storybook.git
```

```sh
cd digital-paper-edit-storybook
```

Optional step to setup [nvm](https://github.com/nvm-sh/nvm) to use node version 10, otherwise just use node version 10

```sh
nvm use || nvm install
```

in root of project

```sh
npm install
```

## Usage - development

Start the storybook

```sh
npm start
```

[Storybook](https://storybook.js.org/) is at [`http://localhost:6006/`](http://localhost:6006)

## Usage - production

```sh
npm install @bbc/digital-paper-edit-storybook
```

<!-- Example of import

```js
import 'Breadcrumb' from '@bbc/digital-paper-edit-storybook/Breadcrumb'

<Breadcrumb />
```

 -->

## System Architecture

<!-- _High level overview of system architecture_ -->

- uses [`storybook`](https://storybook.js.org) with the setup as [explained in their docs](https://storybook.js.org/docs/guides/guide-react/) to develop this React.
  <!-- - This uses [CSS Modules](https://github.com/css-modules/css-modules) to contain the scope of the css for this component. -->
- [.storybook/webpack.config.js](./.storybook/webpack.config.js) changes the storybook webpack config to add support for css modules.
  <!-- - The parts of the component are inside [`./packages`](./packages) -->
  <!-- - [babel.config.js](./babel.config.js) provides root level system config for [babel 7](https://babeljs.io/docs/en/next/config-files#project-wide-configuration). -->

## Development env

 <!-- _How to run the development environment_
_Coding style convention ref optional, eg which linter to use_
_Linting, github pre-push hook - optional_ -->

- npm > `6.1.0`
- [Node 10 - dubnium](https://scotch.io/tutorials/whats-new-in-node-10-dubnium)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

## Build

<!-- _How to run build_ -->

To transpile `./src` and create a build in the `./dist` folder, run:

```sh
npm run build
```

## Demo & storybook

- **Storybook** can bew viewed at [https://bbc.github.io/digital-paper-edit-storybook/](https://bbc.github.io/digital-paper-edit-storybook/)
- **Demo** can be viewed at [https://bbc.github.io/digital-paper-edit-client](https://bbc.github.io/digital-paper-edit-client/)

## Build - storybook

To build the storybook as a static site

```sh
npm run build-storybook
```

## Publish storybook & demo to github pages

This github repository uses [github pages](https://pages.github.com/) to host the storybook and the demo of the component. **Make sure to commit and push any changes to MASTER before deploying to github pages.**

```sh
npm run publish-ghpages
```

Alternatively, if you simply want to build the demo locally in the `build` folder then just

```sh
npm run build-storybook
```

## Tests

<!-- _How to carry out tests_ -->

Test coverage using [`jest`](https://jestjs.io/), to run tests

```sh
npm run test
```

## Travis CI

On commit, - this repo uses the [.travis.yml](./.travis.yml) config to run the automated test on [travis CI](https://travis-ci.org/bbc/digital-paper-edit-storybook).

## Deployment

### NPM

> Note that only `README.md` and the `dist` folders are published to NPM.

#### New releases

1. Go into the `release` branch and pull the new changes from `master`.
2. Commit or push changes to the remote branch of `release`
3. Find corresponding changes in [Travis](https://travis-ci.org/github/bbc/digital-paper-edit-storybook)

If you had to make changes in `release`, make sure that the `release` is equivalent to `master`!

#### Locally, using the NPM cli

To push to [npm - `@bbc/digital-paper-edit-storybook`](https://www.npmjs.com/package/@bbc/digital-paper-edit-storybook)

login into npm

```bash
npm run publish-public
```

This runs `npm run build` and `npm publish --access public` under the hood

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) guidelines.

## Licence

<!-- mention MIT Licence -->

See [LICENCE](./LICENCE.md)

## Legal Disclaimer

_Despite using React, the BBC is not promoting any Facebook products or other commercial interest._
