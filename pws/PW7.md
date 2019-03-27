## PW7 - Les Formulaires

Dans ce PW, nous allons éditer le formulaire dans le composant `basket` créé précédemment.

- Affichez le panier de l'utilisateur avec le template `basket.html`.

- Dans le composant `basket`, créez un objet `customer` avec les propriétés `name`, `address` et `creditCard`.

- Associez à chaque champs du formulaire la propriété de l'objet créé précédemment.

- Lorsque le formulaire est validé, vous devez envoyer une requête POST au serveur avec les informations de l'utilisateur à l'URL `basket/confirm`.

- La requête de confirmation ne peut être exécutée que si tous les champs ont été saisis. Dynamisez l'ajout de la classe `has-error` en fonction de l'état de validation du formulaire.
(Pour ce codelab, nous faisons ce traitement à la main, mais nous pourrions utiliser des bibliothèques comme `vue-validate`).

- Si la requête de confirmation s'exécute avec succès, redirigez l'utilisateur vers la page principale.

