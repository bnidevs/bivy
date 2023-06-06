import { LogoBox } from "./LogoContainer";
import styled from "styled-components";
import InstaLogo from "../assets/images/instagram.svg";

const SocialBubble = styled(LogoBox)`
    width: 3.5em;
    height: 3.5em;
    position: absolute;
    bottom: 8em;
    right: 3em;
    box-shadow: 3px 3px 3px #888;
`

const Social = styled.img`
    width: 2.5em;
    filter: invert(100%) sepia(0%) saturate(7493%) hue-rotate(320deg) brightness(104%) contrast(100%);
`

function InstagramBtn() {
  return (
    <a href="https://instagram.com/bivy_cafe">
        <SocialBubble>
            <Social src={InstaLogo} alt="Instagram" />
        </SocialBubble>
    </a>
  );
}

export { InstagramBtn };
