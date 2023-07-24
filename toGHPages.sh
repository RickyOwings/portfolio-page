node updateMusic.cjs
npx snowpack build
git add .
git commit -m "Building to gh pages"
git push
git subtree push --prefix build origin gh-pages
