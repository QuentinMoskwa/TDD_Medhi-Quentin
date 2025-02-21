
class Movement {
    constructor(id, type, article, date, quantity) {
        this.id = id;
        this.type = type;
        this.article = article;
        this.date = date;
        this.quantity = quantity;
    }

    toString() {
        return `${this.type} | 'Article Id:' ${this.article.id}  |  'Article name:' ${this.article.name} | ${this.date} |  ' Quantity:' ${this.quantity}`;
    }
}

module.exports = Movement;
