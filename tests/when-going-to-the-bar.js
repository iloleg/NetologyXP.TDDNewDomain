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

    let createVisitor = function () {
        return new Visitor();
    };

    suite('and asking for a drink', function () {
        test('barmen can make a drink for a visitor', function () {
            let visitor = createVisitor();

            let cocktail = barmen.makeCocktail("Rum & Cola");
            visitor.take(cocktail);

            assert.equal(visitor.cocktail, "Rum & Cola");
        });

        test('barmen can make a specific cocktail for a visitor', function () {
            let visitor = createVisitor();

            let cocktail = barmen.makeCocktail("Tequila Sunrise");
            visitor.take(cocktail);

            assert.equal(visitor.cocktail, "Tequila Sunrise");
        });

        test('visitor becomes a bit drunk after drinking cocktail', function () {
            let visitor = createVisitor();
            let cocktail = barmen.makeCocktail("Beer");
            visitor.take(cocktail);

            visitor.drink();

            assert.equal(visitor.isABitDrunk, true);
        });

        test('visitor becomes more drunk after drinking second cocktail', function () {
            let visitor = createVisitor();
            let firstCocktail = barmen.makeCocktail("Beer");
            let secondCocktail = barmen.makeCocktail("Beer");
            visitor.take(firstCocktail);
            visitor.drink();
            visitor.take(secondCocktail);

            visitor.drink();

            assert.equal(visitor.drunkLevelInPercents, 1 + 1);
        });
    });
});