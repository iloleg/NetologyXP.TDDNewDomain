"use strict";
var assert = require('chai').assert;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');


suite('when going to the bar', function () {
    let barmen = {};

    setup(function () {
        barmen = new Barmen();
        barmen.wakeUp();
    });

    test('barmen is ready to accept requests', function () {
        let barmen = new Barmen();

        barmen.wakeUp();

        assert.equal(barmen.isReadyToAcceptRequests, true);
    });

    test('barmen can make a drink for a visitor', function () {
        let visitor = new Visitor();

        let cocktail = barmen.makeCocktail("Rum & Cola");
        visitor.take(cocktail);

        assert.equal(visitor.cocktail, "Rum & Cola");
    });

    test('barmen can make a specific cocktail for a visitor', function () {
        let visitor = new Visitor();

        let cocktail = barmen.makeCocktail("Tequila Sunrise");
        visitor.take(cocktail);

        assert.equal(visitor.cocktail, "Tequila Sunrise");
    });


});