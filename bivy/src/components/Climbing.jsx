import styled from "styled-components";
import { COLORS } from "../Constants";
import BinerTop from "../assets/images/biner_top.svg";
import BinerBot from "../assets/images/biner_bot.svg";
import blobshape from "blobshape";
import { useEffect, useState } from "react";

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wall = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -25;
  max-height: 160em;
`;

const QuickLink = styled.div`
  position: absolute;
  top: 7em;
  width: 20px;
  height: 40px;
  outline: 3px solid ${COLORS.metal};
  border-radius: 10px;
  z-index: -15;
`;

const RopeStyle = styled.div`
  position: absolute;
  top: calc(35px + 7em);
  border-radius: 2.5px;
  width: 5px;
  height: 240em;
  background-color: ${COLORS.altstrong};
  z-index: -10;
`;

const BinerHalf = styled.img`
  position: absolute;
  left: 2em;
  padding: 10px 0;
  width: 6em;
  z-index: ${(props) => props.z};
`;

const Tape = styled.div`
  position: absolute;
  width: 10px;
  background-color: ${COLORS.altstrong};
  height: 50px;
`;

function Carabiner() {
  return (
    <Col>
      <BinerHalf src={BinerTop} z={-12} />
      <BinerHalf src={BinerBot} z={0} />
    </Col>
  );
}

function Holds() {
  const [holds, setHolds] = useState([]);

  useEffect(() => {
    let t = [];
    let pos = [];
    for (let i = 0; i < 150; i++) {
      const { path } = blobshape({
        size: 25,
        growth: Math.floor(Math.random() * 5) + 3,
        edges: Math.floor(Math.random() * 12) + 6,
        seed: null,
      });
      let x = Math.random() * 70 + 10;
      let y = Math.random() * 3700 + 10;
      let b = false;
      for(let j = 0; j < pos.length; j++){
        if(Math.abs(pos[j][0] - x) + Math.abs(pos[j][1] - y) < 80){
          b = true;
          break;
        }
      }

      if(b){
        continue;
      }

      pos.push([x, y]);

      const svg = `<svg viewBox="0 0 100 100" class="hold" style="position: absolute; top:${y}px ; left:${x}vw"><path d="${path}" /></svg>`;
      t.push(svg);
    }
    setHolds(t);
  }, []);

  return <Wall dangerouslySetInnerHTML={{ __html: holds.join("") }} />;
}

function Rope() {
  return <RopeStyle />;
}

export { Rope, QuickLink, Carabiner, Holds, Tape };
