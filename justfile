build:
   npx @oracle/ojet-cli build --release

serve:
   npx @oracle/ojet-cli serve

merge:
    git checkout main
    git reset --hard navigation-and-flex-bar
    git push --force origin main