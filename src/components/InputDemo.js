import React from 'react';
import styled from 'styled-components';
import Input from './Input';
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

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${colors.text.secondary};
`;

const InputGrid = styled.div`
  display: grid;
  gap: 24px;
`;

const InputDemo = () => {
  const sampleText = `午後的散步

午后三點，陽光正好，不炙熱也不懶散，是一種剛剛好的溫暖。我決定放下電腦，丟開手機，穿上輕便的鞋子，到巷口繞一圈，給自己一點呼吸的空間。

走在熟悉的路上，空氣裡有一點塵土味，但更多的是風吹過葉子時留下的清新。我經過那家總是有貓咪曬太陽的小花店，今天門口多了兩盆新的玫瑰，顏色是我從沒看過的橘紅，像夕陽的邊緣。老闆娘正在擦玻璃，看到我笑了一下，我也點頭微笑，不需要多話，這種默契的打招呼方式最舒服。

走在熟悉的路上，空氣裡有一點塵土味，但更多的是風吹過葉子時留下的清新。我經過那家總是有貓咪曬太陽的小花店，今天門口多了兩盆新的玫瑰，顏色是我從沒看過的橘紅，像夕陽的邊緣。老闆娘正在擦玻璃，看到我笑了一下，我也點頭微笑，不需要多話，這種默契的打招呼方式最舒服。

走在熟悉的路上，空氣裡有一點塵土味，但更多的是風吹過葉子時留下的清新。我經過那家總是有貓咪曬太陽的小花店，今天門口多了兩盆新的玫瑰，顏色是我從沒看過的橘紅，像夕陽的邊緣。老闆娘正在擦玻璃，看到我笑了一下，我也點頭微笑，不需要多話，這種默契的打招呼方式最舒服。`;

  return (
    <DemoContainer>
      <DemoTitle>Input 組件展示</DemoTitle>
      
      <InputGrid>
        {/* Default 狀態 */}
        <DemoSection>
          <SectionTitle>Default 狀態</SectionTitle>
          <Input />
        </DemoSection>

        {/* Activated 狀態 */}
        <DemoSection>
          <SectionTitle>Activated 狀態</SectionTitle>
          <Input 
            defaultValue={sampleText}
            status="activated"
          />
        </DemoSection>

        {/* 空白錯誤提示 */}
        <DemoSection>
          <SectionTitle>空白錯誤提示</SectionTitle>
          <Input 
            showError={true}
            errorMessage="請輸入作文內容"
          />
        </DemoSection>

        {/* 字數過多 */}
        <DemoSection>
          <SectionTitle>字數過多</SectionTitle>
          <Input 
            defaultValue={sampleText + sampleText + sampleText}
            showScroll={true}
          />
        </DemoSection>

        {/* 字數過多錯誤提示 */}
        <DemoSection>
          <SectionTitle>字數過多錯誤提示</SectionTitle>
          <Input 
            defaultValue={sampleText + sampleText + sampleText}
            showScroll={true}
            showError={true}
            errorMessage="字數過多"
          />
        </DemoSection>
      </InputGrid>
    </DemoContainer>
  );
};

export default InputDemo;
