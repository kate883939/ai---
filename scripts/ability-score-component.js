// Ability Score Component
class AbilityScoreComponent {
    constructor(score, total = 100) {
        this.score = score;
        this.total = total;
    }

    // 生成 HTML 結構
    render() {
        return `
            <div class="ability-score">
                <div class="ability-score-text">${this.score}</div>
                <div class="total-score">/ ${this.total} 分</div>
            </div>
        `;
    }

    // 插入到指定元素
    mount(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            container.innerHTML = this.render();
        }
    }

    // 更新分數
    updateScore(newScore) {
        this.score = newScore;
        const scoreElement = document.querySelector('.ability-score-text');
        if (scoreElement) {
            scoreElement.textContent = this.score;
        }
    }

    // 更新總分
    updateTotal(newTotal) {
        this.total = newTotal;
        const totalElement = document.querySelector('.total-score');
        if (totalElement) {
            totalElement.textContent = `/ ${this.total} 分`;
        }
    }
}

// 添加 CSS 樣式
function addAbilityScoreStyles() {
    if (!document.getElementById('ability-score-styles')) {
        const style = document.createElement('style');
        style.id = 'ability-score-styles';
        style.textContent = `
            .ability-score {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

            .ability-score-text {
                font-size: 24px;
                font-weight: 700;
                color: #1890FF;
                line-height: 1.5;
            }

            .total-score {
                font-size: 18px;
                font-weight: 400;
                color: #637381;
                line-height: 1.33;
            }
        `;
        document.head.appendChild(style);
    }
}

// 初始化元件
function initAbilityScoreComponents() {
    addAbilityScoreStyles();
    
    // 創建所有 ability score 元件
    const scores = [
        { score: 90, total: 100 },
        { score: 88, total: 100 },
        { score: 80, total: 100 },
        { score: 80, total: 100 }
    ];

    // 找到所有 ability-score 容器並替換
    const abilityScoreContainers = document.querySelectorAll('.ability-score');
    abilityScoreContainers.forEach((container, index) => {
        if (scores[index]) {
            const component = new AbilityScoreComponent(scores[index].score, scores[index].total);
            component.mount(container);
        }
    });
}

// 當 DOM 載入完成後初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAbilityScoreComponents);
} else {
    initAbilityScoreComponents();
}

// 導出元件供外部使用
window.AbilityScoreComponent = AbilityScoreComponent;
window.initAbilityScoreComponents = initAbilityScoreComponents;
