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
            cinema = new Cinema({
                availableFilms: ["Doctor House", "The 100"],
                capacity: 295,
                prices: [8, 10],
            });
        });


        suite("parameter film is not important", function () {
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

        });

        suite("available films", function () {

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
        });
        suite("unavailable films", function () {

            test("customer ask tickets to unavailable film FBI", function () {
                let count = 5;
                let film = "FBI";
                let tickets = cinema.askTickets(count, film);
                assert.equal(tickets.length, 0);
            });

        });

        suite("price for films", function () {
            test("customer ask 300 tickets - more then cinema capacity", function () {

                let count = 300;
                let film = "Doctor House";
                let tickets = cinema.askTickets(count, film);
                assert.equal(tickets.length, cinema.capacity);

            });


            test("price of 4 tickets is 40 usd", function () {
                let count = 4;
                let tickets = cinema.askTickets(count);

                let sum = 0;
                for (let i in tickets) {
                    sum += tickets[i].price;
                }

                assert.equal(sum, 40);
            });


            test("price of 10 tickets to The 100 is 80 usd", function() {
                let count = 10;
                let film = "The 100";
                let tickets = cinema.askTickets(count, film);

                let sum = 0;
                for (let i in tickets) {
                    sum += tickets[i].price;
                }

                assert.equal(sum, 80);
            });


        });

        teardown(function () {

        });

    });

});

