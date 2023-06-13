import { useEffect, useState } from "react";
import styled from "styled-components";
import { Carabiner, QuickLink, Rope, Holds } from "./components/Climbing";
import Clipboard from "./components/Clipboard";
import {
  Header,
  ListDesc,
  Text,
  Subheader,
  VertSpacer,
  HoriSpacer,
  ItemCtnr,
  Row,
  Col,
  Title,
  Link,
} from "./components/Basics";
import Logo from "./components/Logo";
import VeganSym from "./assets/images/vegan_sym.svg";

var strip = (resp) => {
  var qrystr = "Query.setResponse(";
  var start = resp.indexOf(qrystr) + qrystr.length;

  return resp.substring(start, resp.length - 2);
};

const Split = styled(Row)`
  justify-content: space-between;
`;

const Menu = styled(Col)`
  margin: 1em;
  align-items: flex-end;
`;

const ListItem = styled(ListDesc)`
  font-weight: 700;
  margin: 10px 0;
`;

const CenterText = styled(Text)`
  margin: 10px ${(props) => (props.w ? (100 - props.w) / 2 : 10)}vw;
  width: ${(props) => (props.w ? props.w : 80)}vw;
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
`;

const VeganImg = styled.img`
  width: 1em;
  margin-right: 3px;
`;

function Nav(props) {
  return (
    <Split center>
      <Row center>
        <Col center>
          <Logo />
          <Rope ropelen={props.ropelen} />
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

function Body() {
  const [announcement, setAnnouncement] = useState("");
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState({});
  const [descs, setDescs] = useState({});
  const [vegan, setVegan] = useState({});

  const setData = (data) => {
    if (data[1]["c"][0] != null && data[1]["c"][0]["v"] != null) {
      setAnnouncement(data[1]["c"][0]["v"]);
    }

    let categs = data[3]["c"];
    let tempIndices = {};
    categs = categs.map((e, i) => {
      if (e != null && ![null, "Descriptions", "Vegan?"].includes(e["v"])) {
        tempIndices[e["v"]] = i;
        return e["v"];
      }
    });
    categs = categs.filter((e) => !!e);
    setCategories(categs);

    const tempMenu = {};
    const tempDescs = {};
    const tempVegan = {};
    for (let j = 0; j < categs.length; j++) {
      const currCat = categs[j];
      const catIndx = tempIndices[currCat];

      const items = [];
      for (let i = 4; i < data.length; i++) {
        if (
          data[i]["c"][catIndx] != null &&
          data[i]["c"][catIndx]["v"] != null
        ) {
          const item = data[i]["c"][catIndx]["v"];
          items.push(item);
          if (
            data[i]["c"][catIndx + 2] != null &&
            data[i]["c"][catIndx + 2]["v"] != null
          ) {
            tempDescs[item] = data[i]["c"][catIndx + 2]["v"];
          }

          if (
            data[i]["c"][catIndx + 1] != null &&
            data[i]["c"][catIndx + 1]["v"] != null
          ) {
            tempVegan[item] = true;
          }
        } else {
          break;
        }
      }
      tempMenu[currCat] = items;
    }

    setMenu(tempMenu);
    setDescs(tempDescs);
    setVegan(tempVegan);
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/14246Cpqa374b0kNC4-gP9cpumHpeTRukz3ny1eZXtqA/gviz/tq?tqx=out:json&sheet=Sheet1"
    )
      .then((response) => response.text())
      .then((response) => JSON.parse(strip(response)))
      .then((data) => data["table"]["rows"])
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Holds />
      <Nav
        ropelen={Math.max(
          0,
          Object.values(menu).flat().length +
            Object.values(descs).flat().length +
            (announcement ? 3 : 0) -
            Math.floor(window.innerHeight / 64) +
            10
        )}
      />
      <VertSpacer size={announcement ? 8 : 25} />
      <CenterText w={50}>
        OPEN TO <wbr />
        VITAL MEMBERS + <wbr />
        DAY PASS HOLDERS
      </CenterText>
      <CenterText>7 DAYS A WEEK</CenterText>
      {announcement && <Clipboard text={announcement} />}
      <VertSpacer size={90} />
      <Carabiner />
      <Header name="menu">MENU</Header>
      {categories.map((e, i) => {
        return (
          <div key={i}>
            <Subheader>{e}</Subheader>
            {menu[e].map((x, j) => {
              return (
                <ItemCtnr key={j}>
                  <Row center>
                    <ListItem>{x}</ListItem>
                    {x in vegan && (
                      <Row center>
                        <HoriSpacer size="0.3em" />
                        <VeganImg src={VeganSym} />
                      </Row>
                    )}
                  </Row>
                  <ListDesc>{descs[x]}</ListDesc>
                </ItemCtnr>
              );
            })}
            <VertSpacer size={10} />
          </div>
        );
      })}
      <Row center>
        <ItemCtnr>
          <Row center>
            <VeganImg src={VeganSym} />
            <ListDesc> = Vegan</ListDesc>
          </Row>
        </ItemCtnr>
      </Row>
    </>
  );
}

export default Body;
