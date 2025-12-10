#!/bin/bash
# Build vendors.js from individual vendor libraries
# This script concatenates the vendor libraries in the correct order

set -e  # Exit on any error

echo "Building js/vendors.js..."

# Check if vendor files exist
VENDOR_FILES=(
  "js/vendor/jquery-3.7.1.min.js"
  "js/vendor/jquery.velocity.min.js"
  "js/vendor/backbone.localstorage.min.js"
  "js/vendor/backbone-polling.min.js"
)

for file in "${VENDOR_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo "Error: Required vendor file not found: $file"
    exit 1
  fi
done

# Remove existing vendors.js
rm -f js/vendors.js

# Concatenate all vendor files in order
cat js/vendor/jquery-3.7.1.min.js >> js/vendors.js
echo "" >> js/vendors.js

cat js/vendor/jquery.velocity.min.js >> js/vendors.js
echo "" >> js/vendors.js

cat js/vendor/backbone.localstorage.min.js >> js/vendors.js
echo "" >> js/vendors.js

cat js/vendor/backbone-polling.min.js >> js/vendors.js
echo "" >> js/vendors.js

echo "vendors.js built successfully!"
echo "Total size: $(wc -c < js/vendors.js) bytes"
echo "Total lines: $(wc -l < js/vendors.js) lines"
