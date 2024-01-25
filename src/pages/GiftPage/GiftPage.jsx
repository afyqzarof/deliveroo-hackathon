import giftHero from "../../assets/images/gift-hero.png";
import "./GiftPage.scss";

const GiftPage = () => {
  return (
    <div className="background">
      <div className="buffer"></div>
      <img src={giftHero} alt="" width={"100%"} />
    </div>
  );
};

export default GiftPage;
