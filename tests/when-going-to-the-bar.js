"use strict";
var assert = require('chai').assert;
var Barmen = require('../src/barmen');


suite('when going to the bar', function () {
    test('barmen is ready to accept requests', function () {
        let barmen = new Barmen();

        barmen.wakeUp();

        assert.equal(barmen.isReadyToAcceptRequests, true);
    });
});