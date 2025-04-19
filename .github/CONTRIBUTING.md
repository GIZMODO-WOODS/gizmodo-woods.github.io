# 貢献ガイド/Contributing Guide

- [日本語](#%E6%97%A5%E6%9C%AC%E8%AA%9E)
- [English](#english)

# 日本語

## 目次

- [誤字脱字、リンク切れなどのご指摘](#%E8%AA%A4%E5%AD%97%E8%84%B1%E5%AD%97%E3%83%AA%E3%83%B3%E3%82%AF%E5%88%87%E3%82%8C%E3%81%AA%E3%81%A9%E3%81%AE%E3%81%94%E6%8C%87%E6%91%98)
- [このリポジトリの内容を更新する方法](#%E3%81%93%E3%81%AE%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%AE%E5%86%85%E5%AE%B9%E3%82%92%E6%9B%B4%E6%96%B0%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)
- [ファイルの構成](#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E6%A7%8B%E6%88%90)
- [ドキュメント](#%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88)
- [ライセンス](#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9)

## 誤字脱字、リンク切れなどのご指摘

GitHubのアカウントをお持ちの場合は、ログインのうえ、以下のいずれかの方法でご指摘ください。   
いただいた情報はこちらで精査のうえ、リクエストを受け入れない場合があります。

- 該当するファイルを編集し、プルリクエストを送信
- [Issues](https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io/issues)を開き、「New Issue」から問題提起

GitHubのアカウントをお持ちでない場合は、Discordサーバーに参加し[お問い合わせ](https://gizmodo-woods.github.io/tutorial/inquiry/contact)ください。


## このリポジトリの内容を更新する方法

更新方法には以下の３通りがあります。

|方法|難易/おすすめ度|
|:---:|:---:|
|リポジトリを直接編集|★|
|新しいブランチを作成して編集、その後反映|★★|
|GitHub Codespacesなどから編集|★★★|

### 方法１：リポジトリを直接編集

1. 編集したいファイルを表示（ページによっては、下部に「このページを編集」のリンクあり）
2. 編集ボタンを押して、ファイルの中身を編集
3. 必要に応じてコメントを編集し、コミット
4. 作成されたプルリクエストでテストが通ったか確認（通らなかった場合は、エラーログを読み、再度修正）し、マージ

### 方法２：新しいブランチを作成して編集、その後反映

1. リポジトリを表示し、以下を実行。
   - PC版は`main`を選択し、`View all branches`を開き、右上の`New branch`から任意の名前（例：やりたいこと）を入れてブランチを作成
   - モバイル版は右上のメニューから共有を開き、ブラウザで開いた後、上記手順でブランチを作成（作成後は、`ブランチを変更`から作成したブランチを開くと編集できます）
2. 作成したブランチにてファイルを編集
3. ファイルを編集後、`main`ブランチへプルリクエストを作成
4. 作成されたプルリクエストでテストが通ったか確認（通らなかった場合は、エラーログを読み、再度修正）し、マージ

### 方法３：GitHub Codespacesなどから編集

[GitHub Codespaces](https://github.com/features/codespaces)とは、ブラウザーから利用できるクラウド開発環境です。   
Visual Studio Codeやその他ローカル環境で編集する方法もありますが、それらは各自で調べてください。   
なお、[GitHub Codespaces](https://github.com/features/codespaces)は無料ですが、[時間制限](https://docs.github.com/ja/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)が設けられています。

1. ブラウザでリポジトリを開き、`< > Code`を選択し、`Create Codespaces on main`を開く
2. ターミナルが表示されてコマンドが入力できるようになったら、利用可能

こちらでは、仮想環境上にサイトをビルドし、プレビューを確認しながら編集できます。

## ファイルの構成

トップページやGIZMODO WOODSについてなどのページのファイルは、「src/pages」ディレクトリ内、「参加方法/使い方」のページに表示される内容が記載されたファイルは「docs」ディレクトリ内、画像ファイルは各ディレクトリの「img」（トップページや参加方法ページの画像のみ「static/img」）に格納されています。

### ファイルの記法

マークダウン形式を使用します。   
一部HTMLを使用することもあります。

「docs」フォルダ内のマークダウン形式のファイル上部には、以下のような記述があります。数字は左側に表示されるサイドバーでの表示順序です。

```
---
sidebar_position: 1
---
```

## ドキュメント

[Docusaurusのガイドページ](https://docusaurus.io/docs)などを参照してください。

## ライセンス

GIZMODO WOODSが新たに追加したテキストなどは、CC BY 4.0の下公開・提供されています。（詳しくは[README.md](Rhttps://github.com/GIZMODO-WOODS/gizmodo-woods.github.io#license)を参照）

ページの内容を更新するときなど、他者の権利を侵害しないよう十分注意してください。

# English

## Table of Contents

- [Reporting Typographical Errors and Broken Links](#reporting-typographical-errors-and-broken-links)
- [How to Update This Repository](#how-to-update-this-repository)
- [File Structure](#file-structure)
- [Documentation](#documentation)
- [License](#license)

## Reporting Typographical Errors and Broken Links

If you have a GitHub account, please log in and report issues using one of the following methods:
The information you receive may not be accepted after scrutiny here.

- Edit the relevant file and submit a pull request.
- Open an [Issue](https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io/issues) and create a "New Issue."

If you do not have a GitHub account, please join our Discord server and [contact us](https://gizmodo-woods.github.io/tutorial/inquiry/contact).

## How to Update This Repository

There are three main ways to update this repository:

| Method | Difficulty / Recommendation Level |
|:---:|:---:|
| Directly Editing the Repository | ★ |
| Creating a New Branch and Merging Changes | ★★ |
| Editing via GitHub Codespaces | ★★★ |

### Method 1:Directly Editing the Repository

1. Navigate to the file you want to edit (some pages have an "Edit this page" link at the bottom).
2. Click the edit button and modify the file contents.
3. Optionally add a commit message and commit the changes.
4. Check whether the automated tests pass on the pull request. If they fail, review the error logs and make corrections before merging.

### Method 2:Creating a New Branch and Merging Changes
1. go to the repository and do the following
   - For PC, select `main`, open `View all branches`, and create a branch with any name (e.g., what you want to do) from `New branch` in the upper right corner.
   - For mobile version, open share from the menu in the upper right corner, open it in your browser, and create a branch by following the above steps (once created, you can edit it by opening the created branch from `Modify branch`). 2.
2. edit files on the created branch
3. after editing the file, create a pull request to the `main` branch
4. check if the test passed with the created pull request (if not, read the error log and fix it again), and merge

### Method3:Editing via GitHub Codespaces

[GitHub Codespaces](https://github.com/features/codespaces) is a cloud-based development environment accessible via a browser.  
You can also use Visual Studio Code or other local environments, but those setups require independent research.  
Note that [GitHub Codespaces](https://github.com/features/codespaces) is free but has [usage limits](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

1. Open the repository in a browser, click `< > Code`, and select `Create Codespace on main`.
2. Once the terminal appears and commands can be entered, start editing.

This allows you to build the site in a virtual environment and preview changes in real-time.

## File Structure

The files for the homepage and general site information are in the `src/pages` directory.  
Pages under "How to Participate / Usage" are in the `docs` directory.  
Images are stored in `img` subdirectories, except for images related to the homepage and participation guides, which are in `static/img`.

### File Format

Markdown format is used, with some HTML elements as needed.

Files in the `docs` folder include metadata at the top, like this:

```
---
sidebar_position: 1
---
```


This number determines the order of pages in the sidebar.

## Documentation

Refer to the [Docusaurus guide](https://docusaurus.io/docs) for more details.

## License

The text and materials added by GIZMODO WOODS are published under CC BY 4.0.  
(For more details, see [README.md](https://github.com/GIZMODO-WOODS/gizmodo-woods.github.io#license).)

When updating content, please ensure that you do not infringe on the rights of others.
