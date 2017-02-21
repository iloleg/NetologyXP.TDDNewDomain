/**
 * Created by oleg on 21/02/2017.
 */
"use strict";
var assert = require('chai').assert;
var  Cinema = require('../src/cinema');


suite("cinema tests", function () {

    suite("customer ask cashier some tickets to film", function () {

        let cinema;

        setup(function () {
            cinema = new Cinema({
                availableFilms: ["Doctor House", "The 100"],
            });
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

        test("customer ask tickets to Doctor House", function () {
            let count = 3;
            let film = "Doctor House";
            let tickets = cinema.askTickets(count, film);

            for (let i in tickets) {
                assert.equal(tickets[i].film, film);
            }
        });

        test("customer ask tickets to The 100", function () {
            let count = 2;
            let film = "The 100";
            let tickets = cinema.askTickets(count, film);

            for (let i in tickets) {
                assert.equal(tickets[i].film, film);
            }
        });

        test("customer ask tickets to unavailable film FBI", function() {
            let count = 5;
            let film = "FBI";
            let tickets = cinema.askTickets(count, film);
            assert.equal(tickets.length, 0);
        });

        teardown(function () {

        });

    });

});

