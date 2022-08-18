# 東南亞車牌辨識系統

## 安裝
```
npm i
```

## 啟動
```
npm start
```

## 工作份配

### 前端
|項目 |人員
|-|-
|違規記錄 | Sang
|車牌辨識 | ...
|即時影像 | Cray
|語言 | Berlin
|登入/註冊/個人資料/使用者管理 | ...

### 後端
|項目 |人員
|-|-
|LPR |Berlin
|DB |Berlin
|Web Security |Berlin
|後端 API |Berlin

## 開發原則

### 20220818
原則上將自己的 Component 載入各分頁的 Component 底下即可。例如做即時影像的人，先在 src 底下新增 live 資料夾將自己的 Component 複製過來，到 tab/Live.js 將
```
<h2>
  即時影像內容...
</h2>
```
替換成自己的 Component。