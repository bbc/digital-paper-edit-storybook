# Error: Invariant failed

## Context and Problem Statement

Turns out that this error "Error: Invariant failed" is because how [React Router v4](https://www.sitepoint.com/react-router-v4-complete-guide/) and [React Router v5]() is different. With the new v5 there can only be one Router, because it's using the new React Context API to do some routing. See here for another [explanation](https://gist.github.com/StringEpsilon/88c7b049c891425232aaf88e7c882e05#explanation)

Why we need two Routers is that Breadcrumb component has LinkContainer, which depends on React-Router-Dom. So, when the component is published, it then also bundles the React-Router dependency. When we import the Breadcrumb, since we already have a React-Router in the main DPE-client repository, it creates two Contexts in React. The routes created using a different Context cannot be found by React, and so it throws the `Invariant failed: You should not use <Route> outside a <Router>`.

## Suggestions

### Use the Router + Route

From [this](https://github.com/marmelab/react-admin/issues/3078) this is how it was recommended, but since the Breadcrumb was nested it's not a straightforward fix.

```jsx
<BrowserRouter>
  <div>
   <Route path="/" component={} />
  </div>
</BrowserRouter>
```

### Use Webpack to remove dupes in Client

Was also advised to do [this](https://gist.github.com/StringEpsilon/88c7b049c891425232aaf88e7c882e05) but since our setup is CRA in DPE-client, it's quite a few hurdles to jump. If you have webpack, from the [webpack](https://webpack.js.org/guides/code-splitting/#prevent-duplication) is useful to understand to prevent dupes.

### peerDependencies

[Yarn](https://yarnpkg.com/lang/en/docs/dependency-types/) website says:
> Peer dependencies are a special type of dependency that would only ever come up if you were publishing your own package.
> Having a peer dependency means that your package needs a dependency that is the same exact dependency as the person installing your package. This is useful for packages like react that need to have a single copy of react-dom that is also used by the person installing it.

This also wouldn't work due to us actively developing storybook. It doesn't prevent webpack from packaging in the react-routers.

### Solution: Update Storybook webpack to remove react, react-router and react-router-dom

You can prevent Webpack to bundle things that should not be duped.
See package.json:

```js
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react-router': path.resolve(__dirname, './node_modules/react-router'),
      'react-router-dom': path.resolve(__dirname, './node_modules/react-router-dom')
    }
  },
  externals: {
    // Don't bundle react or react-dom or react-router
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'react-router': {
      commonjs: 'react-router',
      commonjs2: 'react-router',
      amd: 'ReactRouter',
      root: 'ReactRouter'
    },
    'react-router-dom': {
      commonjs: 'react-router-dom',
      commonjs2: 'react-router-dom',
      amd: 'ReactRouterDOM',
      root: 'ReactRouterDOM'
    }
  }
```
