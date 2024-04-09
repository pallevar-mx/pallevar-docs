---
sidebar_position: 1
---

# Introduction du didacticiel

Découvrons **Docusaurus en moins de 5 minutes**.

## Commencer

Commencez par **créer un nouveau site**.

Ou **essayez Docusaurus immédiatement** avec **[docusaurus.new](https://docusaurus.new)**.

### Ce dont vous aurez besoin

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Générer un nouveau site

Générez un nouveau site Docusaurus à l'aide du **modèle classique**.

Le modèle classique sera automatiquement ajouté à votre projet après avoir exécuté la commande :

```bash
npm init docusaurus@latest my-website classic
```

Vous pouvez taper cette commande dans l'invite de commande, Powershell, Terminal ou tout autre terminal intégré de votre éditeur de code.

La commande installe également toutes les dépendances nécessaires dont vous avez besoin pour exécuter Docusaurus.

## Démarrez votre site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
