/**
 * Created by oleg on 21/02/2017.
 */
"use strict";
var assert = require('chai').assert;
var Cinema = require('../src/cinema');


suite("cinema tests", function () {

    suite("customer ask cashier some tickets to film", function () {

        let cinema;

        setup(function () {
            cinema = new Cinema({});
        });

        test("customer ask one ticket", function () {
            let count = 1;
            let tickets = cinema.askTickets(count);
            assert.equal(tickets.length, 1);
        });

        test("customer ask 5 tickets", function () {
            let count = 5;
            let tickets = cinema.askTickets(count);
            assert.equal(tickets.length, 5);
        });

        test("customer ask tickets to Doctor House", function() {
            let count = 3;
            let film = "Doctor House";
            let tickets = cinema.askTickets(count, film);

            for (let i in tickets) {
                assert.equal(tickets[i].film, film);
            }
        });


        teardown(function () {

        });

    });

});

