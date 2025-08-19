import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import AccountButton from './components/AccountButton';
import ColorSystem from './components/ColorSystem';
import TokenUsageExample from './components/TokenUsageExample';
import ToggleDemo from './components/ToggleDemo';
import TypographySystem from './components/TypographySystem';
import InputDemo from './components/InputDemo';
import Home from './pages/Home';
import { colors, theme } from './components/ColorSystem';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background.default};
  font-family: ${theme.typography.fontFamily.primary};
`;



const NavigationMenu = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  background: white;
  border-bottom: 1px solid ${colors.border.main};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const NavButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: ${props => props.active ? colors.primary[500] : 'transparent'};
  color: ${props => props.active ? 'white' : colors.text.primary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? colors.primary[700] : colors.primaryTransparent[8]};
  }
`;

const ComponentSection = styled.section`
  background: white;
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #212B36;
  border-bottom: 3px solid #00A15D;
  padding-bottom: 12px;
`;

const ButtonTable = styled.div`
  display: grid;
  grid-template-columns: 120px repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 32px;
  align-items: center;
`;

const AccountButtonTable = styled.div`
  display: grid;
  grid-template-columns: 120px repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
  align-items: center;
`;

const TableHeader = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #637381;
  text-align: center;
  padding: 12px;
  background: rgba(145, 158, 171, 0.1);
  border-radius: 8px;
`;

const TableLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #637381;
  text-align: left;
  padding: 12px;
`;

const ButtonCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const StyleSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(145, 158, 171, 0.05);
  border-radius: 8px;
`;

const StyleButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${props => props.active ? '#00A15D' : 'transparent'};
  border-radius: 6px;
  background: ${props => props.active ? 'rgba(0, 161, 93, 0.1)' : 'transparent'};
  color: ${props => props.active ? '#00A15D' : '#637381'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: 'Noto Sans TC', sans-serif;

  &:hover {
    background: ${props => props.active ? 'rgba(0, 161, 93, 0.15)' : 'rgba(145, 158, 171, 0.1)'};
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const ButtonLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #637381;
  text-align: center;
  margin-bottom: 8px;
`;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [primaryStyle, setPrimaryStyle] = useState('filled');
  const [secondaryStyle, setSecondaryStyle] = useState('filled');

  const getPrimaryVariant = () => {
    return primaryStyle === 'filled' ? 'primary' : 'primary-text';
  };

  const getSecondaryVariant = () => {
    return secondaryStyle === 'filled' ? 'secondary' : 'secondary-text';
  };

  const renderColorSystem = () => (
    <>
      <ColorSystem />
      <TokenUsageExample />
    </>
  );

  const renderButtonComponents = () => (
    <>
      <ComponentSection>
        <SectionTitle>Primary 按鈕 - 狀態變化展示</SectionTitle>
        
        <StyleSelector>
          <StyleButton 
            active={primaryStyle === 'filled'} 
            onClick={() => setPrimaryStyle('filled')}
          >
            Filled
          </StyleButton>
          <StyleButton 
            active={primaryStyle === 'text'} 
            onClick={() => setPrimaryStyle('text')}
          >
            Text
          </StyleButton>
        </StyleSelector>

        <ButtonTable>
          <TableHeader>按鈕類型</TableHeader>
          <TableHeader>Default</TableHeader>
          <TableHeader>Hover</TableHeader>
          <TableHeader>Pressed</TableHeader>
          <TableHeader>Selected</TableHeader>
          <TableHeader>Disabled</TableHeader>
          
          <TableLabel>Large</TableLabel>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" state="hover">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" state="pressed">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" state="selected">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" disabled>
              開始批改
            </Button>
          </ButtonCell>
          
          <TableLabel>Medium</TableLabel>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" state="hover">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" state="pressed">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" state="selected">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" disabled>
              開始批改
            </Button>
          </ButtonCell>
          
          <TableLabel>Large + Icon</TableLabel>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" iconStart="check">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" iconStart="check" state="hover">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" iconStart="check" state="pressed">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" iconStart="check" state="selected">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="large" iconStart="check" disabled>
              開始批改
            </Button>
          </ButtonCell>
          
          <TableLabel>Medium + Icon</TableLabel>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" iconStart="check">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" iconStart="check" state="hover">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" iconStart="check" state="pressed">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" iconStart="check" state="selected">
              開始批改
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getPrimaryVariant()} size="medium" iconStart="check" disabled>
              開始批改
            </Button>
          </ButtonCell>
        </ButtonTable>
      </ComponentSection>

      <ComponentSection>
        <SectionTitle>Secondary 按鈕 - 狀態變化展示</SectionTitle>
        
        <StyleSelector>
          <StyleButton 
            active={secondaryStyle === 'filled'} 
            onClick={() => setSecondaryStyle('filled')}
          >
            Filled
          </StyleButton>
          <StyleButton 
            active={secondaryStyle === 'text'} 
            onClick={() => setSecondaryStyle('text')}
          >
            Text
          </StyleButton>
        </StyleSelector>

        <ButtonTable>
          <TableHeader>按鈕類型</TableHeader>
          <TableHeader>Default</TableHeader>
          <TableHeader>Hover</TableHeader>
          <TableHeader>Pressed</TableHeader>
          <TableHeader>Selected</TableHeader>
          <TableHeader>Disabled</TableHeader>
          
          <TableLabel>Large</TableLabel>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" state="hover">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" state="pressed">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" state="selected">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" disabled>
              選擇檔案
            </Button>
          </ButtonCell>
          
          <TableLabel>Medium</TableLabel>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" state="hover">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" state="pressed">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" state="selected">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" disabled>
              選擇檔案
            </Button>
          </ButtonCell>
          
          <TableLabel>Large + Icon</TableLabel>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" iconStart="upload">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" iconStart="upload" state="hover">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" iconStart="upload" state="pressed">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" iconStart="upload" state="selected">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="large" iconStart="upload" disabled>
              選擇檔案
            </Button>
          </ButtonCell>
          
          <TableLabel>Medium + Icon</TableLabel>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" iconStart="upload">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" iconStart="upload" state="hover">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" iconStart="upload" state="pressed">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" iconStart="upload" state="selected">
              選擇檔案
            </Button>
          </ButtonCell>
          <ButtonCell>
            <Button variant={getSecondaryVariant()} size="medium" iconStart="upload" disabled>
              選擇檔案
            </Button>
          </ButtonCell>
        </ButtonTable>
      </ComponentSection>

      <ComponentSection>
        <SectionTitle>Account Button - 狀態變化展示</SectionTitle>
        <AccountButtonTable>
          <TableHeader>按鈕類型</TableHeader>
          <TableHeader>Default</TableHeader>
          <TableHeader>Hover</TableHeader>
          <TableHeader>Pressed</TableHeader>
          <TableHeader>Disabled</TableHeader>
          
          <TableLabel>短名稱</TableLabel>
          <ButtonCell>
            <AccountButton userName="王老師" state="default" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="王老師" state="hover" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="王老師" state="pressed" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="王老師" state="default" disabled />
          </ButtonCell>
          
          <TableLabel>中等名稱</TableLabel>
          <ButtonCell>
            <AccountButton userName="張老師" state="default" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="張老師" state="hover" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="張老師" state="pressed" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="張老師" state="default" disabled />
          </ButtonCell>
          
          <TableLabel>長名稱</TableLabel>
          <ButtonCell>
            <AccountButton userName="陳美玲老師" state="default" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="陳美玲老師" state="hover" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="陳美玲老師" state="pressed" />
          </ButtonCell>
          <ButtonCell>
            <AccountButton userName="陳美玲老師" state="default" disabled />
          </ButtonCell>
        </AccountButtonTable>
      </ComponentSection>
    </>
  );

  const renderTypographySystem = () => (
    <div>
      <TypographySystem />
    </div>
  );

  const renderOtherComponents = () => (
    <div>
      <h2>其他元件</h2>
      <p>這裡會放置其他元件，目前為預留空間。</p>
      <InputDemo />
      <ToggleDemo />
    </div>
  );

  const renderHome = () => (
    <Home />
  );

  return (
    <AppContainer>
      <NavigationMenu>
        <NavButton
          active={currentPage === 'home'}
          onClick={() => setCurrentPage('home')}
        >
          AI EssayGo
        </NavButton>
        <NavButton
          active={currentPage === 'color'}
          onClick={() => setCurrentPage('color')}
        >
          Color System
        </NavButton>
        <NavButton
          active={currentPage === 'typography'}
          onClick={() => setCurrentPage('typography')}
        >
          Typography
        </NavButton>
        <NavButton
          active={currentPage === 'button'}
          onClick={() => setCurrentPage('button')}
        >
          Button Components
        </NavButton>
        <NavButton
          active={currentPage === 'other'}
          onClick={() => setCurrentPage('other')}
        >
          Other Components
        </NavButton>
      </NavigationMenu>

      {currentPage === 'home' && renderHome()}
      {currentPage === 'color' && renderColorSystem()}
      {currentPage === 'typography' && renderTypographySystem()}
      {currentPage === 'button' && renderButtonComponents()}
      {currentPage === 'other' && renderOtherComponents()}
    </AppContainer>
  );
}

export default App;
