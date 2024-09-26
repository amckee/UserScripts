// ==UserScript==
// @name         Clean Up Github.com
// @namespace    https://github.com/amckee/UserScripts
// @version      2024.09.26.1
// @description  Remove various advertisements from Github pages
// @author       Adam
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @updateURL    https://raw.githubusercontent.com/amckee/UserScripts/main/github.com-remove_ads.user.js
// @downloadURL  https://raw.githubusercontent.com/amckee/UserScripts/main/github.com-remove_ads.user.js
// @supportURL   https://github.com/amckee/UserScripts/issues
// @grant        none
// @run-at       document-end
// ==/UserScript==

function removeElements() {
    'use strict';

    // Ditch the various annoyances
    document.querySelectorAll("div[class='js-notice']")?.forEach(function(currentValue){ currentValue.remove(); });
}

setInterval(removeElements, 1000);
