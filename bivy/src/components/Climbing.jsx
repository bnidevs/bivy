import styled from "styled-components";
import { COLORS } from "../Constants";
import BinerTop from "../assets/images/biner_top.svg";
import BinerBot from "../assets/images/biner_bot.svg";
import blobshape from "blobshape";
import { useEffect, useState } from "react";
import HoldSVGS from "./misc/HoldImports";
import { Row } from "./Basics";

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
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

const RopeCtnr = styled.div`
  position: absolute;
  top: calc(35px + 7em);
  background-color: transparent;
`;

const RopeEnd = styled.div`
  position: absolute;
  width: 0.5em;
  height: 1em;
  border-radius: 50%;
  box-shadow: 3px 0px ${COLORS.altstrong};
  transform: rotate(15deg) translate(1px, -2px);
  z-index: -20;
`;

const RopeSegment = styled.div`
  border-radius: 50%;
  width: 1em;
  height: 8em;
  margin: -1px;
  box-shadow: ${(props) => (props.flip ? "-" : "")}3px 0px ${COLORS.altstrong};
  z-index: -10;
  ${(props) => (props.flip ? "transform: translateX(5.5px);" : "")}
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

const Hold = styled.img`
  position: absolute;
  transform-origin: center center;
  top: 0;
  left: 0;
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
  const colorFilters = {
    [COLORS.peach]:
      "brightness(0) saturate(100%) invert(78%) sepia(6%) saturate(1594%) hue-rotate(320deg) brightness(101%) contrast(111%)",
    [COLORS.light_peach]:
      "brightness(0) saturate(100%) invert(74%) sepia(3%) saturate(1822%) hue-rotate(319deg) brightness(117%) contrast(117%)",
  };

  useEffect(() => {
    let t = [];

    for (let i = 0; i < 170; i++) {
      let x = Math.random() * 65 + 5;
      let y = Math.random() * 4000 + 70;
      let b = false;
      for (let j = 0; j < t.length; j++) {
        if ((t[j].x - x) ** 2 < 300 && (t[j].y - y) ** 2 < 40000) {
          b = true;
          break;
        }
      }

      if (b) {
        continue;
      }

      let siz = Math.random() * 0.4 + 0.8;
      let rot = Math.floor(Math.random() * 360);
      let clr = [COLORS.peach, COLORS.light_peach][
        Math.floor(Math.random() * 2)
      ];
      let shp = HoldSVGS[Math.floor(Math.random() * 25)];

      t.push({ x, y, siz, rot, clr, shp });
    }

    setHolds(t);
  }, []);

  return (
    <Wall>
      {holds.map((e, i) => (
        <Hold
          key={i}
          src={e.shp}
          style={{
            transform: `rotate(${e.rot}deg)`,
            left: `${e.x}vw`,
            top: `${e.y}px`,
            width: `${e.siz * 125}px`,
            filter: `${colorFilters[e.clr]}`,
          }}
        />
      ))}
    </Wall>
  );
}

function Rope() {
  return (
    <RopeCtnr>
      <RopeEnd />
      {[...Array(35)].map((_, index) => (
        <RopeSegment flip={index % 2 == 0} key={index} />
      ))}
    </RopeCtnr>
  );
}

export { Rope, QuickLink, Carabiner, Holds, Tape };
