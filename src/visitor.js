"use strict";

class Visitor {
    constructor() {
        this._cocktaiName = "";
        this._drunkLevelInPercents = 0;
    }

    get cocktail() {
        return this._cocktaiName;
    }

    take(cocktailName) {
        this._cocktaiName = cocktailName;
    }

    drink() {
        this._drunkLevelInPercents++;
    }

    get drunkLevelInPercents() {
        return this._drunkLevelInPercents;
    }
}

module.exports = Visitor;