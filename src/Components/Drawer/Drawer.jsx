import { Drawer } from "vaul";
import "./Drawer.scss";

export default function MyDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button>Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="overlay" />
        <Drawer.Content className="overlay__content">
          <div className="wrapper">
            <div className="wrapper__wrapper" />
            <div style={{ maxWidth: "28rem" }}>
              <h1>Unstyled drawer for React.</h1>

              <p>
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
