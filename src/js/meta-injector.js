/**
 * Meta tag injector for dynamic Open Graph and metadata
 * This module injects meta tags based on environment variables at build time
 */

// Get environment variables injected by webpack
const WWW_URL = process.env.WWW_URL || '//www.example.com';
const SITE_NAME = process.env.SITE_NAME || 'Vifi';

/**
 * Update meta tags for film pages based on sitemap data
 */
function updateMetaForFilm() {
    const path = window.location.pathname;
    
    if (path.includes('/films/')) {
        // Try to fetch from sitemap or use defaults
        // This is a simplified version - the full implementation would fetch from sitemap.xml
        const titleElement = document.querySelector('title');
        const ogUrlMeta = document.querySelector('meta[property="og:url"]') || createMetaTag('og:url');
        
        if (ogUrlMeta && !ogUrlMeta.content.includes('example.com')) {
            // Already set by server-side, don't override
            return;
        }
        
        // Set default Open Graph URL for current page
        ogUrlMeta.setAttribute('content', WWW_URL + path);
    }
}

/**
 * Set default meta tags if not already set
 */
function setDefaultMeta() {
    const path = window.location.pathname;
    
    // Only set defaults if we're on the home page or a page without specific meta
    if (path === '/' || path === '/index.html') {
        const title = document.querySelector('title');
        if (!title || title.textContent.includes('Vifi.ee')) {
            if (title) title.textContent = `${SITE_NAME} - Vaata filme mugavalt!`;
        }
        
        ensureMetaTag('og:url', `${WWW_URL}/`);
        ensureMetaTag('og:type', 'website');
        ensureImageMeta(`${WWW_URL}/screenshot.jpg`);
    }
}

/**
 * Helper to create or update a meta tag
 */
function ensureMetaTag(property, content) {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
        meta = createMetaTag(property);
    }
    if (meta && !meta.content.includes('example.com')) {
        // Already set, don't override
        return;
    }
    if (meta) {
        meta.setAttribute('content', content);
    }
}

/**
 * Create a new meta tag
 */
function createMetaTag(property) {
    const meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
    return meta;
}

/**
 * Ensure image meta tags are set
 */
function ensureImageMeta(imageUrl) {
    let linkImageSrc = document.querySelector('link[rel="image_src"]');
    if (!linkImageSrc) {
        linkImageSrc = document.createElement('link');
        linkImageSrc.setAttribute('rel', 'image_src');
        document.head.appendChild(linkImageSrc);
    }
    if (!linkImageSrc.href.includes('vifi.ee') || linkImageSrc.href.includes('example.com')) {
        linkImageSrc.setAttribute('href', imageUrl);
    }
    
    ensureMetaTag('og:image', imageUrl);
}

/**
 * Initialize meta tag injection
 */
function initMetaInjector() {
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateMetaForFilm();
            setDefaultMeta();
        });
    } else {
        updateMetaForFilm();
        setDefaultMeta();
    }
}

// Auto-initialize
initMetaInjector();

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateMetaForFilm, setDefaultMeta };
}
