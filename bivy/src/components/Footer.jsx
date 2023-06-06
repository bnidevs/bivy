import styled from "styled-components";
import { COLORS } from "../Constants";
import { InstagramBtn } from "./Social";
import "../App.css";

const StyledFooter = styled.footer`
  font-family: Montserrat;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 20px;
  background-color: ${COLORS.altbg};
`;

const Weighted = styled.p`
  font-weight: ${(props) => props.weight};
`;

const Row = styled.div`
  display: flex;
  margin: -10px 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <InstagramBtn />
      <Row>
        <Weighted weight={700}>HOURS{"\u00A0"}</Weighted>
        <p>Mon - Fri 12 - 9, Sat - Sun 10 - 5</p>
      </Row>
      <Row>
        <p>VITAL Rooftop - 221 N 14th St, Brooklyn, NY</p>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
