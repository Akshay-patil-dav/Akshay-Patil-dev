import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_header from "./Components/Header/Main_header";
import Home from "./Pages/Client/Home";
import Dashboard from "./Pages/Admin/Dashboard";
import Main_nav from "./Components/Header/Main_nav";
import HomePage from "./Pages/Portfolio/HomePage";
import Headers from "./Components/Header/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main_header />}>
            <Route index element={<Home />} />
            {/* Add more routes here as needed */}
          </Route>

          <Route path="/home" element={<Main_nav />}>
            <Route index element={<Dashboard />} />
            {/* Add more admin routes here */}
          </Route>

          <Route path="/portfolio" element={<Headers />}>
            <Route index element={<HomePage />} />
            {/* Add more admin routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
