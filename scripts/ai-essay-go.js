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
    
    // 清理檔案列表（當切換到文字上傳模式時）
    if (type === 'text') {
        const fileListContainer = document.getElementById('fileListContainer');
        if (fileListContainer) {
            fileListContainer.style.display = 'none';
        }
        // 清空檔案狀態
        uploadedFiles = [];
        fileStatus = {};
    }
    
    // 更新上傳區域內容
    if (type === 'file') {
        // 清理文字輸入框
        const essayTextInput = document.getElementById('essayTextInput');
        if (essayTextInput) {
            essayTextInput.value = '';
        }
        
        // 移除文字上傳模式的樣式類別
        uploadArea.classList.remove('text-mode');
        
        uploadArea.innerHTML = `
            <div class="upload-container">
                <div class="upload-illustration">
                    <img src="Asset/illustration_upload.svg" alt="上傳插圖" class="upload-image">
                </div>
                <div class="upload-instructions">
                    <div class="upload-text-group">
                        <div class="upload-title">點擊或拖曳檔案上傳作文圖片</div>
                        <div class="upload-description">最多 2 個檔案，支援 PDF、JPG、PNG、TXT 格式，檔案大小不超過10MB</div>
                    </div>
                    <button class="upload-button" onclick="triggerFileUpload()">
                        選擇檔案
                    </button>
                </div>
            </div>
        `;
        setupDragAndDrop(uploadArea);
        
        // 確保上傳區域可見
        uploadArea.style.display = 'block';
    } else if (type === 'text') {
        // 清理檔案輸入框
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.value = '';
        }
        
        // 添加文字上傳模式的樣式類別
        uploadArea.classList.add('text-mode');
        
        uploadArea.innerHTML = `
            <div class="text-upload-container">
                <div class="text-input-wrapper">
                    <textarea 
                        id="essayTextInput" 
                        class="essay-textarea" 
                        placeholder="在這裡輸入想要批改的作文內容"
                        rows="10"
                    ></textarea>
                    <div class="text-counter">目前 0 字 / 最多 1,500 字</div>
                </div>
            </div>
        `;
        
        // 設定文字輸入框的事件監聽器
        setupTextInput();
        
        // 確保上傳區域可見
        uploadArea.style.display = 'block';
    }
}

/**
 * 設定文字輸入框的事件監聽器
 */
function setupTextInput() {
    const textarea = document.getElementById('essayTextInput');
    const counter = document.querySelector('.text-counter');
    
    if (textarea && counter) {
        // 監聽輸入事件
        textarea.addEventListener('input', function() {
            const text = this.value;
            const charCount = text.length;
            
            // 更新字數計數器
            counter.textContent = `目前 ${charCount} 字 / 最多 1,500 字`;
            
            // 如果超過字數限制，顯示警告樣式
            if (charCount > 1500) {
                counter.style.color = '#B72136';
            } else {
                counter.style.color = '#637381';
            }
        });
        
        // 監聽焦點事件
        textarea.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        textarea.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
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
            // 檢查檔案數量限制
            if (uploadedFiles.length + validFiles.length > 2) {
                showNotification('最多只能上傳 2 個檔案', 'error');
                // 清空檔案輸入框
                event.target.value = '';
                return;
            }
            
            // 將新檔案添加到全域變數
            const startIndex = uploadedFiles.length;
            uploadedFiles = uploadedFiles.concat(validFiles);
            
            // 設定新檔案的狀態為上傳中
            validFiles.forEach((file, index) => {
                const fileKey = `${file.name}-${file.size}-${file.lastModified}`;
                fileStatus[fileKey] = 'uploading';
            });
            
            // 顯示檔案資訊
            displayFileInfo(uploadedFiles);
            
            // 這裡可以實作檔案上傳到伺服器的邏輯
            uploadFilesToServer(validFiles, startIndex);
        }
    }
    
    // 清空檔案輸入框，讓使用者可以選擇新的檔案
    event.target.value = '';
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
    const fileListContainer = document.getElementById('fileListContainer');
    
    if (!fileListContainer) return;
    
    // 清空現有內容
    fileListContainer.innerHTML = '';
    
    // 創建 FileList component 的 HTML 結構
    const fileListHTML = `
        <div class="file-list-container" style="margin-top: 24px;">
            ${files.map((file, index) => {
                const fileSize = (file.size / 1024 / 1024).toFixed(1);
                const fileExtension = file.name.split('.').pop().toLowerCase();
                const isImage = ['jpg', 'jpeg', 'png'].includes(fileExtension);
                const isPdf = fileExtension === 'pdf';
                const fileNumber = index + 1;
                
                // 獲取檔案狀態
                const fileKey = `${file.name}-${file.size}-${file.lastModified}`;
                const status = fileStatus[fileKey] || 'completed';
                const isUploading = status === 'uploading';
                
                return `
                    <div class="file-list-section" style="margin-bottom: 16px;">
                        <div class="page-number" style="font-size: 18px; font-weight: 500; color: var(--text-primary); line-height: 1.333; margin-bottom: 8px;">檔案${fileNumber}</div>
                        <div class="file-item" style="display: flex; align-items: center; gap: 16px; padding: 8px 20px 8px 8px; background: var(--background-paper); border: 1px solid rgba(145, 158, 171, 0.32); border-radius: 8px; width: 100%; transition: all 0.2s ease;">
                            <div class="file-preview" style="width: 132px; height: 99px; border-radius: 4px; overflow: hidden; flex-shrink: 0; position: relative; background: ${isPdf ? '#F4F6F8' : 'transparent'}; display: flex; align-items: center; justify-content: center;">
                                ${isImage ? `<img src="" alt="檔案預覽" style="width: 100%; height: 100%; object-fit: cover;">` : '<div style="font-size: 24px; color: #637381;">📄</div>'}
                                ${isUploading ? `
                                    <div class="loading-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255, 255, 255, 0.9); display: flex; align-items: center; justify-content: center; z-index: 2;">
                                        <div id="loading-${index}" style="width: 32px; height: 32px;"></div>
                                    </div>
                                ` : ''}
                            </div>
                            <div class="file-info" style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
                                <div class="file-name" style="font-size: 18px; font-weight: 500; color: var(--text-primary); line-height: 1.333;">${file.name}</div>
                                <div class="file-size" style="font-size: 18px; font-weight: 400; color: var(--text-secondary); line-height: 1.333;">${fileSize} MB</div>
                            </div>
                            <button class="delete-button" onclick="deleteFile(${index})" ${isUploading ? 'disabled' : ''} ${isUploading ? 'style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                                <div class="delete-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 5h15l-1.25 12.5c-.1 1-.9 1.75-1.9 1.75H5.65c-1 0-1.8-.75-1.9-1.75L2.5 5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.5 2.5h5l.5 2.5h-6l.5-2.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.75 8.75v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M11.25 8.75v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                刪除
                            </button>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    fileListContainer.innerHTML = fileListHTML;
    
    // 如果是圖片檔案，載入預覽
    files.forEach((file, index) => {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = fileListContainer.querySelector(`.file-list-section:nth-child(${index + 1}) .file-preview img`);
                if (img) img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // 初始化 loading 動畫（只為上傳中的檔案）
    files.forEach((file, index) => {
        const fileKey = `${file.name}-${file.size}-${file.lastModified}`;
        const status = fileStatus[fileKey] || 'completed';
        
        if (status === 'uploading') {
            const animationContainer = document.getElementById(`loading-${index}`);
            if (animationContainer) {
                // 使用 Lottie 載入動畫
                if (typeof lottie !== 'undefined') {
                    lottie.loadAnimation({
                        container: animationContainer,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: 'Asset/loading_gray.json'
                    });
                }
            }
        }
    });
    
    // 顯示檔案列表容器
    fileListContainer.style.display = 'block';
    
    // 更新上傳區域顯示（只在檔案上傳模式下）
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        const isFileUploadMode = uploadArea.querySelector('.upload-container');
        if (isFileUploadMode) {
            // 只有在檔案數量達到限制時才隱藏 upload area
            if (files.length >= 2) {
                uploadArea.style.display = 'none';
            } else {
                // 上傳前和上傳一個檔案後都保持上傳區域可見
                uploadArea.style.display = 'block';
            }
        }
    }
}

// 全域變數來儲存已上傳的檔案
let uploadedFiles = [];

// 全域變數來儲存檔案狀態
let fileStatus = {}; // 儲存每個檔案的狀態：'uploading' | 'completed' | 'error'

/**
 * 上傳檔案到伺服器（模擬）
 * @param {Array} files - 檔案陣列
 * @param {number} startIndex - 新檔案在 uploadedFiles 中的起始索引
 */
function uploadFilesToServer(files, startIndex) {
    // 這裡實作實際的檔案上傳邏輯
    console.log('開始上傳檔案到伺服器:', files);
    
    // 模擬上傳進度
    showNotification('檔案上傳中...', 'info');
    
    // 模擬上傳完成
    setTimeout(() => {
        // 更新新檔案的狀態為完成
        files.forEach((file) => {
            const fileKey = `${file.name}-${file.size}-${file.lastModified}`;
            fileStatus[fileKey] = 'completed';
        });
        
        // 重新顯示檔案列表
        displayFileInfo(uploadedFiles);
        showNotification('檔案上傳成功！', 'success');
        
        // 清空檔案輸入框，讓使用者可以選擇新的檔案
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.value = '';
        }
    }, 3000);
}

/**
 * 刪除檔案
 * @param {number} index - 檔案索引
 */
function deleteFile(index) {
    // 獲取要刪除的檔案
    const fileToDelete = uploadedFiles[index];
    
    // 從檔案狀態中移除
    if (fileToDelete) {
        const fileKey = `${fileToDelete.name}-${fileToDelete.size}-${fileToDelete.lastModified}`;
        delete fileStatus[fileKey];
    }
    
    // 從陣列中移除檔案
    uploadedFiles.splice(index, 1);
    
    // 重新顯示檔案列表
    if (uploadedFiles.length > 0) {
        displayFileInfo(uploadedFiles);
    } else {
        // 如果沒有檔案了，隱藏檔案列表
        const fileListContainer = document.getElementById('fileListContainer');
        if (fileListContainer) {
            fileListContainer.style.display = 'none';
        }
    }
    
    // 重新顯示 upload area（只在檔案上傳模式下）
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        const isFileUploadMode = uploadArea.querySelector('.upload-container');
        if (isFileUploadMode) {
            uploadArea.style.display = 'block';
        }
    }
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
    
    // 更新文字輸入框的內容
    const essayTextInput = document.getElementById('essayTextInput');
    if (essayTextInput) {
        essayTextInput.value = text;
        // 觸發 input 事件來更新字數計數器
        const inputEvent = new Event('input', { bubbles: true });
        essayTextInput.dispatchEvent(inputEvent);
    }
    
    closeTextEditor();
    showNotification('作文內容已儲存', 'success');
}

/**
 * 切換手風琴展開/收合
 * @param {HTMLElement} element - 手風琴元素
 */
function toggleAccordion(element) {
    const isActive = element.classList.contains('active');
    const statusText = element.querySelector('.accordion-status-text');
    const accordionContent = element.nextElementSibling;
    
    element.classList.toggle('active');
    
    // 處理 accordion-content 的動畫效果
    if (accordionContent && accordionContent.classList.contains('accordion-content')) {
        if (isActive) {
            // 收合動畫 - 類似 Material UI Collapse
            const currentHeight = accordionContent.scrollHeight;
            accordionContent.style.height = currentHeight + 'px';
            
            // 強制重繪以確保動畫正確執行
            accordionContent.offsetHeight;
            
            // 開始收合動畫
            requestAnimationFrame(() => {
                accordionContent.style.height = '0px';
            });
        } else {
            // 展開動畫 - 類似 Material UI Collapse
            accordionContent.style.height = '0px';
            
            // 強制重繪
            accordionContent.offsetHeight;
            
            // 計算目標高度並開始展開動畫
            requestAnimationFrame(() => {
                const targetHeight = accordionContent.scrollHeight;
                accordionContent.style.height = targetHeight + 'px';
                
                // 動畫結束後設定為 auto，保持展開狀態
                setTimeout(() => {
                    accordionContent.style.height = 'auto';
                }, 280);
            });
        }
    }
    
    // 更新狀態文字
    if (statusText) {
        statusText.textContent = isActive ? '展開' : '收合';
    }
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
    if (!uploadArea) {
        showNotification('請先上傳作文檔案或輸入作文內容', 'error');
        return;
    }
    
    // 檢查是否有檔案上傳或文字輸入
    const hasFileUpload = uploadArea.querySelector('.upload-container');
    const hasTextInput = uploadArea.querySelector('.text-upload-container');
    const essayTextInput = document.getElementById('essayTextInput');
    
    if (!hasFileUpload && !hasTextInput) {
        showNotification('請先上傳作文檔案或輸入作文內容', 'error');
        return;
    }
    
    // 如果是文字輸入模式，檢查是否有輸入內容
    if (hasTextInput && essayTextInput) {
        const text = essayTextInput.value.trim();
        if (text.length === 0) {
            showNotification('請輸入作文內容', 'error');
            return;
        }
        if (text.length > 1500) {
            showNotification('作文內容超過 1500 字限制', 'error');
            return;
        }
    }
    
    // 直接跳轉到 loading 頁面
    window.location.href = 'loading.html';
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
    // 檢查是否為檔案上傳模式
    const isFileUploadMode = uploadArea.querySelector('.upload-container');
    if (!isFileUploadMode) {
        return; // 如果不是檔案上傳模式，不設置拖拽功能
    }
    
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
