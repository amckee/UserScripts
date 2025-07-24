// ==UserScript==
// @name         Remove Feedly Upgrade Buttons
// @namespace    https://github.com/amckee/UserScripts
// @version      2025.07.24.1
// @description  Remove the Feedly upgrade buttons
// @author       Adam
// @match        https://feedly.com/i/collection/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=feedly.com
// @updateURL    https://raw.githubusercontent.com/amckee/UserScripts/main/feedly.com-remove_upgrade_buttons.user.js
// @downloadURL  https://raw.githubusercontent.com/amckee/UserScripts/main/feedly.com-remove_upgrade_buttons.user.js
// @supportURL   https://github.com/amckee/UserScripts/issues
// @grant        none
// @run-at       document-end
// ==/UserScript==

function removeElements() {
    'use strict';

    // Ditch the Upgrade buttons
    document.querySelector("div[id='TopHeaderBar']")?.remove();
}

setInterval(removeElements, 1000);
