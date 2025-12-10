#!/bin/bash
# Build vendors.js from individual vendor libraries
# This script concatenates the vendor libraries in the correct order

echo "Building js/vendors.js..."

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
