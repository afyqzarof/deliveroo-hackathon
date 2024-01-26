import "./ProductCard.scss";
import pinkFlowers from "../../assets/images/pink-flowers.png";
import plus from "../../assets/images/plus.svg";

const ProductCard = () => {
  return (
    <article className="prod-card">
      <img src={pinkFlowers} alt="" />
      <h3 className="prod-card__title">Pink Bouquet</h3>
      <p className="prod-card__shop">
        <span className="prod-card__shop--bold">Co-op </span>
        (0.3miles)
      </p>
      <p className="prod-card__delivery">£1.49 delivery</p>
      <p className="prod-car__price">£6.45</p>
      <div className="plus-circle">
        <img src={plus} alt="" />
      </div>
      <div className="time">
        <p className="time__min">
          <span className="time__num">5 - 15</span> min
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
