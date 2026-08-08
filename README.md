# 守護天使的生涯大冒險

這個版本是 GitHub Pages + Firebase 架構：

- 前台與後台都是 Vite React 靜態網頁。
- 遊戲內容存在 Firebase Firestore。
- 後台登入使用 Firebase Authentication 的 Email/Password。
- 新增角色 JSON 後，按「發布修改」會寫入 Firestore。

## 本機啟動

```bash
npm install
cp .env.example .env.local
npm run dev
```

接著打開終端機顯示的網址。遊戲首頁是 `#/`，後台是 `#/admin`。

## Firebase 設定

在 Firebase 建立專案後，新增 Web App，將 SDK config 填到 `.env.local`：

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

Authentication 請開啟 Email/Password，並新增一個主持人帳號。

Firestore 建議規則：

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /career-game/config {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /career-game/game {
      allow read, write: if true;
    }
  }
}
```

如果你不想讓學生也能直接寫入本局進度，需要改成由主持人操作遊戲，或再加一層 callable backend；目前這版是為了 GitHub Pages 靜態網站，前台遊戲會直接寫入 `career-game/game`。

## GitHub Pages 部署

1. 到 GitHub repo 的 Settings > Pages，Source 選 GitHub Actions。
2. 到 Settings > Secrets and variables > Actions > Variables，新增 `.env.example` 裡同名的 `VITE_FIREBASE_*` 變數。
3. push 到 `main`，`.github/workflows/pages.yml` 會自動部署 `dist/`。

如果部署在 project page，workflow 會自動把 `BASE_PATH` 設成 `/<repo-name>/`。

## 常用指令

```bash
npm run dev
npm run build
npm run preview
npm test
```

## 內容設計文件

新增職業角色、卡片與階段劇情時，請先參考 [角色內容生成規格](docs/ROLE_CONTENT_GUIDE.md)。
