import "./AddressOption.scss";
import currentLocation from "../../assets/images/current-location.svg";
import pinIcon from "../../assets/images/pin.svg";

const AddressOption = ({ address, id, setAddress }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setAddress(e.target.value);
  };
  return (
    <div className="address-opt">
      <label className="container">
        <div className="address-opt__left">
          <img
            src={id === 0 ? currentLocation : pinIcon}
            className="address-opt__icon"
          />
          <label htmlFor={id} className="address-opt__address">
            {address}
          </label>
        </div>
        <input
          type="radio"
          name="address"
          id={id}
          onChange={handleChange}
          value={address}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default AddressOption;
