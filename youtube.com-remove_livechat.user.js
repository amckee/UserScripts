// ==UserScript==
// @name        Remove Youtube Live Chat
// @version      2024.09.26.1
// @namespace   https://github.com/amckee/UserScripts
// @description Removes the livechat box
// @author      Adam McKee
// @match     http*://*youtube.com/*
// @updateURL   https://raw.githubusercontent.com/amckee/UserScripts/main/youtube.com-remove_livechat.user.js
// @downloadURL https://raw.githubusercontent.com/amckee/UserScripts/main/youtube.com-remove_livechat.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// @run-at      document-end
// ==/UserScript==

function removePopups() {
    // remove the live chat element
    document.getElementById("chat-container")?.remove();

    // remove the live chat parent element for reflow
    document.getElementById("panels-full-bleed-container")?.remove();
}

setInterval(removePopups, 1000);