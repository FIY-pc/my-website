import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css"

function AboutPage() {
    return (
        <div className="profile-page">
            <Navbar />
            <AboutPageBody />
            <Footer />
        </div>
    )
}

function AboutPageBody(){
    return (
        <div className="about_container">
            <div className="about">
                <h1>关于本站</h1>
                <h2>本站是一个React项目实践</h2>
                <p>虽然目前还比较简陋</p>
                <p>但在将来可能会经过更新,挂载各种服务</p>
                <p>并部署到我的云服务器上成为一个长期活跃网站</p>
            </div>
            <dl className="question">
                <dt>如何找到我?</dt>
                <dd>你可以通过我的<a href="https://github.com/FIY-pc">github</a>账号来联系我</dd>
                <dt>如何反馈错误?</dt>
                <dd>直接到<a href="https://github.com/FIY-pc/my-website">本站点仓库</a>提issue即可,感谢您的耐心纠正与反馈!</dd>
            </dl>
        </div>
    )
}

export default AboutPage;