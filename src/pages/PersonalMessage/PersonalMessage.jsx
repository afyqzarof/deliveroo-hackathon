import "./PersonalMessage.scss";
import ios_keyboard from "../../assets/images/ios-keyboard.png";

const PersonalMessage = () => {
  return (
    <>
      <div className="border-top"></div>
      <img src="title" />
      <img clasName src="" />
      <div className="save">
        <button className="save_button">Save</button>
      </div>
      <img className="ios-keyboard" src={ios_keyboard} />
    </>
  );
};

export default PersonalMessage;
