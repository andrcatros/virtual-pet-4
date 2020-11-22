const MAX_FITNESS = 10;
const MIN_FITNESS = 0;
const MIN_AGE = 0;
const MIN_HUNGER = 0;

function Pet(config) {
    this.name = config.name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
}

Pet.prototype = {
    growUp: function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    if (this.fitness < MIN_FITNESS) {
        this.fitness = MIN_FITNESS;
        }
    },
    walk: function () {
        if((this.fitness + 4) <= MAX_FITNESS ) {
            this.fitness += 4;
        } else {
            this.fitness = MAX_FITNESS;
        }
    },
    feed: function () {
        if((this.hunger - 3) >= MIN_HUNGER ) {
            this.hunger -= 3;
        } else {
            this.hunger = MIN_HUNGER;
        }
    },
}

module.exports = Pet;