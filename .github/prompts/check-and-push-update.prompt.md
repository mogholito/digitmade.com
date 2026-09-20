---
description: "Review repository changes, validate the update, and prepare or push a safe Git update"
name: "Check and Push Update"
argument-hint: "Optional commit message and whether to push after review"
agent: "agent"
---
Review the current repository changes and update the remote only after the changes are understood and validated.

Inputs:
- Commit message: ${input:commitMessage:Use a concise imperative commit message}
- Push after commit: ${input:pushAfterReview:yes/no}

Workflow:
1. Inspect the current branch, upstream, worktree status, and the complete diff, including untracked files when relevant.
2. Summarize the files and behavior being changed. Identify suspicious, accidental, generated, sensitive, or unrelated files before modifying anything.
3. Preserve pre-existing user changes. Do not discard, reset, clean, or overwrite changes that were not made during this task.
4. Read the repository README and nearby project documentation to determine the appropriate validation. For this static HTML/CSS/JavaScript repository, inspect changed markup, links, asset paths, and scripts; run available focused checks and report checks that are unavailable.
5. If the changes are incomplete, broken, unrelated, or contain secrets, stop and explain the blocking findings. Do not commit or push.
6. If the changes are valid, show a concise review summary and the exact files that would be committed. Ask for confirmation before committing or pushing unless the user has explicitly authorized both actions in the current request.
7. After confirmation, stage only the reviewed files, create a commit using the requested message, verify the commit and clean/remaining worktree state, then push to the configured upstream branch only when push was requested.
8. Report the commit hash, pushed branch/remote, and any remaining uncommitted files. Never force-push, amend an existing commit, or change branches unless explicitly requested.

Output format:
- Review: important findings first, followed by a brief change summary
- Validation: checks run and their results
- Git action: what was staged, committed, and pushed, or why the action stopped
- Remaining work: any files or follow-up steps still requiring attention
