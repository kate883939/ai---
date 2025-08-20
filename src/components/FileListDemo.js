import React, { useState } from 'react';
import styled from 'styled-components';
import FileList from './FileList';

const DemoContainer = styled.div`
    padding: 32px;
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0px 4px 20px rgba(145, 158, 171, 0.12);
    margin-bottom: 32px;
`;

const DemoTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #212B36;
    margin-bottom: 16px;
`;

const DemoSection = styled.div`
    margin-bottom: 32px;
`;

const SectionTitle = styled.h4`
    font-size: 18px;
    font-weight: 500;
    color: #637381;
    margin-bottom: 16px;
`;

const ControlButtons = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
`;

const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &.primary {
        background: #00A15D;
        color: white;
        
        &:hover {
            background: #007141;
        }
    }
    
    &.secondary {
        background: #E3CE00;
        color: #212B36;
        
        &:hover {
            background: #C3AF00;
        }
    }
`;

const FileListDemo = () => {
    const [uploading, setUploading] = useState(false);
    const [demoFiles, setDemoFiles] = useState([
        {
            name: '王小明_最喜歡的老師_1.png',
            size: 2834567, // 2.7 MB
            preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9Ijk5IiB2aWV3Qm94PSIwIDAgMTMyIDk5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTMyIiBoZWlnaHQ9Ijk5IiBmaWxsPSIjRjRGNkY4Ii8+Cjx0ZXh0IHg9IjY2IiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjM3MzgxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5Zu+5q2j5a6M5LqO5YyF5a2mPC90ZXh0Pgo8L3N2Zz4K'
        },
        {
            name: '作文批改範例.pdf',
            size: 1048576, // 1 MB
        }
    ]);

    const handleDelete = (index) => {
        const newFiles = demoFiles.filter((_, i) => i !== index);
        setDemoFiles(newFiles);
    };

    const toggleUploading = () => {
        setUploading(!uploading);
    };

    const addDemoFile = () => {
        const newFile = {
            name: `demo_file_${demoFiles.length + 1}.jpg`,
            size: Math.floor(Math.random() * 5000000) + 1000000, // 1-6 MB
            preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9Ijk5IiB2aWV3Qm94PSIwIDAgMTMyIDk5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTMyIiBoZWlnaHQ9Ijk5IiBmaWxsPSIjRjRGNkY4Ii8+Cjx0ZXh0IHg9IjY2IiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjM3MzgxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5Zu+5q2j5a6M5LqO5YyF5a2mPC90ZXh0Pgo8L3N2Zz4K'
        };
        setDemoFiles([...demoFiles, newFile]);
    };

    return (
        <DemoContainer>
            <DemoTitle>FileList Component Demo</DemoTitle>
            
            <DemoSection>
                <SectionTitle>控制面板</SectionTitle>
                <ControlButtons>
                    <Button 
                        className={uploading ? 'secondary' : 'primary'}
                        onClick={toggleUploading}
                    >
                        {uploading ? '停止上傳' : '開始上傳'}
                    </Button>
                    <Button className="secondary" onClick={addDemoFile}>
                        新增檔案
                    </Button>
                </ControlButtons>
            </DemoSection>
            
            <DemoSection>
                <SectionTitle>
                    {uploading ? '上傳中狀態' : '上傳完成狀態'}
                </SectionTitle>
                <FileList 
                    files={demoFiles}
                    uploading={uploading}
                    onDelete={handleDelete}
                />
            </DemoSection>
        </DemoContainer>
    );
};

export default FileListDemo;
