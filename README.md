# Exercice

Pendant ce codelab, nous allons créer une petite application d'E-Commerce avec la librairie VueJS. 

## Prérequis

Pour faire ce codelab, vous avez besoin des outils suivants :  

* GIT
* NodeJS 7.x
* Un IDE

## PW0

Tous les exercices qui vont suivre, se baseront sur deux pages statiques que nous avons développer. 
Le but sera de mettre à page cette page pour l'intégrer dans une application VueJS. 

Pour récupérer ce template statique, veuillez exécuter la commande suivante : 

```shell
git clone -b step0 https://github.com/Gillespie59/devoxx-vuejs
```

## PW1 - Getting Started

Dans cette première partie pratique, nous allons juste intégrer le template que nous vous mettons à disposision dans une application **VueJS**. 
Pour cela nous allons utiliser l'utilitaire **vue-cli**. 

* Installez **vue-cli**

```shell
npm i -g vue-cli
```

* Créez une application, utilisant le template **webpack**

```shell
vue init webpack devoxx
```

* Vous êtes à présent prêt pour intégrer notre template dans l'application qui vient d'être générée. Nous allons nous limiter pour l'instant
à la page `home.html`. Voici les prérequis : 
    * Les éléments à l'extérieur de `<body>` doivent se trouver dans le fichier `index.html`
    * le contenu de `<body>` doit être inséré dans le composant `App.vue`

* Pour lancer votre application, vous devez lancer la commande suivante : 

```shell
npm run dev
```
## PW2 - Les Composants

Nous allons à présent créer nos premiers composants. Le premier sera utilisé pour affiche le **header** et le second le bloc spécifique à une bière. 

* Définissez une classe `Beer` qui possèdera les propriétés suivantes : 
    * label
    * description
    * photo
    * price

* Créez un nouveau composant `menu.vue` dans lequel vous allez implémenter le menu principal de l'application. Ce composant possèdera un paramètre, un tableau de produit (le panier de l'utilisateur). Ce tableau sera utilisé pour calculer le prix total du panier. 

* Remplacez dans le composant principal le menu initial par le composant que vous venez de créer.

* Dans le composant principal, instanciez un nouveau tableau de Beer.

* Nous allons à présent créer un composant `Beer.vue` qui sera en charge d'afficher le détail d'un élément de notre tableau précédement créé. Voici les prérequis pour ce composant : 
    * Il utilisera le template pour l'instant présent dans le composant principal
    * Il possèdera un paramètre, correspondant à l'élément à afficher
    * Il émettra un événement lorsque nous cliquons sur le bouton

* Lorsque le composant principal reçoit cet événement, il devra mettre à jour le panier de l'utilisateur (utilisé précédemment lors de l'utilisation du composant `menu.vue`).

## PW3 - Les Directives

Dans ce TP, nous allons utiliser les directives `v-for`, `v-if` et `v-bind` pour dynamiser notre page.

* Grâce à la directive  `v-for`, itérez sur la liste des bières afin d'afficher autant de composant `Beer.vue` qu'il y a d'éléments dans ce tableau.

* Dans la classe `Beer`, ajoutez une propriété stock de type. Initiez cette propriété pour tous les éléménts définis dans le composant principal.

* Lorsque l'utilisateur selectionne un élément, décrémentez le stock associé

* Grâce à la directive `v-if`, affichez un produit, seulement si sa propriété stock est supérieure à 0.

* Grâce à la syntaxe `v-bind:class`, ajoutez une classe CSS `last`, sur l'élément utilisant la classe XXX, si la propriété stock d'un produit atteint 1. Cette classe ne sera utilisée que pour modifier la couleur de fond 

```css
.last {
    background-color: rgba(255, 0, 0, 0.4)
}
```

## PW4 - Les Pipes

Nous allons à présent utiliser les fitlres, afin de formatter le contenu de notre application. 

* Utilisez le filtre `uppercase` pour mettre en majuscule le nom des bières

* Ajoutez le filtre `currency` pour ajouter le sigle `€` au prix de chaque bière.

* Ajouter à la directive `v-for` le filtre `orderBy` afin d'ordonnancer les éléments par la propriété `price`.

* Nous allons terminer cette partie pratique par le développement d'un nouveau filtre. Créez un filtre permettant d'arrondir
le prix d'un bière à l'unité supérieur: le prix d'une bière à 10,5€ devra être 11€.

## PW5 - Les Ressources

## PW6 - Les Formulaires

## PW7 - Le Routeur

## PW8 - Les Tests