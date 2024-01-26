import forHim from "../../assets/images/for-him.png";
import "./CategoryCard.scss";

const CategoryCard = ({ imgSrc, text }) => {
  return (
    <article className="category">
      <img src={imgSrc} alt="" className="category__img" />
      <div className="category__text-wrapper">
        <p className="category__text">{text}</p>
      </div>
    </article>
  );
};

export default CategoryCard;
