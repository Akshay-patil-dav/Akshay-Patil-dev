import { HashRouter , Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Portfolio/HomePage.jsx";
import Headers from "./Components/Header/Header.jsx";
import Footer from "./Components/Header/Footer.jsx";
import Project from "./Pages/Portfolio/Project.jsx";
import About from "./Pages/Portfolio/AboutPage.jsx";

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Headers />}>
            <Route index element={<HomePage />} />
            {/* Add more admin routes here */}
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Route>
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}
