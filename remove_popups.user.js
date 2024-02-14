// ==UserScript==
// @name         Fix Robinhood
// @namespace    https://github.com/amckee/UserScripts
// @version      2024.02.02.2
// @description  Make Robinhood's website actually usable by removing the Shortcut and Alerts popups
// @author       Adam
// @match        https://robinhood.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=robinhood.com
// @updateURL    https://raw.githubusercontent.com/amckee/UserScripts/main/remove_popups.user.js
// @downloadURL  https://raw.githubusercontent.com/amckee/UserScripts/main/remove_popups.user.js
// @supportURL   https://github.com/amckee/UserScripts/issues
// @grant        none
// @run-at       document-end
// ==/UserScript==

function removePopups() {
    'use strict';

    // Ditch the stupid keyboard shortcut popup
    document.querySelector("div[id='popover-first-time-shortcuts']")?.remove();

    // Ditch the stupid indicator alerts popup
    document.querySelector("div[role='tooltip']")?.remove();
}

setInterval(removePopups, 1000);
