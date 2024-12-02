import React, { useState, useEffect, useRef } from 'react';
import '../styles/HandSpeedTest.css';

const timeout = 5;  // 测试总时间 5 秒

const HandSpeedTest = () => {
    const [isTesting, setIsTesting] = useState(false);  // 是否正在进行手速测试
    const [timer, setTimer] = useState(timeout);  // 倒计时
    const [clickCount, setClickCount] = useState(0);  // 记录用户点击次数
    const [averageClicks, setAverageClicks] = useState(null);  // 每秒平均点击次数
    const [isTestFinished, setIsTestFinished] = useState(false);  // 测试是否结束

    const timeoutRef = useRef(null);  // 用于存储 setTimeout 的引用

    // 计时器，倒计时每 10 毫秒更新一次
    useEffect(() => {
        if (isTesting && timer > 0) {
            // 使用 setTimeout 来模拟每 10 毫秒更新一次倒计时
            timeoutRef.current = setTimeout(() => {
                setTimer((prevTimer) => {
                    const newTimer = prevTimer - 0.01;  // 每 0.01 秒递减
                    if (newTimer <= 0) {
                        // 测试结束，计算平均点击次数
                        const avgClicks = (clickCount / timeout).toFixed(2);
                        setAverageClicks(avgClicks);
                        setIsTestFinished(true);  // 测试结束
                        return 0;  // 倒计时为 0
                    }
                    return newTimer.toFixed(2);  // 保留两位小数
                });
            }, 10);  // 每 10 毫秒更新一次倒计时
        }

        // 清理计时器
        return () => clearTimeout(timeoutRef.current);
    }, [isTesting, timer, clickCount]);

    // 处理按钮点击
    const handleButtonClick = () => {
        if (!isTesting) {
            // 开始测试
            setIsTesting(true);
            setClickCount(0);  // 重置点击次数
            setTimer(timeout);  // 重置倒计时为 5 秒
            setIsTestFinished(false);  // 重置测试状态
        } else {
            // 计时中增加点击次数
            setClickCount((prevCount) => prevCount + 1);
        }
    };

    // 重试按钮
    const handleRetry = () => {
        setIsTesting(false);
        setClickCount(0);
        setTimer(timeout);
        setAverageClicks(null);
        setIsTestFinished(false);
    };

    // 退出按钮
    const handleExit = () => {
        window.history.back();  // 返回上一级页面
    };

    return (
        <div className="test_container">
            <div className="timer">
                {isTesting ? timer : '点击按钮开始测试手速'}
            </div>

            <button
                className="button"
                style={{
                    backgroundColor: isTesting ? 'yellow' : 'red',
                }}
                onClick={handleButtonClick}
            >
                {isTesting && timer > 0 ? '' : '开始'}
            </button>

            {isTestFinished && (
                <div className="result">
                    <p>测试结束！</p>
                    <p>平均每秒点击次数：{averageClicks}</p>
                </div>
            )}

            {isTestFinished && (
                <div className="control_buttons">
                    <button className="retry-button" onClick={handleRetry}>
                        再测一次
                    </button>
                    <button className="exit-button" onClick={handleExit}>
                        退出
                    </button>
                </div>
            )}
        </div>
    );
};

export default HandSpeedTest;

