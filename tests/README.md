# Test Suite

This directory contains unit tests for the Vifi.ee frontend application.

## Running Tests

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test:coverage
```

## Test Coverage

The test suite covers the critical bug fixes made in the code review:

### Bug Fixes Tested

1. **Variable Scoping Issues** (`tests/utils.test.js`)
   - Tests that `convertMstoHumanReadable` doesn't create global variables
   - Tests that `toSeconds` properly scopes loop variable `i`
   - Verifies no global scope pollution

2. **Parameter Typo Fix** (`tests/utils.test.js`)
   - Tests that `leadingZeros` parameter works correctly
   - Verifies the typo fix from `leadingZerons` to `leadingZeros`

3. **Safe Property Iteration** (`tests/iteration.test.js`)
   - Tests that `getQueryString` uses `hasOwnProperty` checks
   - Verifies protection against prototype pollution
   - Tests that loop variables are properly scoped

4. **Assignment in Conditional** (`tests/user.test.js`)
   - Tests that cookie retrieval separates assignment from condition
   - Verifies cleaner, safer code pattern

5. **Facebook API Safety** (`tests/facebook.test.js`)
   - Tests defensive check for FB object existence
   - Verifies no runtime errors when FB SDK fails to load

## Test Files

- `tests/utils.test.js` - Tests for utility functions
- `tests/user.test.js` - Tests for user/cookie functions
- `tests/facebook.test.js` - Tests for Facebook integration safety
- `tests/iteration.test.js` - Tests for safe property iteration

## CI/CD Integration

Tests are automatically run on:
- Push to main/master branches
- Pull requests to main/master
- Push to any copilot/** branches

See `.github/workflows/test.yml` for workflow configuration.

## Coverage Goals

Current focus is on testing the bug fixes. Coverage can be expanded to include:
- View rendering tests
- Model validation tests
- Collection manipulation tests
- Router navigation tests
- Player functionality tests

## Framework

- **Jest** - Testing framework
- **Babel** - JavaScript transpilation
- **jsdom** - DOM environment for tests

## Notes

- Vendor libraries in `js/vendor/` are excluded from coverage
- Tests focus on the bug fixes made during code review
- All tests validate the fixes prevent regressions
