# 智頭★地図

智頭のスポットをGoogle Street View APIで自動表示するサービスです。

## スポットの追加方法

`markers.csv` を変更するとGitHub Pagesの機能により自動的に http://code4tottori.org/chizu-chizu/ へ反映されます。

`markers.csv` の編集は[こちら](https://github.com/code4tottori/chizu-chizu/edit/master/markers.csv)から行えます。

### CSVの仕様

|name|必須|説明
|-----|-----|-----|
|lat|true|緯度|
|lng|true|経度|
|heading||カメラのコンパスの向首方向（0〜360）|
|fov||画像のビューの水平方向の視野（0〜120）|
|pitch||カメラ角度（上向きや下向き）（-90〜90）|
|title|true|表題||
|description|true|説明||
|url||リンク||

`heading`, `fov`, `pitch`は[Google Street View Image API](https://developers.google.com/maps/documentation/streetview/intro?hl=ja)に準じます。

### 制限事項

Google APIの無料プランの制限によりマップのロードが24時間あたり25,000回を越えると画像が表示されません。

## ライセンス

MIT License
