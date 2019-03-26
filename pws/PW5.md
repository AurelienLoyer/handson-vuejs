## PW5 - Les Ressources

Nous allons à présent intégrer à notre application une API REST.
Pour lancer le serveur, vous devez exécuter la commande suivante :

```shell
cd server
npm install
npm start
```

Le serveur sera disponible via l'URL `http://localhost:1337/api/v1`.

Cette API propose plusieurs points d'entrée :

- `GET` sur `/beers` retournera la liste des bières
- `GET` sur `/basket`  retournera le panier de l'utilisateur
- `POST` sur `/basket` pour ajouter une nouvelle bière au panier de l'utilisateur

vue-resource -> axiox https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4

Pour consommer cette API nous allons utiliser `axios` :

```shell
npm install axios --save
```

* N'oubliez pas d'ajouter axios dans votre application vuejs (fichier main.js)

```javascript
import axios from 'axios';
Vue.prototype.$http = axios;
```

Dans le composant principal :

* Récupérez la liste des bières à afficher. Le tableau JavaScript que nous avions défini pourra à présent être remplacé.

* Récupérez le panier de l'utilisateur. Ce panier sera passé en paramètre du composant `menu` afin d'afficher les informations associées (nombre d'élément, montant du panier).

* Ajoutez lorsque l'utilisateur sélectionne une bière, veuillez l'ajouter au panier.
