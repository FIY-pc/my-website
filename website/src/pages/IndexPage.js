import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/index.css";

function IndexBody() {
    return (
        <div className="welcome_container" id="welcome_text">
            <h1 className="fade-in-text">欢迎来到本小站</h1>
            <p className="fade-in-text">本站是我的一个个人网站</p>
            <p className="fade-in-text">我会往首页和工具栏里面放各种有趣的小玩意</p>
            <p className="fade-in-text">你也可以通过笔记库和博客查看我的学习笔记</p>
            <p className="fade-in-text">希望你能在本小站找到乐趣和你要的知识</p>
        </div>
    );
}

function IndexPage() {
    return (
        <div className="index-page">
            <Navbar />
            <IndexBody />
            <Footer />
        </div>
    );
}

export default IndexPage;
