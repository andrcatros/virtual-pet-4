const Pet = require("../src/pet");

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
});

describe("Fido exists", () => {
    it("sets name of pet", () => {
        const pet = new Pet("Fido");
        expect(pet.name).toEqual("Fido");
    })
});