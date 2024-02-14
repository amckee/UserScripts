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
    document.getElementById("clarify-box")?.style.display = 'none';

    // search results
    document.getElementsByTagName("ytd-clarification-renderer")?.remove();
    // for (var i = 0; i < popup.length; i++) {
    //     console.log("removing ytd-clarification-renderer in loop");
    //     popup[i].remove();
    // }
    document.getElementsByTagName("ytd-info-panel-container-renderer")?.style.display[0] = 'none';
    // for (i = 0; i < popup.length; i++) {
    //     console.log("ytd-info-panel-container-renderer in loop");
    //     popup[0].style.display = 'none';
    //     popup[0].remove();
    // }

    // remove live chat
    document.querySelector("body > yt-live-chat-app")?.remove();
    // if(popup){
    //     console.log("Removing live chat");
    //     popup.remove();
    // } else {
    //     console.log("Did not find live chat");
    // }

    // remove chat
    document.querySelector("#chat").remove()?.remove();
    // if(popup){
    //     console.log("Removing #chat");
    //     popup.remove();
    // } else {
    //     console.log("Did not find #chat");
    // }
}

setInterval(removePopups, 1000);