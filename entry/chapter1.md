## Vivliostyle の全体像


##

### そもそも Vivliostyle って？

- CSS 組版のためのソフトウェア
  - HTML/CSS などの Web 技術で組版をする
- traP Tech Book で、PDF を出力する際に使用している<br>らしい...？

### 組版とは？

- 印刷物の紙面に文字や図などを配置し、レイアウトする
- フォント、文字サイズ、行間の広さ、1 行の文字数、<br>改行位置、余白....　などについて考える
- 例えば...
  - 見出し：プロポーショナルフォント
  - 本文：等幅フォント

### 組版ソフトの例：Word

- 簡単
- WISIWG（What You See Is What You Get）
- お金がかかる
- 構造化された文章を書くのがつらい

### 組版ソフトの例：Word

![](./assets/word_tokikake.png){style="border:1px solid ###bbb"}

<!-- <div class="vertical-container"> -->

<!-- <img src="./assets/word_tokikake.png" width="600px" style="margin: 0 auto; border: 1px solid ###aaa; overflow: hidden;"> -->

<!-- </div> -->

### 組版ソフトの例：Word

![](./assets/word_tokikake_content.png){style="border:1px solid ###bbb"}

<!-- <div class="vertical-container"> -->

<!-- <img src="./assets/word_tokikake_content.png" width="900px" style="margin: 0 auto; border: 1px solid ###aaa;"> -->

<!-- </div> -->

### 組版ソフトの例：Indesign

- ほとんど使ったことがないので僕はわかりません
- 組版ソフトウェアのデファクトスタンダードらしい

### 組版ソフトの例：その他

- 朝刊太郎(使ったことはありません)
- 一太郎(使ったことはありません)
- ~~Microsoft Publisher~~
  - 26 年でサポートが切れるらしい

### 組版ソフトの例：？？？

<!-- <img src="./assets/powerpoint_poster.jpg" width="350px" style="margin: 0 auto;"> -->

![](./assets/powerpoint_poster.jpg)

<!-- <img src="./assets/powerpoint_poster.jpg"> -->

### 組版ソフトの例：？？？

![](./assets/powerpoint_poster_up.jpg)

<!-- <img src="./assets/powerpoint_poster_up.jpg" width="700px" style="margin: 0 auto;"> -->

### 組版ソフトの例：？？？

![](./assets/powerpoint_poster_down.jpg)

<!-- <img src="./assets/powerpoint_poster_down.jpg" width="700px" style="margin: 0 auto;"> -->

### 組版ソフトの例：PowerPoint

![](./assets/powerpoint_window.jpg)

<!-- <img src="./assets/powerpoint_window.jpg" width="700px" style="margin: 0 auto;"> -->

### 組版ソフトの例：$\mathrm \TeX$

![](./assets/tex_sample.png)

<!-- <img src="./assets/tex_sample.png" width="900px" style="margin: 0 auto; border: 1px solid ###aaa;"> -->

### Vivliostyle を用いた組版の流れ

- 入力ファイル
  - 原稿
    - Markdown
    - HTML
  - スタイルファイル
    - 公式・非公式テーマ
    - 自分で作った CSS ファイル

### Vivliostyle を用いた組版の流れ

- 出力ファイル
  - 一時ファイル
    - HTML (Markdown を入力した場合)
    - pablication.json （出力するドキュメントの情報をまとめたファイル）
  - 完成品
    - PDF
    - EPUB

### 内部の仕組み

（詳しくは公式ドキュメントやソースコードを参照のこと）

- Vivliostyle.js
- Vivliostyle CLI
  <!-- - を定義したCSSファイルを元に、印刷可能なPDFファイルを生成する。 -->
  - PDF 生成には、内部で Chromium を使用している