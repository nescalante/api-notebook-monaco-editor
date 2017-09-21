#!/bin/bash
echo "Cleaning minified folder"
rm -rf min

echo "Copying tree"
cp -r dev/. min

echo "Minifying ..."
find min/vs -name '*.js' -exec uglifyjs '{}' -o '{}' ";"

echo "Done"
