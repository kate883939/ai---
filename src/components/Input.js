import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, theme } from './ColorSystem';

// Input 組件
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 1144px;
`;

const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 240px;
  padding: 16px;
  border: 2px solid ${props => {
    if (props.status === 'error') return colors.semantic.error[500];
    if (props.status === 'focused') return colors.primary[500];
    return colors.border.main;
  }};
  border-radius: 6px;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: 18px;
  line-height: 1.333;
  font-weight: 400;
  color: ${colors.text.primary};
  background: ${colors.background.default};
  resize: vertical;
  transition: ${theme.transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${colors.primary[500]};
  }
  
  &::placeholder {
    color: ${colors.text.secondary};
  }
`;

const Label = styled.div`
  position: absolute;
  top: -10px;
  left: 14px;
  background: ${colors.background.default};
  padding: 0 2px;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: 14px;
  line-height: 1.286;
  font-weight: 400;
  color: ${props => {
    if (props.status === 'error') return colors.semantic.error[500];
    if (props.status === 'focused') return colors.primary[500];
    return colors.text.primary;
  }};
  z-index: 1;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  right: 4px;
  top: 36px;
  width: 6px;
  height: 64px;
  background: ${colors.text.secondary};
  opacity: 0.48;
  border-radius: 12px;
`;

const HelperText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0 0 16px;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: 16px;
  line-height: 1.375;
  font-weight: 400;
  color: ${colors.semantic.error[500]};
`;

const ErrorIcon = styled.div`
  width: 16px;
  height: 16px;
  background: ${colors.semantic.error[500]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  font-weight: bold;
`;

const CharacterCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: 18px;
  line-height: 1.333;
  font-weight: 400;
  color: ${colors.text.secondary};
`;

const CountText = styled.span`
  text-align: right;
`;

const Input = ({ 
  status = 'default', 
  placeholder = '在這裡輸入想要批改的作文內容',
  label = '輸入作文內容',
  maxLength = 1500,
  showScroll = false,
  showError = false,
  errorMessage = '',
  defaultValue = '',
  ...props 
}) => {
  const [value, setValue] = useState(defaultValue);
  const characterCount = value.length;
  const isOverLimit = characterCount > maxLength;

  const getStatus = () => {
    if (isOverLimit) return 'error';
    if (showError) return 'error';
    return status;
  };

  const currentStatus = getStatus();

  return (
    <InputContainer>
      <TextareaWrapper>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          status={currentStatus}
          maxLength={maxLength}
          {...props}
        />
        <Label status={currentStatus}>{label}</Label>
        {showScroll && <ScrollIndicator />}
      </TextareaWrapper>
      
      <CharacterCount>
        {showError && (
          <HelperText>
            <ErrorIcon>!</ErrorIcon>
            {errorMessage}
          </HelperText>
        )}
        <CountText>
          目前 {characterCount.toLocaleString()} 字 / 最多 {maxLength.toLocaleString()} 字
        </CountText>
      </CharacterCount>
    </InputContainer>
  );
};

export default Input;
