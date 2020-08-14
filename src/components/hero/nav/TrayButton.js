import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function TrayIcon(props) {
  // const [isOpen, setIsOpen] = useState(null);
  const [ownHeight, setOwnHeight] = useState(0);

  const sendOpen = (title) => {
    props.setOpen([title, !props.isOpen]);
    // console.log("sendOpen is at: ", isOpen)
  };

  // useEffect(()=>{
  //   setIsOpen(props.isOpen)
  //   console.log("useEffect is at: ",props.isOpen,"(props)",isOpen,("state"))
  // },[props.isOpen, isOpen])

  useEffect(()=>{
    const height = document.getElementById(props.title).clientHeight;
    setOwnHeight(height)
  },[])

  return (
    <Container
      onClick={() => sendOpen(props.title)}
      open={props.isOpen}
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
