# Piste d'Atterrissage - Contrôle des Lampes avec WebSocket

Ce projet permet de contrôler les lampes d'une piste d'atterrissage en temps réel à l'aide d'une interface web interactive. Le système utilise un serveur WebSocket pour gérer la communication entre les pages de contrôle et de visualisation de l'état des lampes.

## Fonctionnalités

- **Contrôle en temps réel** : Allumez ou éteignez les lampes de la piste via une interface simple.
- **Mise à jour visuelle** : La page `status.html` montre l'état actuel des lampes (allumées ou éteintes) en temps réel avec un indicateur de couleur.
- **WebSocket** : Le système utilise WebSocket pour diffuser l'état des lampes à tous les clients connectés instantanément.

## Structure du Projet

Le projet contient les fichiers suivants :

- **index.html** : Interface utilisateur pour contrôler les lampes.
- **status.html** : Interface utilisateur pour visualiser l'état actuel des lampes.
- **styles/style.css** : Fichier de styles pour les pages HTML.
- **scripts/script.js** : Script JavaScript pour gérer la logique de communication via WebSocket et les interactions utilisateur.
- **server.js** : Serveur WebSocket pour gérer la communication entre les clients et diffuser l'état des lampes.

## Prérequis

- [Node.js](https://nodejs.org) (version 14+)
- [WebSocket](https://www.npmjs.com/package/ws) (installé via npm)

## Installation

1. Clonez le projet depuis GitHub :

    ```bash
    git clone https://github.com/JoeM1990/simulationTrack.git
    ```

2. Installez les dépendances :

    ```bash
    cd simulationTrack
    npm install
    ```

3. Lancez le serveur WebSocket :

    ```bash
    node server.js
    ```

4. Ouvrez `index.html` et `status.html` dans votre navigateur pour tester l'application.

## Utilisation

### Contrôler les Lampes

1. Ouvrez `index.html` dans votre navigateur.
2. Cliquez sur les boutons "Allumer" ou "Éteindre" pour modifier l'état des lampes.

### Visualiser l'État des Lampes

1. Ouvrez `status.html` dans un autre onglet ou sur un autre appareil pour visualiser l'état des lampes en temps réel.
2. Les cercles changent de couleur (jaune pour allumé, gris pour éteint) en fonction de l'état des lampes.


## Personnalisation

- Vous pouvez ajouter ou supprimer des lampes en modifiant les fichiers `index.html`, `status.html`, et en ajustant la logique du serveur dans `server.js`.
- La couleur et le style des lampes peuvent être changés dans `styles/style.css`.

## Déploiement

Pour déployer ce projet sur un serveur distant, assurez-vous d'ajuster l'URL du WebSocket dans `script.js` pour pointer vers le serveur hébergé.

```javascript
const socket = new WebSocket('ws://votre-serveur:8080');

## Auteur

Ce projet a été créé par [Joe Monkila](https://github.com/JoeM1990).

