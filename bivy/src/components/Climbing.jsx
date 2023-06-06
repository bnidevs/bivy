import styled from "styled-components";
import { COLORS } from "../Constants";
import BinerTop from "../assets/images/biner_top.svg";
import BinerBot from "../assets/images/biner_bot.svg";
import blobshape from "blobshape";
import { useEffect, useState } from "react";

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Wall = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -25;
`

const QuickLink = styled.div`
    position: absolute;
    left: calc(10px + 2.87em);
    top: 7em;
    width: 20px;
    height: 40px;
    outline: 3px solid ${COLORS.metal};
    border-radius: 10px;
    z-index: -15;
`

const Rope = styled.div`
    position: absolute;
    left: calc(10px + 3.35em);
    top: calc(35px + 7em);
    border-radius: 2.5px;
    width: 5px;
    height: calc(675vh - 375vw);
    background-color: ${COLORS.altstrong};
    z-index: -10;
`

const BinerHalf = styled.img`
    position: absolute;
    left: 1.5em;
    padding: 10px 0;
    width: 6em;
    z-index: ${props => props.z};
`

function Carabiner() {
    return (
        <Col>
            <BinerHalf src={BinerTop} z={-12} />
            <BinerHalf src={BinerBot} z={0} />
        </Col>
    )
}

function Holds() {
    const [holds, setHolds] = useState([]);

    useEffect(() => {
        let t = [];
        for(let i = 0; i < 50; i++){
            const { path } = blobshape({ size: 20, growth: 6, edges: 6, seed: null });
            const x = Math.random() * 70 + 10;
            const y = Math.random() * 2700 + 10;
            const svg = `<svg viewBox="0 0 100 100" class="hold" style="position: absolute; top:${y} ; left:${x}vw"><path d="${path}" /></svg>`;
            t.push(svg);
        }
        setHolds(t);
    }, []);

    return (
        <Wall dangerouslySetInnerHTML={{__html: holds.join('')}}>
        </Wall>
    );
};

export {Rope, QuickLink, Carabiner, Holds};