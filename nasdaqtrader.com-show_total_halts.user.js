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

(function() {
    'use strict';

    function showTotalHalts() {
        // load entire table
        var haltsTable = document.querySelector("#divTradeHaltResults > div > table");

        // filter halts for todays halts only and count 'em
        var today = new Date();
        var todayDate = today.toLocaleDateString();
        var totalHalts = 0;

        for (var i = 1; i < haltsTable.rows.length; i++) {
            var haltDate = haltsTable.rows[i].cells[0].textContent.trim();
            if (haltDate === todayDate) {
                totalHalts++;
            }
        }

        // display the total number of halted trades
        var totalHaltsElement = document.createElement("div");
        totalHaltsElement.textContent = "Total Halts Today: " + totalHalts;
        document.body.appendChild(totalHaltsElement);
    }

    setInterval(showTotalHalts, 1000);
})();