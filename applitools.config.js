const isDocker = require("is-docker");
module.exports = {
  concurrency: 100,
  showLogs: !!process.env.APPLITOOLS_SHOW_LOGS,
  appName: "Storybook testkit",
  batchName: "Storybook testkit",
  browser: [{ width: 1200, height: 800, name: "chrome" }],
  runInDocker: isDocker(),
  waitBeforeScreenshot: 2000,
  include: ({ name }) => name === "appears after a delay",
  puppeteerOptions: {
    // headless: false,
    // devtools: true,
    args: isDocker()
      ? ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
      : []
  }
};
