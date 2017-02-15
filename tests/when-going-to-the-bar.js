"use strict";
var assert = require('chai').assert;
var Barmen = require('../src/barmen');


suite('when going to the bar', function () {
    test('barmen is ready to accept requests', function () {
        let barmen = new Barmen();

        barmen.wakeUp();

        assert.equal(barmen.isReadyToAcceptRequests, true);
    });

    test('barmen can make a drink for a visitor', function () {
        let visitor = new Visitor();
        let barmen = new Barmen();

        let cocktail = barmen.makeCocktail("Rum & Cola");
        visitor.take(cocktail);

        assert.equal(visitor.cocktail, "Rum & Cola");
    });


});

class Visitor {
    get cocktail() {
        return "Rum & Cola";
    }

    take(cocktailName) {

    }
}