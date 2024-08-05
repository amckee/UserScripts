// ==UserScript==
// @name        Show Total Halts on nasdaqtrader.com
// @version     2024.08.05.2
// @namespace   https://github.com/amckee/UserScripts
// @description Shows total number of halted trades on nasdaqtrader.com
// @author      Adam McKee
// @include     http*://*.nasdaqtrader.com/Trader.aspx*
// @updateURL   https://raw.githubusercontent.com/amckee/UserScripts/main/nasdaqtrader.com-show_total_halts.user.js
// @downloadURL https://raw.githubusercontent.com/amckee/UserScripts/main/nasdaqtrader.com-show_total_halts.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// ==/UserScript==

function showTotalHalts() {
    // load entire table
    var halts = document.querySelector("#divTradeHaltResults > div > table > tbody > tr:nth-child(1)");

    // filter halts for todays halts only and count 'em
    var today = new Date();
}

setInterval(showTotalHalts, 1000);