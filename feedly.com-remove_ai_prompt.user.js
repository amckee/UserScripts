// ==UserScript==
// @name         Remove Feedly AI Prompt
// @namespace    https://github.com/amckee/UserScripts
// @version      2024.09.26.1
// @description  Remove the Feedly AI (aka Leo) prompt
// @author       Adam
// @match        https://feedly.com/i/collection/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=feedly.com
// @updateURL    https://raw.githubusercontent.com/amckee/UserScripts/main/feedly.com-remove_ai_prompt.user.js
// @downloadURL  https://raw.githubusercontent.com/amckee/UserScripts/main/feedly.com-remove_ai_prompt.user.js
// @supportURL   https://github.com/amckee/UserScripts/issues
// @grant        none
// @run-at       document-end
// ==/UserScript==

function removeElements() {
    'use strict';

    // Ditch the annoyances
    document.querySelector(".LeoUpgradePrompt").remove();
}

setInterval(removeElements, 1000);
