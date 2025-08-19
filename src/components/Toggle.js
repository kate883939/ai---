import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors, theme } from './ColorSystem';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  background: ${colors.primaryTransparent[12]};
  border-radius: ${theme.borderRadius.xl};
  width: fit-content;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.333;
  cursor: pointer;
  transition: ${theme.transitions.normal};
  height: 40px;
  min-width: 100px;
  flex: 1;
  
  /* 選中狀態 */
  ${props => props.selected && css`
    background: ${colors.primary[500]};
    color: ${colors.text.inverse};
  `}
  
  /* 未選中狀態 */
  ${props => !props.selected && css`
    background: transparent;
    color: ${colors.primary[500]};
    
    &:hover {
      background: ${colors.primaryTransparent[8]};
    }
  `}
  
  /* 禁用狀態 */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Toggle = ({ 
  options = [
    { label: '檔案上傳', value: 'file' },
    { label: '文字上傳', value: 'text' }
  ],
  value,
  onChange,
  disabled = false,
  ...props 
}) => {
  return (
    <ToggleContainer {...props}>
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          selected={value === option.value}
          disabled={disabled}
          onClick={() => !disabled && onChange?.(option.value)}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ToggleContainer>
  );
};

export default Toggle;
