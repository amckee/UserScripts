// ==UserScript==
// @name        Remove Youtube Fact Boxes
// @version     2024.02.14.1
// @namespace   https://github.com/amckee/UserScripts
// @description Removes the dumbass 'fact' boxes.
// @author      Adam McKee
// @include     http*://*youtube.com/*
// @updateURL   https://raw.githubusercontent.com/amckee/UserScripts/main/remove_fact_boxes.user.js
// @downloadURL https://raw.githubusercontent.com/amckee/UserScripts/main/remove_fact_boxes.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// @run-at      document-end
// ==/UserScript==

function removePopups() {
    // videos
    document.getElementById("chat-container")?.remove();
}

setInterval(removePopups, 1000);