node updateMusic.cjs
npx snowpack build
git add .
git commit -m "Building to gh pages"
git push
git subtree add --prefix build origin gh-pages
git subtree push --prefix build origin gh-pages
