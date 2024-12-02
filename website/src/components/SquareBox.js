import React from 'react';
import { Link } from 'react-router-dom';  // 导入 Link 组件

function SquareBox({ color, text, link }) {
    return (
        <Link to={link} className="square-box" style={{ backgroundColor: color }}>
            <p>{text}</p>
        </Link>
    );
}

export default SquareBox;
