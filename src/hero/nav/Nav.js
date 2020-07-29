import React, { useState } from "react";
import styled from "styled-components";
import Panel from "./Panel";
import TrayButton from "./TrayButton";
import Tech from "./skills/Tech";
import Illustration from "./skills/Illustration";
import Misc from "./skills/Misc";
import trayIconSkills from "../../img/tray-icon-fixed.svg";
import trayIconContact from "../../img/tray-icon3.svg";
import { BsFillEnvelopeFill, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(["", false]);
  const [envOpen, setEnvOpen] = useState(false);

  const setOpen = (title) => {
    const openState = isOpen[1];
    setIsOpen([title, !openState]);
    console.log(isOpen);
  };

  const envelopeOpen = () => {
    setEnvOpen(true);
  };

  const envelopeClose = () => {
    setEnvOpen(false);
  };

  return (
    <>
      <Panel
        setOpen={isOpen[0] === "skills" ? isOpen[1] : false}
        color="#1e1f10"
        height="85vh"
        padding="2"
      >
        <Tech />
        <Illustration />
        <Misc />
      </Panel>
      <Panel
        setOpen={isOpen[0] === "contact" ? isOpen[1] : false}
        color="#c4d009"
        height="20vh"
      >
        <ContactContainer>
          <a
            href="https://www.github.com/erasebegin"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/chris-haupt/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="mailto:chris@thinkdrops.art"
            className="contact-link"
            onMouseEnter={() => envelopeOpen()}
            onMouseLeave={() => envelopeClose()}
          >
            {envOpen ? <BsFillEnvelopeOpenFill /> : <BsFillEnvelopeFill />}
          </a>
        </ContactContainer>
      </Panel>
      <ButtonContainer>
        <TrayButton
          image={trayIconSkills}
          setOpen={setOpen}
          title="skills"
          panelHeight="85vh"
          panelHeightMobile="90vh"
        />
        <TrayButton
          image={trayIconContact}
          setOpen={setOpen}
          title="contact"
          offset={"true"}
          panelHeight="20vh"
        />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
       position: fixed;
        display: flex;
        width: 100%;

        &:nth-child(1) {
            margin-left: -30px;
        }
`

const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    a {
        margin: .5em;
    }
`