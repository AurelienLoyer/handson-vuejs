## PW1 - Getting Started

Dans cette première partie pratique, nous allons juste intégrer le template que nous vous mettons à disposition dans une application **vue.js**.
Pour cela nous allons nous servir de l'utilitaire **vue cli**.

* Installez **vue-cli**

```shell
npm install -g @vue/cli
```

* Créez une application, en utilisant la commande suivante et en repondant aux questions générer votre base.

```shell
vue create .
```

Pour cette première étape, nous vous conseillons de désactiver **eslint** et le routeur lors de la génération de l'application. (ne pas faire en production ⚠️ 😉)

```shell
? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router
 ◯ Vuex
❯◉ CSS Pre-processors
 ◯ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing

? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N)
```

* Vous devez à présent installer les dépendances avec **NPM** ou **Yarn**

```shell
npm i 
```

* L'application se lance avec la commande suivante :

```shell
npm run serve
```

* Vue CLI 3 arrive avec une nouvelle interface UI, pour la tester :

```shell
vue ui
```
