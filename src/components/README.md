# 組件文檔

## Button 組件

基於Figma設計規範的可重用按鈕組件。

### Props

| 屬性 | 類型 | 預設值 | 描述 |
|------|------|--------|------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 按鈕變體 |
| `size` | `'medium' \| 'large'` | `'medium'` | 按鈕尺寸 |
| `state` | `'default' \| 'hover' \| 'pressed'` | `'default'` | 按鈕狀態 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `iconStart` | `string` | - | 開始圖標名稱 |
| `iconEnd` | `string` | - | 結束圖標名稱 |
| `onClick` | `function` | - | 點擊事件處理器 |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | 按鈕類型 |

### 使用範例

```jsx
import Button from './components/Button';

// 基本使用
<Button variant="primary" size="large">
  開始批改
</Button>

// 帶圖標
<Button variant="secondary" size="medium" iconStart="upload">
  選擇檔案
</Button>

// 禁用狀態
<Button variant="primary" size="large" disabled>
  開始批改
</Button>

// 事件處理
<Button 
  variant="primary" 
  size="large" 
  onClick={() => console.log('按鈕被點擊')}
>
  點擊我
</Button>
```

### 設計規範

#### 顏色
- **Primary**: #00A15D (預設), #007141 (懸停/按下)
- **Secondary**: #E3CE00 (預設), #C3AF00 (懸停/按下)
- **Disabled**: rgba(145, 158, 171, 0.24) (背景), rgba(145, 158, 171, 0.8) (文字)

#### 尺寸
- **Medium**: 40px 高度, 8px 16px 內邊距, 18px 字體
- **Large**: 48px 高度, 12px 20px 內邊距, 20px 字體

#### 字體
- 字體族: Noto Sans TC
- 字重: 700 (Bold)
- 圓角: 6px

## Icon 組件

簡單的圖標組件，使用 emoji 作為圖標。

### Props

| 屬性 | 類型 | 預設值 | 描述 |
|------|------|--------|------|
| `name` | `string` | - | 圖標名稱 |
| `size` | `string` | `'16px'` | 圖標尺寸 |
| `position` | `'start' \| 'end'` | `'start'` | 圖標位置 |

### 支援的圖標

- `upload`, `download`, `edit`, `check`, `close`
- `arrow`, `plus`, `minus`, `star`, `heart`
- `search`, `settings`, `user`, `home`
- `file`, `folder`, `image`, `video`, `audio`
- `loading`, `success`, `error`, `warning`, `info`

### 使用範例

```jsx
import Icon from './components/Icon';

<Icon name="upload" size="20px" position="start" />
```

## AccountButton 組件

基於Figma設計規範的用戶帳戶按鈕組件。

### Props

| 屬性 | 類型 | 預設值 | 描述 |
|------|------|--------|------|
| `userName` | `string` | `'王老師'` | 用戶名稱 |
| `state` | `'default' \| 'hover' \| 'pressed'` | `'default'` | 按鈕狀態 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `onClick` | `function` | - | 點擊事件處理器 |

### 使用範例

```jsx
import AccountButton from './components/AccountButton';

// 基本使用
<AccountButton userName="王老師" />

// 不同狀態
<AccountButton userName="張老師" state="hover" />
<AccountButton userName="陳老師" state="pressed" />

// 事件處理
<AccountButton 
  userName="王老師" 
  onClick={() => console.log('用戶按鈕被點擊')}
/>

// 禁用狀態
<AccountButton userName="王老師" disabled />
```

### 設計規範

#### 佈局
- 圓形用戶圖標 (24px × 24px)
- 用戶名稱文字 (18px, Noto Sans TC, 500字重)
- 8px 間距
- 6px 圓角

#### 顏色
- 圖標背景: #00A15D
- 圖標內容: #FFFFFF
- 文字顏色: #212B36
- Hover/Pressed 背景: rgba(0, 161, 93, 0.08)

#### 狀態
- **Default**: 透明背景
- **Hover**: 淺綠色背景
- **Pressed**: 淺綠色背景 + 輕微下移效果