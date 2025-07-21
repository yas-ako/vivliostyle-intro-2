## レポートを書こう！

##

### レポート用のテーマを作りました

- https://www.npmjs.com/package/@yas-ako/vivliostyle-theme-simple-report
- npm があれば簡単に使えます。

### 必要な機能
- 図・表の挿入/参照
- 数式の挿入
- ノンブル、柱、ヘッダー、フッター
- 章のカウンタ

### 出来上がったもの

![](/assets/report-sample/report-sample_01.jpg){style="border:3px solid ###bbb"}

### 出来上がったもの

![](/assets/report-sample/report-sample_02.jpg){style="border:3px solid ###bbb"}

### 出来上がったもの

![](/assets/report-sample/report-sample_03.jpg){style="border:3px solid ###bbb"}

### 出来上がったもの

![](/assets/report-sample/report-sample_04.jpg){style="border:3px solid ###bbb"}

### 図・表の挿入/参照

```md title=sample.md
######### 図の挿入
![traPのロゴ](assets/logo.svg){.fig ###figure-filename}

上の [](###figure-filename){.fig-ref} は、....(略)
```

- class や id を、{} の中に書いて設定できる
- `figure-filename` は、一意であればなんでも OK
- マークダウンのリンクを挿入している

### 図・表の挿入/参照

- `fig-ref` は、図の参照を実現するためのクラス
  - テーマファイルにはおそらく含まれていないため、自分で書く必要がある。先ほどのサイトで紹介されている。
```css title=style.css
.fig-ref::after {
  content: "図" target-counter(attr(href url), vs-counter-fig);
}
```

- `vs-counter-fig` は Vivliostyle の base theme で定義されたカウンタ

### 数式の挿入

- MathJax を使って数式を挿入できる

```tex
$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$
```

<div class="vertical-container" style="border: 3px solid ###bbb;">

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

</div>

### 紙面の余白

- ページの余白には、ページ番号や現在の章のタイトルなどを表示する機能
- 一番理解に時間がかかった
- あとで補足する

### 紙面の余白

![](/assets/report-sample/css-paged-media-test.jpg)


### カウンタ変数の定義

- この機能は、普通のブラウザでも使える
- 見出しの番号を実装する際は、見出しではなく見出しをh組んだ `section` 要素に対してカウンタを設定することに注意
- 時間がないので割愛


### 枠を実装してみる

- Markdown のみで実装するのは難しい  
  div 要素で囲んで実現
- 見出し要素がある時は、見出しの部分の背景を白にする

![](/assets/report-sample/report-sample_03.jpg){style="border:3px solid ###bbb"}


### 今後やってみたいこと

- マークダウン記法を独自に拡張
- 自作スタイルの見た目の改善
- 書籍の組版
  - 目次の自動生成
  - 章ごとに異なる位置のツメを付ける