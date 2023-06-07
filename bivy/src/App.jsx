import { COLORS, VERTSIZES } from "./Constants";
import styled from "styled-components";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Body from "./Body";
import { QuickLink, Rope, Carabiner, Holds } from "./components/Climbing";
import Clipboard from "./components/Clipboard";
import "./App.css";
import { useState } from "react";

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Split = styled(Row)`
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => (props.center ? "align-items: center;" : "")}
`;

const Menu = styled(Col)`
  margin: 1em;
  align-items: flex-end;
`;

const Link = styled.a`
  font-family: Montserrat;
  font-weight: 200;
  letter-spacing: 3px;
  font-size: 1.35em;
  color: ${COLORS.strong};
  margin: 10px 0;
  text-decoration: none;
`;

const Header = styled(Link)`
  font-weight: 700;
  font-size: 2.5em;
  margin: 0 2.5em;
  padding: 15px 0;
`;

const Subheader = styled.p`
  font-family: Montserrat;
  font-size: 1.75em;
  color: ${COLORS.altstrong};
  margin: 0px 3em;
  font-weight: 400;
`;

const Title = styled.p`
  font-family: great_outdoors;
  font-size: 2em;
  color: ${COLORS.strong};
  font-weight: 400;
`;

const ListDesc = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  color: ${COLORS.metal};
  margin: 5px 6em;
`;

const Text = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  color: ${COLORS.strong};
  margin: 10px 0;
`;

const VertSpacer = styled.div`
  height: ${(props) => props.size}vh;
`;

function Nav() {
  return (
    <Split>
      <Row>
        <Col center>
          <Logo />
          <Rope />
          <QuickLink />
        </Col>
        <Title>cafe</Title>
      </Row>
      <Menu>
        <Link href="#menu">MENU</Link>
        <Link href="#about">ABOUT</Link>
      </Menu>
    </Split>
  );
}

function App() {
  return (
    <Col>
      <Holds />
      <Nav />
      <Body />
      <VertSpacer size={30} />
      <Carabiner />
      <Header name="about">ABOUT</Header>
      <Subheader>biv·ou·ac</Subheader>
      <ListDesc>
        pronounced bi·voo·ak
        <br />
        <br />
        (NOUN) a temporary camp without tents or cover, used especially by
        mountaineers.
      </ListDesc>
      <br />
      <Subheader>Or BIVY for short.</Subheader>
      <ListDesc>
        The rooftop cafe at VITAL Climbing Gym serving bites and bevs.{" "}
      </ListDesc>
      {window.innerHeight > window.innerWidth && <VertSpacer size={30} />}
      <Footer />
    </Col>
  );
}

export default App;
