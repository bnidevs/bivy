import { COLORS, VERTSIZES } from "./Constants";
import styled from "styled-components";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Body from "./Body";
import { QuickLink, Rope, Carabiner, Holds } from "./components/Climbing";
import { Row, Col, Link, Header, Subheader, ListDesc, VertSpacer, Title, ItemCtnr } from "./components/Basics";
import "./App.css";

const Split = styled(Row)`
  justify-content: space-between;
`;

const Menu = styled(Col)`
  margin: 1em;
  align-items: flex-end;
`;

function Nav() {
  return (
    <Split center>
      <Row center>
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
    <Col style={{ position: "relative" }}>
      <Holds />
      <Nav />
      <Body />
      <VertSpacer size={30} />
      <Carabiner />
      <Header name="about">ABOUT</Header>
      <Subheader>biv·ou·ac</Subheader>
      <ItemCtnr>
        <ListDesc>
          pronounced bi·voo·ak
          <br />
          <br />
          (NOUN) a temporary camp without tents or cover, used especially by
          mountaineers.
        </ListDesc>
      </ItemCtnr>
      <br />
      <Subheader>Or BIVY for short.</Subheader>
      <ItemCtnr>
        <ListDesc>
          The rooftop cafe at VITAL Climbing Gym serving bites and bevs.{" "}
        </ListDesc>
      </ItemCtnr>
      {window.innerHeight > window.innerWidth && <VertSpacer size={30} />}
      <Footer />
    </Col>
  );
}

export default App;
