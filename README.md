# BrainHack Vanderbilt

**Deployment Instructions:**

To push code to github/deploy to the website, DO NOT do git add/commit/push. Instead run:
```
npm run deploy -- -m "Commit message"
```
This will automatically push the website build instead of the source code so that it can be deployed to github pages.

The build steps are already set up in `package.json`:
```
{
    "homepage": "https://brainhack-vandy.github.io",
    ...
    "scripts": {
        ...
        "predeploy": "npm run build",
        "deploy": "gh-pages -b main -d build"
    },

}
```