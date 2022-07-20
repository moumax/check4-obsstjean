import { Planet } from "react-planet";
import Button1 from "./Button1";

export default function Menu() {
  return (
    <Planet
      centerContent={<Button1 />}
      dragablePlanet
      dragRadiusPlanet={0}
      bounce
      open
      autoClose
    >
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: "50%",
          backgroundColor: "#9257ad",
        }}
      />
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: "50%",
          backgroundColor: "#9257ad",
        }}
      />
    </Planet>
  );
}
