import giftHero from "../../assets/images/gift-hero.png";
import "./GiftPage.scss";
import Drawer from "../../Components/Drawer/Drawer";
import forHim from "../../assets/images/for-him.png";
import forHer from "../../assets/images/for-her.png";
import forKids from "../../assets/images/for-kids.png";
import valentines from "../../assets/images/valentines.png";
import birthday from "../../assets/images/birthday.png";
import anniversary from "../../assets/images/anniversary.png";
import filterIcon from "../../assets/images/fiilter-icon.svg";

import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const GiftPage = () => {
  const [isForHer, setIsForHer] = useState(false);
  const handleForHer = () => {
    setIsForHer(true);
  };
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
          {!isForHer ? (
            <article>
              <h2 className="cat-title">Categories</h2>
              <div className="cat-carousel">
                <CategoryCard text="For Him" imgSrc={forHim} />
                <div onClick={handleForHer}>
                  <CategoryCard text="For Her" imgSrc={forHer} />
                </div>
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
          ) : (
            <article>
              <div className="her-title-wrapper">
                <h2 className="her-title">Gifts For Her</h2>
                <img src={filterIcon} alt="" />
              </div>
              <h2 className="flowers">Flowers</h2>
              <div className="cat-carousel">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </article>
          )}
        </div>
      </section>
    </main>
  );
};

export default GiftPage;
