import JSConfetti from "js-confetti";
import { useEffect, useState } from "react";
import map1 from "../../assets/images/map1.png";
import map2 from "../../assets/images/receive2.png";
import { useNavigate } from "react-router-dom";

const ReceivePage = () => {
  const navigate = useNavigate();
  const [isArrive, setIsArrive] = useState(false);
  const jsConfetti = new JSConfetti();

  const confetti = () => {
    jsConfetti.addConfetti({
      emojis: ["🎉"],
      emojiSize: 100,
      confettiNumber: 30,
    });
  };
  useEffect(() => {
    setTimeout(confetti, 1000);
    setTimeout(() => {
      setIsArrive(true);
    }, 5000);
    setTimeout(() => {
      navigate("/final");
    }, 8000);
  }, []);

  return <div>{!isArrive ? <img src={map1} /> : <img src={map2} />}</div>;
};

export default ReceivePage;
