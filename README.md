# Storybook testkit

1. To run visual tests: `npm run test:visual`

1. To configure number of stories, change `COUNT` variable in `./stories/index.stories.js`

1. Output log to file:
    * set `showLogs: true` in `applitools.config.js`
    * run `npm run test:visual > eyes.log`
    * recommended to output log file name with story count / features, e.g. `eyes_1000_9browsers_100concurrency.log`

1. To just run the storybook (for inspection): `npm run storybook`
