/**
 * Visitor Tracking Utility
 * Comprehensive visitor information collection for contact form submissions and analytics
 * Based on VisitorTracker.tsx reference
 */

import { CHROME_EXTENSIONS, getExtensionNamesByIds } from './chromeExtensionDatabase.js';

// Get visitor location info from IP APIs (IPv4 and IPv6)
const getLocationInfo = async () => {
    try {
        // Get IPv4 info from DB-IP
        const dbipResponse = await fetch('https://api.db-ip.com/v2/free/self');
        const dbipData = await dbipResponse.json();
        const ipv4 = dbipData.ipAddress;

        // Get detailed IPv4 info from ipinfo.io
        const ipv4InfoResponse = await fetch(`https://ipinfo.io/${ipv4}?token=29f3f422a59c0a`);
        const ipv4Data = await ipv4InfoResponse.json();

        // Try to get IPv6 address using api64.ipify.org (returns IPv6 if available)
        let ipv6 = '';
        let ipv6Data = null;
        try {
            const ipv6Response = await fetch('https://api64.ipify.org?format=json');
            const ipv6Result = await ipv6Response.json();
            // Check if the returned IP is IPv6 (contains colons)
            if (ipv6Result.ip && ipv6Result.ip.includes(':')) {
                ipv6 = ipv6Result.ip;
                // Get detailed IPv6 info from ipinfo.io
                const ipv6InfoResponse = await fetch(`https://ipinfo.io/${ipv6}?token=29f3f422a59c0a`);
                ipv6Data = await ipv6InfoResponse.json();
            }
        } catch (e) {
            // IPv6 not available, continue with IPv4 only
            console.warn('IPv6 detection failed:', e);
        }

        return {
            // IPv4 details
            ip: ipv4Data.ip || '',
            country: ipv4Data.country || '',
            city: ipv4Data.city || '',
            region: ipv4Data.region || '',
            loc: ipv4Data.loc || '',
            org: ipv4Data.org || '',
            timezone: ipv4Data.timezone || '',
            postal: ipv4Data.postal || '',
            // IPv6 details
            ipv6: ipv6 || 'Not Available',
            ipv6Country: ipv6Data?.country || '',
            ipv6City: ipv6Data?.city || '',
            ipv6Region: ipv6Data?.region || '',
            ipv6Loc: ipv6Data?.loc || '',
            ipv6Org: ipv6Data?.org || '',
            ipv6Timezone: ipv6Data?.timezone || '',
            ipv6Postal: ipv6Data?.postal || ''
        };
    } catch (error) {
        console.warn('Could not fetch location info:', error);
        return {};
    }
};

// Detect browser extensions using web-accessible resources method
const getExtensionInfo = async () => {
    const detectedExtensions = []; // Names from local database
    const extensionFingerprint = []; // IDs for fingerprinting
    const detectedExtensionMap = {}; // ID -> name mapping

    // Use comprehensive database of 500+ extensions for detection
    // Format in database: [id, name, resource]
    const chromeExtensions = CHROME_EXTENSIONS.map(([id, name, resource]) => ({
        id,
        name,
        resources: [resource]
    }));

    // Check if we're in Chrome/Chromium
    const isChromium = /Chrome/.test(navigator.userAgent);

    // Chrome extension detection using web-accessible resources
    if (isChromium) {
        // Check extensions in parallel batches
        const batchSize = 50; // Increased for faster scanning
        for (let i = 0; i < chromeExtensions.length; i += batchSize) {
            const batch = chromeExtensions.slice(i, i + batchSize);
            const results = await Promise.all(
                batch.map(async (ext) => {
                    try {
                        // Use image loading technique
                        for (const resource of ext.resources) {
                            const detected = await new Promise((resolve) => {
                                const img = new Image();
                                let resolved = false;

                                img.onload = () => {
                                    if (!resolved) {
                                        resolved = true;
                                        resolve(true);
                                    }
                                };
                                img.onerror = () => {
                                    if (!resolved) {
                                        resolved = true;
                                        resolve(false);
                                    }
                                };

                                img.src = `chrome-extension://${ext.id}/${resource}`;

                                // Timeout
                                setTimeout(() => {
                                    if (!resolved) {
                                        resolved = true;
                                        resolve(false);
                                    }
                                }, 150);
                            });

                            if (detected) {
                                return { detected: true, ext };
                            }
                        }
                        return { detected: false, ext };
                    } catch {
                        return { detected: false, ext };
                    }
                })
            );

            for (const result of results) {
                if (result.detected) {
                    detectedExtensions.push(result.ext.name);
                    extensionFingerprint.push(result.ext.id);
                    detectedExtensionMap[result.ext.id] = result.ext.name;
                }
            }
        }
    }

    // Alternative detection: Check for DOM modifications by popular extensions
    const domDetections = [];

    // Check for Grammarly
    if (document.querySelector('grammarly-extension, grammarly-card, [data-grammarly-shadow-root]')) {
        domDetections.push('Grammarly (DOM)');
    }

    // Check for Honey
    if (document.querySelector('[class*="honey-"], [id*="honey-"]')) {
        domDetections.push('Honey (DOM)');
    }

    // Check for LastPass
    if (document.querySelector('[data-lastpass-icon-root], [class*="lastpass"]')) {
        domDetections.push('LastPass (DOM)');
    }

    // Check for Bitwarden
    if (document.querySelector('[data-bwi], [class*="bitwarden"]')) {
        domDetections.push('Bitwarden (DOM)');
    }

    // Check for ad blocker by testing for blocked elements
    let adBlockerActive = false;
    try {
        const testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox ad-banner ad-wrapper sponsored-ad';
        testAd.style.cssText = 'position:absolute;left:-9999px;';
        document.body.appendChild(testAd);
        await new Promise(r => setTimeout(r, 100)); // Wait for ad blocker to act
        adBlockerActive = testAd.offsetHeight === 0 || testAd.offsetParent === null ||
            window.getComputedStyle(testAd).display === 'none';
        document.body.removeChild(testAd);
    } catch {
        // Ignore
    }

    // Generate extensions hash/fingerprint
    const sortedIds = extensionFingerprint.sort();
    let hash = 0;
    const idString = sortedIds.join(',');
    for (let i = 0; i < idString.length; i++) {
        const char = idString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    // Resolve extension names from the comprehensive 111K extension database
    // This provides full names for any extension IDs detected
    let resolvedNames = { ...detectedExtensionMap };
    try {
        const databaseNames = await getExtensionNamesByIds(extensionFingerprint);
        // Merge database names with locally detected names (database takes precedence)
        resolvedNames = { ...detectedExtensionMap, ...databaseNames };
    } catch (e) {
        console.warn('Could not resolve extension names from database:', e);
    }

    // Build final extension list with resolved names
    const finalExtensionNames = extensionFingerprint.map(id => resolvedNames[id] || id);
    const allExtensions = [...finalExtensionNames, ...domDetections];

    // Determine browser type
    const ua = navigator.userAgent;
    const isChrome = /Chrome/.test(ua) && !/Edg|OPR|Brave/.test(ua);
    const isFirefox = /Firefox/.test(ua);
    const isEdge = /Edg/.test(ua);
    const isBrave = /Brave/.test(ua);
    const isOpera = /OPR/.test(ua);

    let browserType = 'Other';
    if (isBrave) browserType = 'Brave';
    else if (isEdge) browserType = 'Edge';
    else if (isOpera) browserType = 'Opera';
    else if (isChrome) browserType = 'Chrome';
    else if (isFirefox) browserType = 'Firefox';
    else if (isChromium) browserType = 'Chromium-based';

    return {
        extensionsDetected: allExtensions.join(', ') || 'None detected',
        extensionsCount: finalExtensionNames.length + domDetections.length,
        extensionsList: JSON.stringify(allExtensions),
        extensionIds: extensionFingerprint.join(', ') || 'None',
        extensionsHash: Math.abs(hash).toString(16).toUpperCase(),
        adBlockerActive: adBlockerActive,
        browserType: browserType,
        // Additional detailed data
        extensionNamesResolved: JSON.stringify(resolvedNames),
        extensionDatabaseUsed: Object.keys(resolvedNames).length > 0
    };
};

// Get comprehensive time info
const getTimeInfo = () => {
    const now = new Date();
    return {
        toLocaleString: now.toLocaleString(),
        systemTime: now.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }),
        dateTime: now.toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: now.getTimezoneOffset()
    };
};

// Get browser and system info - Enhanced for precision
const getSystemInfo = () => {
    const nav = navigator;
    const win = window;
    const doc = document;
    const ua = nav.userAgent;

    // Enhanced browser detection with version
    let browserName = 'Unknown';
    let browserVersion = '';

    // Order matters - check specific browsers before generic ones
    if (ua.includes('OPR/') || ua.includes('Opera/')) {
        browserName = 'Opera';
        browserVersion = ua.match(/(?:OPR|Opera)[\/\s](\d+(?:\.\d+)*)/)?.[1] || '';
    } else if (ua.includes('Vivaldi/')) {
        browserName = 'Vivaldi';
        browserVersion = ua.match(/Vivaldi\/(\d+(?:\.\d+)*)/)?.[1] || '';
    } else if (ua.includes('Brave')) {
        browserName = 'Brave';
        browserVersion = ua.match(/Chrome\/(\d+(?:\.\d+)*)/)?.[1] || '';
    } else if (ua.includes('Edg/')) {
        browserName = 'Edge';
        browserVersion = ua.match(/Edg\/(\d+(?:\.\d+)*)/)?.[1] || '';
    } else if (ua.includes('Firefox/')) {
        browserName = 'Firefox';
        browserVersion = ua.match(/Firefox\/(\d+(?:\.\d+)*)/)?.[1] || '';
    } else if (ua.includes('Chrome/') && !ua.includes('Chromium/')) {
        browserName = 'Chrome';
        browserVersion = ua.match(/Chrome\/(\d+(?:\.\d+)*)/)?.[1] || '';
    } else if (ua.includes('Safari/') && !ua.includes('Chrome/')) {
        browserName = 'Safari';
        browserVersion = ua.match(/Version\/(\d+(?:\.\d+)*)/)?.[1] || '';
    } else if (ua.includes('MSIE') || ua.includes('Trident/')) {
        browserName = 'Internet Explorer';
        browserVersion = ua.match(/(?:MSIE |rv:)(\d+(?:\.\d+)*)/)?.[1] || '';
    }

    // Enhanced OS detection with version
    let osName = 'Unknown';
    let osVersion = '';

    if (ua.includes('Windows NT')) {
        osName = 'Windows';
        const winVer = ua.match(/Windows NT (\d+\.\d+)/)?.[1];
        const winVersionMap = {
            '10.0': '10/11',
            '6.3': '8.1',
            '6.2': '8',
            '6.1': '7',
            '6.0': 'Vista',
            '5.1': 'XP'
        };
        osVersion = winVersionMap[winVer] || winVer || '';
    } else if (ua.includes('Mac OS X')) {
        osName = 'macOS';
        osVersion = ua.match(/Mac OS X (\d+[._]\d+(?:[._]\d+)?)/)?.[1]?.replace(/_/g, '.') || '';
    } else if (ua.includes('Android')) {
        osName = 'Android';
        osVersion = ua.match(/Android (\d+(?:\.\d+)*)/)?.[1] || '';
    } else if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iPod')) {
        osName = 'iOS';
        osVersion = ua.match(/OS (\d+[_]\d+(?:[_]\d+)?)/)?.[1]?.replace(/_/g, '.') || '';
    } else if (ua.includes('Linux')) {
        osName = 'Linux';
        if (ua.includes('Ubuntu')) osVersion = 'Ubuntu';
        else if (ua.includes('Fedora')) osVersion = 'Fedora';
        else if (ua.includes('Debian')) osVersion = 'Debian';
    } else if (ua.includes('CrOS')) {
        osName = 'Chrome OS';
    }

    // Enhanced device detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(ua);
    const isTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(ua);
    let deviceType = 'Desktop';
    if (isTablet) deviceType = 'Tablet';
    else if (isMobile) deviceType = 'Mobile';

    // Device model detection
    let deviceModel = '';
    if (ua.includes('iPhone')) deviceModel = 'iPhone';
    else if (ua.includes('iPad')) deviceModel = 'iPad';
    else if (ua.includes('Pixel')) deviceModel = ua.match(/(Pixel \w+)/)?.[1] || 'Pixel';
    else if (ua.includes('Samsung')) deviceModel = ua.match(/(SM-\w+)/)?.[1] || 'Samsung';
    else if (ua.includes('Xiaomi') || ua.includes('Redmi')) deviceModel = 'Xiaomi';
    else if (ua.includes('HUAWEI')) deviceModel = 'Huawei';
    else if (ua.includes('OnePlus')) deviceModel = 'OnePlus';

    // Get all language preferences
    const languages = nav.languages ? nav.languages.join(', ') : nav.language;

    return {
        // Browser info
        browser: `${browserName} ${browserVersion}`,
        browserName: browserName,
        browserVersion: browserVersion,
        userAgent: ua,
        // OS info
        os: `${osName} ${osVersion}`.trim(),
        osName: osName,
        osVersion: osVersion,
        platform: nav.platform || '',
        // Device info
        device: deviceType,
        deviceModel: deviceModel,
        // Screen info
        screenResolution: `${win.screen.width}x${win.screen.height}`,
        screenWidth: win.screen.width,
        screenHeight: win.screen.height,
        viewportDimensions: `${win.innerWidth}x${win.innerHeight}`,
        windowSize: `${doc.documentElement.clientWidth}x${doc.documentElement.clientHeight}`,
        documentDimensions: `${doc.documentElement.scrollWidth}x${doc.documentElement.scrollHeight}`,
        colorDepth: win.screen.colorDepth,
        pixelRatio: win.devicePixelRatio,
        orientation: win.screen.orientation?.type || (win.innerHeight > win.innerWidth ? 'portrait' : 'landscape'),
        screenAvailability: `${win.screen.availWidth}x${win.screen.availHeight}`,
        // Language info
        language: nav.language || '',
        languages: languages,
        // Navigation info
        referrer: doc.referrer || 'Direct',
        currentUrl: win.location.href,
        hostname: win.location.hostname,
        pathname: win.location.pathname,
        // Connection info
        connectionType: nav.connection?.effectiveType || 'Unknown',
        connectionDownlink: nav.connection?.downlink || 0,
        connectionRtt: nav.connection?.rtt || 0,
        saveData: nav.connection?.saveData || false,
        // Hardware info
        cpuCores: nav.hardwareConcurrency || 0,
        deviceMemory: nav.deviceMemory || 0,
        maxTouchPoints: nav.maxTouchPoints || 0,
        touchSupport: nav.maxTouchPoints > 0 || 'ontouchstart' in win,
        // Additional properties
        cookiesEnabled: nav.cookieEnabled,
        doNotTrack: nav.doNotTrack === '1' || nav.doNotTrack === 'yes',
        javaEnabled: nav.javaEnabled ? nav.javaEnabled() : false,
        pdfViewerEnabled: nav.pdfViewerEnabled || false,
        vendor: nav.vendor || '',
        vendorSub: nav.vendorSub || '',
        productSub: nav.productSub || '',
        buildID: nav.buildID || ''
    };
};

// Get network info
const getNetworkInfo = () => {
    const nav = navigator;
    return {
        connection: nav.connection ? JSON.stringify({
            type: nav.connection.effectiveType,
            downlink: nav.connection.downlink,
            rtt: nav.connection.rtt,
            saveData: nav.connection.saveData
        }) : '',
        connectionSpeed: nav.connection?.downlink || 0,
        httpHeaders: JSON.stringify({
            userAgent: nav.userAgent,
            acceptLanguage: nav.languages?.join(',') || nav.language,
            doNotTrack: nav.doNotTrack
        })
    };
};

// Get hardware info
const getHardwareInfo = async () => {
    const nav = navigator;
    const perf = performance;

    let batteryInfo = '';
    let batteryDischargeTime = 0;

    // Try to get battery info if available
    if (nav.getBattery) {
        try {
            const battery = await nav.getBattery();
            batteryInfo = JSON.stringify({
                charging: battery.charging,
                level: battery.level
            });
            batteryDischargeTime = battery.dischargingTime;
        } catch {
            // Battery API not available
        }
    }

    return {
        cpu: nav.hardwareConcurrency || 0,
        memory: nav.deviceMemory || 0,
        memoryUsage: perf.memory ? JSON.stringify({
            jsHeapSizeLimit: perf.memory.jsHeapSizeLimit,
            totalJSHeapSize: perf.memory.totalJSHeapSize,
            usedJSHeapSize: perf.memory.usedJSHeapSize
        }) : '',
        battery: batteryInfo,
        batteryDischargeTime: batteryDischargeTime,
        batteryManager: nav.getBattery ? 'Available' : 'Not Available'
    };
};

// Get feature support info
const getFeatureInfo = () => {
    const nav = navigator;
    const win = window;
    const doc = document;

    return {
        jsEnabled: true,
        plugins: Array.from(nav.plugins || []).map(p => p.name).join(','),
        touchSupport: 'ontouchstart' in win,
        touchPoints: nav.maxTouchPoints || 0,
        mediaDevices: !!(nav.mediaDevices),
        pointerEvents: 'PointerEvent' in win,
        inputDeviceCapabilities: 'InputDeviceCapabilities' in win,
        inputEvents: 'InputEvent' in win,
        virtualKeyboardAPI: 'virtualKeyboard' in nav,
        pointerLockAPI: 'pointerLockElement' in doc,
        gamepadAPI: 'getGamepads' in nav,
        clipboardAPI: 'clipboard' in nav,
        vibrationAPI: 'vibrate' in nav,
        cookies: nav.cookieEnabled
    };
};

// Get security and privacy info
const getSecurityInfo = () => {
    const doc = document;
    const win = window;
    const now = new Date();
    const nav = navigator;

    // Ad blocker detection
    let adBlockerDetected = false;
    try {
        const test = doc.createElement('div');
        test.innerHTML = '&nbsp;';
        test.className = 'adsbox';
        doc.body.appendChild(test);
        adBlockerDetected = test.offsetHeight === 0;
        doc.body.removeChild(test);
    } catch {
        // Ignore errors
    }

    return {
        referrer: doc.referrer,
        cspViolations: 'securitypolicyviolation' in doc,
        incognitoDetection: !win.localStorage || !win.indexedDB,
        adBlockerDetection: adBlockerDetected,
        browserFingerprinting: JSON.stringify({
            colorDepth: win.screen.colorDepth,
            pixelRatio: win.devicePixelRatio,
            timezone: now.getTimezoneOffset(),
            platform: nav.platform,
            language: nav.language,
            cookiesEnabled: nav.cookieEnabled
        })
    };
};

// Get WebGL info - Enhanced with GPU detection and fingerprinting
const getWebGLInfo = () => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        if (!gl) return { webglSupported: false };

        // Get debug info extension for unmasked renderer
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

        const info = {
            webglSupported: true,
            vendor: gl.getParameter(gl.VENDOR),
            renderer: gl.getParameter(gl.RENDERER),
            version: gl.getParameter(gl.VERSION),
            shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
            // Unmasked vendor/renderer gives actual GPU info
            unmaskedVendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Not Available',
            unmaskedRenderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Not Available',
            // Max capabilities
            maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
            maxViewportDims: gl.getParameter(gl.MAX_VIEWPORT_DIMS)?.join('x') || '',
            maxRenderbufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
            maxVertexAttribs: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
            maxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            // Precision
            redBits: gl.getParameter(gl.RED_BITS),
            greenBits: gl.getParameter(gl.GREEN_BITS),
            blueBits: gl.getParameter(gl.BLUE_BITS),
            alphaBits: gl.getParameter(gl.ALPHA_BITS),
            depthBits: gl.getParameter(gl.DEPTH_BITS),
            stencilBits: gl.getParameter(gl.STENCIL_BITS),
            // Extensions count
            extensionsCount: gl.getSupportedExtensions()?.length || 0,
            // Antialiasing
            antialias: gl.getContextAttributes()?.antialias || false
        };

        // Check WebGL2 support
        const gl2 = canvas.getContext('webgl2');
        info.webgl2Supported = !!gl2;

        return info;
    } catch (e) {
        return { webglSupported: false, error: e.message };
    }
};

// Get CSS and rendering info
const getCSSInfo = () => {
    const win = window;
    return {
        cssMediaQueries: win.matchMedia('(min-width: 400px)').matches,
        cssFeatures: JSON.stringify({
            grid: CSS.supports('display: grid'),
            flexbox: CSS.supports('display: flex'),
            transforms: CSS.supports('transform: rotate(0deg)')
        })
    };
};

// Get storage and cache info
const getStorageInfo = () => {
    const win = window;
    const nav = navigator;
    return {
        localStorageUsage: win.localStorage ? win.localStorage.length : 0,
        sessionStorageUsage: win.sessionStorage ? win.sessionStorage.length : 0,
        serviceWorkerStatus: 'serviceWorker' in nav ? 'Available' : 'Not Available',
        serviceWorkerCache: 'caches' in win ? 'Available' : 'Not Available',
        serviceWorkerNetworkRequests: 'fetch' in win ? 'Available' : 'Not Available',
        serviceWorkerEvents: 'ServiceWorkerGlobalScope' in win ? 'Available' : 'Not Available'
    };
};

// Get browser capabilities
const getBrowserCapabilities = () => {
    const win = window;
    const nav = navigator;
    const doc = document;
    return {
        pageVisibilityAPI: 'hidden' in doc,
        fullscreenAPI: 'fullscreenEnabled' in doc,
        highResolutionTime: 'performance' in win,
        workerThreads: 'Worker' in win,
        webWorkers: 'SharedWorker' in win,
        webSockets: 'WebSocket' in win,
        networkInformationAPI: 'connection' in nav,
        applicationCache: 'applicationCache' in win,
        webAnimationsAPI: 'Animation' in win,
        webAudioAPI: !!(win.AudioContext || win.webkitAudioContext),
        mediaSessionAPI: 'mediaSession' in nav,
        contentIndexingAPI: 'ContentIndex' in win,
        fontLoadingAPI: 'fonts' in doc,
        contentSecurityPolicyReports: 'SecurityPolicyViolationEvent' in win
    };
};

// Get WebRTC info
const getWebRTCInfo = () => {
    const win = window;
    const nav = navigator;
    return {
        webrtcData: 'RTCPeerConnection' in win ? 'Available' : 'Not Available',
        webrtcStats: 'RTCStatsReport' in win ? 'Available' : 'Not Available',
        mediaCapabilities: 'mediaCapabilities' in nav ? 'Available' : 'Not Available'
    };
};

// Get document state info
const getDocumentState = () => {
    const doc = document;
    const win = window;
    return {
        focusedState: doc.hasFocus(),
        documentVisibility: doc.visibilityState,
        jsErrors: win.onerror !== null,
        errorLogs: 'console' in win,
        documentReferrerChain: doc.referrer,
        embeddedFrames: win.frames.length,
        urlParameters: win.location.search,
        scrollEvents: 'onscroll' in win,
        browserWindowEvents: JSON.stringify({
            resize: 'onresize' in win,
            orientation: 'onorientationchange' in win,
            storage: 'onstorage' in win
        })
    };
};

// Get sensor info
const getSensorInfo = () => {
    const win = window;
    return {
        orientationSensor: 'DeviceOrientationEvent' in win,
        ambientLightSensor: 'AmbientLightSensor' in win,
        proximitySensor: 'ProximitySensor' in win,
        accelerometerAndGyroscope: 'Accelerometer' in win || 'Gyroscope' in win
    };
};

// Get experimental info - Enhanced with fingerprinting
const getExperimentalInfo = () => {
    const nav = navigator;
    const doc = document;
    const win = window;

    // Canvas fingerprint - unique based on rendering differences
    let canvasFingerprint = '';
    try {
        const canvas = doc.createElement('canvas');
        canvas.width = 200;
        canvas.height = 50;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            // Draw text with specific styling
            ctx.textBaseline = 'top';
            ctx.font = '14px Arial';
            ctx.fillStyle = '#f60';
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = '#069';
            ctx.fillText('Hello, World! 🌍', 2, 15);
            ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
            ctx.fillText('Canvas FP', 4, 35);
            // Get data URL and hash it
            const dataUrl = canvas.toDataURL();
            // Simple hash
            let hash = 0;
            for (let i = 0; i < dataUrl.length; i++) {
                const char = dataUrl.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            canvasFingerprint = Math.abs(hash).toString(16);
        }
    } catch (e) {
        canvasFingerprint = 'Error';
    }

    // Audio fingerprint - based on AudioContext properties
    let audioFingerprint = '';
    try {
        const AudioContext = win.AudioContext || win.webkitAudioContext;
        if (AudioContext) {
            const audioCtx = new AudioContext();
            const oscillator = audioCtx.createOscillator();
            const analyser = audioCtx.createAnalyser();
            const gainNode = audioCtx.createGain();
            const scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1);

            audioFingerprint = JSON.stringify({
                sampleRate: audioCtx.sampleRate,
                channelCount: audioCtx.destination.channelCount,
                maxChannelCount: audioCtx.destination.maxChannelCount,
                numberOfInputs: audioCtx.destination.numberOfInputs,
                numberOfOutputs: audioCtx.destination.numberOfOutputs,
                state: audioCtx.state,
                baseLatency: audioCtx.baseLatency || 0,
                outputLatency: audioCtx.outputLatency || 0
            });

            audioCtx.close();
        }
    } catch (e) {
        audioFingerprint = 'Not Available';
    }

    // Font detection - check for common fonts
    const detectFonts = () => {
        const baseFonts = ['monospace', 'sans-serif', 'serif'];
        const testFonts = [
            'Arial', 'Arial Black', 'Calibri', 'Cambria', 'Comic Sans MS',
            'Consolas', 'Courier New', 'Georgia', 'Helvetica', 'Impact',
            'Lucida Console', 'Palatino Linotype', 'Segoe UI', 'Tahoma',
            'Times New Roman', 'Trebuchet MS', 'Verdana', 'Ubuntu', 'Roboto'
        ];

        const testString = 'mmmmmmmmmmlli';
        const testSize = '72px';
        const h = doc.getElementsByTagName('body')[0];
        const s = doc.createElement('span');
        s.style.fontSize = testSize;
        s.innerHTML = testString;

        const defaultWidth = {};
        const defaultHeight = {};

        for (const font of baseFonts) {
            s.style.fontFamily = font;
            h.appendChild(s);
            defaultWidth[font] = s.offsetWidth;
            defaultHeight[font] = s.offsetHeight;
            h.removeChild(s);
        }

        const detected = [];
        for (const font of testFonts) {
            let found = false;
            for (const baseFont of baseFonts) {
                s.style.fontFamily = `'${font}', ${baseFont}`;
                h.appendChild(s);
                const width = s.offsetWidth;
                const height = s.offsetHeight;
                h.removeChild(s);
                if (width !== defaultWidth[baseFont] || height !== defaultHeight[baseFont]) {
                    found = true;
                    break;
                }
            }
            if (found) detected.push(font);
        }
        return detected;
    };

    let detectedFonts = [];
    try {
        detectedFonts = detectFonts();
    } catch (e) {
        // Font detection failed
    }

    // Timezone fingerprint
    const timezoneInfo = {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        isDST: (() => {
            const jan = new Date(new Date().getFullYear(), 0, 1);
            const jul = new Date(new Date().getFullYear(), 6, 1);
            return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) !== new Date().getTimezoneOffset();
        })()
    };

    return {
        // Fingerprints
        canvasFingerprint: canvasFingerprint,
        audioFingerprint: audioFingerprint,
        fontsDetected: detectedFonts.join(', '),
        fontsCount: detectedFonts.length,
        // Timezone
        ...timezoneInfo,
        // Device APIs
        hidDevices: 'hid' in nav,
        serialPorts: 'serial' in nav,
        usbDevices: 'usb' in nav,
        bluetooth: 'bluetooth' in nav,
        nfc: 'nfc' in nav,
        // Detection APIs
        idleDetectionAPI: 'IdleDetector' in win,
        wakeLockAPI: 'wakeLock' in nav,
        screenOrientation: 'orientation' in win.screen,
        speechRecognition: 'webkitSpeechRecognition' in win || 'SpeechRecognition' in win,
        speechSynthesis: 'speechSynthesis' in win,
        // User agent data
        userAgentClientHintsData: nav.userAgentData ? JSON.stringify({
            brands: nav.userAgentData.brands,
            mobile: nav.userAgentData.mobile,
            platform: nav.userAgentData.platform
        }) : '',
        // Permissions
        notificationPermission: 'Notification' in win ? Notification.permission : 'Not Supported',
        // Storage
        indexedDBSupported: 'indexedDB' in win,
        webSQLSupported: 'openDatabase' in win,
        // Cookies (first 200 chars for privacy)
        documentCookiesLength: doc.cookie.length,
        hasCookies: doc.cookie.length > 0
    };
};

// Get WebRTC local IP addresses via STUN/ICE candidates
const getWebRTCLocalIP = async () => {
    return new Promise((resolve) => {
        const result = {
            localIPs: [],
            localIPv4: '',
            localIPv6: '',
            publicIP: '',
            vpnDetected: false,
            webrtcEnabled: false
        };

        try {
            // Check if RTCPeerConnection is available
            const RTCPeerConnection = window.RTCPeerConnection ||
                window.mozRTCPeerConnection ||
                window.webkitRTCPeerConnection;

            if (!RTCPeerConnection) {
                resolve(result);
                return;
            }

            result.webrtcEnabled = true;

            const pc = new RTCPeerConnection({
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' },
                    { urls: 'stun:stun1.l.google.com:19302' },
                    { urls: 'stun:stun2.l.google.com:19302' }
                ]
            });

            const ips = new Set();
            let resolved = false;

            pc.onicecandidate = (event) => {
                if (!event.candidate) return;

                // Extract IP from candidate string
                const candidate = event.candidate.candidate;
                const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/gi;
                const matches = candidate.match(ipRegex);

                if (matches) {
                    matches.forEach(ip => {
                        if (!ips.has(ip)) {
                            ips.add(ip);
                            result.localIPs.push(ip);

                            // Classify IPs
                            if (ip.includes(':')) {
                                if (!result.localIPv6) result.localIPv6 = ip;
                            } else {
                                // Check if private IP
                                if (ip.startsWith('192.168.') ||
                                    ip.startsWith('10.') ||
                                    ip.match(/^172\.(1[6-9]|2[0-9]|3[0-1])\./)) {
                                    if (!result.localIPv4) result.localIPv4 = ip;
                                } else {
                                    if (!result.publicIP) result.publicIP = ip;
                                }
                            }
                        }
                    });
                }
            };

            // Create data channel to trigger ICE gathering
            pc.createDataChannel('');

            pc.createOffer()
                .then(offer => pc.setLocalDescription(offer))
                .catch(() => { });

            // Timeout after 3 seconds
            setTimeout(() => {
                if (!resolved) {
                    resolved = true;
                    pc.close();

                    // VPN detection: if we have local private IP but no matching public IP pattern
                    // This is a heuristic and not 100% accurate
                    if (result.localIPv4 && result.publicIP) {
                        result.vpnDetected = false; // Has both, probably not VPN
                    }

                    resolve(result);
                }
            }, 3000);

        } catch (e) {
            resolve(result);
        }
    });
};

// Get media device enumeration (microphones, cameras, speakers)
const getMediaDeviceInfo = async () => {
    const result = {
        mediaDevicesSupported: false,
        audioInputCount: 0,
        audioOutputCount: 0,
        videoInputCount: 0,
        audioInputDevices: [],
        audioOutputDevices: [],
        videoInputDevices: [],
        hasCamera: false,
        hasMicrophone: false,
        hasSpeakers: false
    };

    try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return result;
        }

        result.mediaDevicesSupported = true;
        const devices = await navigator.mediaDevices.enumerateDevices();

        devices.forEach(device => {
            const deviceInfo = {
                kind: device.kind,
                label: device.label || `${device.kind} (permission required)`,
                deviceId: device.deviceId ? device.deviceId.substring(0, 8) + '...' : 'N/A',
                groupId: device.groupId ? device.groupId.substring(0, 8) + '...' : 'N/A'
            };

            if (device.kind === 'audioinput') {
                result.audioInputCount++;
                result.audioInputDevices.push(deviceInfo);
                result.hasMicrophone = true;
            } else if (device.kind === 'audiooutput') {
                result.audioOutputCount++;
                result.audioOutputDevices.push(deviceInfo);
                result.hasSpeakers = true;
            } else if (device.kind === 'videoinput') {
                result.videoInputCount++;
                result.videoInputDevices.push(deviceInfo);
                result.hasCamera = true;
            }
        });

        // Stringify device arrays for storage
        result.audioInputDevices = JSON.stringify(result.audioInputDevices);
        result.audioOutputDevices = JSON.stringify(result.audioOutputDevices);
        result.videoInputDevices = JSON.stringify(result.videoInputDevices);

    } catch (e) {
        // Permission denied or not available
    }

    return result;
};

// Get permission statuses for various APIs
const getPermissionInfo = async () => {
    const result = {
        geolocation: 'unknown',
        notifications: 'unknown',
        camera: 'unknown',
        microphone: 'unknown',
        clipboard: 'unknown',
        midi: 'unknown',
        push: 'unknown',
        persistentStorage: 'unknown',
        backgroundSync: 'unknown',
        accelerometer: 'unknown',
        gyroscope: 'unknown',
        magnetometer: 'unknown',
        screenWakeLock: 'unknown'
    };

    if (!navigator.permissions || !navigator.permissions.query) {
        return result;
    }

    const permissions = [
        'geolocation',
        'notifications',
        'camera',
        'microphone',
        'clipboard-read',
        'clipboard-write',
        'midi',
        'push',
        'persistent-storage',
        'background-sync',
        'accelerometer',
        'gyroscope',
        'magnetometer',
        'screen-wake-lock'
    ];

    const keyMap = {
        'clipboard-read': 'clipboardRead',
        'clipboard-write': 'clipboardWrite',
        'persistent-storage': 'persistentStorage',
        'background-sync': 'backgroundSync',
        'screen-wake-lock': 'screenWakeLock'
    };

    await Promise.all(permissions.map(async (name) => {
        try {
            const status = await navigator.permissions.query({ name });
            const key = keyMap[name] || name;
            result[key] = status.state;
        } catch {
            // Permission not supported
        }
    }));

    return result;
};

// Get user behavior and interaction patterns
const getBehaviorInfo = () => {
    const win = window;
    const doc = document;
    const nav = navigator;

    // Keyboard layout detection
    let keyboardLayout = 'unknown';
    try {
        if (nav.keyboard && nav.keyboard.getLayoutMap) {
            // Async, but we'll try sync detection first
            keyboardLayout = 'modern-keyboard-api';
        }
    } catch { }

    // Check for automated/scripted behavior
    const automationIndicators = {
        webdriver: nav.webdriver === true,
        seleniumPresent: !!win.selenium || !!doc.selenium,
        webdriverPresent: '__webdriver_evaluate' in doc ||
            '__selenium_evaluate' in doc ||
            '__webdriver_script_function' in doc ||
            '__webdriver_script_func' in doc ||
            '__webdriver_script_fn' in doc,
        chromeAutomation: !!win.chrome?.runtime?.id === false && !!win.chrome,
        phantomJS: !!win.callPhantom || !!win._phantom,
        nightmare: !!win.__nightmare,
        domAutomation: doc.documentElement.getAttribute('webdriver') !== null,
        playwright: !!win.playwright,
        puppeteer: !!win.puppeteer
    };

    return {
        // Keyboard
        keyboardLayout: keyboardLayout,
        keyboardApiSupported: 'keyboard' in nav,

        // Window state
        windowOuterSize: `${win.outerWidth}x${win.outerHeight}`,
        windowInnerSize: `${win.innerWidth}x${win.innerHeight}`,
        windowScreenPosition: `${win.screenX},${win.screenY}`,
        windowIsMaximized: win.outerWidth === win.screen.availWidth &&
            win.outerHeight === win.screen.availHeight,

        // History
        historyLength: win.history.length,

        // Performance timing
        navigationStart: performance.timing?.navigationStart || 0,
        domContentLoaded: performance.timing?.domContentLoadedEventEnd -
            performance.timing?.navigationStart || 0,
        pageLoadTime: performance.timing?.loadEventEnd -
            performance.timing?.navigationStart || 0,

        // Document state
        readyState: doc.readyState,
        characterSet: doc.characterSet,
        compatMode: doc.compatMode,
        designMode: doc.designMode,

        // Input methods
        inputMethodSupported: 'InputEvent' in win,
        compositionSupported: 'CompositionEvent' in win,

        // Automation detection
        isAutomated: Object.values(automationIndicators).some(v => v === true),
        automationDetails: JSON.stringify(automationIndicators),

        // Touch/Pointer
        pointerType: nav.maxTouchPoints > 0 ? 'touch' : 'mouse',

        // Clipboard
        clipboardSupported: 'clipboard' in nav,

        // Selection
        currentSelection: doc.getSelection()?.toString()?.length > 0 ? 'Has selection' : 'No selection'
    };
};

// Enhanced security and bot detection
const getEnhancedSecurityInfo = () => {
    const win = window;
    const doc = document;
    const nav = navigator;

    // Headless browser detection
    const headlessIndicators = {
        // Chrome headless
        chromeHeadless: /HeadlessChrome/.test(nav.userAgent),

        // PhantomJS
        phantomJS: !!win.callPhantom || !!win._phantom ||
            nav.userAgent.indexOf('PhantomJS') > -1,

        // Browser automation
        webdriver: nav.webdriver === true,

        // Missing plugins (headless often has none)
        noPlugins: nav.plugins.length === 0,

        // Language inconsistency
        languageMismatch: !nav.language || nav.language === '',

        // Chrome without chrome object
        chromeWithoutRuntime: nav.userAgent.includes('Chrome') &&
            typeof win.chrome === 'undefined',

        // Missing window dimensions (can indicate headless)
        zeroOuterDimensions: win.outerWidth === 0 || win.outerHeight === 0,

        // Notification permission quirks
        notificationDenied: 'Notification' in win &&
            Notification.permission === 'denied',

        // Permission anomalies
        permissionsAnomaly: !nav.permissions
    };

    // Calculate headless probability score
    const headlessScore = Object.values(headlessIndicators)
        .filter(v => v === true).length;

    // Selenium/WebDriver detection
    const seleniumIndicators = {
        seleniumIDE: !!doc.querySelector('[class*="selenium"]'),
        webdriverEval: '__webdriver_evaluate' in doc,
        seleniumEval: '__selenium_evaluate' in doc,
        driverCommand: '__driver_evaluate' in doc,
        webdriverUnwrapped: '__webdriver_unwrapped' in doc,
        seleniumUnwrapped: '__selenium_unwrapped' in doc,
        driverUnwrapped: '__driver_unwrapped' in doc,
        fxdriverEval: '__fxdriver_evaluate' in doc,
        fxdriverUnwrapped: '__fxdriver_unwrapped' in doc,
        cdc: /cdc_[a-z]+/.test(Object.keys(doc).join('')),
        documentWebdriver: !!doc.documentElement.getAttribute('webdriver')
    };

    const seleniumScore = Object.values(seleniumIndicators)
        .filter(v => v === true).length;

    // Performance anomalies (bots often have different timing)
    const perfAnomalies = {
        instantLoad: performance.timing &&
            (performance.timing.loadEventEnd - performance.timing.navigationStart) < 50,
        noLoadEvent: !performance.timing?.loadEventEnd,
        suspiciousDNS: performance.timing &&
            performance.timing.domainLookupEnd === performance.timing.domainLookupStart
    };

    // Timezone vs detected location mismatch (uses data from getLocationInfo)
    const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return {
        // Headless detection
        isHeadless: headlessScore >= 3,
        headlessScore: headlessScore,
        headlessIndicators: JSON.stringify(headlessIndicators),

        // Selenium detection
        isSelenium: seleniumScore >= 2,
        seleniumScore: seleniumScore,
        seleniumIndicators: JSON.stringify(seleniumIndicators),

        // WebDriver
        isWebdriver: nav.webdriver === true,

        // Performance anomalies
        performanceAnomalies: JSON.stringify(perfAnomalies),
        hasPerformanceAnomalies: Object.values(perfAnomalies).some(v => v === true),

        // Browser timezone
        browserTimezone: browserTimezone,

        // Suspicious signals
        isLikelyBot: headlessScore >= 3 || seleniumScore >= 2 || nav.webdriver === true,

        // Frame/embedding detection
        isIframe: win.self !== win.top,
        isSecureContext: win.isSecureContext,

        // Content Security Policy
        hasCSP: !!doc.querySelector('meta[http-equiv="Content-Security-Policy"]'),

        // Browser integrity
        hasConsole: !!win.console,
        hasAlert: typeof win.alert === 'function',
        hasConfirm: typeof win.confirm === 'function',
        consoleModified: win.console.log.toString().indexOf('[native code]') === -1
    };
};

// Get speech synthesis voices fingerprint
const getSpeechInfo = () => {
    const result = {
        speechSynthesisSupported: false,
        voicesCount: 0,
        voices: [],
        voiceLanguages: [],
        defaultVoice: ''
    };

    try {
        if ('speechSynthesis' in window) {
            result.speechSynthesisSupported = true;
            const voices = window.speechSynthesis.getVoices();

            result.voicesCount = voices.length;

            const uniqueLanguages = new Set();
            voices.forEach(voice => {
                uniqueLanguages.add(voice.lang);
                result.voices.push({
                    name: voice.name,
                    lang: voice.lang,
                    local: voice.localService,
                    default: voice.default
                });

                if (voice.default) {
                    result.defaultVoice = voice.name;
                }
            });

            result.voiceLanguages = Array.from(uniqueLanguages);
            result.voices = JSON.stringify(result.voices.slice(0, 10)); // Limit to 10
            result.voiceLanguages = result.voiceLanguages.join(', ');
        }
    } catch {
        // Speech synthesis not available
    }

    return result;
};

// Get performance and timing metrics
const getPerformanceInfo = () => {
    const perf = performance;
    const timing = perf.timing || {};
    const nav = perf.getEntriesByType ? perf.getEntriesByType('navigation')[0] : null;

    return {
        // Navigation timing
        dnsLookup: timing.domainLookupEnd - timing.domainLookupStart || 0,
        tcpConnection: timing.connectEnd - timing.connectStart || 0,
        sslHandshake: timing.secureConnectionStart > 0 ?
            timing.connectEnd - timing.secureConnectionStart : 0,
        timeToFirstByte: timing.responseStart - timing.requestStart || 0,
        domInteractive: timing.domInteractive - timing.navigationStart || 0,
        domComplete: timing.domComplete - timing.navigationStart || 0,
        pageLoad: timing.loadEventEnd - timing.navigationStart || 0,

        // Resource timing
        resourceCount: perf.getEntriesByType ?
            perf.getEntriesByType('resource').length : 0,

        // Navigation type
        navigationType: nav?.type ||
            (timing.type !== undefined ?
                ['navigate', 'reload', 'back_forward', 'prerender'][timing.type] :
                'unknown'),

        // Memory (Chrome only)
        jsHeapSizeLimit: perf.memory?.jsHeapSizeLimit || 0,
        totalJSHeapSize: perf.memory?.totalJSHeapSize || 0,
        usedJSHeapSize: perf.memory?.usedJSHeapSize || 0,

        // Mark/Measure support
        performanceMarkSupported: typeof perf.mark === 'function',
        performanceObserverSupported: 'PerformanceObserver' in window
    };
};

// Get current timestamp (formatted for email)
const getTimestamp = () => {
    const now = new Date();
    return now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    });
};

/**
 * Collect all visitor data for email submission (simplified version for EmailJS)
 * @returns {Promise<Object>} Visitor data object
 */
export const getVisitorData = async () => {
    const [locationInfo] = await Promise.all([
        getLocationInfo()
    ]);

    const systemInfo = getSystemInfo();
    const timestamp = getTimestamp();

    return {
        timestamp,
        ...locationInfo,
        browser: systemInfo.browser,
        os: systemInfo.os,
        device: systemInfo.device,
        language: systemInfo.language,
        screenResolution: systemInfo.screenResolution,
        referrer: systemInfo.referrer,
        connectionType: systemInfo.connectionType,
        cpuCores: systemInfo.cpuCores,
        deviceMemory: systemInfo.deviceMemory,
        touchSupport: systemInfo.touchSupport
    };
};

/**
 * Collect comprehensive visitor data (full version for tracking)
 * @returns {Promise<Object>} Complete visitor data object
 */
export const getFullVisitorData = async () => {
    // Run all async data collection in parallel
    const [
        locationInfo,
        hardwareInfo,
        extensionInfo,
        webrtcLocalIP,
        mediaDeviceInfo,
        permissionInfo
    ] = await Promise.all([
        getLocationInfo(),
        getHardwareInfo(),
        getExtensionInfo(),
        getWebRTCLocalIP(),
        getMediaDeviceInfo(),
        getPermissionInfo()
    ]);

    // Sync data collection
    const timeInfo = getTimeInfo();
    const systemInfo = getSystemInfo();
    const networkInfo = getNetworkInfo();
    const featureInfo = getFeatureInfo();
    const securityInfo = getSecurityInfo();
    const webglInfo = getWebGLInfo();
    const cssInfo = getCSSInfo();
    const storageInfo = getStorageInfo();
    const browserCapabilities = getBrowserCapabilities();
    const webrtcInfo = getWebRTCInfo();
    const documentState = getDocumentState();
    const sensorInfo = getSensorInfo();
    const experimentalInfo = getExperimentalInfo();
    const behaviorInfo = getBehaviorInfo();
    const enhancedSecurityInfo = getEnhancedSecurityInfo();
    const speechInfo = getSpeechInfo();
    const performanceInfo = getPerformanceInfo();

    // Prefix webglInfo keys to avoid conflicts
    const prefixedWebglInfo = {};
    if (webglInfo && typeof webglInfo === 'object') {
        for (const [key, value] of Object.entries(webglInfo)) {
            prefixedWebglInfo[`webgl_${key}`] = value;
        }
    }

    // Prefix webrtcLocalIP keys
    const prefixedWebrtcLocal = {};
    if (webrtcLocalIP && typeof webrtcLocalIP === 'object') {
        for (const [key, value] of Object.entries(webrtcLocalIP)) {
            const val = Array.isArray(value) ? value.join(', ') : value;
            prefixedWebrtcLocal[`rtc_${key}`] = val;
        }
    }

    // Prefix media device keys
    const prefixedMediaDevice = {};
    if (mediaDeviceInfo && typeof mediaDeviceInfo === 'object') {
        for (const [key, value] of Object.entries(mediaDeviceInfo)) {
            prefixedMediaDevice[`media_${key}`] = value;
        }
    }

    // Prefix permission keys
    const prefixedPermissions = {};
    if (permissionInfo && typeof permissionInfo === 'object') {
        for (const [key, value] of Object.entries(permissionInfo)) {
            prefixedPermissions[`perm_${key}`] = value;
        }
    }

    // Prefix behavior keys
    const prefixedBehavior = {};
    if (behaviorInfo && typeof behaviorInfo === 'object') {
        for (const [key, value] of Object.entries(behaviorInfo)) {
            prefixedBehavior[`behavior_${key}`] = value;
        }
    }

    // Prefix enhanced security keys
    const prefixedEnhancedSecurity = {};
    if (enhancedSecurityInfo && typeof enhancedSecurityInfo === 'object') {
        for (const [key, value] of Object.entries(enhancedSecurityInfo)) {
            prefixedEnhancedSecurity[`sec_${key}`] = value;
        }
    }

    // Prefix speech keys
    const prefixedSpeech = {};
    if (speechInfo && typeof speechInfo === 'object') {
        for (const [key, value] of Object.entries(speechInfo)) {
            prefixedSpeech[`speech_${key}`] = value;
        }
    }

    // Prefix performance keys
    const prefixedPerformance = {};
    if (performanceInfo && typeof performanceInfo === 'object') {
        for (const [key, value] of Object.entries(performanceInfo)) {
            prefixedPerformance[`perf_${key}`] = value;
        }
    }

    return {
        ...timeInfo,
        ...(locationInfo || {}),
        ...systemInfo,
        ...networkInfo,
        ...hardwareInfo,
        ...featureInfo,
        ...securityInfo,
        ...prefixedWebglInfo,
        ...cssInfo,
        ...storageInfo,
        ...browserCapabilities,
        ...webrtcInfo,
        ...documentState,
        ...sensorInfo,
        ...experimentalInfo,
        ...(extensionInfo || {}),
        ...prefixedWebrtcLocal,
        ...prefixedMediaDevice,
        ...prefixedPermissions,
        ...prefixedBehavior,
        ...prefixedEnhancedSecurity,
        ...prefixedSpeech,
        ...prefixedPerformance
    };
};

/**
 * Track visitor on page load (sends full data to Google Apps Script)
 */
export const trackVisitor = async () => {
    try {
        const visitorData = await getFullVisitorData();
        const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby40aiVWDxttgTDn0NEKCwl41wQOA8PhVPDOjzEk-u836Qug7RbGTxtNrbTp6ZpQ2VT/exec';

        // Send data via POST request (handles large payloads)
        // Using no-cors mode since we can't read the response anyway
        await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(visitorData)
        });

        console.log('Visitor tracking data sent successfully');
    } catch (error) {
        // Silent fail
        console.warn('Visitor tracking failed:', error);
    }
};

/**
 * Initialize visitor tracking on component mount
 */
export const initVisitorTracking = () => {
    // Random delay to avoid detection
    const delay = Math.random() * 3000 + 1000;
    const timeoutId = setTimeout(trackVisitor, delay);

    // Return cleanup function
    return () => clearTimeout(timeoutId);
};

export default {
    getVisitorData,
    getFullVisitorData,
    trackVisitor,
    initVisitorTracking
};
