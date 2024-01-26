import giftHero from "../../assets/images/gift-hero.png";
import "./GiftPage.scss";
import Drawer from "../../Components/Drawer/Drawer";
import forHim from "../../assets/images/for-him.png";
import forHer from "../../assets/images/for-her.png";
import forKids from "../../assets/images/for-kids.png";
import valentines from "../../assets/images/valentines.png";
import birthday from "../../assets/images/birthday.png";
import anniversary from "../../assets/images/anniversary.png";
import downArrow from "../../assets/images/down-arrow.svg";

import CategoryCard from "../../Components/CategoryCard/CategoryCard";

const GiftPage = () => {
  return (
    <main className="gift-main">
      <div className="background">
        <div className="buffer"></div>
        <img src={giftHero} alt="" width={"100%"} />
      </div>
      <div className="buffer-down"></div>
      <section className="gift-section">
        <div className="translate">
          <article className="btn-wrapper">
            <div style={{ width: "6rem" }}>
              <p className="gift-section__words">Where are you sending?</p>
            </div>

            <Drawer />
          </article>
          <article>
            <h2 className="cat-title">Categories</h2>
            <div className="cat-carousel">
              <CategoryCard text="For Him" imgSrc={forHim} />
              <CategoryCard text="For Her" imgSrc={forHer} />
              <CategoryCard text="For Kids" imgSrc={forKids} />
              <CategoryCard text="For Couples" imgSrc={forHim} />
            </div>
            <h2 className="cat-title">Occasions</h2>
            <div className="cat-carousel">
              <CategoryCard text="Valentine’s Day" imgSrc={valentines} />
              <CategoryCard text="Birthday" imgSrc={birthday} />
              <CategoryCard text="Anniversary" imgSrc={anniversary} />
              <CategoryCard text="Graduation" imgSrc={forHim} />
            </div>
            <div>
              <h2 className="stuck-title">Stuck on ideas?</h2>
              <button className="pick-btn">Lets us pick for you</button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default GiftPage;
