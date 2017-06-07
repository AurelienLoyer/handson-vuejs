## PW3 - Les Directives

Dans ce TP, nous allons dynamiser notre page avec les directives `v-for`, `v-if` et `v-bind`.

* Grâce à la directive `v-for`, itérez sur la liste des bières afin d'afficher autant de composants `Beer.vue` qu'il y a d'éléments dans le tableau.

* Dans notre tableau de `Beer`, ajoutez une propriété stock. Initiez cette propriété à 5 pour tous les éléménts du tableau utilisé par le composant principal.

* Lorsque l'utilisateur sélectionne un élément, décrémentez le stock associé.

* Grâce à la directive `v-if`, affichez un produit, si et seulement si sa propriété stock est supérieure à 0.

* Changez la couleur de fond d'un produit si son stock atteint 1. Pour cela, utilisez la syntaxe `v-bind:class` sur l'élément ayant la classe `thumbnail`, ainsi que la classe suivante :

```css
.last {
    background-color: rgba(255, 0, 0, 0.4)
}
```

* Dans le composant `menu`, dynamisez le lien redirigeant l'utilisateur vers la page `basket` :
    * Si le panier est vide, affichez `Accéder à votre panier (vide)`
    * Si il y a au moins 1 produit, affichez `Accéder à votre panier (1 article(s) - 10€)`