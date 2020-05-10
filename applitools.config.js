module.exports = {
  concurrency: 100,
  // showLogs: true,
  appName: "Storybook testkit",
  batchName: "Storybook testkit",
  browser: [
    // { width: 800, height: 600, name: "chrome" },
    // { width: 800, height: 600, name: "firefox" },
    // {width: 800, height: 600, name: 'edge'},
    // {width: 800, height: 600, name: 'ie11'},
    { width: 1200, height: 800, name: "chrome" }
    // { width: 1200, height: 800, name: "firefox" }
    // {width: 1200, height: 800, name: 'edge'},
    // {width: 1200, height: 800, name: 'ie11'},
    // { deviceName: "iPhone X" }
  ],
  puppeteerOptions: {
    // headless: false,
    // devtools: true
  }
};
