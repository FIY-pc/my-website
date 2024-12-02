import React from 'react';
import ToolsPage from "./pages/ToolsPage";
import IndexPage from "./pages/IndexPage";
import HandSpeedTest from "./pages/HandSpeedTest";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import NotesPage from "./pages/NotesPage";

function App() {
    return (
        <Router basename="/my-website">
            {/* 路由配置 */}
            <Routes>
                {/*导航栏页面路由*/}
                <Route path="/" element={<IndexPage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/hand-speed-test" element={<HandSpeedTest />} />
                <Route path="/about" element={<AboutPage />} />
                {/*组件路由*/}
                <Route path="/hand-speed-test" element={<HandSpeedTest />} />
                {/*错误处理*/}
                <Route path="/NotFound" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;

