import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "./Constants";
import { Carabiner } from "./components/Climbing";
import Clipboard from "./components/Clipboard";

var strip = (resp) => {
    var qrystr = "Query.setResponse(";
    var start = resp.indexOf(qrystr) + qrystr.length;
  
    return resp.substring(start, resp.length - 2);
}

const ListDesc = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  color: ${COLORS.metal};
  margin: 5px 6em;
`;

const ListItem = styled(ListDesc)`
  font-weight: 700;
`;

const Text = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  color: ${COLORS.strong};
  margin: 10px 0;
`;

const CenterText = styled(Text)`
  margin: 10px 10vw;
  width: 80vw;
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
`;

const VertSpacer = styled.div`
  height: ${(props) => props.size}vh;
`;

const Subheader = styled.p`
  font-family: Montserrat;
  font-size: 1.75em;
  color: ${COLORS.altstrong};
  margin: 0px 3em;
  font-weight: 400;
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

function Body() {
    const [announcement, setAnnouncement] = useState("");
    const [categories, setCategories] = useState([]);
    const [menu, setMenu] = useState({});
    const [descs, setDescs] = useState({});

    const setData = (data) => {
        setAnnouncement(data[1]["c"][0]["v"]);

        let categs = data[3]["c"];
        let tempIndices = {};
        categs = categs.map((e, i) => {
            if(e != null && e["v"] != null && e["v"] != "Descriptions"){
                tempIndices[e["v"]] = i;
                return e["v"];
            }
        });
        categs = categs.filter((e) => !!e);

        const tempMenu = {};
        for(let j = 0; j < categs.length; j++){
            const currCat = categs[j];
            const catIndx = tempIndices[currCat];

            const items = [];
            for(let i = 4; i < data.length; i++){
                if(data[i]["c"][catIndx] != null && data[i]["c"][catIndx]["v"] != null){
                    items.push(data[i]["c"][catIndx]["v"]);
                    if(data[i]["c"][catIndx + 1] != null && data[i]["c"][catIndx + 1]["v"] != null){
                        descs[data[i]["c"][catIndx]["v"]] = data[i]["c"][catIndx + 1]["v"];
                    }
                }else{
                    console.log(currCat);
                    console.log(items);
                    tempMenu[currCat] = items;
                    break;
                }
            }
        }
        setMenu(tempMenu);
    }

    useEffect(() => {
        fetch("https://docs.google.com/spreadsheets/d/14246Cpqa374b0kNC4-gP9cpumHpeTRukz3ny1eZXtqA/gviz/tq?tqx=out:json&sheet=Sheet1")
            .then(response => response.text())
            .then(response => JSON.parse(strip(response)))
            .then(data => data["table"]["rows"])
            .then(data => setData(data));
    }, []);

    return (
        <>
            <VertSpacer size={announcement ? 8 : 25} />
            <CenterText>
                OPEN TO VITAL MEMBERS + <wbr />
                DAY PASS HOLDERS
            </CenterText>
            <CenterText>7 DAYS A WEEK</CenterText>
            {announcement && (
                <Clipboard text={announcement} />
            )}
            <VertSpacer size={90} />
            <Carabiner />
            <Header name="menu">MENU</Header>
            {categories.map((e) => {
                return (
                    <>
                        <Subheader>{e}</Subheader>
                        {menu[e].map((x) => {
                            <ListItem>{x}</ListItem>
                        })}
                        <VertSpacer size={10} />
                    </>
                )
            })}
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
            <VertSpacer size={10} />
            <Subheader>JUICE + SMOOTHIES</Subheader>
            <ListItem>Trop Out</ListItem>
            <ListDesc>strawberry, banana, mango, oat milk</ListDesc>
            <ListItem>Berry St.</ListItem>
            <ListDesc>strawberry, banana, blueberry, oat milk</ListDesc>
            <ListItem>Peak PB</ListItem>
            <ListDesc>
                banana, peanut butter, chocolate protein, cacao, oat milk
            </ListDesc>
            <ListItem>Lemonade</ListItem>
            <ListItem>Strawberry Lemonade</ListItem>
            <ListItem>Blueberry Lemonade</ListItem>
            <VertSpacer size={10} />
            <Subheader>BEER + BOTTLES</Subheader>
            <ListItem>GRIMM Wavetable IPA</ListItem>
            <ListItem>Narragansett Summer Crusher</ListItem>
            <ListItem>Hudson North Cider</ListItem>
            <ListItem>Archer Roose Rosé</ListItem>
            <ListItem>Greenpoint Beer & Ale Co.</ListItem>
            <ListDesc>IPA, Pocket Pils, Dos Exley</ListDesc>
            <ListItem>Athletic Brewing Upside Dawn</ListItem>
            <ListItem>Culture Kitchn Kombucha</ListItem>
            <ListDesc>apple, yuzu, lychee</ListDesc>
            <ListItem>Coke</ListItem>
            <ListItem>Diet Coke</ListItem>
            <ListItem>Sprite</ListItem>
            <ListItem>La Croix</ListItem>
            <ListItem>Topo Chico</ListItem>
            <ListDesc>lime, grapefruit</ListDesc>
            <VertSpacer size={10} />
            <Subheader>BITES</Subheader>
            <ListItem>Chicken Sandwich</ListItem>
            <ListDesc>
                taiwanese-inspired fried chicken on a milk bread bun with sweet and
                spicy pickle sauce
            </ListDesc>
            <ListItem>Popcorn Chicken</ListItem>
            <ListDesc>
                bite-sized fried chicken served with a choice of dipping sauce
            </ListDesc>
            <ListItem>Vegan "Wings"</ListItem>
            <ListDesc>buffalo, bbq, plain</ListDesc>
            <ListItem>Fries</ListItem>
            <ListDesc>furikake, bbq, ranch, cheddar, regular</ListDesc>
      </>
    );
}

export default Body;