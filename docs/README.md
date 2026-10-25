# COIS 3060 Assignment 1
# Eunice Oladele

# MSR Knowledge Base

**Live site:** https://euniicee.github.io/cois3060assignment1/

A single-page reference guide for Mining Software Repositories (MSR) researchers. New PhD students often don't know which data sources exist, how to collect data, which analysis methods to use, or where to publish. This site organizes that information into four tabs: Data Sources, Collection Methods, Analysis Methods and Publication Venues.

## Current Status

Milestone 1 (Page Structure & Navigation) is complete: the page loads with four tabs, clicking a tab shows only its section, and Data Sources is open by default. The site is deployed to GitHub Pages automatically.

## Repository Structure

    docs/requirements.md        User stories
    src/index.html              Page structure
    src/style.css               Styling
    src/script.js               Tab switching
    tests/index.test.js         Automated tests
    tests/test_checklist.md     Manual test cases
    .github/workflows/ci.yml    CI/CD pipeline

Manual test cases are in `tests/test_checklist.md`.

## Testing

    npm install
    npm test

## CI/CD

GitHub Actions runs the tests on every push and pull request. When changes are merged to `main` and the tests pass, `src/` is deployed to GitHub Pages.

## Future Work

### Milestone 2: Data Sources Content

Add the data sources (GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, npm Registry) with the kind of data each provides and a brief description, in a table.

### Milestone 6: Styling & Polish

Apply a clean, professional visual style, make the layout responsive for laptop and phone, and improve accessibility.
