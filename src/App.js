import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./MainContent/Home/Home";
import Experience from "./MainContent/Experience/Experience";
import Projects from "./MainContent/Projects/Projects";
import Publications from "./MainContent/Publications/Publications";
import Hobbies from "./MainContent/Hobbies/Hobbies";
function App() {
    return (
        <>
            <HashRouter>
                <div className="site-container">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/publications" element={<Publications />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Layout>
                </div>
            </HashRouter>

        </>
    );
}

export default App;
