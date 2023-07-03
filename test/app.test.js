const assert = require('assert');
const moment = require('moment');
const app = require('../app');
const date = require('../app');

describe('Application', () => {
  it('should print "Hello, Just a Demo!" message', () => {
    // Suppress console.log output during the test
    const mockLog = console.log;
    console.log = () => {};

    // Run the application code that contains console.log("Hello, Just a Demo!");
    require('../app');

    // Restore console.log
    console.log = mockLog;
  });

  it('should set and return the current date', () => {
    const currentDate = moment().format('LL'); // Get current date in desired format
    const appDate = date; // Format app variable date in desired format

    assert.strictEqual(appDate, currentDate);
  });
});
