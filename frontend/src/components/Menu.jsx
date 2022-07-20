import { useNavigate } from "react-router-dom";
import { Planet } from "react-planet";
import Button1 from "./Button1";

export default function Menu() {
  const navigate = useNavigate();

  const style1 = {
    height: 70,
    width: 70,
    borderRadius: "50%",
    backgroundColor: "#53B7F3",
  };
  const style2 = {
    height: 70,
    width: 70,
    borderRadius: "50%",
    backgroundColor: "#CE8A00",
  };
  const style3 = {
    height: 70,
    width: 70,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
  };

  return (
    <Planet
      centerContent={<Button1 />}
      dragablePlanet
      dragRadiusPlanet={0}
      bounce
      open={false}
      autoClose
    >
      <button type="button" style={style1} onClick={() => navigate("../")}>
        Home
      </button>
      <button
        type="button"
        style={style2}
        onClick={() => navigate("../events")}
      >
        Events
      </button>
      <button type="button" style={style3}>
        Admin
      </button>
    </Planet>
  );
}
