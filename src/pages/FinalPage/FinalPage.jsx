import order from "../../assets/images/order.png";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  return (
    <img
      src={order}
      alt=""
      style={{ width: "100%" }}
      onClick={() => {
        navigate("/receive");
      }}
    />
  );
};

export default OrderPage;
