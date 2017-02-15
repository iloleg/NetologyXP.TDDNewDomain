"use strict";

class Visitor {
    constructor() {
        this._cocktaiName = "";
    }

    get cocktail() {
        return this._cocktaiName;
    }

    take(cocktailName) {
        this._cocktaiName = cocktailName;
    }

    drink() {

    }

    get isABitDrunk() {
        return true;
    }
}

module.exports = Visitor;