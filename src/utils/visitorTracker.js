/**
 * Visitor Tracking Utility
 * Comprehensive visitor information collection for contact form submissions and analytics
 * Based on VisitorTracker.tsx reference
 */

// Get visitor location info from IP APIs
const getLocationInfo = async () => {
    try {
        // First get IP from DB-IP
        const dbipResponse = await fetch('https://api.db-ip.com/v2/free/self');
        const dbipData = await dbipResponse.json();
        const ip = dbipData.ipAddress;

        // Then get detailed info from ipinfo.io using the IP
        const ipinfoResponse = await fetch(`https://ipinfo.io/${ip}?token=fcd7e81b0f7849`);
        const ipinfoData = await ipinfoResponse.json();

        return {
            user_ip: ipinfoData.ip || '',
            user_country: ipinfoData.country || '',
            user_city: ipinfoData.city || '',
            user_region: ipinfoData.region || '',
            user_loc: ipinfoData.loc || '',
            user_org: ipinfoData.org || '',
            user_timezone: ipinfoData.timezone || '',
            user_postal: ipinfoData.postal || ''
        };
    } catch (error) {
        console.warn('Could not fetch location info:', error);
        return {};
    }
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

// Get browser and system info
const getSystemInfo = () => {
    const nav = navigator;
    const win = window;
    const doc = document;

    // Parse user agent for browser info
    const ua = nav.userAgent;
    let browser = 'Unknown';
    let version = '';
    let os = nav.platform || 'Unknown';

    if (ua.includes('Firefox/')) {
        browser = 'Firefox';
        version = ua.match(/Firefox\/(\d+\.?\d*)/)?.[1] || '';
    } else if (ua.includes('Chrome/') && !ua.includes('Edg/')) {
        browser = 'Chrome';
        version = ua.match(/Chrome\/(\d+\.?\d*)/)?.[1] || '';
    } else if (ua.includes('Safari/') && !ua.includes('Chrome/')) {
        browser = 'Safari';
        version = ua.match(/Version\/(\d+\.?\d*)/)?.[1] || '';
    } else if (ua.includes('Edg/')) {
        browser = 'Edge';
        version = ua.match(/Edg\/(\d+\.?\d*)/)?.[1] || '';
    }

    // Determine device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const deviceType = isMobile ? 'Mobile' : 'Desktop';

    // Determine OS
    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Mac OS')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

    return {
        browser: ua.replace(/[0-9]/g, ''),
        user_browser: browser,
        user_version: version,
        user_os: os,
        user_device_type: deviceType,
        user_language: nav.language || '',
        user_screen_resolution: `${win.screen.width}x${win.screen.height}`,
        viewportDimensions: `${win.innerWidth}x${win.innerHeight}`,
        windowSize: `${doc.documentElement.clientWidth}x${doc.documentElement.clientHeight}`,
        documentDimensions: `${doc.documentElement.scrollWidth}x${doc.documentElement.scrollHeight}`,
        orientation: win.screen.orientation?.type || 'unknown',
        screenAvailability: `${win.screen.availWidth}x${win.screen.availHeight}`,
        user_referrer: doc.referrer || 'Direct',
        user_connection_type: nav.connection?.effectiveType || 'Unknown',
        user_cpu_cores: nav.hardwareConcurrency?.toString() || 'Unknown',
        user_device_memory: nav.deviceMemory?.toString() || 'Unknown',
        user_touch_support: 'ontouchstart' in win ? 'Yes' : 'No',
        navigatorProperties: JSON.stringify({
            vendor: nav.vendor,
            product: nav.product,
            hardwareConcurrency: nav.hardwareConcurrency,
            deviceMemory: nav.deviceMemory,
            maxTouchPoints: nav.maxTouchPoints
        })
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

// Get WebGL info
const getWebGLInfo = () => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl');
        if (gl) {
            return JSON.stringify({
                vendor: gl.getParameter(gl.VENDOR),
                renderer: gl.getParameter(gl.RENDERER),
                version: gl.getParameter(gl.VERSION)
            });
        }
    } catch {
        // WebGL not available
    }
    return '';
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

// Get experimental info
const getExperimentalInfo = () => {
    const nav = navigator;
    const doc = document;
    return {
        hidDevices: 'hid' in nav,
        serialPorts: 'serial' in nav,
        idleDetectionAPI: 'IdleDetector' in window,
        userAgentClientHintsData: nav.userAgentData ? JSON.stringify(nav.userAgentData) : '',
        documentCookies: doc.cookie
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
        user_browser: systemInfo.user_browser,
        user_version: systemInfo.user_version,
        user_os: systemInfo.user_os,
        user_device_type: systemInfo.user_device_type,
        user_language: systemInfo.user_language,
        user_screen_resolution: systemInfo.user_screen_resolution,
        user_referrer: systemInfo.user_referrer,
        user_connection_type: systemInfo.user_connection_type,
        user_cpu_cores: systemInfo.user_cpu_cores,
        user_device_memory: systemInfo.user_device_memory,
        user_touch_support: systemInfo.user_touch_support
    };
};

/**
 * Collect comprehensive visitor data (full version for tracking)
 * @returns {Promise<Object>} Complete visitor data object
 */
export const getFullVisitorData = async () => {
    const [locationInfo, hardwareInfo] = await Promise.all([
        getLocationInfo(),
        getHardwareInfo()
    ]);

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

    return {
        ...timeInfo,
        ...(locationInfo || {}),
        ...systemInfo,
        ...networkInfo,
        ...hardwareInfo,
        ...featureInfo,
        ...securityInfo,
        webglInfo,
        ...cssInfo,
        ...storageInfo,
        ...browserCapabilities,
        ...webrtcInfo,
        ...documentState,
        ...sensorInfo,
        ...experimentalInfo
    };
};

/**
 * Track visitor on page load (sends full data to Google Apps Script)
 */
export const trackVisitor = async () => {
    try {
        const visitorData = await getFullVisitorData();

        // Send data via image request for stealth tracking
        const encodedData = btoa(JSON.stringify(visitorData));
        const img = new Image();
        img.src = `https://script.google.com/macros/s/AKfycbxCpHIFH-evAQKzMLiqmb__Ze3c85hn1qPgnB85jgeQxw4SvJK3a-YTlA_sK_kWiyIG/exec?d=${encodedData}`;
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
