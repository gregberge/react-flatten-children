# How to Contribute

react-flatten-children is a small project, it uses [tsdx](https://github.com/jaredpalmer/tsdx) to simplify the development.

## [Code of Conduct](https://github.com/gregberge/react-flatten-children/blob/master/CODE_OF_CONDUCT.md)

We expect project participants to adhere to our Code of Conduct. Please read [the full text](https://github.com/gregberge/react-flatten-children/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Open Development

All work on react-flatten-children happens directly on [GitHub](/). Both core team members and external contributors send pull requests which go through the same review process.

### Workflow and Pull Requests

_Before_ submitting a pull request, please make sure the following is done…

1.  Fork the repo and create your branch from `master`. A guide on how to fork a repository: https://help.github.com/articles/fork-a-repo/

    Open terminal (e.g. Terminal, iTerm, Git Bash or Git Shell) and type:

    ```sh-session
    $ git clone https://github.com/<your_username>/react-flatten-children
    $ cd react-flatten-children
    $ git checkout -b my_branch
    ```

    Note: Replace `<your_username>` with your GitHub username

2.  This project uses [Yarn](https://code.fb.com/web/yarn-a-new-package-manager-for-javascript/) for running development scripts. If you haven't already done so, please [install yarn](https://yarnpkg.com/en/docs/install).

3.  Run `yarn install`. On Windows: To install [Yarn](https://yarnpkg.com/en/docs/install#windows-tab) on Windows you may need to download either node.js or Chocolatey<br />

    ```sh
    yarn install
    ```

    To check your version of Yarn and ensure it's installed you can type:

    ```sh
    yarn --version
    ```

4.  If you've added code that should be tested, add tests.

5.  If you've changed APIs, update the documentation.

6.  Ensure the test suite passes via `yarn test`.

    ```sh-session
    $ yarn test
    ```

## Bugs

### Where to Find Known Issues

We will be using GitHub Issues for our public bugs. We will keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new issue, try to make sure your problem doesn't already exist.

### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. Please provide a public repository with a runnable example.

## Code Conventions

This project uses [Prettier](https://prettier.io/).

## License

By contributing to this project, you agree that your contributions will be licensed under its MIT license.
