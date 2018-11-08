## Strict React App ESLint configuration

This configuration extends existing official ESLint configuration
[eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) 
and adds some strict rules for ECMAScript/React code style.


If you want to use this ESLint configuration in a project, you can install it with following steps.

First, install this package, ESLint and necessary compatible plugins are listed as dependencies so they will be installed alongside the config.

```sh
npm install --save-dev eslint-config-react-app-strict
```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```js
{
  "extends": "react-app-strict"
}
```
