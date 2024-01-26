import { Link } from "react-router-dom";
import basket from "../../assets/images/basket.png";

const BasketPage = () => {
  return (
    <Link to="/checkout">
      <img src={basket} style={{ width: "100%" }} />
    </Link>
  );
};

export default BasketPage;
