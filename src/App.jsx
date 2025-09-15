import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Portfolio/HomePage";
import Headers from "./Components/Header/Header";
import Footer from "./Components/Header/Footer";
import Project from "./Pages/Portfolio/Project";

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
