## Sallerpoint front-end
React.js app bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

React, Redux, React-router 4, React-loadable is used

### Demo link
http://sallerpoint.surge.sh

## Table of Contents
- [How to start](#hot-to-start)
- [Folder structure](#folder-structure)
- [Gulp](#gulp)
- [Important notes](#important-notes)

## How to start
* `yarn developer` - run gulp and react scripts start
* `yarn builder` - run gulp in production mode and react scripts build folder
* `yarn surge` - deploy to surge

## Folder structure
```
src/
  components - simple componenets (mostly dumb)
  containers - core parent level components
  pages - entry points for routes
  actions - action creators for store
  reducers - redux reducers
  services - common functionality and helper functions
  store - redux store logic
```

## Gulp
Gulp is responsible for sass to css compilation and building sprites. Tasks are taken from [Gulp Starter Pack](http://github.com/dpmango/gulp-starter-pack).

Task name          | Description
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files (same as `build:development`)
`build`            | build production-ready project (with code optimizations)
`sass` 	           | compile .sass/.scss to .css. Included [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer), flexbugs and other cool [plugins](https://github.com/postcss/postcss#plugins) you might add
`sprite:svg`       | create svg symbol sprites
`sprite:png`       | create png sprites

All available tasks are placed in a folder `./gulp/tasks` as separate **.js** files.

## Important notes
- Redux store save state in localStorage. When data structure chages, please update `version` variable in `src/store/localStorage.js` to clear localStorage on user side.
