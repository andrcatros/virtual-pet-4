const Pet = require("../src/pet");

describe("constructor", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet("Fido");
    });

    describe("constructor function", () => {
        it("returns an object", () => {
            expect(new Pet("Fido")).toBeInstanceOf(Object);
        });
        it("has an initial age of 0", () => {
            expect(pet.age).toEqual(0);
        });
        it("returns name of pet", () => {
            expect(pet.name).toBe("Fido");
        });
        it("is alive", () => {
            pet.hunger = 5
            pet.fitness = 3
            pet.age = 2
            expect(pet.isAlive).toBe(true);
        })
    });

    describe("growUp", () => {
        it("increments the age by 1", () => {
            pet.growUp();
            expect(pet.age).toEqual(1);
        });
        it("increases hunger by 5", () => {
            pet.growUp();
            expect(pet.hunger).toBe(5);
        });
        it("decreases fitness by 3", () => {
            pet.growUp();
            expect(pet.fitness).toBe(7);
        });
    });

    describe("walk", () => {
        it("increases fitness by 4", () => {
            pet.fitness = 4;
            pet.walk();

            expect(pet.fitness).toEqual(8);
        });
        it("increases fitness to a maximum value of 10", () => {
            pet.fitness = 8;
            pet.walk();
            expect(pet.fitness).toEqual(10);
        });
    });

    describe("feed", () => {
        it("decreases hunger by 3", () => {
            pet.hunger = 9;
            pet.feed();

            expect(pet.hunger).toEqual(6);
        });
        it("decreases hunger to a minimum value of 0", () => {
            pet.hunger = 1;
            pet.feed();

            expect(pet.hunger).toEqual(0);
        })
        it("throws an error if the pet is not alive", () => {
            pet.age = 30;

            expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
        });
    });

    describe("checkUp", () => {
        it("if fitness is 3 or less, return i need a walk", () => {
            pet.fitness = 1;

            expect(pet.checkUp()).toBe("I need a walk");
        })
        it("if hunger is above 5, return i am hungry", () => {
            pet.hunger = 6;

            expect(pet.checkUp()).toBe("I am hungry");
        })
        it("if pet is hungry and unfit, return i am hungry and need a walk", () => {
            pet.fitness = 2;
            pet.hunger = 9;

            expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
        })
        it("if neither are true, return i feel great", () => {
            pet.fitness = 5;
            pet.hunger = 3;

            expect(pet.checkUp()).toBe("I feel great!");
        });
    });

    describe("chave baby", () => {
        it("has a baby called Spike", () => {
            pet.haveBaby("Spike");
            expect(pet.children[0]).toHaveProperty("name", "Spike");
        });
    });
});