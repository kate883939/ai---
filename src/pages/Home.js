import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, theme } from '../components/ColorSystem';
import Button from '../components/Button';
import Toggle from '../components/Toggle';
import Input from '../components/Input';

// Header 組件
const Header = styled.header`
  background: ${colors.primary[50]};
  border-bottom: 1px solid ${colors.secondary[100]};
  box-shadow: 0px 8px 16px rgba(145, 158, 171, 0.16);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 120px;
  max-width: 1440px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  color: ${colors.primary[500]};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const RemainingCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
  color: ${colors.text.primary};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  color: ${colors.text.primary};
`;

// Banner 組件
const Banner = styled.section`
  background: linear-gradient(135deg, ${colors.primary[50]} 0%, ${colors.secondary[50]} 100%);
  padding: 60px 0;
  text-align: center;
`;

const BannerContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`;

const BannerContent = styled.div`
  flex: 1;
  text-align: left;
`;

const BannerTitle = styled.h1`
  font-size: 55px;
  font-weight: 900;
  color: ${colors.primary[500]};
  margin-bottom: 24px;
  line-height: 1.1;
`;

const BannerFeatures = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const FeatureTag = styled.span`
  padding: 8px 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(168, 255, 252, 1) 100%);
  border: 1px solid ${colors.info[500]};
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.info[900]};
`;

const BannerDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.text.primary};
  margin-bottom: 0;
`;

const BannerImage = styled.div`
  width: 400px;
  height: 300px;
  background: linear-gradient(135deg, ${colors.primary[100]} 0%, ${colors.secondary[100]} 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: ${colors.primary[500]};
`;

// 主要內容區域
const MainContent = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 120px;
`;

// 上傳區域
const UploadSection = styled.section`
  background: white;
  border: 2px solid;
  border-image: linear-gradient(90deg, ${colors.primary[500]} 0%, ${colors.info[500]} 100%) 1;
  border-radius: 20px;
  margin-bottom: 32px;
  box-shadow: 0px 16px 32px -4px rgba(145, 158, 171, 0.16);
  overflow: hidden;
`;

const SectionHeader = styled.div`
  background: linear-gradient(90deg, ${colors.primary[500]} 0%, ${colors.info[500]} 100%);
  padding: 16px 20px;
  border-bottom: 2px dashed ${colors.primary[100]};
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const SectionContent = styled.div`
  padding: 28px;
`;

const ToggleContainer = styled.div`
  margin-bottom: 20px;
`;

const UploadArea = styled.div`
  border: 1px dashed rgba(145, 158, 171, 0.32);
  border-radius: 8px;
  background: ${colors.background.neutral};
  padding: 40px;
  text-align: center;
  margin-bottom: 20px;
`;

const UploadIcon = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, ${colors.primary[100]} 0%, ${colors.secondary[100]} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: ${colors.primary[500]};
`;

const UploadText = styled.div`
  margin-bottom: 24px;
`;

const UploadTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.text.primary};
  margin-bottom: 8px;
`;

const UploadDescription = styled.p`
  font-size: 18px;
  color: ${colors.text.secondary};
  margin: 0;
`;

// 表單區域
const FormSection = styled.section`
  background: white;
  border: 2px solid;
  border-image: linear-gradient(90deg, ${colors.primary[500]} 0%, ${colors.info[500]} 100%) 1;
  border-radius: 20px;
  margin-bottom: 32px;
  box-shadow: 0px 16px 32px -4px rgba(145, 158, 171, 0.16);
  overflow: hidden;
`;

const FormContent = styled.div`
  padding: 28px;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: ${colors.text.primary};
  margin-bottom: 12px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 18px;
  color: ${colors.text.primary};
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  accent-color: ${colors.primary[500]};
`;

const TextInput = styled.input`
  width: 100%;
  padding: 16px 14px;
  border: 2px solid rgba(145, 158, 171, 0.32);
  border-radius: 6px;
  font-size: 18px;
  color: ${colors.text.primary};
  background: white;
  
  &::placeholder {
    color: ${colors.text.secondary};
  }
  
  &:focus {
    outline: none;
    border-color: ${colors.primary[500]};
  }
`;

const Accordion = styled.div`
  background: ${colors.primaryTransparent[8]};
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.text.primary};
`;

const AccordionIcon = styled.span`
  font-size: 20px;
  color: ${colors.text.primary};
`;

// 提交按鈕
const SubmitButton = styled(Button)`
  width: 100%;
  padding: 12px 20px;
  font-size: 20px;
  font-weight: 700;
`;

// Footer
const Footer = styled.footer`
  background: ${colors.background.default};
  padding: 28px 100px 12px;
  text-align: center;
  border-top: 1px solid ${colors.border.main};
`;

const FooterText = styled.p`
  font-size: 12px;
  color: ${colors.text.secondary};
  margin: 0;
`;

const Home = () => {
  const [uploadType, setUploadType] = useState('file');
  const [educationLevel, setEducationLevel] = useState('elementary');
  const [essayTitle, setEssayTitle] = useState('');

  const handleSubmit = () => {
    console.log('開始批改', {
      uploadType,
      educationLevel,
      essayTitle
    });
  };

  return (
    <div>
      {/* Header */}
      <Header>
        <HeaderContainer>
          <Logo>
            <span>📝</span>
            AI EssayGo
          </Logo>
          <HeaderRight>
            <RemainingCount>
              <span>🪙</span>
              本學期剩餘 299 次
            </RemainingCount>
            <UserInfo>
              <span>👤</span>
              王老師
            </UserInfo>
          </HeaderRight>
        </HeaderContainer>
      </Header>

      {/* Banner */}
      <Banner>
        <BannerContainer>
          <BannerContent>
            <BannerTitle>AI EssayGo</BannerTitle>
            <BannerFeatures>
              <FeatureTag>AI 智慧分析</FeatureTag>
              <FeatureTag>個人化回饋</FeatureTag>
              <FeatureTag>輕鬆上手</FeatureTag>
            </BannerFeatures>
            <BannerDescription>
              透過 AI 精準分析結構安排、文辭表達，<br />
              快速提供個人化專屬寫作建議，提升寫作能力！
            </BannerDescription>
          </BannerContent>
          <BannerImage>
            ✏️
          </BannerImage>
        </BannerContainer>
      </Banner>

      {/* 主要內容 */}
      <MainContent>
        {/* 上傳作文區域 */}
        <UploadSection>
          <SectionHeader>
            <SectionTitle>一、上傳作文</SectionTitle>
          </SectionHeader>
          <SectionContent>
            <ToggleContainer>
              <Toggle
                options={[
                  { label: '檔案上傳', value: 'file' },
                  { label: '文字上傳', value: 'text' }
                ]}
                value={uploadType}
                onChange={setUploadType}
              />
            </ToggleContainer>

            {uploadType === 'file' ? (
              <UploadArea>
                <UploadIcon>📁</UploadIcon>
                <UploadText>
                  <UploadTitle>點擊或拖曳檔案上傳作文圖片</UploadTitle>
                  <UploadDescription>
                    最多 2 個檔案，支援 PDF、JPG、PNG、TXT 格式，檔案大小不超過10MB
                  </UploadDescription>
                </UploadText>
                <Button variant="secondary" size="medium">
                  選擇檔案
                </Button>
              </UploadArea>
            ) : (
              <Input
                placeholder="在這裡輸入想要批改的作文內容"
                label="輸入作文內容"
                maxLength={1500}
              />
            )}
          </SectionContent>
        </UploadSection>

        {/* 填寫批改資訊區域 */}
        <FormSection>
          <SectionHeader>
            <SectionTitle>二、填寫批改資訊</SectionTitle>
          </SectionHeader>
          <FormContent>
            <FormGroup>
              <FormLabel>學制（必填）</FormLabel>
              <RadioGroup>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    name="educationLevel"
                    value="elementary"
                    checked={educationLevel === 'elementary'}
                    onChange={(e) => setEducationLevel(e.target.value)}
                  />
                  國小
                </RadioOption>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    name="educationLevel"
                    value="junior"
                    checked={educationLevel === 'junior'}
                    onChange={(e) => setEducationLevel(e.target.value)}
                  />
                  國中
                </RadioOption>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    name="educationLevel"
                    value="senior"
                    checked={educationLevel === 'senior'}
                    onChange={(e) => setEducationLevel(e.target.value)}
                  />
                  高中
                </RadioOption>
              </RadioGroup>
            </FormGroup>

            <FormGroup>
              <FormLabel>作文標題（必填）</FormLabel>
              <TextInput
                type="text"
                placeholder="例如：我最喜歡的老師"
                value={essayTitle}
                onChange={(e) => setEssayTitle(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>進階設定（選填）</FormLabel>
              <Accordion>
                <AccordionText>能力指標</AccordionText>
                <AccordionIcon>▼</AccordionIcon>
              </Accordion>
            </FormGroup>
          </FormContent>
        </FormSection>

        {/* 提交按鈕 */}
        <SubmitButton
          variant="primary"
          size="large"
          onClick={handleSubmit}
        >
          開始批改
        </SubmitButton>
      </MainContent>

      {/* Footer */}
      <Footer>
        <FooterText>
          © NANI BOOK ENTERPRISE CO., LTD. All Rights Reserved.
        </FooterText>
      </Footer>
    </div>
  );
};

export default Home;
