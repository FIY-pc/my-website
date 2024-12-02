import React from 'react';

// 可配置的祝福标语数组
const blessings = [
    "祝你今天心情愉快！",
    "愿你的一天充满阳光！",
    "一切顺利，事事如意！",
    "愿你前程似锦，未来可期！",
];

function BlessingMessage() {
    // 随机选择一条祝福标语
    const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];

    return (
        <div className="blessing-message">
            <p>{randomBlessing}</p>
        </div>
    );
}

export default BlessingMessage;
