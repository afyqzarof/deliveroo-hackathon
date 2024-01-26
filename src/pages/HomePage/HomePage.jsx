import "./HomePage.scss";
import MyDrawer from "../../Components/Drawer/Drawer";
import homepage from "../../assets/images/homepage-top.png";
import homepageBtm from "../../assets/images/homepage-bottom.png";
import giftIcon from "../../assets/images/gift.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="home-wrapper">
      <div className="buffer"></div>
      <img src={homepage} style={{ width: "100%" }} />
      {/* <MyDrawer /> */}
      <div
        className="home-hero"
        onClick={() => {
          navigate("/gift");
        }}>
        <div className="home-hero__border">
          <img src={giftIcon} />
          <div>
            <p className="home-hero__text">
              Get gifts delivered in as little as 20 minutes
            </p>
          </div>
        </div>
      </div>
      <img src={homepageBtm} style={{ width: "100%" }} />
    </main>
  );
};

export default HomePage;
