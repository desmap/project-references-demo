# TypeScript Project References Demo

This repo is forked from https://github.com/RyanCavanaugh/project-references-demo.  It is to test project references with webpack, ts-loader and ForkTsCheckerWebpackPlugin.

This branch is to test whether babel-loader builds Typescript project references

## Installation
```
git checkout https://github.com/appzuka/project-references-demo.git
cd project-references-demo
git checkout babel
yarn install
```
## Build just using babel-loader
```
yarn clean
yarn build
```

This gives the error:
```
Module not found: Error: Can't resolve '../lib/zoo/zoo'
```
## Pre-build references with tsc
```
yarn clean
tsc -b
yarn build
```

Build completes normally. Conclusion: babel-loader does not build project references

Is there some setting or plugin to enable this?