import React from "react";
import styled from "styled-components";

import thinkdropsLink from "../../../../img/go-to-thinkdrops-2.svg"

export default function Portfolio() {
  return (
    <Container>
      <h2>Illustration</h2>
      <a href="https://www.thinkdrops.art" target="_blank" rel="noopener noreferrer" className="illustration-link">
        <img src={thinkdropsLink} alt="go to thinkdrops.art"/> 
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 2em;

  @media(min-width: 800px) {
          border-right: 1px solid #353624;
    }


  img {
    width: 250px;
    margin: 2em auto;

    @media(min-width: 500px) {
          width: 300px;
          padding: 1em 2em;
    }
  }

  .illustration-link {
    @media(min-width: 500px) {
          margin: 1em 0;
    }

  }

  .illustration-link:hover {
    background: #FFFFFF33;
    border-radius: 10px;
  }
`;
