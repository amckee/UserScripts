// ==UserScript==
// @name        Show Total Halts on nasdaqtrader.com
// @version      2024.09.26.1
// @namespace   https://github.com/amckee/UserScripts
// @description Shows total number of halted trades on nasdaqtrader.com
// @author      Adam McKee
// @match     http*://*.nasdaqtrader.com/Trader.aspx*
// @updateURL   https://raw.githubusercontent.com/amckee/UserScripts/main/nasdaqtrader.com-show_total_halts.user.js
// @downloadURL https://raw.githubusercontent.com/amckee/UserScripts/main/nasdaqtrader.com-show_total_halts.user.js
// @supportURL  https://github.com/amckee/UserScripts/issues
// @run-at      document-end
// ==/UserScript==

(function() {
    'use strict';

    console.log( "Running" );

    function showTotalHalts() {
        // load entire table
        var haltsTable = document.querySelector("#divTradeHaltResults > div > table");

        console.log("haltsTable: " + haltsTable);

        // filter halts for todays halts only and count 'em
        var today = new Date();
        var todayDate = today.toLocaleDateString();
        console.log("todayDate: " + todayDate);
        var todaysHalts = 0;

        for (var i = 1; i < haltsTable.rows.length; i++) {
            var haltDate = haltsTable.rows[i].cells[0].textContent.trim();
            if (haltDate === todayDate) {
                todaysHalts++;
            }
        }

        // Add the count to the main page header
        var pageHeader = document.querySelector("#rightWideCOL > h1");
        pageHeader.textContent = todaysHalts + " " + pageHeader.textContent;
    }

    setInterval(showTotalHalts, 1000);
})();
