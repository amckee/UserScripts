// ==UserScript==
// @name         Remove Social Share Buttons
// @namespace    https://github.com/amckee/UserScripts
// @version      2024.04.24.1
// @description  Remove the share buttons
// @author       Adam
// @match        https://feedly.com/i/collection/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=feedly.com
// @updateURL    https://raw.githubusercontent.com/amckee/UserScripts/main/feedly.com-remove_share_buttons.user.js
// @downloadURL  https://raw.githubusercontent.com/amckee/UserScripts/main/feedly.com-remove_share_buttons.user.js
// @supportURL   https://github.com/amckee/UserScripts/issues
// @grant        none
// @run-at       document-end
// ==/UserScript==

function removeElements() {
    'use strict';

    // Ditch the annoyances
    document.querySelectorAll("div[class='EntryToolbar']").forEach(function(el){
        if( el["aria-label"] != 'Save to Board' && el["aria-label"] != 'Mark as Read and Hide' ) {
            el.remove();
        }
    });
}

setInterval(removeElements, 1000);
