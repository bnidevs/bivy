import Footer from "./components/Footer";
import Body from "./Body";
import { Carabiner } from "./components/Climbing";
import { Col, Header, Subheader, ListDesc, VertSpacer, ItemCtnr } from "./components/Basics";
import "./App.css";

function App() {
  return (
    <Col style={{ position: "relative" }}>
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
