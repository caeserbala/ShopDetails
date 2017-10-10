# One Frontend SSR

[![build status](https://gitlab.dt.renault.com/smdigital/one/one-front/badges/develop/build.svg)](https://gitlab.dt.renault.com/smdigital/one/one-front/commits/develop) [![coverage report](https://gitlab.dt.renault.com/smdigital/one/one-front/badges/develop/coverage.svg)](https://gitlab.dt.renault.com/smdigital/one/one-front/commits/develop)

## TL;DR

**React Universal** codebase using **ExpressJS** for server side rendering

## Technologies

- 🔥  `react` -  server side and client side view components.
- 🤖  `redux` -  application state and actions provider.
- 🚄  `express` - nodejs server.
- 👮  `hpp`, `helmet` and `content security policy` - nodejs security layer.
- 📦  `webpack` - bundling of both client and server with tree shaking.
- 🚀  `babel` - transpiles ES6+ where needed.
- 🍃  `sass`, `BEM` and `atomic design` - modular styles.
- 🏁  `gridle` - grid system.
- 🔧  `eslint` (airbnb), `stylelint` and `flow` - code quality tools.
- 📕  `documentation` - JSDoc compatible generation tool.
- 📗  `aigis` - styleguide generator.
- 👟  `jest` with snapshots and `istanbul` coverage - testing.
- 😺  `yarn` - dependencies manager.

## Installation

- Clone the repository,
- Install NodeJS LTS (with nvm),
- Install `yarn` (eg . `brew install yarn`),
- Execute `yarn install`.

# Development

- Launch the local controller API with `yarn api:proxy` (with the distant controller api) or `yarn api:mocks`.
- Launch the NodeJS application with `yarn dev`.

# Developing with mocks

- You can import new data into the local mocks with `yarn mocks:import`.
- E2E cucumber tests are using the mocks too.

## Project tasks (✨ Yarn)

- `yarn dev` - Starts the development server.
- `yarn api:proxy` - Starts a local controller API (has a proxy).
- `yarn api:mocks` - Starts a local controller API (serving local json mocks).
- `yarn build` - Build the sources (webpack) to client and server files.
- `yarn start` - Starts the built server (works only after a build).
- `yarn analyze`- Check the client bundles, use it to find wrong imported deps.
- `yarn styleguide` - Generates a styleguide from SASS comments.
- `yarn test` - Executes all the test suite (flow checking, unit tests and linters).
- `yarn lint` - Check the code quality with ESLint and Stylelint.
- `yarn flow` - Static type checking.
- `yarn jest` - Launch the unit tests and generates a coverage report.
- `yarn doc:html` - Generates code documentation in static HTML under a directory.
- `yarn doc:watch` - Generates code documentation and exposes it to local web server.
- `yarn mocks:import` - Fetch the distant endpoint and refill the json local mocks.
- `yarn metadata:phones` - Will update the metadata json for validating the phone numbers.

## React

- React components are located into the folder `src`.
- React components should be written as **Stateless Functional components** when possible.
- React components are separated into two folders. **container** (providing the data) and **presentational** (receive data and callbacks exclusively via props).

## Redux

- Reducers and actions are located into the folders `reducers` and `actions`.
- Use Redux `connect` only into React container modules.

## CSS/SASS

- All config files should be into `src/styles` (these files should not generate CSS code => only vars, mixins, functions, ...)
- Create one or several (if brand customs) scss files for each React module then require it into the js file,
- Default, use common (`foo.common.scss`) as an extension,
- For brand custom styles, use client as extension (`foo.renault.scss`, `foo.dacia.scss`, ...).
- Modules should respect [BEM](https://en.bem.info/methodology/naming-convention) class naming.
- Write `/** @define Button */` before each BEM module to enable the linter module checking.
- Please respect : `Block`, `Block_modifier`, `Block__element`, `Block.is-state`.
- `Gridle` grid system is 12 columns and can be nested.
- `Gridle` generates grid classnames for the CMS (`Grid12`, `Grid11_mobile`, ...).
- Into the BEM components, prefer `Gridle` mixins to be more semantic if you need grid items.

## Icons font

1) Add an optimized svg file into `src/assets/{ renault | dacia }/icons`,
2) Adding an icon named `foo.svg` will generate the classname `.Icon_foo`,
3) Use the classnames `Icon Icon_foo` (eg. `<span class="Icon Icon_foo" />`).

## Users events tracking

- To track a simple event (eg. "click"), add a `data-track` attribute to the element.
- Then add all payload values into `data-track-*` attributes.
- Be careful, you have to use dashes into data attributes, it will be sent as a camelcased value (eg. `data-track-foo-bar="foo"` will generate `{ fooBar: "foo" }` into the payload).

```
<Button
  className="Button Button_primary FunnelNextButton__CTA"
  onClick={this.goToNextpage}
  title={buttonTitle}
  data-track="click"
  data-track-business-type="used car"
  data-track-event="formSteps"
>
  {buttonLabel}
</Button>
```

will send as payload (when the button is clicked)

```
{
  businessType="used car"
  event="formSteps"
}
```

## Git

- Feature branches should be named as `feat/myfeature`.
- Don't commit directly to `master` branch. Always use a Merge request with your feature branch.

Commit messages should be as :

```
<type>(<scope>): <subject>
```

eg.

```
feat(videos): add video list
```

With **type** :

* **feat**: A new feature,
* **fix**: A bug fix,
* **docs**: Documentation only changes,
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc),
* **refactor**: A code change that neither fixes a bug nor adds a feature,
* **perf**: A code change that improves performance,
* **test**: Adding missing tests,
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation.

## Project Structure

```
/
|- config // Each client configuration as JSON (node-config)
|
|- mocks // Development mocks (Exposed by express during development only)
|
|- build // The target output dir for our build commands
|  |- client // The built client module
|  |- server // The built server module
|
|- src  // All the source code
|  |- server // The server bundle entry and specific source
|  |- client // The client bundle entry and specific source
|  |- shared // The shared code between the bundles)
|
|- tools
|  |- development // Tool for hot reloading development
|  |
|  |- webpack
|     |- client.config.js // Client webpack configuration
|     |- server.config.js // Server webpack configuration
|     |- configFactory.js // Webpack configuration builder
```

## Overview

This project uses Webpack 2 to produce bundles for both the client and the
server. You will notice the following Webpack configuration files:

   - `tools/webpack/client.config.js`
   - `tools/webpack/server.config.js`

During development, you can use the website into one client/brand context (Renault, Dacia, ...). The `developmentBrand` can be define into the config files.

For a production build, webpack will produce a client build for each client defined into the `brands` array from the config files. It generates a single server file.

Using Webpack and babel across all of our source allows us to use the same level of javascript (e.g. es2015/2016/2017) without having to worry about what each target environment supports.  In addition to this it allows our client/server code to both support the additional file types that a typical React application may import (e.g. CSS/Images).

## Express Server Security

We make use of the `helmet` and `hpp` middleware libraries to provide a fairly advanced security configuration for our express server, attempting to follow best practices. If you are unfamiliar with CSPs then I highly recommend that you do some reading on the subject:

  - https://content-security-policy.com/
  - https://developers.google.com/web/fundamentals/security/csp/
  - https://developer.mozilla.org/en/docs/Web/Security/CSP
  - https://helmetjs.github.io/docs/csp/

If you are relying on scripts/styles/assets from CDN or from any other server/application that is not hosted on the same URL as your application then you will need to explicitly add the respective CSN/Server URLs to the Content Security Policy within the express configuration.  For example you can see I have had to add the polyfill.io CDN in order to allow us to use the polyfill script.

You may find CSPs annoying at first, but it is a great habit to build. The CSP configuration is an optional item for helmet, however you should not remove it without making a serious consideration that you do not require the added security.


## Project Dependencies

The dependencies within `package.json` are structured so that the libraries required to transpile/bundle the source are contained within the `devDependencies` section, whilst the libraries required during the server runtime are contained within the `dependencies` section.
