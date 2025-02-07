● Ajouter des articles en stock
● Consulter la quantité d’un article
● Retirer des articles du stock
● Obtenir un rapport des stocks restants
● Gérer les erreurs (stock insuffisant, article inexistant, etc.)

Objet article ?

Une liste de article déjà définie

Article 
{
    id: 
    name:
    quantity:
}


addArticleToStock(idOfArticle, quantity)

showArticleQuantity(idOfArticle)

removeStockArticle(idOfArticle, quantity)

showStockRapport()

Quand j'essaye d'ajouter un article :
Si j'ajoute 2x laptop(id:0) alors on ajoute 2 laptop dans le stock.
Si j'ajoute 0x laptop(id:0) alors il y a une erreur. (correction)
Si j'ajoute un autre chose que la quantité d'un article alors il m'est retourné une erreur.
Si j'ajoute une valeur négative de laptop alors il m'est retourné une erreur.
Si j'ajoute une valeur décimale de laptop alors il m'est retourné une erreur.
Si j'ajoute un article qui n'existe pas alors il m'est retourné une erreur.
Si j'ajoute un article qui n'est pas du bon type alors il m'est retourné une erreur.

Quand j'essaye d'afficher le rapport :
Si j'essaye d'afficher le rapport alors on affiche la quantité par article.
Si j'essaye d'afficher le rapport mais que l'une des quantités est en erreur alors je la remonte.

#En tant qu'utilisateur, je souhaite connaître la quantité d'un article.
Lorsque je fournis un ID d'article, je reçois sa quantité.
Si l'ID n'existe pas, une erreur est renvoyée.
Si l'ID n'est pas un entier, une erreur est renvoyée.

#En tant qu'utilisateur, je souhaite retirer des articles.
Lorsque je fournis un ID d'article et une quantité à retirer :
Si l'ID n'existe pas, une erreur est renvoyée.
Si l'ID ou quantité n'est pas un entier, une erreur est renvoyée.
Si la quantité est négative, une erreur est renvoyée.
Si la quantité est supérieure à celle en stock, une erreur est renvoyée.
Si la quantité est égale à zéro, erreur (correction)