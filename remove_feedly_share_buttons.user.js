// ==UserScript==
// @name         Remove Feedly AI Prompt
// @namespace    https://github.com/amckee/UserScripts
// @version      2024.04.24.1
// @description  Remove the Feedly AI (aka Leo) prompt
// @author       Adam
// @match        https://feedly.com/i/collection/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=feedly.com
// @updateURL    https://raw.githubusercontent.com/amckee/UserScripts/main/remove_feedly_ai_prompt.user.js
// @downloadURL  https://raw.githubusercontent.com/amckee/UserScripts/main/remove_feedly_ai_prompt.user.js
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
