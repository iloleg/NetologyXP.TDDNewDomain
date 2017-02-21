/**
 * Created by oleg on 21/02/2017.
 */
"use strict";
class Cinema {
    constructor(data) {
        this._data = data;
    }

    askTickets(count) {
        let tickets = [];
        for (let i = 0; i++ < count;) {
            tickets.push(new Ticket());
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
        return "Doctor House";
    }
}
module.exports = Ticket;
