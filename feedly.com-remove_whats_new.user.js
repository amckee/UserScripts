// ==UserScript==
// @name         Remove Feedly "What's New" Popup
// @namespace    https://github.com/amckee/UserScripts
// @version      2026.04.15.1
// @description  Remove the Feedly "what's new" popup
// @author       Adam
// @match        https://feedly.com/i/collection/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=feedly.com
// @updateURL    https://raw.githubusercontent.com/amckee/UserScripts/main/feedly.com-remove_whats_new.user.js
// @downloadURL  https://raw.githubusercontent.com/amckee/UserScripts/main/feedly.com-remove_whats_new.user.js
// @supportURL   https://github.com/amckee/UserScripts/issues
// @grant        none
// @run-at       document-end
// ==/UserScript==

function removeElements() {
    'use strict';

    // Ditch the Upgrade buttons
    document.querySelector("div[id='AppDockedPopups']")?.remove();

    // They seem to have renamed it
    document.querySelectorAll("div[class='AppDockedPopups']")?.forEach(function(currentValue){ currentValue.remove(); });

}

setInterval(removeElements, 1000);
