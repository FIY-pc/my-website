import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">首页</Link>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><Link to="/tools">工具栏</Link></li>
                    <li><Link to="https://fiy-pc.github.io/notes/#/">笔记库</Link></li>
                    <li><a href="https://fiy-pc.github.io/">博客</a></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

