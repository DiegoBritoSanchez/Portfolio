import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";  // Tailwind
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import AboutMe from "./components/aboutMe";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[Lavender] text-black">
                <Header />
                <main className="container mx-auto py-10">
                    <Routes>
                        <Route path="/" element={<Body />} /> 
                        <Route path="/about" element={<AboutMe />} /> 
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
