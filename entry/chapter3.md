## 実際に使ってみる{#chapter3}

##

### インストール・環境構築 1

- 使い方
  - `npm create book {プロジェクト名}`
    - CLI の質問に答えることで、プロジェクトを作成できる
    - テーマを選択（今回は academic を使用）
  - `npm run preview`
    - ブラウザでプレビューが可能
  - `npm run build`
    - PDF を生成する

### インストール・環境構築 2

- プロジェクトを作成  
- メニューに従って選択

![](./../assets/install/install_01.jpg)

<!-- <div class="horizontal-container"> -->
  <!-- <img src="../assets/install/install_01.jpg" style="display: block; margin-left: auto; margin-right: auto; height:70%; padding-block:0.5em;"> -->
<!-- </div> -->

### インストール・環境構築 3

![](./../assets/install/install_02.jpg)

### インストール・環境構築 4

![](./../assets/install/install_03.jpg)

- テーマを選択
  - 今回は公式テーマである `academic` を選択


### インストール・環境構築 5

- プロジェクトを生成中

![](./../assets/install/install_04.jpg)

### インストール・環境構築 6

- 準備完了

![](./../assets/install/install_05.jpg)

### インストール・環境構築 7

- VSCode でディレクトリを開く

![](./../assets/install/install_06.jpg)

### インストール・環境構築 8

`.vivliostyle` ディレクトリを除外する

```bash title=.gitignore
### Vivliostyle
.vivliostyle/*

### Logs
logs
*.log  ### ...(略)
```

### インストール・環境構築 9

<!-- main ブランチではなく master ブランチになっているので注意 -->

![](./../assets/install/install_08.jpg)

### サンプルを表示してみる

- `npm run preview` を実行すると、ブラウザでプレビューが表示される

![](./../assets/install/install_09.jpg)

<!-- ### サンプルを出力してみる

（VSCodeでマークダウンを開き、ブラウザでプレビューをを開いている画像） -->