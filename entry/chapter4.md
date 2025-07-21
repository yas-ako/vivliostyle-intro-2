## CSS のカスタマイズの例{style="font-size: 2.7em" #chapter4}

##

### CSS ファイルの追加・読み込み

- 修正前
  - 最初に指定したテーマが設定されている

```js title=vivliostyle.config.js
module.exports = {
  // ...省略...
  theme: "@vivliostyle/theme-academic@^2.0.0",
  // ...省略...
};
```

### CSS ファイルの追加・読み込み

- 修正後

```js title=vivliostyle.config.js
module.exports = {
  // ...省略...
  theme: ["@vivliostyle/theme-academic@^2.0.0", "assets/style.css"],
  // ...省略...
};
```

### テーマのカスタマイズについて

- まずは次の記事を6本全部読もう  
  <https://gihyo.jp/list/group/Vivliostyleが拓くCSS組版の可能性>

![](../assets/customize/gihyo.jpg)

### カスタマイズの仕組み

- Vivliostyle のテーマは、CSS 変数を用いてカスタマイズする
- テーマのソースコードを自分で読まなければならないことがある

```css title=style.css
  --vs--h1-font-size: 1.7em;
  --vs--h2-font-size: 1.7em;
  --vs--h3-font-size: 1.5em;
```

### フォント

- base theme に定義されているCSS変数を上書きすることで、フォントを変更できる

```css title=style.css
/* Google Fontsをインポートした上で */
:root {
  --vs--heading-font-family: "Noto Sans JP";
  --vs--heading-font-weight: 700;
}
```

### Vivliostyle Base Theme とは

- 様々なテーマで共通して使われる、基本的なスタイルを定義したテーマ
- Vivliostyle のテーマは、これを継承することが推奨されている
- 図・表・セクション番号のカウンタやその参照など、Vivliostyle Base Theme で定義されているCSS変数をカスタマイズすることで、簡単にカスタマイズが可能！！
- いま使ったAcademic テーマも、Vivliostyle Base Theme を内部で使用している。

### 自分でカスタマイズするには....

- 頑張ってBase Theme のソースコードを読んでください。
- GitHub リポジトリの Issue や Pull Request を検索してください。

かなり拡張性が高いため、CSS変数を上書きするだけでいろいろなことができます。