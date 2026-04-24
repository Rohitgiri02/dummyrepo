# Dummy Vercel Security Flow

This repo is a minimal project used to test:

1. Add project in AI Code Analyzer
2. Auto-create PR that injects GitHub Action
3. Merge injected workflow PR manually
4. Push commits and verify analyzer blocks when risk is above threshold

## Deploy On Vercel

1. Push this folder to a new GitHub repository.
2. Import that repository into Vercel.
3. Use default static deployment settings.

## Trigger Analyzer

1. Add the repository in your analyzer dashboard.
2. Open and merge the injected workflow PR.
3. Push a new commit to this repo.
4. Check GitHub Actions run result and analyzer dashboard status.

The file `src/insecure.js` is intentionally insecure to help trigger a blocking decision.
