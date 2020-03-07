#!/usr/bin/env bash

# abort (exit) on errors; built-in cmd (see man bash);
set -e

# build
npm run build

echo "Built!"

# copy to serve on localhostd and to upload from rumlcomrepo
rm -rf /Library/WebServer/Documents/timelines/app/*
cp -r dist/* /Library/WebServer/Documents/timelines/app/

rm -rf /Library/WebServer/Documents/rumlcomrepo/timelines/app/*
cp -r dist/* /Library/WebServer/Documents/rumlcomrepo/timelines/app/

echo "Copied! and done"
exit

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# a repo within a repo? In order to push the dist to github!!
# cd dist
# git init
# git add -A
# git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:bruml2/studioapp1.git master:gh-pages

# return to previous directory
# cd -
