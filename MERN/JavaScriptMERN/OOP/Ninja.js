class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 30;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hala");

ninja1.sayName().showStats().drinkSake().showStats();