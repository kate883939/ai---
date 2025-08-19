import React, { useState } from 'react';
import styled from 'styled-components';
import AccountButton from './AccountButton';

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

const UserInfoDisplay = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #00A15D;
  margin: 16px 0;
  padding: 12px;
  background: rgba(0, 161, 93, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 6px;
  background: ${props => props.isSelected ? 'rgba(0, 161, 93, 0.1)' : 'transparent'};
  border: 1px solid ${props => props.isSelected ? '#00A15D' : '#E0E0E0'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 161, 93, 0.05);
    border-color: #00A15D;
  }
`;

const AccountButtonDemo = () => {
  const [selectedUser, setSelectedUser] = useState('王老師');
  const [clickCount, setClickCount] = useState(0);
  const [currentState, setCurrentState] = useState('default');

  const users = [
    { name: '王老師', role: '語文老師' },
    { name: '張老師', role: '數學老師' },
    { name: '陳美玲老師', role: '英文老師' },
    { name: '李老師', role: '物理老師' },
  ];

  const handleAccountClick = (userName) => {
    setSelectedUser(userName);
    setClickCount(prev => prev + 1);
  };

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };

  return (
    <DemoContainer>
      <DemoTitle>Account Button 互動演示</DemoTitle>
      
      <DemoSection>
        <DemoSectionTitle>用戶選擇</DemoSectionTitle>
        <ButtonRow>
          <AccountButton 
            userName={selectedUser} 
            state={currentState}
            onClick={() => handleAccountClick(selectedUser)}
          />
        </ButtonRow>
        <StatusText>
          當前選擇: {selectedUser} | 點擊次數: {clickCount}
        </StatusText>
      </DemoSection>

      <DemoSection>
        <DemoSectionTitle>狀態控制</DemoSectionTitle>
        <ButtonRow>
          <button 
            onClick={() => handleStateChange('default')}
            style={{
              padding: '8px 16px',
              border: '1px solid #00A15D',
              borderRadius: '6px',
              background: currentState === 'default' ? '#00A15D' : 'white',
              color: currentState === 'default' ? 'white' : '#00A15D',
              cursor: 'pointer'
            }}
          >
            Default
          </button>
          <button 
            onClick={() => handleStateChange('hover')}
            style={{
              padding: '8px 16px',
              border: '1px solid #00A15D',
              borderRadius: '6px',
              background: currentState === 'hover' ? '#00A15D' : 'white',
              color: currentState === 'hover' ? 'white' : '#00A15D',
              cursor: 'pointer'
            }}
          >
            Hover
          </button>
          <button 
            onClick={() => handleStateChange('pressed')}
            style={{
              padding: '8px 16px',
              border: '1px solid #00A15D',
              borderRadius: '6px',
              background: currentState === 'pressed' ? '#00A15D' : 'white',
              color: currentState === 'pressed' ? 'white' : '#00A15D',
              cursor: 'pointer'
            }}
          >
            Pressed
          </button>
        </ButtonRow>
      </DemoSection>

      <DemoSection>
        <DemoSectionTitle>用戶列表</DemoSectionTitle>
        <UserList>
          {users.map((user) => (
            <UserItem 
              key={user.name}
              isSelected={selectedUser === user.name}
              onClick={() => handleAccountClick(user.name)}
            >
              <AccountButton 
                userName={user.name} 
                state={selectedUser === user.name ? 'hover' : 'default'}
              />
              <span style={{ color: '#637381', fontSize: '0.9rem' }}>
                {user.role}
              </span>
            </UserItem>
          ))}
        </UserList>
      </DemoSection>

      {clickCount > 0 && (
        <UserInfoDisplay>
          👤 歡迎 {selectedUser}！您已點擊了 {clickCount} 次
        </UserInfoDisplay>
      )}
    </DemoContainer>
  );
};

export default AccountButtonDemo;
