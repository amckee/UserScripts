// ==UserScript==
// @name        Remove Cookie Agreement Boxes
// @version     2021.06.01.3
// @namespace   https://github.com/amckee/UserScripts
// @description Removes the super annoying 'we use cookies' boxes, at least as many as I can.
// @author      Adam McKee
// @include     http*://*.stackexchange.com/*
// @include     http*://stackoverflow.com/*
// @include     http*://serverfault.com/*
// @include     http*://askubuntu.com/*
// @include     http*://superuser.com/*
// @updateURL   https://github.com/amckee/UserScripts/raw/main/removecookiedialogs.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// @run-at      document-end
// ==/UserScript==

setTimeout(function() {
    // videos
    var el = document.querySelector("body > div.ff-sans.ps-fixed.z-nav-fixed.ws4.sm\\:w-auto.p32.sm\\:p16.bg-black-750.fc-white.bar-lg.b16.l16.r16.js-consent-banner");
    if( el != null ){
        console.log("removing cache agreement box");
        el.remove();
    } else {
        console.log("no dialog found");
    }
}, 1000);