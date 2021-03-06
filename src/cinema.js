/**
 * Created by oleg on 21/02/2017.
 */
"use strict";
class Cinema {
    constructor(data) {
        this._data = data;
    }

    get availableFilms() {
        return this._data.availableFilms;
    }

    get capacity() {
        return this._data.capacity;
    }

    get prices() {
        return this._data.prices;
    }

    askTickets(count , film) {
        let tickets = [];

        if (!film) film = this.availableFilms[0];
        if (count > this.capacity) count = this.capacity;

        let filmId = this.availableFilms.indexOf(film);

        if (filmId != -1) {
            for (let i=0; i++<count;) {
                tickets.push(new Ticket({
                    film: film,
                    price: this.prices[filmId]
                }));
            }
        }

        return tickets;
    }
}
module.exports = Cinema;

class Ticket {
    constructor(data) {
        this._data = data;
    }

    get film() {

       // return "Doctor House";
        return this._data.film;
    }
    get price() {
        return this._data.price;
    }
}
module.exports = Ticket;
