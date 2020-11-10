# Storybook testkit

1. To run visual tests: `npm run test:visual` or `yarn test:visual`

1. To configure number of stories, run with `STORYBOOK_COUNT` environment variable. For example: `STORYBOOK_COUNT=100 yarn test:visual`

1. Output log to file:
    * run with `APPLITOOLS_SHOW_LOGS=true` environment variable
    * run `npm run test:visual > eyes.log`
    * recommended to output log file name with story count / features, e.g. `eyes_1000_9browsers_100concurrency.log`

1. To just run the storybook (for inspection): `npm run storybook` (or `yarn storybook`)
