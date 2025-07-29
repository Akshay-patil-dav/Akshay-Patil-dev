import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Portfolio/HomePage";
import Headers from "./Components/Header/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Headers />}>
            <Route index element={<HomePage />} />
            {/* Add more admin routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
