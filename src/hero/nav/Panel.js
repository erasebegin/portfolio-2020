import React from "react";
import styled from "styled-components";

export default function SkillsPane(props) {
  return (
    <Container open={props.setOpen} color={props.color} height={props.height} padding={props.padding}>
      <div className="main">{props.children}</div>
      <div className="icon-container"></div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100;
  transition: ease-in-out 200ms;
  pointer-events: none;
  z-index: ${(props) => (props.open ? "100" : "0")};
  transform: ${(props) => (props.open ? "initial" : "translateY(-100%)")};

  @media (min-width: 800px) {

    &:hover {
      transform: ${(props) => (props.open ? "initial" : "translateY(-95%)")};
      transition: ease-in-out 150ms;
    }

    max-width: 70vw;
  }

  .main {
    display: flex;
    flex-direction: column;
    background: ${(props) => (props.color ? props.color : "white")};
    color: white;
    margin: 0;
    padding: ${(props)=>(props.padding ? "0 "+props.padding+"em" : "0")};
    pointer-events: auto;
    height: ${(props)=>(props.height ? props.height : "100%")};
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

    h2 {
      font-size: 1.6rem;
    }

    @media(min-width: 800px) {
      padding: ${(props)=>(props.padding ? "0 "+props.padding/4+"em" : "0")}; 
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
    }
  }
`;
