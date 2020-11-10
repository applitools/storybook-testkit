const isDocker = require("is-docker");
module.exports = {
  concurrency: 100,
  showLogs: !!process.env.APPLITOOLS_SHOW_LOGS,
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
  runInDocker: isDocker(),
  puppeteerOptions: {
    // headless: false,
    // devtools: true,
    args: isDocker()
      ? ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
      : []
  }
};
