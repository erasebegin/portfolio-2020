import React from "react";
import styled from "styled-components";
import Nav from "./nav/Nav";
import logo from "../../img/logo.png";

export default function Hero() {
  return (
    <Container>
      <Nav />
      <div className="inner-container" id="panel-main">
        <div className="menu-wrapper">
          <div className="menu-left">
            <a href="#playful" className="a1">
              Playful
            </a>
            <a href="#problemSolver" className="a2">
              Problem Solver
            </a>
          </div>
          <img
            src={logo}
            className="logo"
            alt="illustration of my head with a lightbulb above it"
          />
          <div className="menu-right">
            <a href="#ambitious" className="a3">
              Ambitious
            </a>
            <a href="#flexible" className="a4">
              Flexible
            </a>
          </div>
        </div>
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
  background-color: #FFFFE1EE;
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

    .menu-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;

      .logo {
        margin: 4.5em -4em 1em;
        max-height: 200px;

          @media(min-width: 400px) {
          margin: 4.5em -6em 1em;
          max-height: 400px;
          }
        }

      .menu-left, .menu-right {
        display: flex;
        gap: 2em;
        flex-direction: column;

        @media(min-width: 400px) {
            gap: 3em;
          }
      }

      .a1, .a2, .a3, .a4 {
        display: none;
        text-decoration: none;
          color: #fdff70;
          border-radius: 5px;
          padding: .5em;
          font-size: 1.4rem;
          font-weight: 700;
          text-shadow: 0px 0px 3px #1e1f10;
          max-width: 100px;
          z-index: 0;

          @media(min-width: 500px) {
            display: initial;
            font-size: 1.6rem;
          }

          &:hover {
            background: #1e1f10;
          }
      }

      .menu-left .a1, .menu-right .a4{
          transform: rotate(30deg);
          &:hover{
            transform: rotate(20deg) scale(1.2);
          }
      }

      .menu-left .a2, .menu-right .a3{
        transform: rotate(-30deg);
        &:hover{
            transform: rotate(-20deg) scale(1.2);
          }
      }
    }
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

    &::after {
      content: "";
      display: block;
      background: #fdff70;
      height: 60px;
      width: 100%;
      margin-top: -55px;
      margin-left: 5px;
      box-shadow: 10px 5px 0 #FEFFBD, 13px 10px 0 #1E1F12;
    }
  }

  h2 {
    font-size: 3rem;
    letter-spacing: .01em;
    text-align: center;
    margin: auto;
  }
`;
