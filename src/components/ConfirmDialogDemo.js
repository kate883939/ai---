import React, { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';
import './ConfirmDialogDemo.css';

const ConfirmDialogDemo = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogConfig, setDialogConfig] = useState({
        title: '即將離開批改結果',
        message: '此頁內容將不會保存，離開前請先下載批改結果',
        confirmText: '再改一篇',
        cancelText: '停留此頁'
    });

    const handleShowDialog = () => {
        setIsDialogOpen(true);
    };

    const handleConfirm = () => {
        console.log('用戶確認離開');
        setIsDialogOpen(false);
        // 這裡可以添加跳轉邏輯
        // window.location.href = 'ai-essay-go-homepage.html';
    };

    const handleCancel = () => {
        console.log('用戶選擇停留');
        setIsDialogOpen(false);
    };

    const handleClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="confirm-dialog-demo">
            <div className="demo-container">
                <h1 className="demo-title">ConfirmDialog 元件示範</h1>
                
                <div className="demo-section">
                    <h2 className="section-title">基本用法</h2>
                    <p className="section-description">
                        點擊下方按鈕來測試確認對話框功能
                    </p>
                    <button className="demo-button" onClick={handleShowDialog}>
                        顯示確認對話框
                    </button>
                </div>

                <div className="demo-section">
                    <h2 className="section-title">功能說明</h2>
                    <div className="feature-list">
                        <div className="feature-item">
                            <h3>Props 參數</h3>
                            <ul>
                                <li><code>isOpen</code>: 控制對話框顯示/隱藏</li>
                                <li><code>title</code>: 對話框標題</li>
                                <li><code>message</code>: 對話框內容</li>
                                <li><code>confirmText</code>: 確認按鈕文字（預設：確認）</li>
                                <li><code>cancelText</code>: 取消按鈕文字（預設：取消）</li>
                                <li><code>onConfirm</code>: 確認按鈕點擊事件</li>
                                <li><code>onCancel</code>: 取消按鈕點擊事件</li>
                                <li><code>onClose</code>: 關閉對話框事件</li>
                            </ul>
                        </div>
                        <div className="feature-item">
                            <h3>互動功能</h3>
                            <ul>
                                <li>點擊背景區域關閉對話框</li>
                                <li>按 ESC 鍵關閉對話框</li>
                                <li>點擊關閉按鈕關閉對話框</li>
                                <li>開啟時禁止背景滾動</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ConfirmDialog
                isOpen={isDialogOpen}
                title={dialogConfig.title}
                message={dialogConfig.message}
                confirmText={dialogConfig.confirmText}
                cancelText={dialogConfig.cancelText}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                onClose={handleClose}
            />
        </div>
    );
};

export default ConfirmDialogDemo;
