import styled from "styled-components";
import { COLORS } from "../Constants";
import { InstagramBtn } from "./Social";
import { useState, useEffect } from "react";
import "../App.css";

const StyledFooter = styled.div`
  font-family: Montserrat;
  position: fixed;
  bottom: 0;
  left: 0;
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

const TopButton = styled.button`
  position: fixed;
  left: 0.5em;
  bottom: 10em;
  transform: rotate(270deg);
  background: none;
  border: none;
  font-size: 1em;
  font-family: great_outdoors;
  color: black;
  transition: visibility 0.5s, opacity 0.5s linear;
`;

function Footer() {
  const [scrollPos, setScrollPos] = useState(0);

  const scrollHandler = () => {
    setScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
  }, []);

  return (
    <StyledFooter>
      <a href="#home">
        <TopButton style={{ opacity: scrollPos != 0 ? "1.0" : "0.0" }}>
          to top {">>"}
        </TopButton>
      </a>
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
