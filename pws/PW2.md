## PW2 - Les Composants

* Vous êtes à présent prêt pour intégrer le template dans l'application qui vient d'être générée. Nous allons nous limiter pour l'instant à la page `home.html`. Voici les prérequis :
    * les éléments à l'extérieur de `<body>` doivent se trouver dans le fichier `index.html`
    * le contenu de `<body>` doit être inséré dans le composant `App.vue`

Nous allons à présent créer nos premiers composants. Le premier sera utilisé pour afficher le **header** et le second pour le bloc spécifique à une bière.

* Créez un nouveau composant `menu.vue` dans lequel vous allez implémenter le menu principal de l'application. Ce composant possèdera un paramètre, un tableau de produits (le panier de l'utilisateur). Ce tableau sera utilisé pour calculer le prix total du panier.

* Remplacez dans le composant principal le menu initial par le composant que vous venez de créer.

* Dans le composant principal, instanciez un nouveau tableau d'objets, correspondant aux items que nous désirons afficher. Vous pouvez récupérer le contenu du fichier `server/beers.json`

* Nous allons à présent créer un composant `Beer.vue` qui sera en charge d'afficher le détail d'un élément du tableau précédement créé. Voici les prérequis pour ce composant :
    * Il utilisera le template pour l'instant présent dans le composant principal
    * Il possèdera un paramètre, correspondant à l'élément à afficher
    * Il émettra un événement lorsque nous cliquons sur le bouton

* Lorsque le composant principal reçoit cet événement, il devra mettre à jour le panier de l'utilisateur (utilisé précédemment lors de l'utilisation du composant `menu.vue`).