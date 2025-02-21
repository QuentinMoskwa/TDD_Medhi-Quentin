const Article = require("./Article");
class Stock {
  articles = [
    new Article(0, "Laptop", 10),
    new Article(1, "Mouse", 25),
    new Article(2, "Keyboard", 15),
    new Article(3, "Monitor", 8),
    new Article(4, "USB Cable", 30),
    new Article(5, "Headphones", 12),
    new Article(6, "Webcam", 9),
    new Article(7, "Printer", 5),
    new Article(8, "Router", 14),
    new Article(9, "External HDD", 7),
  ];

  addArticleToStock(idOfArticle, quantity) {
    if (quantity == 0) {
      throw new Error("quantity must not be 0");
    }
    if (Number.isInteger(idOfArticle) === false) {
      throw new Error("id must be an integer");
    }
    if (Number.isInteger(quantity) === false) {
      throw new Error("Quantity must be an integer");
    }
    if (quantity < 0) {
      throw new Error("Quantity must be positive");
    }
    if (!(this.articles[idOfArticle] instanceof Article)) {
      throw new Error("Must be a valid article");
    }
    return (this.articles[idOfArticle].quantity += quantity);
  }
  
  showArticleQuantity(idOfArticle){
    if(!this.checkIfIsInt(idOfArticle)){
      throw new Error("Invalid Id");
    }

    this.checkIfArticleExist(idOfArticle);

    return this.articles[idOfArticle].quantity;
  }

  removeStockArticle(idOfArticle, quantity){
    if(!this.checkIfIsInt(idOfArticle)){
      throw new Error("Id should be an Int");
    }

    if(!this.checkIfIsInt(quantity)){
      throw new Error("Quantity should be an Int");
    }

    if(quantity <= 0){
      throw new Error("Quantity should be > 0");
    }

    if(!this.checkIfPositive(idOfArticle)){
      throw new Error("Id should be > 0");
    }

    this.checkIfArticleExist(idOfArticle);

    if(quantity > this.articles[idOfArticle].quantity){
      throw new Error("Invalid quantity");
    }

    return this.articles[idOfArticle].quantity -= quantity;

  }
  
  checkIfArticleExist(idOfArticle){
    if(!this.articles.some(item => item.id === idOfArticle)){
      throw new Error("Article doesn't exist");
    }
  }

  checkIfIsInt(number){
    return Number.isInteger(number);
  }

  checkIfPositive(number){
    return number >= 0;
  }

  showReport()
  {
    return (this.articles);
  }
}

module.exports = Stock;

