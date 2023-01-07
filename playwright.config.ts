import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import * as envURLs from './environments.json'

const config: PlaywrightTestConfig = {
    testDir: './tests',
    fullyParallel: true,
    reporter: 'html',
    timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  use: {
    baseURL: envURLs.prod,
    actionTimeout: 0,
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ]
};

export default config;