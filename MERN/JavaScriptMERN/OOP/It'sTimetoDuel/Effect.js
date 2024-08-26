const Unit = require('./Unit');

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude;
            console.log(`${this.name} played on ${target.name}, ${this.text}. ${target.name}'s ${this.stat} is now ${target[this.stat]}`);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

module.exports = Effect;