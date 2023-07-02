import styled from "styled-components";
import InstaLogo from "../assets/images/instagram.svg";
import { Tape } from "./Climbing";
import { COLORS } from "../Constants";

const SocialBubble = styled.div`
  width: 3.5em;
  height: 3.5em;
  margin: 10px;
  position: absolute;
  bottom: 8em;
  right: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${COLORS.strong};
`;

const Social = styled.img`
  width: 2.5em;
  height: 2.5em;
  filter: invert(100%) sepia(0%) saturate(7493%) hue-rotate(320deg)
    brightness(104%) contrast(100%);
`;

function InstagramBtn() {
  return (
    <a href="https://instagram.com/bivy_cafe">
      <SocialBubble>
        <Social src={InstaLogo} alt="Instagram" />
      </SocialBubble>
      <Tape
        style={{
          right: "6.5em",
          bottom: "8em",
          rotate: "45deg",
          zIndex: "-10",
        }}
      />
      <Tape
        style={{
          right: "6em",
          bottom: "7.5em",
          rotate: "45deg",
          zIndex: "-10",
        }}
      />
    </a>
  );
}

export { InstagramBtn };
