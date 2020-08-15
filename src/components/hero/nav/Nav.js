import React, { useState } from "react";
import styled from "styled-components";
import Panel from "./Panel";
import TrayButton from "./TrayButton";
import Tech from "./skills/Tech";
import Illustration from "./skills/Illustration";
import Misc from "./skills/Misc";
import trayIconSkills from "../../../img/tray-icon-fixed.svg";
import trayIconContact from "../../../img/tray-icon3.svg";
import { BsFillEnvelopeFill, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(["", false]);
  const [panelHeight, setPanelHeight] = useState({ skills: 0, contact: 0 });
  const [envOpen, setEnvOpen] = useState(false);
  // const [scrollState, setScrollState] = useState("show");

  // HIDE NAVBUTTONS ON DOWN SCROLL, REVEAL ON UP SCROLL

  // function scrollDetect() {
  //   var lastScrollTop = window.pageYOffset || window.scrollTop;

  //   var st = window.pageYOffset || document.documentElement.scrollTop;
  //   if (st < lastScrollTop) {
  //     setScrollState("show");
  //   } else if (st > lastScrollTop) {
  //     setScrollState("hide");
  //   }
  //   lastScrollTop = st <= 0 ? 0 : st;
  // }

  const setOpen = ([title, state]) => {
    // let newState = !state;
    setIsOpen([title, state]);
    console.log("nav-receives: ",state)
  };

  const setHeight = (title, height) => {
    setPanelHeight((prevState) => ({ ...prevState, [title]: height }));
  };

  const envelopeOpen = () => {
    setEnvOpen(true);
  };

  const envelopeClose = () => {
    setEnvOpen(false);
  };

  const clickOff = (title, state) => {
    setIsOpen(title, state);
  };

  // useEffect(() => {
  //   if (!isOpen[1]) {
  //     document.addEventListener("scroll", scrollDetect);
  //   }
  // }, [isOpen[1]]);

  // useEffect(() => {
  //   if (isOpen[1]) {
  //     document.removeEventListener("scroll", scrollDetect);
  //   }
  // });

  return (
    <>
      <Panel
        setOpen={isOpen[0] === "skills-button" ? isOpen[1] : false}
        color="#1e1f10"
        title="skills"
        getHeight={setHeight}
        clickOff={clickOff}
      >
        <Tech />
        <PanelBottom>
          <Illustration />
          <Misc />
        </PanelBottom>
      </Panel>
      <Panel
        setOpen={isOpen[0] === "contact-button" ? isOpen[1] : false}
        color="#c4d009"
        title="contact"
        getHeight={setHeight}
        clickOff={clickOff}
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
          //receiving from child
          setOpen={setOpen}
          //passing to child
          isOpen={isOpen[0] === "skills-button" ? isOpen[1] : false}
          title="skills-button"
          panelHeight={panelHeight.skills}
        />
        <TrayButton
          image={trayIconContact}
          setOpen={setOpen}
          isOpen={isOpen[0] === "contact-button" ? isOpen[1] : false}
          title="contact-button"
          offset={"true"}
          panelHeight={panelHeight.contact}
        />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  position: fixed;
  display: flex;
  transform: ${({ state }) =>
    state === "hide" ? "translateY(-100px)" : "initial"};
  width: 100%;
  transition: 200ms;

  &:nth-child(1) {
    margin-left: -30px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .contact-link {
    margin: 0.5em;

    &:hover {
      background: initial;
    }
  }
`;

const PanelBottom = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: start;
    justify-content: center;
  }
`;
