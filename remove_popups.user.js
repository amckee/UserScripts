// ==UserScript==
// @name         Fix Robinhood
// @namespace    https://github.com/amckee/UserScripts
// @version      2024.01.19.01
// @description  Make Robinhood's website actually usable by removing the Shortcut and Alerts popups
// @author       Adam
// @match        https://robinhood.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=robinhood.com
// @updateURL    https://raw.githubusercontent.com/amckee/UserScripts/main/remove_popups.user.js
// @supportURL   https://github.com/amckee/UserScripts/issues
// @grant        none
// @run-at       document-end
// ==/UserScript==

function removePopups() {
    'use strict';
    var popup = null;

    // Ditch the stupid keyboard shortcut popup
    popup = document.querySelector("div[id='popover-first-time-shortcuts']");
    if(popup){
        popup.remove();
    }

    // Ditch the stupid indicator alerts popup
    popup = document.querySelector("div[role='tooltip']");
    if( popup != null ){
        popup.remove();
    }
}

setInterval(removePopups, 1000);
