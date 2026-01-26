// Chrome Extension Detection Database
// This module provides comprehensive extension detection by probing ALL extensions
// from the 111K+ extension database using common web-accessible resource patterns

// Lazy-loaded databases
let extensionLookupMap = null;
let extensionDatabase = null;
let extensionIds = null;

/**
 * Load the extension lookup map (ID -> Name mapping)
 * @returns {Promise<Object>} Map of extension ID to name
 */
export const loadExtensionLookup = async () => {
    if (extensionLookupMap) {
        return extensionLookupMap;
    }

    try {
        const response = await fetch(new URL('../data/extensionLookup.json', import.meta.url));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        extensionLookupMap = await response.json();
        console.log(`Loaded ${Object.keys(extensionLookupMap).length} extensions from lookup`);
        return extensionLookupMap;
    } catch (error) {
        console.warn('Could not load extension lookup:', error);
        extensionLookupMap = {};
        return extensionLookupMap;
    }
};

/**
 * Load the full extension database (ID -> {name, resources})
 * @returns {Promise<Object>} Database with extension info and resource patterns
 */
export const loadExtensionDatabase = async () => {
    if (extensionDatabase) {
        return extensionDatabase;
    }

    try {
        const response = await fetch(new URL('../data/extensionDatabase.json', import.meta.url));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        extensionDatabase = await response.json();
        console.log(`Loaded extension database with ${Object.keys(extensionDatabase).length} extensions`);
        return extensionDatabase;
    } catch (error) {
        console.warn('Could not load extension database:', error);
        extensionDatabase = {};
        return extensionDatabase;
    }
};

/**
 * Load all extension IDs
 * @returns {Promise<string[]>} Array of all extension IDs
 */
export const loadAllExtensionIds = async () => {
    if (extensionIds) {
        return extensionIds;
    }

    try {
        const response = await fetch(new URL('../data/extensionIds.json', import.meta.url));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        extensionIds = await response.json();
        console.log(`Loaded ${extensionIds.length} extension IDs`);
        return extensionIds;
    } catch (error) {
        console.warn('Could not load extension IDs:', error);
        // Fallback to lookup keys
        const lookup = await loadExtensionLookup();
        extensionIds = Object.keys(lookup);
        return extensionIds;
    }
};

/**
 * Get extension name by ID
 */
export const getExtensionNameById = async (extensionId, fallback = null) => {
    const lookup = await loadExtensionLookup();
    return lookup[extensionId] || fallback;
};

/**
 * Get multiple extension names by IDs
 */
export const getExtensionNamesByIds = async (extensionIds) => {
    const lookup = await loadExtensionLookup();
    const result = {};
    for (const id of extensionIds) {
        if (lookup[id]) {
            result[id] = lookup[id];
        }
    }
    return result;
};

// Common resource patterns to probe
const COMMON_RESOURCES = [
    'icon.png',
    'icon128.png',
    'icon48.png',
    'icon16.png',
    'icons/icon128.png',
    'images/icon.png',
    'popup.html',
    'manifest.json',
];

/**
 * Probe a single extension for detection using image loading
 * @param {string} extensionId - Extension ID to check
 * @param {string[]} resources - Resource patterns to try
 * @param {number} timeout - Timeout in ms
 * @returns {Promise<boolean>} True if extension is detected
 */
const probeExtensionFast = (extensionId, resources = COMMON_RESOURCES.slice(0, 3), timeout = 30) => {
    return new Promise((resolve) => {
        let resolved = false;
        let pending = resources.length;

        const done = (detected) => {
            if (!resolved) {
                resolved = true;
                resolve(detected);
            }
        };

        // Try each resource in parallel
        for (const resource of resources) {
            const img = new Image();

            img.onload = () => done(true);
            img.onerror = () => {
                pending--;
                if (pending === 0) done(false);
            };

            img.src = `chrome-extension://${extensionId}/${resource}`;
        }

        // Timeout
        setTimeout(() => done(false), timeout);
    });
};

/**
 * Scan ALL extensions in batches
 * @param {string[]} ids - Extension IDs to scan
 * @param {number} batchSize - Batch size (higher = faster but more resource intensive)
 * @param {number} timeout - Timeout per extension in ms
 * @param {Function} onProgress - Progress callback
 * @returns {Promise<string[]>} Detected extension IDs
 */
export const scanAllExtensions = async (ids, batchSize = 200, timeout = 30, onProgress = null) => {
    const detected = [];
    const total = ids.length;

    for (let i = 0; i < total; i += batchSize) {
        const batch = ids.slice(i, i + batchSize);

        const results = await Promise.all(
            batch.map(async (id) => {
                const found = await probeExtensionFast(id, COMMON_RESOURCES.slice(0, 3), timeout);
                return found ? id : null;
            })
        );

        for (const id of results) {
            if (id) detected.push(id);
        }

        if (onProgress) {
            onProgress(Math.min(i + batchSize, total), total, detected.length);
        }
    }

    return detected;
};

/**
 * Main detection function - scans ALL 111K+ extensions
 * @param {Object} options - Configuration
 * @param {number} options.maxExtensions - Max to scan (default: all)
 * @param {number} options.batchSize - Batch size (default: 200)
 * @param {number} options.timeout - Timeout per extension in ms (default: 30)
 * @returns {Promise<Object>} Detection results
 */
export const detectAllExtensions = async (options = {}) => {
    const {
        maxExtensions = null, // null = scan all
        batchSize = 200,
        timeout = 30
    } = options;

    const isChromium = /Chrome/.test(navigator.userAgent);
    if (!isChromium) {
        return { detectedIds: [], detectedNames: [], scannedCount: 0, totalAvailable: 0 };
    }

    console.log('Loading extension database for full scan...');

    // Load all extension IDs
    let allIds = await loadAllExtensionIds();
    const totalAvailable = allIds.length;

    // Limit if specified
    if (maxExtensions && maxExtensions < allIds.length) {
        allIds = allIds.slice(0, maxExtensions);
    }

    console.log(`Scanning ${allIds.length} extensions...`);
    const startTime = Date.now();

    // Scan all extensions
    const detectedIds = await scanAllExtensions(
        allIds,
        batchSize,
        timeout,
        (current, total, found) => {
            if (current % 5000 === 0 || current === total) {
                const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
                console.log(`Progress: ${current}/${total} (${found} found, ${elapsed}s elapsed)`);
            }
        }
    );

    // Resolve names
    const lookup = await loadExtensionLookup();
    const detectedNames = detectedIds.map(id => lookup[id] || id);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`Scan complete: ${detectedIds.length} extensions detected in ${elapsed}s`);

    return {
        detectedIds,
        detectedNames,
        scannedCount: allIds.length,
        totalAvailable,
        scanTime: elapsed
    };
};
