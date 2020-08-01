import React from "react";
import styled from "styled-components";
import Nav from "./nav/Nav";
import logo from "../img/logo.png";

export default function Hero() {
  return (
    <Container>
      <Nav />
      <div className="inner-container" id="panel-main">
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
  background-image: url(https://i.ibb.co/PwFSPmC/mandala-color1.png);
  background-color: var(--dark1);
  background-blend-mode: screen;
  background-position: center;
  background-size: 150%;
  background-attachment: fixed;
  object-fit: fill;

  @media(min-width: 400px) {
    justify-content: flex-start;
  }

  .inner-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255,255,255,0.5);
  }

  .heading-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 400px;
    padding: 2em;
    background: #feffbd;
    color: #14140b;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
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
    font-size: 5rem;
    font-weight: 300;
    letter-spacing: .1em;
    text-align: center;
    margin: auto;
  }

  h2 {
    font-size: 3rem;
    letter-spacing: .01em;
    text-align: center;
    margin: auto;
  }

  .logo {
    margin: 4.5em auto 1em;
    max-height: 200px;

    @media(min-width: 400px) {
    max-height: 400px;
    }
  }
`;
