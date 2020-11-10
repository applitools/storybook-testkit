const isDocker = require("is-docker");
const BROWSERS = Number(process.env.MEASURE_BROWSERS)
module.exports = {
  concurrency: 5,
  showLogs: !!process.env.APPLITOOLS_SHOW_LOGS,
  appName: "Storybook testkit",
  batchName: "Storybook testkit",
  browser: new Array(BROWSERS).fill().map((_, i) => ({
    name: "chrome",
    width: 600 + 25 * i,
    height: 600 + 25 * i
  })),
  runInDocker: isDocker(),
  puppeteerOptions: {
    // headless: false,
    // devtools: true,
    args: isDocker()
      ? ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
      : []
  }
};
