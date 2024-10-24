# BrainHack Vanderbilt

**Deployment Instructions:**

Pushing updates to the website is a 2-step process:
1. Push ***source code*** to the main branch:

    Run the following commands on the terminal to push updates to the main branch
    ```
    git add <files>
    git commit -m "Commit message"
    git push -f --set-upstream origin main
    ```

2. Deploy website to github pages: Push ***website build*** to the `deployed` branch:

    Run the following commands on the terminal to deploy the code on the main branch
    ```
    git checkout main
    npm run deploy -- -m "Commit message"
    ```
    This will automatically push the website *build* (instead of the source code) into the `deployed` branch already setup on Github. Github pages for this repository has been setup to display the build from the `deployed` branch.

    The build steps are already set up in `package.json`:
    ```
    {
        "homepage": "https://brainhack-vandy.github.io",
        ...
        "scripts": {
            ...
            "predeploy": "npm run build",
            "deploy": "gh-pages -b deployed -d build"
        },

    }
    ```