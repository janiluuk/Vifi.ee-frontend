<?php
/**
 * Configuration file for runtime settings
 * These values are set from environment variables at container startup
 */

// Main domain configuration - should be set via environment variable or config
$WWW_URL = getenv('WWW_URL') ?: '//www.example.com';
$SITE_NAME = getenv('SITE_NAME') ?: 'Vifi';
