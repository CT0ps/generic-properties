#!/bin/bash

# Script to build the app to npm module
# Author: Mahdi Ridho

function build_package {
  echo
  echo packaging the module of $1
  echo
  pushd $1
    # Remove old existing package distribution
    rm -rf dist

    # Replace back to original one, peerDependencies to dependencies to install ng-packagr
    # If skip this process, ng-packagr run error : can't found @angular/compiler
    sed -i -e 's/peerDependencies/dependencies/' package.json

    # install ng-packagr
    npm i --save-dev ng-packagr

    # install the latest typescript to fix the bug :
    # error TS6046: Argument for '--lib' option must be: 'es5', 'es6', 'es2015', ...
    # Ref : https://github.com/ng-packagr/ng-packagr/issues/1094
    npm i --save-dev typescript

    # Replace back to peer, dependencies to peerDependencies to work with ng-packagr
    # If skip this process, ng-packagr run error : Dependency @angular/* must be explicitly whitelisted
    sed -i -e 's/dependencies/peerDependencies/' package.json

    # Create the package
    node node_modules/ng-packagr/cli/main.js -p ng-package.json

    # Pack the package
    cd dist
    npm pack
    echo
    echo Done
    echo
  popd
}

if [ ! -z "$1" ]; then
  build_package $1
else
  echo "Provide the module name, e.g cognito-auth-app"
fi