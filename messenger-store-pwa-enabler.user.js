// ==UserScript==
// @name         Force enable PWA for Messenger.com installed via Microsoft Store
// @namespace    https://github.com/NightMean/Messenger-Store-PWA-Enabler
// @version      2025-12-15
// @description  Force enable PWA mode by removing the __pwa URL parameter
// @author       NightMean
// @match        https://*.messenger.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-start
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/NightMean/Messenger-Store-PWA-Enabler/main/messenger-store-pwa-enabler.user.js
// @updateURL    https://raw.githubusercontent.com/NightMean/Messenger-Store-PWA-Enabler/main/messenger-store-pwa-enabler.user.js
// ==/UserScript==

(function() {
    'use strict';

    const url = new URL(location);
    const params = new URLSearchParams(url.search);
    if (params.get('__pwa') === '1') {
        params.set('__pwa', 0);
        url.search = params;
        location = url;
    }
})();
