import React from "react";
import styled from "styled-components";
import SkillsPane from "./skills/SkillsPane";
import logo from "./img/logo.png";

export default function Hero() {
  return (
    <Container>
      <SkillsPane />
      <div className="inner-container">
        <img
          src={logo}
          className="logo"
          alt="illustration of my head with a lightbulb above it"
        />
        <div className="heading-container">
          <h2>Chris Haupt's</h2>
          <h1>Story</h1>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background: #ffffe1;

  .inner-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .heading-container {
    margin: 0 auto 2em;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    color: #14140b;
  }

  h1 {
    font-size: 4rem;
    text-align: center;
    margin: auto;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    margin: auto;
  }

  .logo {
    margin: 4.5em auto 1em;
    max-height: 200px;
  }
`;
