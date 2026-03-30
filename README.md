# BrainHack Vanderbilt

## :mega: Project Submission Instructions

[For project leads]  Projects submission instructions:

1. Create a new issue by going to the issues tab in the repository nagivation bar and clicking on "New Issue"
2. Select the "Project submission template" and fill out the form

[For reviewers] Project approval and deployment instructions:

1. Select the "approved" tag for the project issue
2. Select the year for the project issue

The github actions workflow will auto-deploy the project once it has been approved.

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

To merge changes into the main branch from pull requests from other branch:
1. ***Pull*** the most recent main branch.

    Run the following commands on the terminal to pull remote main to the local main:
    ```
    git checkout main
    git pull
    ```

2. ***Rebase*** the branch to this most recent version of main

    Run the following commands on the terminal to rebase the branch to the most recent main
    ```
    git checkout <branch-name>
    git fetch origin
    git rebase origin/main
    ```

    If there are any merge conflicts rising during the rebase, resolve them locally and push the rebased branch with `git push`.

3. ***Preview*** the website locally:

    On the rebased branch, check everything works as expected by running the website locally:
    ```
    npm run start
    ```

4. ***Merge*** on Github:

    Go to the pull request on the Github website. The merge automatically button should be enabled since the branch has already been rebased to main. Click merge.
    
Merging the PR modifies the main branch. Changes pushed to the main branch will result in an automated deployment action that will update the website. 

## :computer: Developer Instructions

## Schedule

1. Following the existing format in [events.js](src/components/Schedule/events.js), replace the events:
    - ID is assigned in the format `<day>-<event number for that day>`
    - Event start/end times are in this format: `2025-01-24T16:30:00`
    - Extended props assigns the event to a category, which thereby determines the fill color.
2. Update event dates via `dateButtons` on [Schedule.js](src/components/Schedule/Schedule.js)

## Speakers

Following the existing format in [speakerData.js](src/components/Speakers/speakerData.js), replace the speakers:
- Speaker ID's are in the form: `<keynote/panelist>-<speaker number>`
- Name, bio, image and website link can also be added

## Team
Following the existing format in [teamData.js](src/components/Team/teamData.js), add an entry for the current year to enter the new set of organizers.

## FAQs
In [Faq.js](src/components/Faq.js), add question/answer pairs to the `faqData` constant.


---
Design based on [@soumyajit4419/Porfolio](https://github.com/soumyajit4419/Portfolio) and [BrainHack Western](https://brainhackwestern.github.io/).