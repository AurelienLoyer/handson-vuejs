# Exercice

Pendant ce codelab, nous allons créer une petite application d'E-Commerce avec la librairie VueJS. 

## Prérequis

Pour faire ce codelab, vous avez besoin des outils suivants :  

* GIT
* NodeJS 7.x

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

## PW3 - Les Directives

## PW4 - Les Pipes

## PW5 - Les Ressources

## PW6 - Les Formulaires

## PW7 - Le Routeur

## PW8 - Les Tests