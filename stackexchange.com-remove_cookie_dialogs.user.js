// ==UserScript==
// @name        Remove Cookie Agreement Boxes
// @version     2024.02.14.1
// @namespace   https://github.com/amckee/UserScripts
// @description Removes the super annoying 'we use cookies' boxes, at least as many as I can.
// @author      Adam McKee
// @match     http*://*.stackexchange.com/*
// @match     http*://stackoverflow.com/*
// @match     http*://serverfault.com/*
// @match     http*://askubuntu.com/*
// @match     http*://superuser.com/*
// @updateURL   https://github.com/amckee/UserScripts/raw/main/stackexchange.com-remove_cookie_dialogs.user.js
// @downloadURL https://github.com/amckee/UserScripts/raw/main/stackexchange.com-remove_cookie_.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// @run-at      document-end
// ==/UserScript==

function removePopups() {
    // videos
    document.querySelector("body > div.ff-sans.ps-fixed.z-nav-fixed.ws4.sm\\:w-auto.p32.sm\\:p16.bg-black-750.fc-white.bar-lg.b16.l16.r16.js-consent-banner")?.remove();
    // if(popup){
    //     console.log("Removing cache agreement box");
    //     popup.remove();
    // } else {
    //     console.log("No dialog found");
    // }
}

setInterval(removePopups, 1000);