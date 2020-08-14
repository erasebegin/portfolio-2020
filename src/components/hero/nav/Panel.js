import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Panel(props) {
  const [panelHeight, setPanelHeight] = useState(0);

  // ADD CLICK OUTSIDE EVENT LISTENER

  // document.addEventListener("click", (evt) => {
  //   const flyoutElement = document.getElementById(props.title);
  //   let targetElement = evt.target; // clicked element

  //   do {
  //     if (targetElement === flyoutElement) {
  //       // This is a click inside. Do nothing, just return.
  //       console.log("inside");
  //       return;
  //     }
  //     // Go up the DOM
  //     targetElement = targetElement.parentNode;
  //   } while (targetElement);

  //   // This is a click outside.
  //   if (props.setOpen) {
  //     props.clickOff(props.title, false);
  //     // console.log("panel > outsideclick")
  //   }
  // });

  // useEffect(()=>{
  //   hideOnClickOutside(currentContainer)
  // },[props.setOpen])

  //***********************PANEL HEIGHT****************************

  // PASS HEIGHT TO PARENT, CALLED BY USEEFFECT

  const passHeight = (title, height) => {
    props.getHeight(title, height);
  };

  // SET HEIGHT OF CONTAINER

  useEffect(() => {
    const height = document.getElementById(props.title).clientHeight;
    setPanelHeight(height);
  }, [props.setOpen]);

  // ONCE HEIGHT IS SET, PASS TO PARENT

  useEffect(() => {
    passHeight(props.title, panelHeight);
  }, [panelHeight]);

  return (
    <Container
      id={props.title}
      open={props.setOpen}
      color={props.color}
      height={props.height}
      padding={props.padding}
    >
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
    color: #F2F2DA;
    margin: 0;
    pointer-events: auto;
    height: 100%;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    overflow: scroll;

    @media (min-width: 400px) {
      overflow: hidden;
    }

    h2 {
      font-size: 1.6rem;
      @media (min-width: 500px) {
        font-size: 2rem;
      }
    }
  }
`;
