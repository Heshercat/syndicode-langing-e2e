import type { PlaywrightTestConfig } from '@playwright/test';
import * as envURLs from './environments.json'

const config: PlaywrightTestConfig = {
    testDir: './tests',
    fullyParallel: true,
    reporter: 'html',

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
};
export default config;