import React, { useState, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
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
  background: ${colors.primaryTransparent[16]};
  transform: scale(0);
  animation: ${rippleAnimation} 0.6s linear;
  pointer-events: none;
`;

const StyledAccountButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.md};
  background: transparent;
  cursor: pointer;
  transition: ${theme.transitions.normal};
  font-family: ${theme.typography.fontFamily.primary};
  outline: none;
  user-select: none;
  overflow: hidden;

  /* 禁用狀態 */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* 狀態變體 */
  ${props => props.state === 'default' && css`
    background: transparent;
    
    &:hover:not(:disabled) {
      background: ${colors.primaryTransparent[8]};
    }

    &:active:not(:disabled) {
      background: ${colors.primaryTransparent[12]};
      transform: translateY(1px);
    }
  `}

  ${props => props.state === 'hover' && css`
    background: ${colors.primaryTransparent[8]};
  `}

  ${props => props.state === 'pressed' && css`
    background: ${colors.primaryTransparent[12]};
    transform: translateY(1px);
  `}

  ${props => props.state === 'selected' && css`
    background: ${colors.primaryTransparent[8]};
  `}

  /* 焦點狀態 */
  &:focus-visible {
    box-shadow: 0 0 0 3px ${colors.primaryTransparent[24]};
  }
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const UserIcon = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  
  /* 頭部圓形 */
  &::before {
    content: '';
    position: absolute;
    top: 2.25px;
    left: 6px;
    width: 6px;
    height: 6px;
    background-color: ${colors.text.inverse};
    border-radius: 50%;
  }
  
  /* 身體部分 */
  &::after {
    content: '';
    position: absolute;
    bottom: 2.25px;
    left: 3.75px;
    width: 10.5px;
    height: 6px;
    background-color: ${colors.text.inverse};
    border-radius: 3px;
  }
`;

const UserName = styled.span`
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.333;
  color: ${colors.text.primary};
  white-space: nowrap;
`;

const AccountButton = ({ 
  userName = '王老師',
  state = 'default',
  disabled = false,
  onClick,
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
    <StyledAccountButton
      ref={buttonRef}
      state={state}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <RippleContainer>
        {ripples.map(ripple => (
          <Ripple
            key={ripple.id}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </RippleContainer>
      <IconContainer>
        <UserIcon />
      </IconContainer>
      <UserName>{userName}</UserName>
    </StyledAccountButton>
  );
};

export default AccountButton;
