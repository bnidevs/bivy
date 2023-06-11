import styled from "styled-components";
import BivyLogo from "../assets/images/Bivy_SocialIcons_1.png";
import "../App.css";
import { Tape } from "./Climbing";

const LogoImg = styled.img`
  width: 7em;
  height: 7em;
  margin: 10px;
`;

function Logo() {
  return (
    <>
      <a name="home" href="#home" onTouchStart={() => {}}>
        <LogoImg src={BivyLogo} />
      </a>
      <Tape
        style={{ left: "6em", top: "5.5em", rotate: "135deg", zIndex: "-10" }}
      />
      <Tape
        style={{ left: "6.5em", top: "5em", rotate: "135deg", zIndex: "-10" }}
      />
    </>
  );
}

export default Logo;
