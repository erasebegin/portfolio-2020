import React from "react";
import styled from "styled-components";

import thinkdropsLink from "../../../img/go-to-thinkdrops-2.svg"

export default function Portfolio() {
  return (
    <Container>
      <h2>Illustration</h2>
      <a href="https://www.thinkdrops.art" target="_blank" rel="noopener noreferrer">
        <img src={thinkdropsLink} alt="go to thinkdrops.art"/> 
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5em;

  h2 {
    font-size: 1.6rem;
  }

  img {
    width: 90%;
    margin: .75em auto;
  }
`;
