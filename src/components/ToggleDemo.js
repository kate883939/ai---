import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { colors, theme } from './ColorSystem';

const DemoContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const DemoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: ${colors.text.primary};
  border-bottom: 3px solid ${colors.primary[500]};
  padding-bottom: 12px;
`;

const DemoSection = styled.div`
  margin-bottom: 32px;
`;

const DemoSectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${colors.text.secondary};
`;

const ToggleRow = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 16px;
`;

const ToggleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const ToggleLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.text.secondary};
  text-align: center;
`;

const StatusText = styled.div`
  font-size: 0.9rem;
  color: ${colors.text.secondary};
  margin-top: 8px;
  font-style: italic;
`;

const ToggleDemo = () => {
  const [fileUploadValue, setFileUploadValue] = useState('file');
  const [customValue, setCustomValue] = useState('option1');

  const fileUploadOptions = [
    { label: '檔案上傳', value: 'file' },
    { label: '文字上傳', value: 'text' }
  ];

  const customOptions = [
    { label: '選項一', value: 'option1' },
    { label: '選項二', value: 'option2' },
    { label: '選項三', value: 'option3' }
  ];

  return (
    <DemoContainer>
      <DemoTitle>Toggle 組件展示</DemoTitle>
      
      <DemoSection>
        <DemoSectionTitle>上傳作文 Toggle</DemoSectionTitle>
        <ToggleRow>
          <ToggleGroup>
            <ToggleLabel>檔案上傳切換</ToggleLabel>
            <Toggle
              options={fileUploadOptions}
              value={fileUploadValue}
              onChange={setFileUploadValue}
            />
          </ToggleGroup>
        </ToggleRow>
        <StatusText>
          當前選擇：{fileUploadValue === 'file' ? '檔案上傳' : '文字上傳'}
        </StatusText>
      </DemoSection>

      <DemoSection>
        <DemoSectionTitle>自定義選項 Toggle</DemoSectionTitle>
        <ToggleRow>
          <ToggleGroup>
            <ToggleLabel>三個選項</ToggleLabel>
            <Toggle
              options={customOptions}
              value={customValue}
              onChange={setCustomValue}
            />
          </ToggleGroup>
        </ToggleRow>
        <StatusText>
          當前選擇：{customOptions.find(opt => opt.value === customValue)?.label}
        </StatusText>
      </DemoSection>

      <DemoSection>
        <DemoSectionTitle>禁用狀態</DemoSectionTitle>
        <ToggleRow>
          <ToggleGroup>
            <ToggleLabel>禁用狀態</ToggleLabel>
            <Toggle
              options={fileUploadOptions}
              value="file"
              disabled
            />
          </ToggleGroup>
        </ToggleRow>
        <StatusText>
          禁用狀態下的 Toggle 無法進行交互
        </StatusText>
      </DemoSection>
    </DemoContainer>
  );
};

export default ToggleDemo;
