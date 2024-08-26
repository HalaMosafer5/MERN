class Unit {
  constructor( name,cost,power,resilience ) {
      this.name = name;
      this.cost = cost;
      this.power = power;
      this.resilience = resilience;
  }

  attack(target) {
      if (target instanceof Unit) {
          target.resilience -= this.power;
          console.log(`${this.name} attacked ${target.name}, reducing their resilience to ${target.resilience}`);
      } else {
          throw new Error("Target must be a unit!");
      }
  }
}

module.exports = Unit;