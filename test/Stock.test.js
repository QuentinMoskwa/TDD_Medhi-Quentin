const Article = require("../src/Article");
const Stock = require("../src/Stock");

// Quand j'essaye d'ajouter un article :
// Si j'ajoute 2x laptop(id:0) alors on ajoute 2 laptop dans le stock.
// Si j'ajoute 0x laptop(id:0) alors il ne se passe rien.
// Si j'ajoute un autre chose que la quantité d'un article alors il m'est retourné une erreur.
// Si j'ajoute une valeur négative de laptop alors il m'est retourné une erreur.
// Si j'ajoute une valeur décimale de laptop alors il m'est retourné une erreur.
// Si j'ajoute un article qui n'existe pas alors il m'est retourné une erreur.
// Si j'ajoute un article qui n'est pas du bon type alors il m'est retourné une erreur.

// addArticleToStock(idOfArticle, quantity);


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
