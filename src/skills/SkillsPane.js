import React, { useState } from "react";
import styled from "styled-components";
import trayIcon from "../img/tray-icon2.svg";
import Tech from "./Tech";
import Illustration from "./Illustration";

export default function SkillsPane() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);
  console.log("peek: ", isPeeking);

  const openTray = () => {
    setIsOpen(!isOpen);
    console.log("open: ", isOpen);
  };

  const peekTray = () => {
    setIsPeeking(true);
  };

  const unpeekTray = () => {
    setIsPeeking(false);
  };

  return (
    <Container open={isOpen} onClick={() => openTray()}>
      <div className="main">
        <Tech />
        <Illustration />
      </div>
      <div className="icon-container">
        <TrayIcon
          src={trayIcon}
          className="tray-icon"
          onMouseEnter={() => peekTray()}
          onMouseOut={() => unpeekTray()}
          open={isOpen}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: ${(props) => (props.open ? "initial" : "translateY(-65%)")};
  padding: 0;
  transition: ease-in-out 200ms;

  @media (min-width: 700px) {
    &:hover {
      transform: ${(props) => (props.open ? "initial" : "translateY(-60%)")};
      transition: ease-in-out 150ms;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    background: #1e1f10;
    height: 60vh;
    color: white;
    margin: 0;

    h2 {
      font-size: 1.6rem;
    }

    .icon-container {
      display: flex;
      justify-content: center;
    }
  }
`;

const TrayIcon = styled.img`
  padding: 0;
  max-width: 200px;
  transition: 200ms;
  cursor: pointer;
`;
