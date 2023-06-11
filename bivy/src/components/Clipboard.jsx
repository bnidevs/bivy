import styled from "styled-components";
import { Col } from "./Basics";
import "../App.css";

const Hanger = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  transform: rotate(-135deg);
  box-shadow: 2px 2px black;
  z-index: -10;
  border-radius: 3px;
  margin: 1em 0 -2em;
`;

const Back = styled.div`
  width: 10em;
  padding: 5px;
  border-radius: 2px;
  background-color: sienna;
  z-index: 0;
  font-family: Montserrat, monospace;
  font-weight: 200;
  font-size: 1.5em;
  color: white;
  text-align: center;
  white-space: pre-line;
`;

function Clipboard(props) {
  return (
    <Col center>
      <Hanger />
      <Back>{props.text}</Back>
    </Col>
  );
}

export default Clipboard;
