// ==UserScript==
// @name        Remove Cookie Agreement Boxes
// @version     2026.05.08.1
// @namespace   https://github.com/amckee/UserScripts
// @description Removes the super annoying 'Elevated investment risk' boxes.
// @author      Adam McKee
// @match     https*://*.robinhood.com/*
// @updateURL   https://github.com/amckee/UserScripts/raw/main/robinhood.com-remove_annoying_boxes.user.js
// @downloadURL https://github.com/amckee/UserScripts/raw/main/robinhood.com-remove_annoying_boxes.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// @run-at      document-end
// ==/UserScript==

function removePopups() {
    document.querySelector("#react_root > div:nth-child(3) > div.web-app-emotion-cache-du3o6u")?.remove();
}

setInterval(removePopups, 1000);
