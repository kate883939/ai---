/**
 * AI EssayGo 首頁 JavaScript 功能
 * 包含檔案上傳、表單處理、互動效果等功能
 */

// DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    console.log('AI EssayGo 頁面已載入完成');
});

/**
 * 初始化所有事件監聽器
 */
function initializeEventListeners() {
    // 檔案上傳處理
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileUpload);
    }

    // 拖拽上傳功能
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        setupDragAndDrop(uploadArea);
    }

    // 表單驗證
    setupFormValidation();
}

/**
 * 切換上傳類型（檔案上傳 / 文字上傳）
 * @param {string} type - 上傳類型 ('file' | 'text')
 */
function switchUploadType(type) {
    const buttons = document.querySelectorAll('.toggle-button');
    const uploadArea = document.querySelector('.upload-area');
    
    if (!uploadArea) return;

    // 更新按鈕狀態
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // 更新上傳區域內容
    if (type === 'file') {
        uploadArea.innerHTML = `
            <div class="upload-illustration">
                <img src="Asset/illustration_upload.svg" alt="上傳插圖" class="upload-image">
            </div>
            <div class="upload-content">
                <div class="upload-text-group">
                    <div class="upload-text">點擊或拖曳檔案上傳作文圖片</div>
                    <div class="upload-hint">
                        <span class="upload-limit">最多 2 個檔案</span>，<span class="upload-format">支援 PDF、JPG、PNG、TXT 格式，檔案大小不超過10MB</span>
                    </div>
                </div>
                <button class="select-file-button" onclick="triggerFileUpload()">
                    選擇檔案
                </button>
            </div>
        `;
        setupDragAndDrop(uploadArea);
    } else {
        uploadArea.innerHTML = `
            <div class="upload-illustration">
                <img src="Asset/illustration_upload.svg" alt="上傳插圖" class="upload-image">
            </div>
            <div class="upload-content">
                <div class="upload-text-group">
                    <div class="upload-text">點擊開始輸入作文內容</div>
                    <div class="upload-hint">
                        直接在文字框中輸入或貼上作文內容進行批改
                    </div>
                </div>
                <button class="select-file-button" onclick="openTextEditor()">
                    開始輸入
                </button>
            </div>
        `;
    }
}

/**
 * 觸發檔案上傳對話框
 */
function triggerFileUpload() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.click();
    }
}

/**
 * 處理檔案上傳
 * @param {Event} event - 檔案上傳事件
 */
function handleFileUpload(event) {
    const files = event.target.files;
    if (files.length > 0) {
        console.log('已選擇檔案:', files);
        
        // 驗證檔案
        const validFiles = validateFiles(files);
        
        if (validFiles.length > 0) {
            // 顯示檔案資訊
            displayFileInfo(validFiles);
            
            // 這裡可以實作檔案上傳到伺服器的邏輯
            uploadFilesToServer(validFiles);
        }
    }
}

/**
 * 驗證上傳的檔案
 * @param {FileList} files - 檔案列表
 * @returns {Array} 有效的檔案陣列
 */
function validateFiles(files) {
    const validFiles = [];
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.txt'];
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // 檢查檔案大小
        if (file.size > maxFileSize) {
            showNotification(`檔案 ${file.name} 超過 10MB 限制`, 'error');
            continue;
        }
        
        // 檢查檔案類型
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        if (!allowedTypes.includes(fileExtension)) {
            showNotification(`檔案 ${file.name} 格式不支援`, 'error');
            continue;
        }
        
        validFiles.push(file);
    }
    
    return validFiles;
}

/**
 * 顯示檔案資訊
 * @param {Array} files - 檔案陣列
 */
function displayFileInfo(files) {
    const uploadArea = document.querySelector('.upload-area');
    if (!uploadArea) return;
    
    let fileListHTML = '<div class="upload-illustration"><img src="Asset/illustration_upload.svg" alt="上傳插圖" class="upload-image"></div><div class="upload-content"><div class="upload-text-group"><div class="upload-text">已選擇檔案</div></div>';
    
    files.forEach(file => {
        const fileSize = (file.size / 1024 / 1024).toFixed(2);
        fileListHTML += `
            <div style="margin: 8px 0; padding: 8px; background: var(--primary-transparent-8); border-radius: 4px;">
                <strong>${file.name}</strong> (${fileSize} MB)
            </div>
        `;
    });
    
    fileListHTML += `
        <button class="select-file-button" onclick="triggerFileUpload()">
            重新選擇
        </button>
    </div>`;
    
    uploadArea.innerHTML = fileListHTML;
}

/**
 * 上傳檔案到伺服器（模擬）
 * @param {Array} files - 檔案陣列
 */
function uploadFilesToServer(files) {
    // 這裡實作實際的檔案上傳邏輯
    console.log('開始上傳檔案到伺服器:', files);
    
    // 模擬上傳進度
    showNotification('檔案上傳中...', 'info');
    
    setTimeout(() => {
        showNotification('檔案上傳成功！', 'success');
    }, 2000);
}

/**
 * 開啟文字編輯器
 */
function openTextEditor() {
    // 創建文字編輯器模態框
    const modal = createTextEditorModal();
    document.body.appendChild(modal);
    
    // 顯示模態框
    setTimeout(() => modal.classList.add('show'), 10);
}

/**
 * 創建文字編輯器模態框
 * @returns {HTMLElement} 模態框元素
 */
function createTextEditorModal() {
    const modal = document.createElement('div');
    modal.className = 'text-editor-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>輸入作文內容</h3>
                <button class="close-btn" onclick="closeTextEditor()">×</button>
            </div>
            <div class="modal-body">
                <textarea 
                    id="essayText" 
                    placeholder="請在此輸入作文內容..."
                    rows="15"
                    style="width: 100%; padding: 16px; border: 2px solid var(--border-main); border-radius: 8px; font-family: inherit; font-size: 16px; resize: vertical;"
                ></textarea>
                <div style="margin-top: 16px; text-align: right; color: var(--text-secondary);">
                    <span id="charCount">0</span> / 1500 字
                </div>
            </div>
            <div class="modal-footer">
                <button onclick="closeTextEditor()" style="margin-right: 12px;">取消</button>
                <button onclick="saveEssayText()" style="background: var(--primary-500); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">確定</button>
            </div>
        </div>
    `;
    
    // 添加模態框樣式
    const style = document.createElement('style');
    style.textContent = `
        .text-editor-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .text-editor-modal.show {
            opacity: 1;
        }
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 12px;
            width: 90%;
            max-width: 600px;
            max-height: 80vh;
            overflow: hidden;
        }
        .modal-header {
            padding: 20px;
            border-bottom: 1px solid var(--border-light);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .modal-body {
            padding: 20px;
            max-height: 60vh;
            overflow-y: auto;
        }
        .modal-footer {
            padding: 20px;
            border-top: 1px solid var(--border-light);
            text-align: right;
        }
        .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--text-secondary);
        }
    `;
    document.head.appendChild(style);
    
    // 字數統計
    const textarea = modal.querySelector('#essayText');
    const charCount = modal.querySelector('#charCount');
    textarea.addEventListener('input', function() {
        charCount.textContent = this.value.length;
    });
    
    return modal;
}

/**
 * 關閉文字編輯器
 */
function closeTextEditor() {
    const modal = document.querySelector('.text-editor-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

/**
 * 儲存作文文字
 */
function saveEssayText() {
    const textarea = document.getElementById('essayText');
    const text = textarea.value.trim();
    
    if (text.length === 0) {
        showNotification('請輸入作文內容', 'error');
        return;
    }
    
    if (text.length > 1500) {
        showNotification('作文內容超過 1500 字限制', 'error');
        return;
    }
    
    // 更新上傳區域顯示
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
                        uploadArea.innerHTML = `
                    <div class="upload-illustration">
                        <img src="Asset/illustration_upload.svg" alt="上傳插圖" class="upload-image">
                    </div>
                    <div class="upload-content">
                        <div class="upload-text-group">
                            <div class="upload-text">作文內容已輸入</div>
                            <div class="upload-hint">
                                已輸入 ${text.length} 字，共 ${text.split('\n').length} 段落
                            </div>
                        </div>
                        <button class="select-file-button" onclick="openTextEditor()">
                            重新編輯
                        </button>
                    </div>
                `;
    }
    
    closeTextEditor();
    showNotification('作文內容已儲存', 'success');
}

/**
 * 切換手風琴展開/收合
 * @param {HTMLElement} element - 手風琴元素
 */
function toggleAccordion(element) {
    element.classList.toggle('active');
}

/**
 * 開始批改
 */
function startCorrection() {
    // 驗證表單
    if (!validateForm()) {
        return;
    }
    
    // 檢查是否有上傳內容
    const uploadArea = document.querySelector('.upload-area');
    if (!uploadArea || !uploadArea.querySelector('.upload-illustration')) {
        showNotification('請先上傳作文檔案或輸入作文內容', 'error');
        return;
    }
    
    // 顯示載入狀態
    const button = document.querySelector('.main-button');
    const originalText = button.textContent;
    button.textContent = '批改中...';
    button.disabled = true;
    
    // 模擬批改過程
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        showNotification('批改完成！正在生成報告...', 'success');
        
        // 這裡可以實作跳轉到結果頁面的邏輯
        // window.location.href = '/correction-result';
    }, 3000);
}

/**
 * 驗證表單
 * @returns {boolean} 驗證結果
 */
function validateForm() {
    const education = document.querySelector('input[name="education"]:checked');
    const title = document.querySelector('.text-input').value.trim();
    
    if (!education) {
        showNotification('請選擇學制', 'error');
        return false;
    }
    
    if (!title) {
        showNotification('請輸入作文標題', 'error');
        return false;
    }
    
    return true;
}

/**
 * 設置拖拽上傳功能
 * @param {HTMLElement} uploadArea - 上傳區域元素
 */
function setupDragAndDrop(uploadArea) {
    uploadArea.addEventListener('dragover', function(event) {
        event.preventDefault();
        uploadArea.style.borderColor = 'var(--primary-500)';
        uploadArea.style.background = 'var(--primary-transparent-8)';
    });

    uploadArea.addEventListener('dragleave', function(event) {
        event.preventDefault();
        uploadArea.style.borderColor = 'var(--border-main)';
        uploadArea.style.background = 'var(--background-neutral)';
    });

    uploadArea.addEventListener('drop', function(event) {
        event.preventDefault();
        uploadArea.style.borderColor = 'var(--border-main)';
        uploadArea.style.background = 'var(--background-neutral)';
        
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            console.log('拖拽上傳檔案:', files);
            
            // 模擬檔案選擇
            const fileInput = document.getElementById('fileInput');
            if (fileInput) {
                fileInput.files = files;
                handleFileUpload({ target: { files: files } });
            }
        }
    });
}

/**
 * 設置表單驗證
 */
function setupFormValidation() {
    const titleInput = document.querySelector('.text-input');
    if (titleInput) {
        titleInput.addEventListener('input', function() {
            if (this.value.length > 50) {
                this.value = this.value.substring(0, 50);
                showNotification('標題長度不能超過 50 字', 'warning');
            }
        });
    }
}

/**
 * 顯示通知訊息
 * @param {string} message - 訊息內容
 * @param {string} type - 訊息類型 ('success' | 'error' | 'warning' | 'info')
 */
function showNotification(message, type = 'info') {
    // 創建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 添加通知樣式
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        .notification.show {
            transform: translateX(0);
        }
        .notification-success { background: var(--success-500); }
        .notification-error { background: var(--error-500); }
        .notification-warning { background: var(--warning-500); }
        .notification-info { background: var(--info-500); }
    `;
    document.head.appendChild(style);
    
    // 添加到頁面
    document.body.appendChild(notification);
    
    // 顯示動畫
    setTimeout(() => notification.classList.add('show'), 10);
    
    // 自動隱藏
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 全域函數，供 HTML 中的 onclick 事件使用
window.switchUploadType = switchUploadType;
window.triggerFileUpload = triggerFileUpload;
window.openTextEditor = openTextEditor;
window.toggleAccordion = toggleAccordion;
window.startCorrection = startCorrection;
window.closeTextEditor = closeTextEditor;
window.saveEssayText = saveEssayText;
