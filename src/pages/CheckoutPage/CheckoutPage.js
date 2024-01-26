import "./CheckoutPage.scss";
import checkoutTop from "../../assets/images/checkoutTop.png";
import checkoutBot from "../../assets/images/checkoutBot.png";
import { useState } from "react";

export const CheckoutPage = () => {
  const [isGift, setIsGift] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isBag, setIsBag] = useState(false);
  const [price, setPrice] = useState(32);

  return (
    <main className="checkoutpage">
      <img src={checkoutTop} />
      <div className="make-gift">
        <div className="container-1">
          <p className="text1">Make this a gift</p>
          <p className="text2">
            Transform the order experience for the gift receiver
          </p>
        </div>
        <input
          type="checkbox"
          className="checkbox"
          onClick={() => {
            setIsGift(!isGift);
          }}
        />
      </div>
      {isGift && (
        <div className="options-container">
          <div
            className="options"
            onClick={() => {
              setIsMessage(!isMessage);
            }}
          >
            <div className={`${isMessage && "remove"}`}>
              {" "}
              <span className="plus">{isMessage ? "-" : "+"}</span>{" "}
              {isMessage ? "Remove message" : "Add a personal message"}
            </div>
            <span>{isMessage ? "Edit" : "Free"}</span>
          </div>
          <div
            className="options"
            onClick={() => {
              isBag ? setPrice(price - 1) : setPrice(price + 1);
              setIsBag(!isBag);
            }}
          >
            <div className={`${isBag && "remove"}`}>
              {" "}
              <span className="plus">{isBag ? "-" : "+"}</span>{" "}
              {isBag ? "Remove bag" : "Add a Deliveroo gift bag"}
            </div>
            <span>£1.00</span>
          </div>
        </div>
      )}
      <img src={checkoutBot} />
    </main>
  );
};
