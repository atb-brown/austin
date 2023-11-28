# Austin's React Website

## View the live website [here](https://atb-brown.github.io/austin/).

In an effort to learn React, TypeScript, and GitHub Actions, I decided to put together this website. Currently, this website serves as a portfolio, but as I have time and inspiration, I will be adding experiments and fun projects.

# Development

## Scripts

### `yarn verify`

This is the primary script to be used in development. The `verify` script should be used before committing and pushing any code to remote! The `verify` script combines the following "legs" of project stability:

- Static code analysis
- Testing
- Test code coverage

### `yarn sca`

This is the static code analysis script. The `sca` script checks the following:

- Formatting
- TypeScript compilation
- Linting
- Dependency audits

### `yarn test`

This script does what it says. Our test runner is [jest](https://github.com/facebook/jest). If changes are made that affect the final HTML, then the `-u` flag should be provided; the `-u` is the "update" flag which will update all of the snapshots. To read more about snapshots, visit [this page](https://jestjs.io/docs/snapshot-testing).

### `yarn prettyCheck`

Check the formatting. Will fail if formatting does not conform.

### `yarn pretty`

Automatically fix all formatting so that it conforms to the configured style. After running `pretty`, the `prettyCheck` script should pass.

### `yarn lint`

Running linting rules. These linting rules identify potential bugs and other bad code habits and "code smells".

## Available Scripts from Create React App

In the project directory, you can run:

### `yarn siteStart`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn siteStartDev`

Runs `siteStart` but disables `eslint` rules. This should make prototyping easier during development.

### `yarn siteBuild`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn siteEject`

**Note: this is a one-way operation. Once you `siteEject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `siteEject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `siteEject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `siteEject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## GitHub Actions Automation

## `build.yml`

The `build` action will run every time a commit is pushed to remote. This action will run static code analysis and the tests.

## `siteDeploy.yml`

The `siteDeploy` action will run every time a commit lands on the `main` branch. This action will build the site and deploy it.

# Acknowledgements

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## React GitHub Pages

This project is built/deployed as a GitHub page with the [React GitHub Pages](https://github.com/gitname/react-gh-pages) project.

## Deploy React to GitHub Pages

This project automatically deploys via GitHub actions with the help of the [Deploy React to GitHub Pages](https://github.com/tanwanimohit/deploy-react-to-ghpages) project.
