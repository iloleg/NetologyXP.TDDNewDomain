/**
 * Created by oleg on 21/02/2017.
 */
"use strict";
var assert = require('chai').assert;
var Cinema = require('../src/cinema');


suite("cinema tests", function() {

    suite("customer ask cashier some tickets to film", function() {

        let cinema;

        setup(function() {
            cinema = new Cinema({});
        });

        test("customer ask one ticket", function() {
            let count = 1;
            let tickets = cinema.askTickets(count);
            assert.equal(tickets.length, 1);
        });

        teardown(function(){

        });

    });

});
