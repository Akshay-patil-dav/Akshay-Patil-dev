import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Portfolio/HomePage.jsx";
import Headers from "./Components/Header/Header.jsx";
import Footer from "./Components/Header/Footer.jsx";
import Project from "./Pages/Portfolio/Project.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Headers />}>
            <Route index element={<HomePage />} />
            {/* Add more admin routes here */}
            <Route path="/project" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
