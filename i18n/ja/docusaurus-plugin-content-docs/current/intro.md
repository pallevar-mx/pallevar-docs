---
sidebar_position: 1
---

# チュートリアルの概要

**5 分以内に **Docusaurus** を発見してみましょう。

## 始めること

**新しいサイトを作成**することから始めます。

または **今すぐ Docusaurus を試してください** **[docusaurus.new](https://docusaurus.new)**.

### 必要なもの

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## 新しいサイトを生成する

**クラシック テンプレート**を使用して、新しい Docusaurus サイトを生成します。

次のコマンドを実行すると、クラシック テンプレートがプロジェクトに自動的に追加されます。

```bash
npm init docusaurus@latest my-website classic
```

このコマンドは、コマンド プロンプト、Powershell、ターミナル、またはコード エディターのその他の組み込みターミナルに入力できます。

このコマンドは、Docusaurus を実行するために必要なすべての依存関係もインストールします。

## サイトを開始する

開発サーバーを実行します。

```bash
cd my-website
npm run start
```

`cd` コマンドは、作業中のディレクトリを変更します。 新しく作成した Docusaurus サイトを操作するには、そこのターミナルに移動する必要があります。

「npm run start」コマンドは、Web サイトをローカルに構築し、開発サーバーを通じて提供し、いつでも閲覧できるようにします。 http://localhost:3000/.

開ける `docs/intro.md` (このページ) をクリックしていくつかの行を編集します。サイトが **自動的に再読み込み**され、変更内容が表示されます。
