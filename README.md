# techiro/slides

[すばるさんの slides リポジトリ](https://github.com/su8ru/slides)と[Marp の活用記事](https://zenn.dev/huitgroup/articles/marp-cli-lt-slide)を参考にした、独立した Marp スライド置き場です。

## セットアップ

Node.js 22 と pnpm を用意してから、次を実行します。

```sh
pnpm install
pnpm dev
```

`src/index.md` がトップページです。資料は `src/<slug>/index.md` に置き、トップページにリンクを追加します。`pnpm new:slide` でひな形を作成できます。slug は `260925-example` のように指定します。

```sh
pnpm build
```

生成物は `dist/` に出力されます。Cloudflare Workers の静的アセットとして公開する場合は、Cloudflare のアカウントで `pnpm cf:deploy` を実行します。

## 参照

- [元リポジトリ](https://github.com/su8ru/slides)
- [制作方法を紹介した記事](https://zenn.dev/huitgroup/articles/marp-cli-lt-slide)
