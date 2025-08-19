import React from 'react';
import styled from 'styled-components';
import { colors, theme } from './ColorSystem';

// ========================================
// TOKEN 使用範例
// ========================================
// 
// 這個檔案展示了如何在組件中使用 Color System tokens
// 所有顏色和樣式都通過 token 管理，確保一致性
// ========================================

const ExampleContainer = styled.div`
  background: ${colors.background.primary};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  font-family: ${theme.typography.fontFamily.primary};
`;

const Title = styled.h1`
  color: ${colors.text.primary};
  font-size: ${theme.typography.fontSize.xxl};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
`;

const Subtitle = styled.h2`
  color: ${colors.text.secondary};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.md};
`;

const Card = styled.div`
  background: ${colors.background.secondary};
  border: 1px solid ${colors.border.light};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
  transition: ${theme.transitions.normal};

  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled.button`
  background: ${colors.primary[500]};
  color: ${colors.text.inverse};
  border: none;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${theme.transitions.normal};

  &:hover {
    background: ${colors.primary[700]};
  }

  &:disabled {
    background: ${colors.neutral[300]};
    color: ${colors.text.disabled};
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled.button`
  background: ${colors.secondary[500]};
  color: ${colors.text.primary};
  border: none;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${theme.transitions.normal};

  &:hover {
    background: ${colors.secondary[700]};
  }
`;

const TextButton = styled.button`
  background: transparent;
  color: ${colors.primary[500]};
  border: none;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${theme.transitions.normal};

  &:hover {
    background: ${colors.primaryTransparent[8]};
  }
`;

const StatusBadge = styled.span`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  
  &.success {
    background: ${colors.semantic.success};
    color: ${colors.text.inverse};
  }
  
  &.warning {
    background: ${colors.semantic.warning};
    color: ${colors.text.inverse};
  }
  
  &.error {
    background: ${colors.semantic.error};
    color: ${colors.text.inverse};
  }
  
  &.info {
    background: ${colors.semantic.info};
    color: ${colors.text.inverse};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const TokenUsageExample = () => {
  return (
    <ExampleContainer>
      <Title>Token 使用範例</Title>
      
      <Subtitle>按鈕組件</Subtitle>
      <ButtonGroup>
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <TextButton>Text Button</TextButton>
        <PrimaryButton disabled>Disabled Button</PrimaryButton>
      </ButtonGroup>

      <Subtitle>狀態標籤</Subtitle>
      <ButtonGroup>
        <StatusBadge className="success">Success</StatusBadge>
        <StatusBadge className="warning">Warning</StatusBadge>
        <StatusBadge className="error">Error</StatusBadge>
        <StatusBadge className="info">Info</StatusBadge>
      </ButtonGroup>

      <Subtitle>卡片組件</Subtitle>
      <Card>
        <h3 style={{ color: colors.text.primary, marginBottom: theme.spacing.sm }}>
          這是一個使用 Token 的卡片
        </h3>
        <p style={{ color: colors.text.secondary, lineHeight: 1.6 }}>
          所有顏色、間距、字體、圓角等都通過 Token 系統管理。
          更改 Token 值即可統一調整所有組件的樣式。
        </p>
      </Card>

      <Card>
        <h3 style={{ color: colors.text.primary, marginBottom: theme.spacing.sm }}>
          Token 優勢
        </h3>
        <ul style={{ color: colors.text.secondary, lineHeight: 1.6 }}>
          <li>一致性：所有組件使用統一的設計語言</li>
          <li>可維護性：修改 Token 即可影響所有相關組件</li>
          <li>可擴展性：輕鬆添加新的顏色變體</li>
          <li>主題支援：可以輕鬆實現深色模式等主題切換</li>
        </ul>
      </Card>
    </ExampleContainer>
  );
};

export default TokenUsageExample;
