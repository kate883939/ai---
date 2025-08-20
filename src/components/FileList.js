import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';

// ========================================
// FileList Component - 檔案列表組件
// ========================================
// 
// 使用方式：
// 1. 基本使用：<FileList files={files} onDelete={handleDelete} />
// 2. 上傳中狀態：<FileList files={files} uploading={true} onDelete={handleDelete} />
// 3. 自定義樣式：<FileList files={files} customStyle={{...}} />
//
// Props:
// - files: 檔案陣列
// - uploading: 是否為上傳中狀態 (預設 false)
// - onDelete: 刪除檔案的回調函數
// - customStyle: 自定義樣式
// ========================================

const FileListContainer = styled.div`
    margin-top: 24px;
`;

const FileListHeader = styled.div`
    margin-bottom: 16px;
`;

const PageNumber = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.333;
`;

const FileListGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const FileItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 20px 8px 8px;
    background: var(--background-default);
    border: 1px solid rgba(145, 158, 171, 0.32);
    border-radius: 8px;
    width: 100%;
    transition: all 0.2s ease;
    
    &:hover {
        box-shadow: 0 4px 12px rgba(145, 158, 171, 0.16);
    }
`;

const FilePreview = styled.div`
    width: 132px;
    height: 99px;
    border-radius: 4px;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
    background: ${props => props.isPdf ? '#F4F6F8' : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FilePreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const FilePreviewIcon = styled.div`
    font-size: 24px;
    color: #637381;
`;

const LoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

const LoadingAnimation = styled.div`
    width: 32px;
    height: 32px;
`;

const FileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
`;

const FileName = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.333;
`;

const FileSize = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: var(--text-secondary);
    line-height: 1.333;
`;

const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 72, 66, 0.08);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: var(--transition-normal);
    height: 40px;
    color: #B72136;
    font-size: 18px;
    font-weight: 700;
    
    &:hover {
        background: rgba(255, 72, 66, 0.16);
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const DeleteIcon = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FileList = ({ 
    files = [], 
    uploading = false, 
    onDelete, 
    customStyle = {} 
}) => {
    const [loadingAnimations, setLoadingAnimations] = useState({});

    // 初始化 loading 動畫
    useEffect(() => {
        if (uploading) {
            files.forEach((file, index) => {
                const animationContainer = document.getElementById(`loading-${index}`);
                if (animationContainer && !loadingAnimations[index]) {
                    const anim = lottie.loadAnimation({
                        container: animationContainer,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: '/Asset/loading_gray.json'
                    });
                    
                    setLoadingAnimations(prev => ({
                        ...prev,
                        [index]: anim
                    }));
                }
            });
        }

        // 清理動畫
        return () => {
            Object.values(loadingAnimations).forEach(anim => {
                if (anim) {
                    anim.destroy();
                }
            });
        };
    }, [files, uploading]);

    // 格式化檔案大小
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    // 獲取檔案副檔名
    const getFileExtension = (filename) => {
        return filename.split('.').pop().toLowerCase();
    };

    // 渲染檔案預覽
    const renderFilePreview = (file, index) => {
        const extension = getFileExtension(file.name);
        const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension);
        const isPdf = extension === 'pdf';

        return (
            <FilePreview isPdf={isPdf}>
                {isImage ? (
                    <FilePreviewImage 
                        src={file.preview || URL.createObjectURL(file)} 
                        alt={file.name}
                    />
                ) : (
                    <FilePreviewIcon>📄</FilePreviewIcon>
                )}
                
                {uploading && (
                    <LoadingOverlay>
                        <LoadingAnimation id={`loading-${index}`} />
                    </LoadingOverlay>
                )}
            </FilePreview>
        );
    };

    if (files.length === 0) {
        return null;
    }

    return (
        <FileListContainer style={customStyle}>
            <FileListHeader>
                <PageNumber>檔案一</PageNumber>
            </FileListHeader>
            
            <FileListGrid>
                {files.map((file, index) => (
                    <FileItem key={`${file.name}-${index}`}>
                        {renderFilePreview(file, index)}
                        
                        <FileInfo>
                            <FileName>{file.name}</FileName>
                            <FileSize>{formatFileSize(file.size)}</FileSize>
                        </FileInfo>
                        
                        <DeleteButton 
                            onClick={() => onDelete && onDelete(index)}
                            disabled={uploading}
                        >
                            <DeleteIcon>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.5 5h15l-1.25 12.5c-.1 1-.9 1.75-1.9 1.75H5.65c-1 0-1.8-.75-1.9-1.75L2.5 5z" stroke="#B72136" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.5 2.5h5l.5 2.5h-6l.5-2.5z" stroke="#B72136" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.75 8.75v5" stroke="#B72136" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M11.25 8.75v5" stroke="#B72136" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </DeleteIcon>
                            刪除
                        </DeleteButton>
                    </FileItem>
                ))}
            </FileListGrid>
        </FileListContainer>
    );
};

export default FileList;
