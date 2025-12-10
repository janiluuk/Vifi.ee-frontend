# jQuery 3.7.1 Migration

This project has been migrated from jQuery 2.1.0 to jQuery 3.7.1.

## Vendors.js Build Process

The `js/vendors.js` file is a concatenation of multiple vendor libraries in the following order:

1. **jQuery 3.7.1** (`js/vendor/jquery-3.7.1.min.js`)
2. **Velocity.js UI Pack** (`js/vendor/jquery.velocity.min.js`)
3. **Backbone LocalStorage** (`js/vendor/backbone.localstorage.min.js`)
4. **Backbone Polling** (`js/vendor/backbone-polling.min.js`)

### Rebuilding vendors.js

If you need to rebuild `vendors.js` (e.g., after updating a vendor library), run:

```bash
./build-vendors.sh
```

This script will:
- Remove the existing `js/vendors.js`
- Concatenate all vendor libraries in the correct order
- Report the final file size and line count

### Updating jQuery

To update jQuery to a newer version:

1. Download the new jQuery minified file to `js/vendor/` (e.g., `jquery-3.x.x.min.js`)
2. Update the jQuery reference in `build-vendors.sh`
3. Run `./build-vendors.sh` to rebuild vendors.js
4. Run `npm test` to ensure all tests pass
5. Update this documentation with the new version number

## Testing

The jQuery 3.7.1 integration is tested in `tests/jquery.test.js` which includes:

- Version verification
- DOM selection and manipulation
- CSS manipulation
- Attribute and class handling
- Event handling
- AJAX methods
- jQuery utilities (Deferred, when, extend, etc.)
- Animation methods
- Form element handling
- DOM traversal

Run all tests with:

```bash
npm test
```

Run only jQuery tests with:

```bash
npm test tests/jquery.test.js
```

## jQuery 3.x Breaking Changes

jQuery 3.x introduced several changes from 2.x. The codebase has been tested to ensure compatibility:

### Key Changes Handled:
- **`.size()` removed**: Use `.length` property instead
- **jQuery.isArray() deprecated**: Modern code should use `Array.isArray()`
- **Stricter HTML parsing**: jQuery 3.x is stricter about valid HTML
- **`.data()` returns objects**: Automatically converts dashed-key data attributes to camelCase
- **Deferred updates**: `.then()` now returns a new promise

All existing functionality has been verified to work with jQuery 3.7.1.

## Dependencies

jQuery 3.7.1 is included as a dev dependency in `package.json`:

```json
{
  "devDependencies": {
    "jquery": "^3.7.1"
  }
}
```

This allows the test suite to import and test jQuery functionality independently of the bundled `vendors.js` file.
