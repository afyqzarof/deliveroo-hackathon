import "./CheckoutPage.scss";
import checkoutTop from "../../assets/images/checkoutTop.png";
import checkoutBot from "../../assets/images/checkoutBot.png";
import PersonalMessage from "../PersonalMessage/PersonalMessage";
import { useState } from "react";

export const CheckoutPage = () => {
  const [isGift, setIsGift] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isBag, setIsBag] = useState(false);
  const [price, setPrice] = useState(32);
  const [writeMessage, setWriteMessage] = useState(false);
  const [message, setMessage] = useState("");

  if (writeMessage)
    return (
      <PersonalMessage
        message={message}
        setMessage={setMessage}
        setWriteMessage={setWriteMessage}
      />
    );

  return (
    <main className="checkoutpage">
      <img src={checkoutTop} className="image-checkout" />
      <div className="make-gift">
        <div className="container-1">
          <p className="text1">Make this a gift</p>
          <p className="text2">
            Transform the order experience for the gift receiver
          </p>
        </div>
        <input
          checked={isGift}
          type="checkbox"
          className="checkbox"
          onClick={() => {
            setIsGift(!isGift);
          }}
        />
      </div>
      {isGift && (
        <div className="options-container">
          <div className="options">
            <div
              className={`${isMessage && "remove"}`}
              onClick={() => {
                setIsMessage(!isMessage);
                !isMessage && setWriteMessage(true);
              }}
            >
              {" "}
              <span className="plus">{isMessage ? "-" : "+"}</span>{" "}
              {isMessage ? "Remove message" : "Add a personal message"}
            </div>
            <span
              onClick={() => {
                isMessage && setWriteMessage(true);
              }}
            >
              {isMessage ? "Edit" : "Free"}
            </span>
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
      <img src={checkoutBot} className="image-checkout" />
      <div className="price-container">
        <p className="text2">Total</p>
        <p className="total-price">{`£${parseFloat(price).toFixed(2)}`}</p>
      </div>
      <button className="cta-address checkout-button">
        Place delivery order
      </button>
    </main>
  );
};
