# gizmodo-woods.github.io

## License

日本語

* 本リポジトリ内の[GIZMODO WOODSのウェブサイト](https://gizmodo-woods.github.io/)に関連するコンテンツは、G/O Media Inc.、若しくは株式会社メディアジーン、またはその他第三者に著作権、商標権、その他の知的財産権が帰属する場合を**除き**、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)の下でライセンスされています。
* よって、GitHubの機能を通じて許可される場合を除き、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)でライセンス**されない**コンテンツを転載、複製等その他著作権等を侵害する行為を禁じます。
* GIZMODO WOODSのウェブサイトを構築するために、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)の下で[Docusaurus](https://docusaurus.io)が公開したファイルを一部改変して利用しています。
* なお、本リポジトリ内のファイルの利用にあたって生じた問題に関して、GIZMODO WOODSはいかなる責任も負いません。

English

* The content related to the [GIZMODO WOODS website](https://gizmodo-woods.github.io/) in this repository is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), **except** where copyright, trademark or other intellectual property rights are owned by G/O Media Inc., Mediagene Inc. or other third parties.
* Therefore, except as permitted through the GitHub functionality, reproduction, duplication, or other infringement of copyright or other proprietary rights in content **NOT** licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) is prohibited.
* We use with some modified files released by [Docusaurus](https://docusaurus.io) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) to build the [GIZMODO WOODS website](https://gizmodo-woods.github.io/).
* GIZMODO WOODS assumes no responsibility for any problems that may arise from the use of the files in this repository.

## Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
