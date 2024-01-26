import phone from "../../assets/images/phone.png";
import { useNavigate } from "react-router-dom";

const PhonePage = () => {
  const navigate = useNavigate();
  return (
    <img
      src={phone}
      alt=""
      onClick={() => {
        navigate("/receive");
      }}
      style={{ width: "100%" }}
    />
  );
};

export default PhonePage;
