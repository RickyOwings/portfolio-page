node updateMusic.cjs
npx snowpack build
git add .
git commit -m "Force building to gh-pages"
git subtree split --prefix build -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
