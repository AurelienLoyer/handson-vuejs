# Introduction

http://slides.com/t3kstiil3/deck-13
https://slides.com/t3kstiil3/deck-13/live
Pendant ce codelab, nous allons créer une petite application d'E-Commerce avec la bibliothèque VueJS.

## Prérequis

Pour faire ce codelab, vous avez besoin des outils suivants :

* GIT
* NodeJS 7.x
* un IDE (WebStorm ou Visual Studio Code...)

Pour aider au développement, vous pouvez utiliser l'extention Chrome **Vue-devtools** (https://github.com/vuejs/vue-devtools)

Afin d'éviter les problèmes de réseau le jour J, veuillez cloner ce projet et exécuter les commandes suivantes :

```shell
git clone -b step1 https://github.com/T3kstiil3/handson-vuejs
npm i -g vue-cli
cd handson-vuejs
vue init webpack .
npm install axios vue-router vee-validate vuex --save
npm install
```
Pour vérifier que tout marche correctement:
```
npm test
```
Tout devrait être vert !

## Par où commencer ?

Tous les exercices qui vont suivre se baseront sur deux pages statiques que nous avons développées.
Le but sera d'intégrer ces pages dans une application VueJS.

Pour récupérer ces templates, veuillez exécuter la commande suivante :

```shell
git clone -b step0 https://github.com/T3kstiil3/handson-vuejs
```
