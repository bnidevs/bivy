import styled from "styled-components";
import "../App.css";

const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => (props.center ? "align-items: center;" : "")}
`;

const Hanger = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  transform: rotate(45deg);
  outline: 2px solid black;
  z-index: -10;
  border-radius: 3px;
  margin: 1em 0 -2em;
`;

const Back = styled.div`
  width: 10em;
  padding: 5px;
  display: flex;
  border-radius: 2px;
  background-color: sienna;
  z-index: 0;
  font-family: "Courier Prime", monospace;
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
