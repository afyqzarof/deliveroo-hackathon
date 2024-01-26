import "./PersonalMessage.scss";
import ios_keyboard from "../../assets/images/ios-keyboard.png";
import personal_message_title from "../../assets/images/personal_messaage_title.png";
import personal_message_body_empty from "../../assets/images/personal_message_body_empty.png";
import persona_map from "../../assets/images/personal_message_map.png";
import personal_btm_brder from "../../assets/images/Personal message border bottom.png";

const PersonalMessage = ({ setWriteMessage, setMessage, message }) => {
  return (
    <>
      <div className="border-top"></div>
      <img
        className="title"
        src={personal_message_title}
        onClick={() => {
          setWriteMessage(false);
        }}
      />
      <img className="body-top" src={personal_message_body_empty} />
      <div className="body">
        <img className="body_img" src={persona_map} />
        <textarea
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          placeholder="E.g. Happy Birthday"
          className="body_text"
          defaultValue={message ? message : ""}
        ></textarea>
      </div>
      <img className="brder-btm" src={personal_btm_brder} />
      <div className="save">
        <button
          className="save_button"
          onClick={() => {
            setWriteMessage(false);
          }}
        >
          Save
        </button>
      </div>

      <img className="ios-keyboard" src={ios_keyboard} />
    </>
  );
};

export default PersonalMessage;
