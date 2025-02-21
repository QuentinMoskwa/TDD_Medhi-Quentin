const Article = require("./Article");
const Movement = require("./Movement");
const fs = require('fs');
const path = require('path');

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
    this.checkQtt(quantity);
    this.checkIdIsInt(idOfArticle);
    this.checkQttIsInt(quantity);
    this.checkIfQttIsPositive(quantity);
    if (!(this.articles[idOfArticle] instanceof Article)) {
      throw new Error("Must be a valid article");
    }
    return (this.articles[idOfArticle].quantity += quantity);
  }
  
  showArticleQuantity(idOfArticle){
    this.checkIdIsInt(idOfArticle);
    this.checkIfArticleExist(idOfArticle);

    return this.articles[idOfArticle].quantity;
  }

  removeStockArticle(idOfArticle, quantity){
    this.checkIdIsInt(idOfArticle);
    this.checkQttIsInt(quantity);
    this.checkQtt(quantity);
    this.checkIfQttIsPositive(quantity);
    this.checkIfIdPositive(idOfArticle);
    this.checkIfArticleExist(idOfArticle);

    if (quantity > this.articles[idOfArticle].quantity) {
      throw new Error("Invalid quantity");
    }

    let result = this.articles[idOfArticle].quantity -= quantity;

    this.notification(this.articles[idOfArticle].quantity);

    return result
  }

  checkIfArticleExist(idOfArticle) {
    if (!this.articles.some((item) => item.id === idOfArticle)) {
      throw new Error("Article doesn't exist");
    }
  }

  checkIfIsInt(number) {
    return Number.isInteger(number);
  }

  checkIfPositive(number) {
    return number >= 0;
  }

  showReport() {
    return this.articles;
  }

  addMovement(articleId, quantity, type) {
    this.checkIdIsInt(articleId);
    this.checkQttIsInt(quantity);
    this.checkIfQttIsPositive(quantity);
    this.checkIfIdPositive(articleId);
    this.checkIfArticleExist(articleId);

    if (type !== "add" && type !== "remove") {
      throw new Error("Invalid type");
    }

    let newMovement = null;

    if (type === "add") {
      newMovement = new Movement(1, "add", this.articles[articleId], "01/01/2025 12:00:00", quantity);
    }
    else {
      newMovement = new Movement(1, "remove", this.articles[articleId], "01/01/2025 12:00:00", quantity);
    }

    if(newMovement){
      this.logMovementToFile(newMovement);
    }

    return newMovement;
  }

  generateDate() {
    const now = new Date();
    const localString = now.toLocaleString(); // Local time
    return(localString);
  }


  notification(quantity){
    const msg = "La quantité d'article est faible";
    if(quantity < 5){
      console.log(msg);
    }
  }

  checkIdIsInt(id) {
    if (!this.checkIfIsInt(id)) {
      throw new Error("Id should be an Int");
    }
  }

  checkQttIsInt(qtt) {
    if (!this.checkIfIsInt(qtt)) {
      throw new Error("Quantity should be an Int");
    }
  }

  checkIfIdPositive(id){
    if (!this.checkIfPositive(id)) {
      throw new Error("Id should be > 0");
    }
  }
  logMovementToFile(movement, filePath = 'stock_movements.log') {
    const movementString = movement.toString() + '\n';
    fs.appendFileSync(path.resolve(__dirname, filePath), movementString);
  }

  checkQtt(quantity){
    if (quantity == 0) {
      throw new Error("Quantity must not be 0");
    }
  }

  checkIfQttIsPositive(qtt) {
    if (!this.checkIfPositive(qtt)) {
      throw new Error("Quantity must be positive");
    }
  }
}

module.exports = Stock;

