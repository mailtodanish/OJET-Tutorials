build:
   npx @oracle/ojet-cli build --release

serve:
   npx @oracle/ojet-cli serve

merge:
    git checkout main
    git pull origin main
    git merge navigation-and-flex-bar
    git push origin main