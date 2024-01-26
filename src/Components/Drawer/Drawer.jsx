import { Drawer } from "vaul";
import "./Drawer.scss";
import AddressOption from "../AddressOption/AddressOption";
import { useState } from "react";
import downArrow from "../../assets/images/down-arrow.svg";

export default function MyDrawer() {
  const [address, setAddress] = useState(null);
  const locationArray = [
    "Current location",
    "603 Lantana heights, Glasshouse Gardens, London, E20 1HR",
    "5D Insignia Point, 2 Celebration Ave, East Village, London, E20 1DB",
    "55-57 Rivington St, London EC24 3QA",
  ];
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        {!address ? (
          <button className="cta-address">Change to gift address</button>
        ) : (
          <button className="sel-add-btn">
            <p className="selected-address">{address.split(",")[0]}</p>
            <img src={downArrow} className="sel-add-arrow" />
          </button>
        )}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="overlay" />
        <Drawer.Content className="overlay__content">
          <div className="wrapper">
            <div style={{ maxWidth: "28rem" }}>
              <h1 className="wrapper__title">Deliver to...</h1>
              <div>
                <button className="wrapper__address">+ New address</button>
              </div>
              <form>
                {locationArray.map((el, index) => (
                  <AddressOption
                    address={el}
                    id={index}
                    key={el}
                    setAddress={setAddress}
                  />
                ))}
              </form>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
