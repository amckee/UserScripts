// ==UserScript==
// @name        Remove Youtube Live Chat
// @version     2024.05.23.1
// @namespace   https://github.com/amckee/UserScripts
// @description Removes the livechat box
// @author      Adam McKee
// @include     http*://*youtube.com/*
// @updateURL   https://raw.githubusercontent.com/amckee/UserScripts/main/remove_youtube_livechat.user.js
// @downloadURL https://raw.githubusercontent.com/amckee/UserScripts/main/remove_youtube_livechat.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// @run-at      document-end
// ==/UserScript==

function removePopups() {
    // videos
    document.getElementById("chat-container")?.remove();
}

setInterval(removePopups, 1000);