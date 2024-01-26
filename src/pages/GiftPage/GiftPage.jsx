import giftHero from "../../assets/images/gift-hero.png";
import "./GiftPage.scss";
import Drawer from "../../Components/Drawer/Drawer";
import forHim from "../../assets/images/for-him.png";
import forHer from "../../assets/images/for-her.png";
import forKids from "../../assets/images/for-kids.png";
import couples from "../../assets/images/for-couples.png";
import twenty from "../../assets/images/under-20.png";
import fifty from "../../assets/images/under-50.png";
import valentines from "../../assets/images/valentines.png";
import birthday from "../../assets/images/birthday.png";
import anniversary from "../../assets/images/anniversary.png";
import grad from "../../assets/images/grad.png";
import filterIcon from "../../assets/images/fiilter-icon.svg";

import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

import pinkFlower from "../../assets/images/pink-flowers.png";
import yellowFlower from "../../assets/images/yellow-flower.png";
import mixedFlower from "../../assets/images/mixed-flower.png";
import rose from "../../assets/images/rose.png";
import { useNavigate } from "react-router-dom";
import wines from "../../data/wines";
import skins from "../../data/skin-care";
import featuredImg from "../../assets/images/featured.jpg";
const GiftPage = () => {
  const navigate = useNavigate();
  const [isForHer, setIsForHer] = useState(false);
  const handleForHer = () => {
    setIsForHer(true);
  };

  const flowers = [
    {
      name: "Pink Bouquet",
      shop: "Co-op",
      distance: "0.3",
      delivery: "1.45",
      price: "16.45",
      time: "5 - 15",
      imgSrc: pinkFlower,
    },
    {
      name: "Yellow Bouquet",
      shop: "Co-op",
      distance: "0.3",
      delivery: "2.49",
      price: "32.00",
      time: "5 - 15",
      imgSrc: yellowFlower,
    },
    {
      name: "Mixed Bouquet",
      shop: "Grocer",
      distance: "0.5",
      delivery: "1.55",
      price: "20.80",
      time: "10 - 15",
      imgSrc: mixedFlower,
    },
    {
      name: "Rose Bouquet",
      shop: "M&S",
      distance: "0.6",
      delivery: "1.49",
      price: "25.90",
      time: "10 - 15",
      imgSrc: rose,
    },
  ];

  const handleYellow = () => {
    navigate("/purchase");
  };

  return (
    <main className="gift-main">
      <div className="background">
        <div className="buffer"></div>
        <img
          src={giftHero}
          alt=""
          width={"100%"}
          onClick={() => {
            navigate("/");
          }}
        />
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
                <CategoryCard text="For Couples" imgSrc={couples} />
                <CategoryCard text="Under £20" imgSrc={twenty} />
                <CategoryCard text="Under £50" imgSrc={fifty} />
              </div>
              <h2 className="cat-title">Occasions</h2>
              <div className="cat-carousel">
                <CategoryCard text="Valentine’s Day" imgSrc={valentines} />
                <CategoryCard text="Birthday" imgSrc={birthday} />
                <CategoryCard text="Anniversary" imgSrc={anniversary} />
                <CategoryCard text="Graduation" imgSrc={grad} />
              </div>
              <div>
                <h2 className="stuck-title">Stuck on ideas?</h2>
                <button className="pick-btn">Lets us pick for you</button>
              </div>
              <div>
                <h2 className="cat-title">Featured</h2>
                <img src={featuredImg} />
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
                {flowers.map((flower) =>
                  flower.name === "Yellow Bouquet" ? (
                    <div onClick={handleYellow}>
                      <ProductCard
                        name={flower.name}
                        shop={flower.shop}
                        distance={flower.distance}
                        price={flower.price}
                        time={flower.time}
                        imgSrc={flower.imgSrc}
                        delivery={flower.delivery}
                      />
                    </div>
                  ) : (
                    <ProductCard
                      name={flower.name}
                      shop={flower.shop}
                      distance={flower.distance}
                      price={flower.price}
                      time={flower.time}
                      imgSrc={flower.imgSrc}
                      delivery={flower.delivery}
                    />
                  )
                )}
              </div>
              <h2 className="wine">Wine</h2>
              <div className="cat-carousel">
                {wines.map((flower) => (
                  <ProductCard
                    name={flower.name}
                    shop={flower.shop}
                    distance={flower.distance}
                    price={flower.price}
                    time={flower.time}
                    imgSrc={flower.imgSrc}
                    delivery={flower.delivery}
                  />
                ))}
              </div>

              <h2 className="wine">Skin Care</h2>
              <div className="cat-carousel">
                {skins.map((flower) => (
                  <ProductCard
                    name={flower.name}
                    shop={flower.shop}
                    distance={flower.distance}
                    price={flower.price}
                    time={flower.time}
                    imgSrc={flower.imgSrc}
                    delivery={flower.delivery}
                  />
                ))}
              </div>
            </article>
          )}
        </div>
      </section>
    </main>
  );
};

export default GiftPage;
