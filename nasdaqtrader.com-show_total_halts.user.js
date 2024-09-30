// ==UserScript==
// @name        Show Total Halts on nasdaqtrader.com
// @version     2024.09.30.8
// @namespace   https://github.com/amckee/UserScripts
// @description Shows total number of halted trades on nasdaqtrader.com
// @author      Adam McKee
// @match       http*://*.nasdaqtrader.com/Trader.aspx*
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

        // console.log("haltsTable: " + haltsTable);

        // filter halts for todays halts only and count 'em
        var todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0); // set to 00:00:00:00 to only compare on date
        var todaysHalts = 0;

        for (var i = 1; i < haltsTable.rows.length; i++) {
            var haltDate = new Date(haltsTable.rows[i].cells[0].textContent.trim());

            console.log("haltDate: " + haltDate);
            console.log("todayDate: " + todayDate);

            if ( haltDate == todayDate ) {
                console.log("Found halt for today. Plus one!");
                todaysHalts++;
                continue;
            }

            // if (haltDate == todayDate) {
            //     console.log("Found halt for today. Plus one!");
            //     todaysHalts++;
            // }
        }

        // Add the count to the main page header
        var pageHeader = document.querySelector("#rightWideCOL > h1");
        pageHeader.textContent = todaysHalts + " Current Trading Halts";
    }

    setInterval(showTotalHalts, 1000);
})();
