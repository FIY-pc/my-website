import Navbar from "../components/Navbar";
import "../styles/notes.css"
function NotesPage() {
    return (
        <div className="notes-page">
            <Navbar />
            <iframe
                src="/my-website/docs/note.html"
                width="100%" height="100%"
                style={{ border: 'none' }}
                title="笔记库"
            />
        </div>
    );
}

export default NotesPage;