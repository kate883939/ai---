# AI EssayGo 首頁

基於南一設計系統的 AI 作文批改系統首頁，使用純 HTML、CSS 和 JavaScript 開發。

## 📁 檔案結構

```
ai改作文/
├── ai-essay-go-homepage.html    # 主要 HTML 檔案
├── styles/
│   └── ai-essay-go.css         # 樣式檔案
├── scripts/
│   └── ai-essay-go.js          # JavaScript 功能檔案
└── README.md                   # 說明文件
```

## 🎨 設計系統

本專案使用南一的設計系統，包含：

### 顏色系統
- **Primary**: 主要品牌色 (#00A15D)
- **Secondary**: 次要品牌色 (#E3CE00)
- **Neutral**: 中性色系
- **Semantic**: 語義色（成功、警告、錯誤、資訊）

### 字體系統
- **字體**: Noto Sans TC
- **字重**: 300-900
- **字體大小**: 12px - 55px

### 間距系統
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **xxl**: 48px

## 🚀 功能特色

### 1. 響應式設計
- 支援桌面、平板、手機等不同螢幕尺寸
- 使用 CSS Grid 和 Flexbox 佈局
- 流暢的過渡動畫效果

### 2. 檔案上傳功能
- 支援拖拽上傳
- 檔案類型驗證（PDF、JPG、PNG、TXT）
- 檔案大小限制（10MB）
- 多檔案上傳支援

### 3. 文字編輯器
- 模態框文字輸入
- 字數統計和限制
- 即時驗證

### 4. 表單驗證
- 必填欄位檢查
- 即時錯誤提示
- 使用者友善的錯誤訊息

### 5. 互動效果
- 懸停動畫
- 載入狀態
- 通知系統
- 手風琴展開/收合

## 🛠️ 使用方式

### 1. 直接開啟
```bash
# 在瀏覽器中直接開啟 HTML 檔案
open ai-essay-go-homepage.html
```

### 2. 本地伺服器（推薦）
```bash
# 使用 Python 建立本地伺服器
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 然後在瀏覽器中開啟 http://localhost:8000
```

## 📱 頁面結構

### Header 區域
- Logo 和品牌名稱
- 使用次數顯示
- 用戶帳戶按鈕

### Banner 區域
- 品牌標識
- 產品特色標籤
- 產品描述
- 插圖展示

### 上傳區域
- 檔案上傳 / 文字上傳切換
- 拖拽上傳支援
- 檔案驗證和提示

### 表單區域
- 學制選擇（國小/國中/高中）
- 作文標題輸入
- 進階設定（可展開）

### 主要按鈕
- 開始批改功能
- 載入狀態顯示

## 🔧 自訂設定

### 修改顏色
在 `styles/ai-essay-go.css` 中修改 CSS 變數：

```css
:root {
    --primary-500: #00A15D;  /* 主要品牌色 */
    --secondary-500: #E3CE00; /* 次要品牌色 */
    /* 其他顏色... */
}
```

### 修改字體
```css
:root {
    --font-family-primary: 'Noto Sans TC', sans-serif;
}
```

### 修改間距
```css
:root {
    --spacing-md: 16px;  /* 中等間距 */
    --spacing-lg: 24px;  /* 大間距 */
}
```

## 📋 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎯 開發指南

### 添加新功能
1. 在 `scripts/ai-essay-go.js` 中添加 JavaScript 功能
2. 在 `styles/ai-essay-go.css` 中添加對應樣式
3. 在 HTML 中添加必要的元素

### 修改樣式
1. 優先使用設計系統的 CSS 變數
2. 遵循現有的命名規範
3. 確保響應式設計

### 添加互動功能
1. 使用現有的事件處理模式
2. 添加適當的錯誤處理
3. 提供使用者回饋

## 📄 授權

© NANI BOOK ENTERPRISE CO., LTD. All Rights Reserved.

## 🤝 貢獻

如需修改或改進，請：
1. 遵循現有的程式碼風格
2. 保持設計系統的一致性
3. 測試不同瀏覽器的相容性
4. 確保響應式設計正常運作
