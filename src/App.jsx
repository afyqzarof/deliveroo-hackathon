import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GiftPage from "./pages/GiftPage/GiftPage";
import PurchasePage from "./pages/PurchasePage/PurchasePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
