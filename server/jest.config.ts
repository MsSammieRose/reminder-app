import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: "node",
  testMatch: [
    '<rootDir>/spec/**/*.spec.ts'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    "src/db/reminder-dao.ts",
    "src/index.ts",
  ],
};

export default config;
