import giftHero from "../../assets/images/gift-hero.png";
import "./GiftPage.scss";
import Drawer from "../../Components/Drawer/Drawer";
import forHim from "../../assets/images/for-him.png";

const GiftPage = () => {
  return (
    <main className="gift-main">
      <div className="background">
        <div className="buffer"></div>
        <img src={giftHero} alt="" width={"100%"} />
      </div>
      <div className="buffer-down"></div>
      <section className="gift-section">
        <article className="btn-wrapper">
          <div style={{ width: "6rem" }}>
            <p className="gift-section__words">Where are you sending?</p>
          </div>
          <Drawer />
        </article>
        <article>
          <h2>categories</h2>
          <div>
            <article>
              <img src={forHim} alt="" />
              <div>
                <p>for Him</p>
              </div>
            </article>
          </div>
        </article>
      </section>
    </main>
  );
};

export default GiftPage;
