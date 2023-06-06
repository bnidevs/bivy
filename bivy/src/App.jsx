import { COLORS } from "./Constants";
import styled from "styled-components";
import Logo from "./components/LogoContainer";
import Footer from "./components/Footer";
import {QuickLink, Rope, Carabiner, Holds} from "./components/Climbing";
import './App.css';

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Split = styled(Row)`
  justify-content: space-between;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Menu = styled(Col)`
  margin: 1em;
  align-items: flex-end;
`

const Link = styled.a`
  font-family: Montserrat;
  font-weight: 200;
  letter-spacing: 3px;
  font-size: 1.35em;
  color: ${COLORS.strong};
  margin: 10px 0;
  text-decoration: none;
`

const Header = styled(Link)`
  font-weight: 700;
  font-size: 2.5em;
  margin: 0 2.5em;
  padding: 15px 0;
`

const Subheader = styled.p`
  font-family: Montserrat;
  font-size: 1.75em;
  color: ${COLORS.altstrong};
  margin: 0px 3em;
  font-weight: 400;
`

const ListItem = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  color: ${COLORS.metal};
  margin: 5px 6em;
`

const Text = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  color: ${COLORS.strong};
  margin: 10px 0;
`

const CenterText = styled(Text)`
  margin: 10px 10vw;
  width: 80vw;
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
`

const VertSpacer = styled.div`
  height: 20vh;
`

function App() {
  return (
    <Col>
      <Holds />
      <Split>
        <Logo />
        <Menu>
          <Link href="#menu">MENU</Link>
          <Link href="#about">ABOUT</Link>
        </Menu>
      </Split>
      <Rope />
      <QuickLink />
      <VertSpacer />
      <CenterText>
        OPEN TO VITAL MEMBERS + <wbr />DAY PASS HOLDERS
      </CenterText>
      <CenterText>
        7 DAYS A WEEK
      </CenterText>
      <VertSpacer />
      <VertSpacer />
      <VertSpacer />
      <Carabiner />
      <Header name="menu">MENU</Header>
      <Subheader>COFFEE + TEA</Subheader>
      <ListItem>Espresso</ListItem>
      <ListItem>Cortado</ListItem>
      <ListItem>Cappuccino</ListItem>
      <ListItem>Latte</ListItem>
      <ListItem>Cold Brew</ListItem>
      <ListItem>Matcha Latte</ListItem>
      <ListItem>Matcha Lemonade</ListItem>
      <ListItem>Matcha Fizz</ListItem>
      <ListItem>Hojicha Latte</ListItem>
      <Subheader>JUICE + SMOOTHIES</Subheader>
      <ListItem>Trop Out - <wbr />strawberry, banana, mango, oat milk</ListItem>
      <ListItem>Berry St. - <wbr />strawberry, banana, blueberry, oat milk</ListItem>
      <ListItem>Peak PB - <wbr />banana, peanut butter, chocolate protein, cacao, oat milk</ListItem>
      <ListItem>Lemonade</ListItem>
      <ListItem>Strawberry Lemonade</ListItem>
      <ListItem>Blueberry Lemonade</ListItem>
      <Subheader>BEER + BOTTLES</Subheader>
      <ListItem>GRIMM Wavetable IPA</ListItem>
      <ListItem>Narragansett Summer Crusher</ListItem>
      <ListItem>Hudson North Cider</ListItem>
      <ListItem>Archer Roose Rosé</ListItem>
      <ListItem>Greenpoint IPA</ListItem>
      <ListItem>Greenpoint Pocket Pils</ListItem>
      <ListItem>Greenpoint Dos Exley</ListItem>
      <ListItem>Athletic Brewing Upside Dawn</ListItem>
      <ListItem>Culture Kitchn Lychee Kombucha</ListItem>
      <ListItem>Culture Kitchn Apple Kombucha</ListItem>
      <ListItem>Culture Kitchn Yuzu Kombucha</ListItem>
      <ListItem>Coke</ListItem>
      <ListItem>Diet Coke</ListItem>
      <ListItem>Sprite</ListItem>
      <ListItem>La Croix</ListItem>
      <ListItem>Topo Chico</ListItem>
      <Subheader>BITES</Subheader>
      <ListItem>Chicken Sandwich - taiwanese-inspired fried chicken on a milk bread bun with sweet and spicy pickle sauce</ListItem>
      <ListItem>Popcorn Chicken - bite-sized fried chicken served with a choice of dipping sauce</ListItem>
      <ListItem>Vegan "Wings" - buffalo, bbq, plain</ListItem>
      <ListItem>Fries - furikake, bbq, ranch, cheddar, regular</ListItem>
      <VertSpacer />
      <Carabiner />
      <Header name="about">ABOUT</Header>
      <Subheader>biv·ou·ac</Subheader>
      <ListItem>pronounced bi·voo·ak<br /><br />(NOUN) a temporary camp without tents or cover, used especially by mountaineers.</ListItem>
      <br />
      <Subheader>Or BIVY for short.</Subheader>
      <ListItem>The rooftop cafe at VITAL Climbing Gym serving bites and bevs. </ListItem>
      <Footer />
    </Col>
  );
}

export default App;
