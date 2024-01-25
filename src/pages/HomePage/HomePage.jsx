import "./HomePage.scss";
import MyDrawer from "../../Components/Drawer/Drawer";
import homepage from "../../assets/images/homepage.png";

const HomePage = () => {
  return (
    <main className="home-wrapper">
      <img src={homepage} style={{ width: "100%" }} />
      <MyDrawer />
    </main>
  );
};

export default HomePage;
