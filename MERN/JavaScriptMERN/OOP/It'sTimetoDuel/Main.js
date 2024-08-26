const Unit = require('./Unit');
const Effect = require('./Effect');

//Make instances of Units
const redBeltNinja = new Unit("Red Belt Ninja");
const blackBeltNinja = new Unit("Black Belt Ninja");

//Make an instance of Hard Algorithm
const hardAlgorithm = new Effect("Hard Algorithm");
hardAlgorithm.play(redBeltNinja);

//Make an instance Unhandled Promise Rejection
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection");
unhandledPromiseRejection.play(redBeltNinja);

//Make an instance of Pair Programming
const pairProgramming = new Effect("Pair Programming");
pairProgramming.play(redBeltNinja);

//Red Belt Ninja uses the attack method on Black Belt Ninja
redBeltNinja.attack(blackBeltNinja);