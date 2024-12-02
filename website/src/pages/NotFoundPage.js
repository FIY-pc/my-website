import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/NotFoundPage.css"

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <Navbar />
            <NotFoundBody />
            <Footer />
        </div>
    )
}

function NotFoundBody(){
    return (
        <div>
            <h1>你来到了暂时没有东西的虚无之地</h1>
            <h2>别看了,快回去吧</h2>
        </div>
    )
}

export default NotFoundPage;