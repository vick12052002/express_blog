##  鹹酥雞聯盟 blog
![鹹酥雞聯盟](https://i.imgur.com/eBvviy6.png)
因為喜好吃鹹酥雞，想記錄全台各地的鹹酥雞，啟發規劃了部落格，是個以 Node.js + Express 上，簡易 MVC 架構實作。


### 緣起
因為喜好吃鹹酥雞，想記錄全台各地的鹹酥雞，啟發規劃了部落格，加上實踐「[程式導師實驗計畫](https://bootcamp.lidemy.com/syllabus.html)」課內所學，因而以 Node.js + Express 建立了簡易的部落格，未來將會陸續開發新功能，例如：遊客留言版、活動抽獎、串接店家地圖 API 等

### 功能

遊客
- 瀏覽所有文章、單筆文章
- 瀏覽分類

管理員
- 新增、編輯、刪除文章
- 新增文章分類 

## DEMO
[鹹酥雞聯盟](http://blog.alirong.tw/)

管理員

帳號：aaa   密碼：aaa


## 使用技術 

-  Node.js - 專案執行環境
-  Express - 為 Node.js 輕量型的框架，可快速建立 Web 架構
-  mySQL - 建立及操作使用者、文章資料庫
-  Sequelize - 以物件導向的概念去操作資料庫語言( SQL )
-  bcrypt - 將管理員的密碼加密
-  Sequelize cli - 使用 CLI 快速建立關聯資料庫
-  body-parser - 將 app 所有的請求進行攔截和解析
-  PM2 -運行在 AWS EC2 主機上
-  ckeditor - 提供簡易文章編輯

## 專案安裝流程
1. clone this repository
``` 
git clone https://github.com/vick12052002/express_blog
```

2. 安裝套件
```
npm install
```

3. 在本地端開啟此專案
```
yarn start
```
## 聲明
本網站僅作為個人練習，註冊時請勿使用真實資料。另本網站包含之圖片與內容僅作練習使用，不作任何商業用途

## 資料來源
[pixabay](https://www.pexels.com/zh-tw/@pixabay)