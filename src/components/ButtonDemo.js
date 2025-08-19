import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

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
  color: #212B36;
  border-bottom: 3px solid #00A15D;
  padding-bottom: 12px;
`;

const DemoSection = styled.div`
  margin-bottom: 32px;
`;

const DemoSectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #637381;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 16px;
`;

const StatusText = styled.div`
  font-size: 0.9rem;
  color: #637381;
  margin-top: 8px;
  font-style: italic;
`;

const CounterDisplay = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #00A15D;
  margin: 16px 0;
  padding: 12px;
  background: rgba(0, 161, 93, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const ButtonDemo = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePrimaryClick = () => {
    setClickCount(prev => prev + 1);
  };

  const handleSecondaryClick = () => {
    // 模擬檔案選擇
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt,.doc,.docx,.pdf';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file.name);
      }
    };
    input.click();
  };

  const handleLoadingClick = async () => {
    setIsLoading(true);
    // 模擬API調用
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setClickCount(prev => prev + 1);
  };

  return (
    <DemoContainer>
      <DemoTitle>按鈕互動演示</DemoTitle>
      
      <DemoSection>
        <DemoSectionTitle>點擊計數器</DemoSectionTitle>
        <ButtonRow>
          <Button variant="primary" size="large" onClick={handlePrimaryClick} iconStart="check">
            點擊我 ({clickCount})
          </Button>
          <Button variant="secondary" size="medium" onClick={handleSecondaryClick} iconStart="upload">
            選擇檔案
          </Button>
        </ButtonRow>
        <StatusText>
          點擊次數: {clickCount} | 選擇的檔案: {selectedFile || '無'}
        </StatusText>
      </DemoSection>

      <DemoSection>
        <DemoSectionTitle>載入狀態</DemoSectionTitle>
        <ButtonRow>
          <Button 
            variant="primary" 
            size="large" 
            onClick={handleLoadingClick}
            disabled={isLoading}
            iconStart={isLoading ? 'loading' : 'check'}
          >
            {isLoading ? '處理中...' : '開始批改'}
          </Button>
        </ButtonRow>
        <StatusText>
          {isLoading ? '正在處理您的作文，請稍候...' : '點擊按鈕開始批改流程'}
        </StatusText>
      </DemoSection>

      <DemoSection>
        <DemoSectionTitle>不同狀態展示</DemoSectionTitle>
        <ButtonRow>
          <Button variant="primary" size="medium">
            正常狀態
          </Button>
          <Button variant="primary" size="medium" state="hover">
            懸停狀態
          </Button>
          <Button variant="primary" size="medium" state="pressed">
            按下狀態
          </Button>
          <Button variant="primary" size="medium" disabled>
            禁用狀態
          </Button>
        </ButtonRow>
      </DemoSection>

      <DemoSection>
        <DemoSectionTitle>不同尺寸</DemoSectionTitle>
        <ButtonRow>
          <Button variant="secondary" size="large">
            大尺寸按鈕
          </Button>
          <Button variant="secondary" size="medium">
            中等尺寸
          </Button>
        </ButtonRow>
      </DemoSection>

      {clickCount > 0 && (
        <CounterDisplay>
          🎉 您已經點擊了 {clickCount} 次！
        </CounterDisplay>
      )}
    </DemoContainer>
  );
};

export default ButtonDemo;
