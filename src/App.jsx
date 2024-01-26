import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GiftPage from "./pages/GiftPage/GiftPage";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import PersonalMessage from "./pages/PersonalMessage/PersonalMessage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/personalmessage" element={<PersonalMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
