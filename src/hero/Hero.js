import React from "react";
import styled from "styled-components";
import Nav from "./nav/Nav";
import logo from "../img/logo.png";

export default function Hero() {
  return (
    <Container>
      <Nav />
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
  position: relative;
  display: flex;
  justify-content: center;
  background: #ffffe1;

  @media(min-width: 400px) {
    justify-content: flex-start;
  }

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

  .contact-link-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .contact-link {
      font-size: 3rem;
      color: #1e1f10;
    }

    .contact-link:hover {
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-name: jump;
      animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    }

    @keyframes jump {
      0% {
        transform: scale(1, 1) translateY(0);
      }
      10% {
        transform: scale(1.1, 0.9) translateY(0);
      }
      30% {
        transform: scale(0.9, 1.1) translateY(-10px);
      }
      50% {
        transform: scale(1.05, 0.95) translateY(0);
      }
      57% {
        transform: scale(1, 1) translateY(-7px);
      }
      64% {
        transform: scale(1, 1) translateY(0);
      }
      100% {
        transform: scale(1, 1) translateY(0);
      }
    }

    .contact-link:visited {
      color: #1e1f10;
    }
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
