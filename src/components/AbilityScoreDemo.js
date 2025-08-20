import React from 'react';
import AbilityScore from './AbilityScore';
import './AbilityScoreDemo.css';

const AbilityScoreDemo = () => {
    const abilityData = [
        {
            title: "內容與結構",
            comment: "文章能夠圍繞老師的形象發展內容，選材貼近生活，舉例真實自然，能引發共鳴。對老師的描寫不流於表面，能看出作者細膩的觀察，內容有深度與層次。主題思想明確，感情真摯動人，具備啟發性與反思性。",
            suggestion: "對老師的描寫不流於表面，能看出作者細膩的觀察，內容有深度與層次。主題思想明確，感情真摯動人，具備啟發性與反思性。",
            score: 90
        },
        {
            title: "邏輯與修辭",
            comment: "文章能夠圍繞老師的形象發展內容，選材貼近生活，舉例真實自然，能引發共鳴。對老師的描寫不流於表面，能看出作者細膩的觀察，內容有深度與層次。主題思想明確，感情真摯動人，具備啟發性與反思性。",
            suggestion: "對老師的描寫不流於表面，能看出作者細膩的觀察，內容有深度與層次。主題思想明確，感情真摯動人，具備啟發性與反思性。",
            score: 88
        },
        {
            title: "字詞與標點",
            comment: "文章能夠圍繞老師的形象發展內容，選材貼近生活，舉例真實自然，能引發共鳴。對老師的描寫不流於表面，能看出作者細膩的觀察，內容有深度與層次。主題思想明確，感情真摯動人，具備啟發性與反思性。",
            suggestion: "對老師的描寫不流於表面，能看出作者細膩的觀察，內容有深度與層次。主題思想明確，感情真摯動人，具備啟發性與反思性。",
            score: 80
        },
        {
            title: "創意與個人表達",
            comment: "文章能夠圍繞老師的形象發展內容，選材貼近生活，舉例真實自然，能引發共鳴。對老師的描寫不流於表面，能看出作者細膩的觀察，內容有深度與層次。主題思想明確，感情真摯動人，具備啟發性與反思性。",
            suggestion: "對老師的描寫不流於表面，能看出作者細膩的觀察，內容有深度與層次。主題思想明確，感情真摯動人，具備啟發性與反思性。",
            score: 80
        }
    ];

    return (
        <div className="ability-score-demo">
            <div className="demo-header">
                <h2>能力指標</h2>
            </div>
            <div className="demo-content">
                {abilityData.map((ability, index) => (
                    <React.Fragment key={index}>
                        <AbilityScore
                            title={ability.title}
                            comment={ability.comment}
                            suggestion={ability.suggestion}
                            score={ability.score}
                        />
                        {index < abilityData.length - 1 && <div className="divider"></div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default AbilityScoreDemo;
