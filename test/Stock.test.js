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

describe("When I try to remove an article in the stock", () => {
    test("with an id and quantity, I should remove the article ", () => {
      const stock = new Stock();
      stock.removeStockArticle(0, 2);
      expect(stock.articles[0].quantity).toBe(8);
    });

    test("with an id that doesn't exist, I should get error", () => {
      const stock = new Stock();
      expect(() => stock.removeStockArticle(100, 2)).toThrow("Article doesn't exist");
    });

    test("with a quantity that isn't an int, I should get error", () => {
        const stock = new Stock();
        expect(() => stock.removeStockArticle(1, "string")).toThrow("Quantity should be an Int");
    });

    test("with an id that isn't an int, I should get error", () => {
        const stock = new Stock();
        expect(() => stock.removeStockArticle("string", 2)).toThrow("Id should be an Int");
    });

    test("with a quantity < 0, I should get error", () => {
        const stock = new Stock();
        expect(() => stock.removeStockArticle(1, -3)).toThrow("Quantity should be > 0");
    });

    test("with an id < 0, I should get error", () => {
        const stock = new Stock();
        expect(() => stock.removeStockArticle(-7, 2)).toThrow("Id should be > 0");
    });

    test("with a quantity > than the quantity in stock, I should get error", () => {
        const stock = new Stock();
        expect(() => stock.removeStockArticle(0, 200)).toThrow("Invalid quantity");
    });


    test("with a quantity  = 0, I should get error", () => {
        const stock = new Stock();
        expect(() => stock.removeStockArticle(0, 0)).toThrow("Quantity should be > 0");
    });
});

