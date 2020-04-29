# react-flatten-children

[![License](https://img.shields.io/npm/l/react-flatten-children.svg)](https://github.com/gregberge/react-flatten-children/blob/master/LICENSE)
[![npm package](https://img.shields.io/npm/v/react-flatten-children/latest.svg)](https://www.npmjs.com/package/react-flatten-children)
[![Build Status](https://img.shields.io/travis/gregberge/react-flatten-children.svg)](https://travis-ci.org/gregberge/react-flatten-children)
[![DevDependencies](https://img.shields.io/david/dev/gregberge/react-flatten-children.svg)](https://david-dm.org/gregberge/react-flatten-children?type=dev)

React utility to flatten fragments 🗜

```sh
npm install react-flatten-children
```

## Example

```js
import React from "react";
import { Switch as BaseSwitch } from "react-router";
import flattenChildren from "react-flatten-children";
import PublicHome from "./PublicHome";
import PrivateHome from "./PrivateHome";
import Account from "./Account";
import Login from "./Login";

// Create a fragment ready Switch
const Switch = ({ children }) => (
  <BaseSwitch>{flattenChildren(children)}</BaseSwitch>
);

const Routes = ({ isLoggedIn }) => (
  <Switch>
    {isLoggedIn ? (
      <>
        <Route exact path="/" component={PrivateHome} />
        <Route path="/account" component={Account} />
      </>
    ) : (
      <>
        <Route exact path="/" component={PublicHome} />
        <Route path="/login" component={Login} />
      </>
    )}
    <Route path="/about" component={About} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
```

👉 [Checkout an interactive example on CodeSandbox](https://codesandbox.io/s/nn6l3r30k0)

## Why?

In many cases you have to introspect children, it can be to [use the first route matching a path](https://reacttraining.com/react-router/web/api/Switch), extract the label of a tab, or another use case.

React considers fragments as children, even if it is in fact a group of children. This package flattens children and makes your component API compatible with fragments. Users expect your library to be compatible with fragments. If you want to avoid tons of issues (see https://github.com/ReactTraining/react-router/issues/5917, https://github.com/ReactTraining/react-router/issues/5785), you should use it!

# License

MIT
