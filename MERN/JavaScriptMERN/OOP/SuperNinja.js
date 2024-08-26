class Ninja {
    constructor(name) {
      this.name = name;
      this.health = 50; 
      this.speed = 3; 
      this.strength = 3; 
    }
  
    sayName() {
      console.log(`My name is ${this.name}`);
    }
  
    showStats() {
      console.log(`Name: ${this.name}`);
      console.log(`Strength: ${this.strength}`);
      console.log(`Speed: ${this.speed}`);
      console.log(`Health: ${this.health}`);
    }

    drinkSake() {
      this.health += 10;
    }
  }
  
  class Sensei extends Ninja {
    constructor(name) {
      super(name);
      this.health = 150; 
      this.speed = 5; 
      this.strength = 5; 
      this.wisdom = 10; 
    }
  
    speakWisdom() {
      this.drinkSake(); 
    }
    showStats() {
      super.showStats(); 
      console.log(`Wisdom: ${this.wisdom}`);
    }
  }
  
  const superSensei = new Sensei("Hala");
  superSensei.speakWisdom();
  superSensei.showStats();
 
  