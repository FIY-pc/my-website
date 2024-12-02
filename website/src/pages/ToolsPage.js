import React from "react";
import { Outlet } from 'react-router-dom';  // 使用 Link 和 Outlet 实现子路由
import Navbar from "../components/Navbar";
import TimeDisplay from "../components/TimeDisplay";
import BlessingMessage from "../components/BlessingMessage";
import SquareBox from "../components/SquareBox";
import '../styles/tools.css';

function ToolsPage() {
    return (
        <div className="app">
            {/* 导航栏 */}
            <Navbar/>
            <div className="container">
                {/* 左侧区域 */}
                <div className="left-column">
                    <TimeDisplay/>
                    <BlessingMessage/>
                </div>
                {/* 右侧区域 */}
                <div className="right-column">
                    <div className="grid-container">
                        {/* 使用 Link 组件配置手速测试的链接 */}
                        <SquareBox color="red" text="手速测试" link="/hand-speed-test"/>
                        <SquareBox color="green" text="bot(未上线)" link="/NotFound"/>
                        <SquareBox color="grey" text="爬虫" link="https://github.com/FIY-pc/B-spider"/>
                        <SquareBox color="purple" text="..." link="/NotFound"/>
                    </div>
                    {/* 渲染子路由内容 */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default ToolsPage;
