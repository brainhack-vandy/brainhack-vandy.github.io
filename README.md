# BrainHack Vanderbilt

## :star: Setup Instructions

To set up the repository:

```
git clone https://github.com/brainhack-vandy/brainhack-vandy.github.io.git
cd brainhack-vandy.github.io
npm i
```

To preview the website on localhost:
```
npm start
```

## :pushpin: Contribution Instructions


1. Make sure any secret keys are not being tracked by git. If they are, create a environment file for the secret key and add it to `.gitignore`

2. Create a branch named `feature/<feature name>` and commit your updates to it (do not commit to `main`!!)

    Creating a branch: `git checkout -b <branch name>`

    Checking names of all existing branches (local and remote): `git branch -a`

    If you started coding in a different branch than the one you intended and have not committed the changes yet, run `git stash`, go to the intended branch with `git checkout <correct branch name>` and run `git stash pop` to get the edits in that branch instead.

3. Commit and push your changes to the remote of that branch

    ```
    git commit -m "Your commit message"
    git push -u origin <branch name>
    ```

4. Once you had completed working on a feature, go to Github and create a pull request from your branch to the main branch. In the pull request, include information on the updates made and preferably a screenshot of the update. If there is a specific Github Issue with respect to which you made that PR, select that issue while making the PR.

## :outbox_tray: Deployment Instructions
*[For the PR reviewer only]*

Pushing updates to the website from the main branch is a 2-step process:
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

---
Design based on [@soumyajit4419/Porfolio](https://github.com/soumyajit4419/Portfolio) and [BrainHack Western](https://brainhackwestern.github.io/).