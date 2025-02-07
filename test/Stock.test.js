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

describe("When I try to add an article in the stock", () => {
    test("with a laptop with a quantity of 2, I should get the quantity + 2", () => {
      const stock = new Stock();
      stock.addArticleToStock(0, 2);
      expect(stock.articles[0].quantity).toBe(12);
    });

    test("with a laptop with a quantity of 0, I should get the same quantity", () => {
      const stock = new Stock();
      stock.addArticleToStock(0, 0);
      expect(stock.articles[0].quantity).toBe(10);
    });

    test("with a laptop with a string id, I should get an error", () => {
        const stock = new Stock();
        expect(() => stock.addArticleToStock("10", 2)).toThrow("id must be an integer");
    });
    test("with a laptop with a decimal id, I should get an error", () => {
        const stock = new Stock();
        expect(() => stock.addArticleToStock(2.2, 2)).toThrow("id must be an integer");
    });
    
    test("with a laptop with a quantity of 2.5, I should get an error", () => {
        const stock = new Stock();
        expect(() => stock.addArticleToStock(0, 2.5)).toThrow("Quantity must be an integer");
    });

    test("with a laptop with a quantity of -2, I should get an error", () => {
      const stock = new Stock();
      expect(() => stock.addArticleToStock(0, -2)).toThrow("Quantity must be positive");
    });

    test("with a non existent article, I should get an error", () => {
      const stock = new Stock();
      expect(() => stock.addArticleToStock(10, 2)).toThrow("Must be a valid article");
    });
});
