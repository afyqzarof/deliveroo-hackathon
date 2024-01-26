import "./ProductCard.scss";
import pinkFlowers from "../../assets/images/pink-flowers.png";
import plus from "../../assets/images/plus.svg";

const ProductCard = ({
  name,
  shop,
  distance,
  delivery,
  price,
  time,
  imgSrc,
}) => {
  return (
    <article className="prod-card">
      <img src={imgSrc} alt="" />
      <h3 className="prod-card__title">{name}</h3>
      <p className="prod-card__shop">
        <span className="prod-card__shop--bold">{shop} </span>({distance})
      </p>
      <p className="prod-card__delivery">£{delivery} delivery</p>
      <p className="prod-car__price">£{price}</p>
      <div className="plus-circle">
        <img src={plus} alt="" />
      </div>
      <div className="time">
        <p className="time__min">
          <span className="time__num">{time}</span> min
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
