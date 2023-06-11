import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "./Constants";
import { Carabiner } from "./components/Climbing";
import Clipboard from "./components/Clipboard";
import { Header, ListDesc, Text, Subheader, VertSpacer, ItemCtnr } from "./components/Basics";

var strip = (resp) => {
  var qrystr = "Query.setResponse(";
  var start = resp.indexOf(qrystr) + qrystr.length;

  return resp.substring(start, resp.length - 2);
};

const ListItem = styled(ListDesc)`
  font-weight: 700;
  margin: 10px 0;
`;

const CenterText = styled(Text)`
  margin: 10px ${props => props.w ? (100 - props.w) / 2 : 10}vw;
  width: ${props => props.w ? props.w : 80}vw;
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
`;

function Body() {
  const [announcement, setAnnouncement] = useState("");
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState({});
  const [descs, setDescs] = useState({});

  const setData = (data) => {
    if(data[1]["c"][0] != null && data[1]["c"][0]["v"] != null){
        setAnnouncement(data[1]["c"][0]["v"]);
    }

    let categs = data[3]["c"];
    let tempIndices = {};
    categs = categs.map((e, i) => {
      if (e != null && e["v"] != null && e["v"] != "Descriptions") {
        tempIndices[e["v"]] = i;
        return e["v"];
      }
    });
    categs = categs.filter((e) => !!e);
    setCategories(categs);

    const tempMenu = {};
    const tempDescs = {};
    for (let j = 0; j < categs.length; j++) {
      const currCat = categs[j];
      const catIndx = tempIndices[currCat];

      const items = [];
      for (let i = 4; i < data.length; i++) {
        if (
          data[i]["c"][catIndx] != null &&
          data[i]["c"][catIndx]["v"] != null
        ) {
          items.push(data[i]["c"][catIndx]["v"]);
          if (
            data[i]["c"][catIndx + 1] != null &&
            data[i]["c"][catIndx + 1]["v"] != null
          ) {
            tempDescs[data[i]["c"][catIndx]["v"]] = data[i]["c"][catIndx + 1]["v"];
          }
        } else {
          break;
        }
      }
      tempMenu[currCat] = items;
    }
    setMenu(tempMenu);
    setDescs(tempDescs);
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
      <VertSpacer size={announcement ? 8 : 25} />
      <CenterText w={50}>
        OPEN TO <wbr />VITAL MEMBERS + <wbr />
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
                        <ListItem>{x}</ListItem>
                        <ListDesc>{descs[x]}</ListDesc>
                    </ItemCtnr>
                )
            })}
            <VertSpacer size={10} />
          </div>
        );
      })}
    </>
  );
}

export default Body;
