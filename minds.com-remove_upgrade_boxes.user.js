// ==UserScript==
// @name        Remove Minds.com Upgrade Boxes
// @version     2024.10.04.1
// @namespace   https://github.com/amckee/UserScripts
// @description The 'upgrade' boxes are annoying and take up too much space. This removes them, and cleans up the site a bit.
// @author      Adam McKee
// @match       http*://*.minds.com/newsfeed/*
// @updateURL   https://raw.githubusercontent.com/amckee/UserScripts/main/minds.com-remove_upgrade_boxes.user.js
// @downloadURL https://raw.githubusercontent.com/amckee/UserScripts/main/minds.com-remove_upgrade_boxes.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// @run-at      document-end
// ==/UserScript==

(function() {
    'use strict';

    function removeUpgradeBoxes() {
        // load entire table
        var el = document.querySelector("body > m-app > m-page > m-body > div > div > m-newsfeed > div > div.m-newsfeed--feed.m-pageLayout__pane--main > m-newsfeed__gql > div > div > m-feednotice__switch.m-feedNoticeOutlet__container--visible.m-feedNoticeOutlet__container--topPosition.ng-star-inserted");

        if (el) {
            el.remove();
        }
    }

    setInterval(showTotalHalts, 1000);
})();
