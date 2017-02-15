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
}

module.exports = Visitor;