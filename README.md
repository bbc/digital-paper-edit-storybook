
## Digital Paper Edit - React Components 

---> _Work in progress_ <--
**! What is published in the Storybook may be different to what is being actively used in Digital-Paper-Edit-Client, as the components are currently being migrated. !**

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->
This repository uses [storybook](https://storybook.js.org) to gather the components of the React front end.

[See here for overall project architecture info](https://github.com/bbc/digital-paper-edit-client#project-architecture)


## Setup
<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:bbc/digital-paper-edit-react-components.git
```

```
cd digital-paper-edit-react-components
```

Optional step to setup [nvm](https://github.com/nvm-sh/nvm) to use node version 10, otherwise just use node version 10
```
nvm use || nvm install
```

in root of project
```
npm install
```

## Usage - development

```
npm run start
```
 
Server API is listening on [`http://localhost:6006/  `](http://localhost:6006)

## Usage - development

- [ ] TODO: availabel on npm

<!-- Available on `npm` [npm - `@bbc/react-transcript-editor`](https://www.npmjs.com/package/@bbc/react-transcript-editor) -->


<!-- ```
npm install @bbc/react-transcript-editor
``` -->

## System Architecture
<!-- _High level overview of system architecture_ -->

- uses [`storybook`](https://storybook.js.org) with the setup as [explained in their docs](https://storybook.js.org/docs/guides/guide-react/) to develop this React.
<!-- - This uses [CSS Modules](https://github.com/css-modules/css-modules) to contain the scope of the css for this component. -->
- [.storybook/webpack.config.js](./.storybook/webpack.config.js) enanches the storybook webpack config to add support for css modules.
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

- [ ] TODO

<!-- > To transpile `./packages` and create a build in the `./dist` folder, run:

```
npm run build:component
``` -->

## Demo & storybook

- [ ] TODO

<!-- - **Storybook** can bew viewed at [https://bbc.github.io/react-transcript-editor/](https://bbc.github.io/react-transcript-editor/)

- **Demo** can be viewed at [https://bbc.github.io/react-transcript-editor/iframe.html?id=demo--default](https://bbc.github.io/react-transcript-editor/iframe.html?id=demo--default)
 -->


## Build - storybook
To build the storybook as a static site

```
npm run build:storybook
```

## Publish storybook & demo to github pages

- [ ] TODO

<!-- 
This github repository uses [github pages](https://pages.github.com/) to host the storybook and the demo of the component

```
npm run deploy:ghpages
```

add to git, and push to origin master to update


Alternatively If you simply want to build the demo locally in the `build` folder then just

```
npm run build:storybook
```

you can then run this command to serve the static site locally

```
npm run build:storybook:serve
``` -->

## Tests
<!-- _How to carry out tests_ -->

- [ ] TODO

<!-- Test coverage using [`jest`](https://jestjs.io/), to run tests

```
npm run test
```

During development you can use

```
npm run test:watch
``` -->

## Travis CI

- [ ] TODO

<!-- On commit this repo uses the [.travis.yml](./.travis.yml) config tu run the automated test on [travis CI](https://travis-ci.org/bbc/react-transcript-editor). -->

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

- [ ] TODO

<!-- To push to [npm - `@bbc/react-transcript-editor`](https://www.npmjs.com/package/@bbc/react-transcript-editor)

```
npm publish:public
```

This runs `npm run build:component` and `npm publish --access public` under the hood

> Note that only `README.md` and the `dist` folders are published to npm. -->

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) guidelines.

## Licence
<!-- mention MIT Licence -->
See [LICENCE](./LICENCE.md)

## Legal Disclaimer

_Despite using React and DraftJs, the BBC is not promoting any Facebook products or other commercial interest._
