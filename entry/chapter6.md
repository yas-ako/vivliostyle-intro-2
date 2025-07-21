# ちなみに

#


### 

<!-- <div class="vertical-container"> -->
<strong style="text-align: center;">このスライドもvivliostyleで作りました</strong>

<!-- ![](../assets/vivliostyle-intro-vscode.png){width=800 style="margin-inline: auto;"} -->

<img src="../assets/vivliostyle-intro-vscode.png" width=800px style="margin-inline: auto;">

<!-- </div> -->

### 余白の説明の続き

このスライドの右上に表示されている「Vivliostyleでレポートを書こう！」は、次のコードにより表示されている。

```css
:root {
  --vs-page--mbox-content-top-right: env(pub-title);
}
```

- env() は、Vivliostyle によって実装された関数

### @page について

- 特定のページだけスタイルを変えることができる
  - 背景色を変える / 余白の内容を変える ... など
- いまだによくわかっていないけれど、なんかうまくいった
- このスライドの章のタイトルページは、ページ番号のみ表示されるようになっている

たとえば、 `## こんなかんじに` 書くと

## こんなかんじに

## 

なります。

```
# こうやって

#
```
と書けば

# こうやって

となります。

#

### 良い点{.columns-2}

- h1 タグがあるスライド
  - 背景を青に、余白のテキストを表示しない、見出しを中央揃え...
- h2 タグがあるスライド
  - 余白のテキストを表示しない、見出しを中央揃え、見出しの下に下線を引く....


CSSの柔軟なセレクタを最大限に活用できるため、
カスタマイズしやすいテーマを、簡単につくることができる。

### 今のスライドだって....

```md
### 良い点{.columns-2}

一つ目の段落

二つ目の段落
```

こう書いただけ！

### 先頭の自己紹介ページだって....

```md
### 自己紹介{.image-right}

- traQ ID「**yasako**」（25B）
- 所属している班
  - SysAd 班 / グラフィック班 / CTF 班 /<br>アルゴリズム班
- 趣味
  - パソコン / ピアノ / オタマトーン
- 頑張りたいこと
  - Web / 3DCG / CTF / 競プロ

![](https://q.trap.jp/api/v3/public/icon/yasako){width=350px height=350px}
```

### 自己紹介{.image-right}

- traQ ID「**yasako**」（25B）
- 所属している班
  - SysAd 班 / グラフィック班 / CTF 班 /<br>アルゴリズム班
- 趣味
  - パソコン / ピアノ / オタマトーン
- 頑張りたいこと
  - Web / 3DCG / CTF / 競プロ

![](https://q.trap.jp/api/v3/public/icon/yasako){width=350px height=350px}

### ソースコード{.image-right}

- スライドをグリッドで4分割し
  - 上の二つのセルを見出しに
  - 下の二つのセルを、文章と画像にしているだけ

![](.../assets/image-right.png)

### 今回のスライドに関連する資料

- https://github.com/yas-ako/my-vivliostyle-report-template
  - Vivliostyle のレポートテンプレート を作ってみた
  - 実際にレポートを提出する際に使用した
- https://github.com/yas-ako/vivliostyle-intro
  - このスライドのソースコード
  - 気になるところがあったらなんでも質問してください
    - 分かる範囲でこたえます

### 参考資料(1/2)

- Vivliostyle <https://vivliostyle.org>
- Vivliostyle Themes <https://github.com/vivliostyle/themes###readme>
- Vivliostyle CLI <https://github.com/vivliostyle/vivliostyle-cli###readme>

### 参考資料(2/2)

- [Vivliostyleが拓くCSS組版の可能性](https://gihyo.jp/list/group/Vivliostyleが拓くCSS組版の可能性)
- <https://github.com/vivliostyle/vivliostyle-cli>
- 書籍：『Web技術で「本」が作れる CSS組版Viliostyle入門』 (2023/5/24 発行 リブロワークス著)

### ご清聴ありがとうございました！！{style="font-size: 2em"}

- 発表の内容
  - [1. Vivliostyle の全体像](###vivliostyle-の全体像)
  - [2. Vivliostyle の良い点と欠点](###vivliostyle-の良い点と欠点)
  - [3. 実際に使ってみる](###実際に使ってみる)
  - [4. CSS のカスタマイズの例](###css-のカスタマイズの例)
  - [5. レポートを書こう！](###レポートを書こう)
- <span style="font-size: 30px">緑色の文字は、ファイル内のリンクです。上のページ番号はもちろん自動で挿入されています</span>