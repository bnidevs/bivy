import styled from "styled-components";
import { COLORS } from "../Constants";

const Row = styled.div`
  display: flex;
  ${(props) => (props.center ? "align-items: center;" : "")}
`;

const Col = styled(Row)`
  flex-direction: column;
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

const Subheader = styled.p`
  font-family: Montserrat;
  font-size: 1.75em;
  color: ${COLORS.semistrong};
  margin: 0px 3.2em;
  font-weight: 400;
`;

const Title = styled.p`
  font-family: great_outdoors;
  font-size: 2em;
  color: ${COLORS.strong};
  font-weight: 400;
`;

const ListDesc = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  color: ${COLORS.metal};
  margin: 0 0 5px;
`;

const Text = styled.p`
  font-family: Montserrat;
  font-size: 1em;
  color: ${COLORS.strong};
  margin: 10px 0;
`;

const VertSpacer = styled.div`
  height: ${(props) => props.size}vh;
`;

const HoriSpacer = styled.div`
  width: ${(props) => props.size};
`;

const ItemCtnr = styled.div`
  margin: 15px 6em;
`;

const EmojiStyle = styled.span`
  font-size: 1.5em;
`;

function Emoji(props) {
  return (
    <EmojiStyle role="img" aria-label={props.label}>
      {props.symbol}
    </EmojiStyle>
  );
}

export {
  Row,
  Col,
  Link,
  Header,
  Subheader,
  ListDesc,
  Title,
  Text,
  VertSpacer,
  ItemCtnr,
  HoriSpacer,
  Emoji,
};
