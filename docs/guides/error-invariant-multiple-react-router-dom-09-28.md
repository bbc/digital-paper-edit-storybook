# Error: Invariant failed

## Context and Problem Statement

Turns out that this error "Error: Invariant failed" is because how [React Router v4](https://www.sitepoint.com/react-router-v4-complete-guide/) and [React Router v5]() is different. With the new v5 there can only be one Router, because it's using the new React Context API to do some routing. See here for another [explanation](https://gist.github.com/StringEpsilon/88c7b049c891425232aaf88e7c882e05#explanation)

Why we need two Routers is that we our very own Breadcrumb has LinkContainer, which depends on using the React-Router-Dom. So, when the component is published, it then also bundles the React-Router dependency. When we import the Breadcrumb, since we already have a React-Router in the main DPE-client repository, it breaks.

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

### Use Webpack to sort it out

Was also advised to do [this](https://gist.github.com/StringEpsilon/88c7b049c891425232aaf88e7c882e05) but since our setup is CRA, it's quite a few hurdles to jump. If you have webpack, []() this section from the [webpack](https://webpack.js.org/guides/code-splitting/#prevent-duplication) is useful.

### peerDependencies

[Yarn](https://yarnpkg.com/lang/en/docs/dependency-types/) website says:
> Peer dependencies are a special type of dependency that would only ever come up if you were publishing your own package.
> Having a peer dependency means that your package needs a dependency that is the same exact dependency as the person installing your package. This is useful for packages like react that need to have a single copy of react-dom that is also used by the person installing it.

Going to try this, but this will require changes when actively developing and running storybook as storybook is run at "production".
