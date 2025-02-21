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

#Historique des mouvements

Chaque ajout ou retrait d’article doit être enregistré avec une date et une quantité.

Lorsque j'ajoute ou retire un article du stock : 
- Si l'article existe et que je décide d'ajouter un article au stock alors un mouvement est ajouté dans l'historique avec la date et la quantité de ce mouvement.

- Si l'article existe et que je décide d'enlever un article qui contient assez de quantité au stock alors un mouvement est ajouté dans l'historique avec la date et la quantité de ce mouvement.

- Si l'article existe et que je décide d'enlever plus de quantité que de stock alors j'ai une erreur.

- Si la quantité de l'article est négative et que j'essaye de retirer alors j'ai une erreur ??? 

- Si l'article existe et que je décide d'ajouter un article au stock mais que la date est invalide alors j'ai une erreur

- Si l'article dont j'essaye de modifier la quantité n'existe pas alors je retourne une erreur.

- Si l'article dont j'essaye de modifier la quantité existe mais que la valeur pour la quantité n'est pas valide alors j'ai une erreur.



Alertes sur stock faible :

Si la quantité d’un article tombe sous un certain seuil lors d'un retrait (ex: 5 unités), afficher un message d’alerte. Nous comptons sur vous pour adapter l’application.

Lorsque que je retire un article :

- Si la quantité de l'article passe en dessous de 5 alors j'affiche un message d'alerte.

- Si la quantité de l'article dépasse 5 il ne se passe rien.


Questions :
- Mouvement:
id
article ?
date
quantité

- Historique(Mouvement1,Mouvement2,Mouvement3,...) ?

- date générée dans la fonction ?

- Est-ce que le seuil est fixe ou dois-t on le donner ?

- (question dois ton logger dans la liste si il y a une erreur ou juste afficher une erreur et ne rien faire de plus)

- Dois t'on afficher l'historique