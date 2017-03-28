# Exercice

Pendant ce codelab, nous allons créer une petite application d'E-Commerce avec la bibliothèque VueJS.

## Prérequis

Pour faire ce codelab, vous avez besoin des outils suivants :

* git
* nodeJS 7.x
* un IDE

Pour aider au développement, vous pouvez utiliser l'extention Chrome **Vue-devtools** (https://github.com/vuejs/vue-devtools)

Afin d'éviter les problèmes de réseau le jour J, veuillez cloner ce projet et exécuter les commandes suivantes :

```shell
git clone -b step0 https://github.com/Gillespie59/devoxx-vuejs
npm i -g vue-cli
cd devoxx-vuejs
vue init webpack .
npm install vue-resource vue-router vee-validate vuex --save
```

## PW0

Tous les exercices qui vont suivre se baseront sur deux pages statiques que nous avons développées.
Le but sera d'intégrer ces pages dans une application VueJS.

Pour récupérer ces templates, veuillez exécuter la commande suivante :

```shell
git clone -b step0 https://github.com/Gillespie59/devoxx-vuejs
```

## PW1 - Getting Started

Dans cette première partie pratique, nous allons juste intégrer le template que nous vous mettons à disposition dans une application **VueJS**.
Pour cela nous allons nous servir de l'utilitaire **vue-cli**.

* Installez **vue-cli**

```shell
npm i -g vue-cli
```

* Créez une application, utilisant le template **webpack** dans le dossier récupéré

```shell
vue init webpack .
```

Pour éviter des soucis avec ESLint, nous vous conseillons de le désactiver lors de la génération de l'application.

* Vous êtes à présent prêt pour intégrer le template dans l'application qui vient d'être générée. Nous allons nous limiter pour l'instant
à la page `home.html`. Voici les prérequis :
    * les éléments à l'extérieur de `<body>` doivent se trouver dans le fichier `index.html`
    * le contenu de `<body>` doit être inséré dans le composant `App.vue`

* L'application se lance avec la commande suivante :

```shell
npm run dev
```

## PW2 - Les Composants

Nous allons à présent créer nos premiers composants. Le premier sera utilisé pour afficher le **header** et le second pour le bloc spécifique à une bière.

* Définissez une classe `Beer` qui possèdera les propriétés suivantes :
    * label
    * description
    * photo
    * price

* Créez un nouveau composant `menu.vue` dans lequel vous allez implémenter le menu principal de l'application. Ce composant possèdera un paramètre, un tableau de produits (le panier de l'utilisateur). Ce tableau sera utilisé pour calculer le prix total du panier.

* Remplacez dans le composant principal le menu initial par le composant que vous venez de créer.

* Dans le composant principal, instanciez un nouveau tableau d'objets, correspondant aux items que nous désirons afficher. Un objet possedera
quatre propriétés : label, description, photo et price.

* Nous allons à présent créer un composant `Beer.vue` qui sera en charge d'afficher le détail d'un élément du tableau précédement créé. Voici les prérequis pour ce composant :
    * Il utilisera le template pour l'instant présent dans le composant principal
    * Il possèdera un paramètre, correspondant à l'élément à afficher
    * Il émettra un événement lorsque nous cliquons sur le bouton

* Lorsque le composant principal reçoit cet événement, il devra mettre à jour le panier de l'utilisateur (utilisé précédemment lors de l'utilisation du composant `menu.vue`).

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

## PW4 - Les Filtres

!!!! plus de filtre dans vuejs 2 http://github.com/vuejs/vue/issues/2756#issuecomment-215503966
https://vuejs.org/v2/guide/syntax.html#Filters

Nous allons à présent créer des filtres, afin de formater le contenu de notre application.

* Créez le filtre `uppercase` pour écrire en majuscules le nom des bières

* Créez le filtre `currency` pour ajouter le sigle `€` au prix de chaque bière.

* Nous allons terminer cette partie pratique par le développement d'une `Computed Property`. Itérer la directive `v-for` avec cette `Computed Property` afin de trier les éléments par la propriété `price`.

## PW5 - Les Ressources

Nous allons à présent intégrer à notre application une API REST.
Pour lancer le serveur, vous devez exécuter la commande suivante :

```shell
cd server
npm install
node server.js
```

Le serveur sera disponible via l'URL `http://localhost:1337/api/v1`.

Cette API propose plusieurs points d'entrée :

- `GET` sur `/beers` retournera la liste des bières
- `GET` sur `/basket`  retournera le panier de l'utilisateur
- `POST` sur `/basket` pour ajouter une nouvelle bière au panier de l'utilisateur

Pour consommer cette API nous allons utiliser `vue-ressource` :

```shell
npm install vue-resource --save
```

* N'oubliez pas d'ajouter vue-resource dans votre application vuejs (fichier main.js)

```js
import VueResource from 'vue-resource'
Vue.use(VueResource)
```

Dans le composant principal :

* Récupérez la liste des bières à afficher. Le tableau JavaScript que nous avions défini pourra
à présent être remplacé.

* Récupérez le panier de l'utilisateur. Ce panier sera passé en paramètre du composant `menu` afin d'afficher les informations associées (nombre d'élément, montant du panier)

## PW6 - Le Routeur

Nous allons à présent intégrer dans notre application le routeur proposé par la communauté **VueJS**

* Installez le module `vue-router`

* Créez deux composants : `home` et `basket`
  * le composant `home` aura la charge d'afficher le contenu de la page que nous avons implémenté dans les PWs précédents
  * le composant `basket` qui doit afficher, pour l'instant, le contenu du panier de l'utilisateur au format json

* Ajoutez à votre application la configuration nécessaire pour le fonctionnement du routeur.

* Dans le template du composant `App`, indiquez le point d'insertion des différentes pages de l'application à l'aide de la directive `router-view`.

* Ajoutez le composant `router-link` dans le composant `menu` afin de rediriger l'utilisateur vers les deux composants que nous venons de créer.

## PW7 - Les Formulaires

Dans ce PW, nous allons éditer le formulaire dans le composant `basket` créé précédemment.

- Affichez le panier de l'utilisateur avec le template `basket.html`.

- Dans le composant `basket`, créez un objet `customer` avec les propriétés `name`, `address` et `creditCard`.

- Associez à chaque champs du formulaire la propriété de l'objet créé précédemment.

- Lorsque le formulaire est validé, vous devez envoyer une requête POST au serveur avec les informations de l'utilisateur à l'URL `basket/confirm`.

- La requête de confirmation ne peut être exécutée que si tous les champs ont été saisis. Dynamisez l'ajout de la classe `has-error` en fonction de l'état de validation du formulaire.
(Pour ce codelab, nous faisons ce traitement à la main, mais nous pourrions utiliser des bibliothèques comme `vue-validate`).

- Si la requête de confirmation s'exécute avec succès, redirigez l'utilisateur vers la page principale.

## PW8 - VueX

Pour terminer ce codelab, nous allons intégrer la bibliothèque **Vuex** afin de gérer les états de l'application.

* Installez le module `vuex`

* Créez le store qui sera utilisé dans l'ensemble de l'application. Dans le cadre de ce codelab nous n'y manipulerons que le panier de l'utilisateur.

* Le `store` devra être injecté dans chaque composant de notre application.

* Lorsque l'utilisateur selectionne une bière, veuillez créer une mutation permettant d'ajouter la bière selectionnée au panier.

* Dans les composants `basket` et `menu`, utilisez le panier stocké dans le `store` pour afficher les informations nécessaires.

* Dans le composant principal, si la propriété stockée dans le `store` n'est pas définie, veuillez envoyer la requête vers le serveur, afin de l'initialiser.
