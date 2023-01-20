const { isEmpty } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("nameValid", () => {
    test("should return false as the gamerTag is not bigger than 8", () => {
        const result = "alex";
        expect(result).toBe(false);
    });

    test("should return false as the gamerTag does not contain a special caractere", () => {
        const result = isEmpty("");
        expect(result).toBe(false);
    });

});