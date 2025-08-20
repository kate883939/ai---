import React from 'react';
import './AbilityScore.css';

const AbilityScore = ({ 
    title, 
    comment, 
    suggestion, 
    score, 
    totalScore = 100 
}) => {
    return (
        <div className="ability-item">
            <div className="ability-content">
                <div className="evaluation-header">{title}</div>
                <div className="evaluation-detail">
                    <div className="detail-label">評語</div>
                    <p className="evaluation-text">{comment}</p>
                </div>
                <div className="evaluation-detail">
                    <div className="detail-label">建議</div>
                    <p className="evaluation-text">{suggestion}</p>
                </div>
            </div>
            <div className="ability-score">
                <div className="ability-score-text">{score}</div>
                <div className="total-score">/ {totalScore} 分</div>
            </div>
        </div>
    );
};

export default AbilityScore;
