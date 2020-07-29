import React, { useState } from "react";
import styled from "styled-components";

export default function TrayIcon(props) {
  const [isOpen, setIsOpen] = useState(false);

  const sendOpen = (title) => {
    props.setOpen(title);
    setIsOpen(!isOpen);
  };
  
  return (
    <Container
      onClick={() => sendOpen(props.title)}
      open={isOpen}
      height={props.panelHeight}
      offset={props.offset}
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
  props.open ? "translateY(" + props.height + ")" : "translateY(0)"};
  transition: ease-in-out 200ms;
  margin-left: ${({offset})=>(offset ? "-40px" : "0")};

  @media (min-width: 400px) {
     margin: auto;
  }
`;
