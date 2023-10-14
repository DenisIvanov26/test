# Git Commands Cheat Sheet

## Configuration

- `git config --global user.name "[name]"` - Set the name attached to your commits.
- `git config --global user.email "[email address]"` - Set the email attached to your commits.

## Creating Repositories

- `git init` - Create a new local repository.
- `git clone [url]` - Clone a repository from a remote server.

## Local Changes

- `git status` - Show the working tree status.
- `git add [file]` - Add a file to the staging area.
- `git commit -m "[message]"` - Commit your staged content with a message.

## Branching

- `git branch` - List all local branches.
- `git branch [branch-name]` - Create a new branch.
- `git checkout [branch-name]` - Switch to a specified branch.

## Remote Repositories

- `git remote add [alias] [url]` - Add a remote repository.
- `git push [alias] [branch]` - Push local branch commits to the remote repository.
- `git pull [alias] [branch]` - Pull changes from a remote repository.

## Merging and Rebasing

- `git merge [branch]` - Merge a branch into the active branch.
- `git rebase [branch]` - Rebase the current branch onto [branch].

## History and Inspection

- `git log` - Show commit logs.
- `git diff` - Show changes between commits, commit and working tree, etc.

## Undoing Changes

- `git reset` - Reset current HEAD to the specified state.
- `git revert` - Revert some existing commits.

## Miscellaneous

- `git stash` - Stash changes in a dirty working directory.
- `git clean` - Clean the working directory.
