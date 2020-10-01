import { validateCharacter } from "../src/validateCharacter";


describe("Testando o validateCharacter", () => {

// a)
    test("Should return false for empty name", () => {
        const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
        });

        expect(result).toBe(false);
    });

// f)
    test("Should return false for life 0", () => {
        const result = validateCharacter({
        name: "Scorpion",
        life: 0,
        strength: 300,
        defense: 500,
        });

        expect(result).toBe(false);
    });

// g)

    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
        name: "Scorpion",
        life: 1500,
        strength: 300,
        defense: 500,
        });

        expect(result).toBe(true);
    });
});