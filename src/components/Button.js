import React, { useState, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Icon from './Icon';
import { colors, theme } from './ColorSystem';

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  pointer-events: none;
`;

const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background: ${props => {
    // 根據按鈕變體決定 Ripple 顏色
    if (props.variant === 'primary-text') {
      return colors.primaryTransparent[8];
    } else if (props.variant === 'secondary-text') {
      return colors.secondaryTransparent[8];
    } else if (props.variant === 'primary') {
      return 'rgba(255, 255, 255, 0.3)'; // 白色半透明，適合綠色背景
    } else if (props.variant === 'secondary') {
      return 'rgba(255, 255, 255, 0.3)'; // 白色半透明，適合黃色背景
    }
    return 'rgba(255, 255, 255, 0.3)'; // 預設
  }};
  transform: scale(0);
  animation: ${rippleAnimation} 0.6s linear;
  pointer-events: none;
`;

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  text-align: center;
  white-space: nowrap;
  user-select: none;
  outline: none;
  overflow: hidden;
  
  /* 禁用状态 */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* 尺寸变体 */
  ${props => props.size === 'medium' && css`
    height: 40px;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.lg};
    line-height: 1.333;
  `}

  ${props => props.size === 'large' && css`
    height: 48px;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.xl};
    line-height: 1.3;
  `}

  /* Primary 变体 */
  ${props => props.variant === 'primary' && css`
    background-color: ${colors.primary[500]};
    color: ${colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: ${colors.primary[700]};
    }

    &:active:not(:disabled) {
      background-color: ${colors.primary[700]};
      transform: translateY(1px);
    }

    &:disabled {
      background-color: ${colors.neutral[300]};
      color: ${colors.text.disabled};
    }
  `}

  /* Primary Text 变体 */
  ${props => props.variant === 'primary-text' && css`
    background-color: transparent;
    color: ${colors.primary[500]};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${colors.primaryTransparent[8]};
      color: ${colors.primary[500]};
    }

    &:active:not(:disabled) {
      background-color: ${colors.primaryTransparent[8]};
      color: ${colors.primary[500]};
      transform: translateY(1px);
    }

    &:disabled {
      background-color: transparent;
      color: ${colors.text.disabled};
    }
  `}

  /* Secondary 变体 */
  ${props => props.variant === 'secondary' && css`
    background-color: ${colors.secondary[500]};
    color: ${colors.text.primary};

    &:hover:not(:disabled) {
      background-color: ${colors.secondary[700]};
    }

    &:active:not(:disabled) {
      background-color: ${colors.secondary[700]};
      transform: translateY(1px);
    }

    &:disabled {
      background-color: ${colors.neutral[300]};
      color: ${colors.text.disabled};
    }
  `}

  /* Secondary Text 变体 */
  ${props => props.variant === 'secondary-text' && css`
    background-color: transparent;
    color: ${colors.secondary[500]};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${colors.secondaryTransparent[8]};
      color: ${colors.secondary[700]};
    }

    &:active:not(:disabled) {
      background-color: ${colors.secondaryTransparent[12]};
      color: ${colors.secondary[700]};
      transform: translateY(1px);
    }

    &:disabled {
      background-color: transparent;
      color: ${colors.text.disabled};
    }
  `}

  /* 状态覆盖 */
  ${props => props.state === 'hover' && css`
    ${props.variant === 'primary' && css`
      background-color: ${colors.primary[700]};
    `}
    
    ${props.variant === 'primary-text' && css`
      background-color: ${colors.primaryTransparent[8]};
      color: ${colors.primary[500]};
    `}
    
    ${props.variant === 'secondary' && css`
      background-color: ${colors.secondary[700]};
    `}
    
    ${props.variant === 'secondary-text' && css`
      background-color: ${colors.secondaryTransparent[8]};
      color: ${colors.secondary[700]};
    `}
  `}

  ${props => props.state === 'pressed' && css`
    ${props.variant === 'primary' && css`
      background-color: ${colors.primary[700]};
      transform: translateY(1px);
    `}
    
    ${props.variant === 'primary-text' && css`
      background-color: ${colors.primaryTransparent[8]};
      color: ${colors.primary[500]};
      transform: translateY(1px);
    `}
    
    ${props.variant === 'secondary' && css`
      background-color: ${colors.secondary[700]};
      transform: translateY(1px);
    `}
    
    ${props.variant === 'secondary-text' && css`
      background-color: ${colors.secondaryTransparent[12]};
      color: ${colors.secondary[700]};
      transform: translateY(1px);
    `}
  `}

  /* Selected 状态 */
  ${props => props.state === 'selected' && css`
    ${props.variant === 'primary' && css`
      background-color: ${colors.primary[500]};
      color: ${colors.text.inverse};
    `}
    
    ${props.variant === 'primary-text' && css`
      background-color: ${colors.primaryTransparent[8]};
      color: ${colors.primary[500]};
    `}
    
    ${props.variant === 'secondary' && css`
      background-color: ${colors.secondary[500]};
      color: ${colors.text.primary};
    `}
    
    ${props.variant === 'secondary-text' && css`
      background-color: ${colors.secondaryTransparent[8]};
      color: ${colors.secondary[500]};
    `}
  `}

  /* 焦点状态 */
  &:focus-visible {
    box-shadow: 0 0 0 3px ${colors.primaryTransparent[24]};
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    ${props => props.size === 'medium' && css`
      height: 36px;
      padding: 6px 12px;
      font-size: ${theme.typography.fontSize.md};
    `}

    ${props => props.size === 'large' && css`
      height: 44px;
      padding: 10px 16px;
      font-size: ${theme.typography.fontSize.lg};
    `}
  }
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  state = 'default',
  disabled = false,
  onClick,
  type = 'button',
  iconStart,
  iconEnd,
  ...props 
}) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const createRipple = (event) => {
    if (disabled) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = {
      id: Date.now(),
      x,
      y,
      size
    };

    setRipples(prev => [...prev, ripple]);

    // 清理 ripple
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 600);
  };

  const handleClick = (event) => {
    createRipple(event);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <StyledButton
      ref={buttonRef}
      variant={variant}
      size={size}
      state={state}
      disabled={disabled}
      onClick={handleClick}
      type={type}
      {...props}
    >
      <RippleContainer>
        {ripples.map(ripple => (
          <Ripple
            key={ripple.id}
            variant={variant}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </RippleContainer>
      {iconStart && <Icon name={iconStart} position="start" />}
      {children}
      {iconEnd && <Icon name={iconEnd} position="end" />}
    </StyledButton>
  );
};

export default Button;
