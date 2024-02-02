// ==UserScript==
// @name        Remove Youtube Fact Boxes
// @version     2024.02.02.1
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
    var popup = document.getElementById("clarify-box");
    if(popup){
        console.log("Removing clarify-box");
        popup.style.display = 'none';
        popup.remove();
    } else {
        console.log("Did not find clarify-box");
    }

    // search results
    popup = document.getElementsByTagName("ytd-clarification-renderer");
    for (var i = 0; i < popup.length; i++) {
        console.log("removing ytd-clarification-renderer in loop");
        popup[i].remove();
    }
    popup = document.getElementsByTagName("ytd-info-panel-container-renderer");
    for (i = 0; i < popup.length; i++) {
        console.log("ytd-info-panel-container-renderer in loop");
        popup[0].style.display = 'none';
        popup[0].remove();
    }

    // remove live chat
    popup = document.querySelector("body > yt-live-chat-app");
    if(popup){
        console.log("Removing live chat");
        popup.remove();
    } else {
        console.log("Did not find live chat");
    }

    // remove chat
    popup = document.querySelector("#chat").remove();
    if(popup){
        console.log("Removing #chat");
        popup.remove();
    } else {
        console.log("Did not find #chat");
    }
}

setInterval(removePopups, 1000);