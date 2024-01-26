import purchaseTop from "../../assets/images/yellow-purchase.png";
import purchaseBtm from "../../assets/images/purchase-bottom.png";
import "./PurchasePage.scss";
const PurchasePage = () => {
  return (
    <div className="purchase-bg">
      <img src={purchaseTop} style={{ width: "100%" }} />
      <img
        src={purchaseBtm}
        style={{ width: "100%" }}
        className="purchase-btm"
      />
    </div>
  );
};

export default PurchasePage;
