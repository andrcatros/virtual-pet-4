const Pet = require("../src/pet");

describe("constructor", () => {
    let pet;
    let config;
    beforeEach(() => {
        config = {
            name: "Fido",
            age: 0,
            hunger: 0,
            fitness: 10,
        };
        pet = new Pet(config);
    });

    describe("constructor function", () => {
        it("returns an object", () => {
            expect(new Pet("Fido")).toBeInstanceOf(Object);
        });

        it("has an initial age of 0", () => {
            expect(pet.age).toEqual(config.age);
        });
        
        it("returns name of pet", () => {
            expect(pet.name).toBe(config.name);
        });
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
});