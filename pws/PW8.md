## PW8 - VueX

Pour terminer ce codelab, nous allons intégrer la bibliothèque **Vuex** afin de gérer les états de l'application.

* Installez le module `vuex`

* Créez le store qui sera utilisé dans l'ensemble de l'application. Dans le cadre de ce codelab nous n'y manipulerons que le panier de l'utilisateur.

* Le `store` devra être injecté dans chaque composant de notre application.

* Lorsque l'utilisateur selectionne une bière, veuillez créer une mutation permettant d'ajouter la bière selectionnée au panier.

* Dans les composants `basket` et `menu`, utilisez le panier stocké dans le `store` pour afficher les informations nécessaires.

* Dans le composant principal, si la propriété stockée dans le `store` n'est pas définie, veuillez envoyer la requête vers le serveur, afin de l'initialiser.

