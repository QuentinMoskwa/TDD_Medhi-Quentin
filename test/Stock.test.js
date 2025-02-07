const Article = require("../src/Article");
const Stock = require("../src/Stock");

describe("When I try to show my quantity", () => {
    test('with id, I should get quantity', () => {
        const stock = new Stock()
        expect(stock.showArticleQuantity(2)).toBe(15);
    });

    test("with id that don't exist, I should get an error", () => {
        const stock = new Stock()
        expect(() => stock.showArticleQuantity(100)).toThrow("Article doesn't exist");

    });

    test("with something other than int, I should get an error", () => {
        const stock = new Stock()
        expect(() => stock.showArticleQuantity("string")).toThrow("Invalid Id");
    });
});