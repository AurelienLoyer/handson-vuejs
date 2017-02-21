# Exercice

Pendant ce codelab, nous allons créer une petite application d'E-Commerce avec la librairie VueJS. 

## Prérequis

Pour faire ce codelab, vous avez besoin des outils suivants :  

* GIT
* NodeJS 7.x
* Un IDE

Pour aider au développement, vous pouvez utiliser l'extention Chrome **Vue-devtools** (https://github.com/vuejs/vue-devtools)

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

Nous allons à présent intégrer notre application avec une API REST. 
Pour lancer le serveur, vous devez exécuter la commande suivante :

```shell
cd server
npm install
node server.js
```

Le serveur sera disponible via l'URL `http://localhost:8080/api/v1`.

Cette API propose plusieurs points d'entrée :

- `GET` sur `/beers` retournera la liste des bières
- `GET` sur `/basket`  retournera le panier de l'utilisateur
- `POST` sur `/basket` pour ajouter une nouvelle bière au panier de l'utilisateur

Dans le composant principal,

* Récupérez la liste des bières à afficher. Le tableau JavaScript que nous avions défini précédemment pourra 
à présent être supprimé. 

* Récupérez le panier de l'utilisateur. Ce panier sera passé en paramètre du composant `menu` afin d'afficher les informations associées (nombre d'élément, montant du panier)

## PW6 - Le Routeur

Nous allons à présent intégrer dans notre application le routeur proposé par la communauté **VueJS**

* Installez le module `vue-router`

* Créez deux composants : `home` et `basket`
  * le composant `home` aura la charge d'afficher le contenu de la page que nous avons implémenté dans les PWs précédents
  * le composant `basket` permettra d'afficher, pour l'instant, le contenu du panier de l'utilisateur (via le filtre `json`)

* Ajoutez à votre application la configuration nécessaire pour le fonctionnement du router. 

* Dans le template du composant `Application`, nous allons utiliser la directive `router-view` afin d'indiquer le point d'insertion des différentes pages de l'application.

- Ajoutez le composant `router-link` dans le composant `menu` afin de rediriger l'utilisateur vers les deux composants que nous venons de créer.

## PW7 - Les Formulaires

Dans ce PW, nous allons ajouter un formulaire dans le composant `basket` créé précédemment. 

- Affichez le panier de l'utilisateur. Pour cela, utilisez le template `basket.html`

- Créez un object `Customer`, ayant les propriétés suivantes :
	- name
	- address
	- creditCard

- Dans le composant `basket`, instancier un objet de type `Customer`

- Associez à chaque champs du formulaire la propriété de l'objet `Customer` associé

- Lorsque le formulaire est validé, vous devez envoyer une requête POST au serveur avec les informations de l'utilisateur (l'objet `Customer`)
à l'URL `basket/confirm`.

- La requête de confirmation ne peux être exécutée que si tous les champs ont été saisis. Dynamiser l'ajout de la classe `has-error` en fonction de l'état de validation du formulaire.
(Pour ce codelab, nous faisons ce traitement à la main, mais nous pourrions utiliser des librairies comme `vee-validate`).

- Si la requête de confirmation s'exécute avec succès, veuullez redirigez l'utilisateur vers la page principale. 

## PW8 - VueX

Pour terminer ce codelab, nous allons intégrer la librairie **Vuex** afin de gérer les états de mon application. 

* Installez le module `vuex`

* Créez le store qui sera utilisé dans l'ensemble de l'application. Pour l'instant dans allons manipuler que le panier de l'utilisateur. 

* Le `store` devra être injecté dans chaque composant de notre application 

* Lorsque l'utilisateur selectionne une bière, veuillez créer une mutation permettant d'ajouter la bière selectionnée au panier

* Dans les composant `basket` et `menu`, utilisez le panier stocké dans le `store` pour afficher les informations nécessaires

* Dans le composant principal, si la propriété stocké dans le `store` n'est pas défini, veuillez envoyer la requête vers le serveur, afin de l'initialiser. 
