import styled from "styled-components";
import { COLORS } from "../Constants";
import "../App.css";

const LogoBox = styled.div`
  width: 7em;
  height: 7em;
  margin: 10px;
  display: flex;
  background-color: ${COLORS.strong};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const LogoRails = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: white;
  font-family: great_outdoors;
  font-size: 3em;
  letter-spacing: -0.5em;
  width: 0.6em;
  justify-content: center;
  align-items: center;
  display: flex;
  transform: translateY(-0.35em) translateX(0.05em);
  text-align: left;
`;

function Logo() {
  return (
    <LogoBox>
      <LogoRails>bv</LogoRails>
      <LogoRails>iy</LogoRails>
    </LogoBox>
  );
}

export default Logo;

export { LogoBox };
