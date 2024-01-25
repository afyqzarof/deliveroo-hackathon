import "./AddressOption.scss";
import currentLocation from "../../assets/images/current-location.svg";
import pinIcon from "../../assets/images/pin.svg";

const AddressOption = ({ address, id }) => {
  return (
    <div className="address-opt">
      <label class="container">
        <div className="address-opt__left">
          <img
            src={id === 0 ? currentLocation : pinIcon}
            className="address-opt__icon"
          />
          <label htmlFor={id} className="address-opt__address">
            {address}
          </label>
        </div>
        <input type="radio" name="address" id={id} />
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default AddressOption;
