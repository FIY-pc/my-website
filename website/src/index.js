import React from 'react';
import ReactDOM from 'react-dom/client';  // 引入新的 React 18 API
import './styles/tools.css';  // 引入样式文件
import App from './App';

// 使用 createRoot 替代 ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


