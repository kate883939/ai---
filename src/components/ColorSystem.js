import React from 'react';
import styled from 'styled-components';

// ========================================
// COLOR SYSTEM TOKENS - 顏色系統令牌
// ========================================
// 
// 使用方式：
// 1. 在組件中引入：import { colors, theme } from './ColorSystem';
// 2. 使用 token：background-color: ${colors.primary[500]};
// 3. 更改顏色：只需修改此檔案中的顏色值即可
//
// 主要 Token 分類：
// - primary: 主要品牌色 (綠色系)
// - secondary: 次要品牌色 (黃色系)
// - neutral: 中性色 (灰階)
// - semantic: 語義色 (成功、警告、錯誤、資訊)
// - background: 背景色
// - text: 文字色
// - border: 邊框色
// - shadow: 陰影色
// - alpha: 透明度色
//
// 更改顏色範例：
// 如果要將主要綠色改為藍色，只需修改：
// primary: { 500: '#00A15D' } → primary: { 500: '#0066CC' }
// 所有使用此 token 的組件會自動更新
// ========================================

// 顏色系統定義
export const colors = {
  // 主要品牌色
  primary: {
    50: '#EAF9E8', // Lighter
    100: '#C1EDDC', // Light
    500: '#00A15D', // Main
    700: '#007141', // Dark
  },
  // Primary Transparent 顏色
  primaryTransparent: {
    8: 'rgba(0, 161, 93, 0.08)',
    12: 'rgba(0, 161, 93, 0.12)',
    16: 'rgba(0, 161, 93, 0.16)',
    24: 'rgba(0, 161, 93, 0.24)',
    32: 'rgba(0, 161, 93, 0.32)',
    48: 'rgba(0, 161, 93, 0.48)',
  },
  // 次要品牌色
  secondary: {
    50: '#FDFACA', // Lighter
    100: '#F6EB62', // Light
    500: '#E3CE00', // Main
    700: '#C3AF00', // Dark
    900: '#837300', // Darker
  },
  // Secondary Transparent 顏色
  secondaryTransparent: {
    8: 'rgba(227, 206, 0, 0.08)',
    12: 'rgba(227, 206, 0, 0.12)',
    16: 'rgba(227, 206, 0, 0.16)',
    24: 'rgba(227, 206, 0, 0.24)',
    32: 'rgba(227, 206, 0, 0.32)',
    48: 'rgba(227, 206, 0, 0.48)',
  },
  // Info 顏色
  info: {
    50: '#D0F2FF', // Lighter
    100: '#74CAFF', // Light
    500: '#1890FF', // Main
    700: '#0C53B7', // Dark
    900: '#04297A', // Darker
  },
  // Info Transparent 顏色
  infoTransparent: {
    8: 'rgba(24, 144, 255, 0.08)',
    12: 'rgba(24, 144, 255, 0.12)',
    16: 'rgba(24, 144, 255, 0.16)',
    24: 'rgba(24, 144, 255, 0.24)',
    32: 'rgba(24, 144, 255, 0.32)',
    48: 'rgba(24, 144, 255, 0.48)',
  },
  // 中性色
  neutral: {
    50: '#F9FAFB',
    100: '#F4F6F8',
    200: '#DFE3E8',
    300: '#C4CDD5',
    400: '#919EAB',
    500: '#637381',
    600: '#454F5B',
    700: '#212B36',
    800: '#161C24',
    900: '#000000',
  },
  // 語義色
  semantic: {
    success: {
      50: '#E9FCD4', // Lighter
      100: '#AAF27F', // Light
      500: '#54D62C', // Main
      700: '#229A16', // Dark
      900: '#08660D', // Darker
    },
    // Success Transparent 顏色
    successTransparent: {
      8: 'rgba(84, 214, 44, 0.08)',
      12: 'rgba(84, 214, 44, 0.12)',
      16: 'rgba(84, 214, 44, 0.16)',
      24: 'rgba(84, 214, 44, 0.24)',
      32: 'rgba(84, 214, 44, 0.32)',
      48: 'rgba(84, 214, 44, 0.48)',
    },
    warning: {
      50: '#FFF6D8',
      100: '#FFDC8A',
      500: '#FFB73D',
      700: '#B7731E',
      900: '#7A400B',
    },
    // Warning Transparent 顏色
    warningTransparent: {
      8: 'rgba(255, 183, 61, 0.08)',
      12: 'rgba(255, 183, 61, 0.12)',
      16: 'rgba(255, 183, 61, 0.16)',
      24: 'rgba(255, 183, 61, 0.24)',
      32: 'rgba(255, 183, 61, 0.32)',
      48: 'rgba(255, 183, 61, 0.48)',
    },
    error: {
      50: '#FFE7D9',
      100: '#FFA48D',
      500: '#FF4842',
      700: '#B72136',
      900: '#7A0C2E',
    },
    // Error Transparent 顏色
    errorTransparent: {
      8: 'rgba(255, 72, 66, 0.08)',
      12: 'rgba(255, 72, 66, 0.12)',
      16: 'rgba(255, 72, 66, 0.16)',
      24: 'rgba(255, 72, 66, 0.24)',
      32: 'rgba(255, 72, 66, 0.32)',
      48: 'rgba(255, 72, 66, 0.48)',
    },
  },
  // 背景色
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
    neutral: '#F4F6F8',
  },
  // 文字色
  text: {
    primary: '#212B36',
    secondary: '#637381',
    disabled: '#919EAB',
    inverse: '#FFFFFF',
  },
  // 邊框色
  border: {
    light: 'rgba(145, 158, 171, 0.12)',
    main: 'rgba(145, 158, 171, 0.24)',
  },
  // 陰影色
  shadow: {
    light: 'rgba(145, 158, 171, 0.08)',
    main: 'rgba(145, 158, 171, 0.16)',
    dark: 'rgba(145, 158, 171, 0.24)',
  },
  // Alpha 色
  alpha: {
    primary: 'rgba(0, 161, 93, 0.08)',
    secondary: 'rgba(227, 206, 0, 0.08)',
    info: 'rgba(24, 144, 255, 0.08)',
  }
};

// ========================================
// THEME TOKENS - 主題令牌
// ========================================
// 
// 使用方式：
// 1. 間距：${theme.spacing.md}
// 2. 圓角：${theme.borderRadius.md}
// 3. 字體：${theme.typography.fontFamily.primary}
// 4. 陰影：${theme.shadows.md}
// 5. 過渡：${theme.transitions.normal}
//
// 更改主題範例：
// 如果要將所有圓角改為更圓潤，只需修改：
// borderRadius: { md: '6px' } → borderRadius: { md: '12px' }
// ========================================

// 主題配置
export const theme = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  typography: {
    fontFamily: {
      primary: '"Noto Sans TC", "Public Sans", sans-serif',
      secondary: '"Poppins", sans-serif',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
};

// ========================================
// 快速更改指南
// ========================================
//
// 1. 更改主要品牌色：
//    修改 primary.500 的值即可
//
// 2. 更改次要品牌色：
//    修改 secondary.500 的值即可
//
// 3. 更改透明度：
//    修改對應的 primaryTransparent 或 secondaryTransparent 值
//
// 4. 更改字體：
//    修改 typography.fontFamily.primary 的值
//
// 5. 更改間距：
//    修改 spacing 中的值
//
// 6. 更改圓角：
//    修改 borderRadius 中的值
//
// 所有組件都會自動使用新的 token 值！
// ========================================

// Color System 展示元件
const ColorSystemContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: ${colors.text.primary};
  border-bottom: 3px solid ${colors.primary[500]};
  padding-bottom: 12px;
`;

const ColorSection = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${colors.text.secondary};
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  justify-items: start;
`;

const ColorSwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  border-radius: ${theme.borderRadius.md};
  background: ${props => props.color || colors.background.default};
  border: 1px solid ${colors.border.light};
  min-width: 120px;
  min-height: 80px;
  justify-content: center;
`;

const ColorName = styled.span`
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.sm};
  color: ${props => {
    // 根據背景色決定文字顏色
    if (props.color) {
      const hex = props.color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? colors.text.primary : colors.text.inverse;
    }
    return colors.text.primary;
  }};
`;

const ColorValue = styled.span`
  font-family: ${theme.typography.fontFamily.mono};
  font-weight: ${theme.typography.fontWeight.regular};
  font-size: ${theme.typography.fontSize.xs};
  color: ${props => {
    // 根據背景色決定文字顏色
    if (props.color) {
      const hex = props.color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? colors.text.secondary : colors.text.inverse;
    }
    return colors.text.secondary;
  }};
`;

const ColorSystem = () => {
  return (
    <ColorSystemContainer>
      <Title>Color System</Title>
      
      {/* Primary 顏色 */}
      <ColorSection>
        <SectionTitle>Primary</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.primary).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Primary Transparent 顏色 */}
      <ColorSection>
        <SectionTitle>Primary Transparent</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.primaryTransparent).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}%</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Secondary 顏色 */}
      <ColorSection>
        <SectionTitle>Secondary</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.secondary).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Secondary Transparent 顏色 */}
      <ColorSection>
        <SectionTitle>Secondary Transparent</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.secondaryTransparent).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}%</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Info 顏色 */}
      <ColorSection>
        <SectionTitle>Info</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.info).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Info Transparent 顏色 */}
      <ColorSection>
        <SectionTitle>Info Transparent</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.infoTransparent).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}%</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* 中性色 */}
      <ColorSection>
        <SectionTitle>Neutral</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.neutral).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Success 顏色 */}
      <ColorSection>
        <SectionTitle>Success</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.semantic.success).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Success Transparent 顏色 */}
      <ColorSection>
        <SectionTitle>Success Transparent</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.semantic.successTransparent).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}%</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Warning 顏色 */}
      <ColorSection>
        <SectionTitle>Warning</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.semantic.warning).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Warning Transparent 顏色 */}
      <ColorSection>
        <SectionTitle>Warning Transparent</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.semantic.warningTransparent).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}%</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Error 顏色 */}
      <ColorSection>
        <SectionTitle>Error</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.semantic.error).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>

      {/* Error Transparent 顏色 */}
      <ColorSection>
        <SectionTitle>Error Transparent</SectionTitle>
        <ColorGrid>
          {Object.entries(colors.semantic.errorTransparent).map(([key, value]) => (
            <ColorSwatch key={key} color={value}>
              <ColorName color={value}>{key}%</ColorName>
              <ColorValue color={value}>{value}</ColorValue>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>
    </ColorSystemContainer>
  );
};

export default ColorSystem;
