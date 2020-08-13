import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function TrayIcon(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [ownHeight, setOwnHeight] = useState(0);

  const sendOpen = (title) => {
    props.setOpen([title, isOpen]);
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const height = document.getElementById(props.title).clientHeight;
    setOwnHeight(height)
    console.log("ownHeight",ownHeight)
  },[])

  return (
    <Container
      onClick={() => sendOpen(props.title)}
      open={isOpen}
      height={props.panelHeight}
      offset={props.offset}
      ownHeight={ownHeight}
      id={props.title}
    >
      <img src={props.image} alt={`button for ${props.title}`} />
    </Container>
  );
}

const Container = styled.div`
  min-width: 200px;
  max-width: 50%;
  cursor: pointer;
  margin: auto;
  pointer-events: auto;
  transform: ${(props) =>
    props.open ? "translateY(" + props.height + "px)" : "translateY(0)"};
  transition: ease-in-out 200ms;
  margin-left: ${({ offset }) => (offset ? "-40px" : "0")};

  @media (min-width: 400px) {
    margin: auto;
  }
`;
