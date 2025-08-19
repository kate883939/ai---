import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.size || '16px'};
  color: inherit;
  margin-right: ${props => props.position === 'start' ? '8px' : '0'};
  margin-left: ${props => props.position === 'end' ? '8px' : '0'};
`;

const Icon = ({ 
  name, 
  size = '16px', 
  position = 'start',
  ...props 
}) => {
  const getIconSymbol = (iconName) => {
    const icons = {
      upload: '📁',
      download: '📥',
      edit: '✏️',
      check: '✅',
      close: '❌',
      arrow: '→',
      plus: '+',
      minus: '-',
      star: '⭐',
      heart: '❤️',
      search: '🔍',
      settings: '⚙️',
      user: '👤',
      home: '🏠',
      file: '📄',
      folder: '📁',
      image: '🖼️',
      video: '🎥',
      audio: '🎵',
      loading: '⏳',
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️',
    };
    
    return icons[iconName] || '•';
  };

  return (
    <StyledIcon size={size} position={position} {...props}>
      {getIconSymbol(name)}
    </StyledIcon>
  );
};

export default Icon;
