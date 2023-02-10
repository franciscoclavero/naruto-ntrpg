/** @type {import('jest').Config} */

const config = {
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
}

module.exports = config
