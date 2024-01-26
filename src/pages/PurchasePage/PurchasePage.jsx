import purchaseTop from "../../assets/images/yellow-purchase.png";
import purchaseBtm from "../../assets/images/purchase-bottom.png";
import "./PurchasePage.scss";
import { useNavigate } from "react-router-dom";
const PurchasePage = () => {
  const navigate = useNavigate();
  return (
    <div className="purchase-bg">
      <img
        src={purchaseTop}
        style={{ width: "100%" }}
        onClick={() => {
          navigate("/gift");
        }}
      />
      <img
        src={purchaseBtm}
        style={{ width: "100%" }}
        className="purchase-btm"
        onClick={() => {}}
      />
    </div>
  );
};

export default PurchasePage;
