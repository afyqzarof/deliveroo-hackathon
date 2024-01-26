import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GiftPage from "./pages/GiftPage/GiftPage";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import ReceivePage from "./pages/ReceivePage/ReceivePage";
import FinalPage from "./pages/FinalPage/FinalPage";
import PhonePage from "./pages/PhonePage/PhonePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/receive" element={<ReceivePage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
