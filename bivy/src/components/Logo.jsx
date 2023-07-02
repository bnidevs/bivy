import styled from "styled-components";
import BivyLogo from "../assets/images/Bivy_SocialIcons_1.svg";
import "../App.css";
import { Tape } from "./Climbing";

const LogoImg = styled.img`
  width: 15em;
  height: 15em;
  margin: -7em 0 0;
  z-index: 50;
`;

function Logo() {
  return (
    <>
      <a name="home" href="#home" onTouchStart={() => {}}>
        <LogoImg alt={"home"} src={BivyLogo} />
      </a>
      <Tape
        style={{ left: "10em", top: "5.5em", rotate: "135deg", zIndex: "-10" }}
      />
      <Tape
        style={{ left: "10.5em", top: "5em", rotate: "135deg", zIndex: "-10" }}
      />
    </>
  );
}

export default Logo;
