import React from "react";
import styled from "styled-components";
import reactLogo from "../img/tech-logos/react.svg";
import githubLogo from "../img/tech-logos/github.png";

export default function Footer() {
  return (
    <Container>
      <div className="inner-container">
        <p>Created using React</p>
        <img src={reactLogo} alt="react logo" class="logo" />
        <p>
          Check out the source over on{" "}
          <a
            href="https://github.com/erasebegin/portfolio-2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <a
          href="https://github.com/erasebegin/portfolio-2020"
          target="_blank"
          rel="noopener noreferrer"
          class="no-hover-effect"
        >
          <img src={githubLogo} alt="github logo" class="logo" />
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 4em;
  background-image: url(https://i.ibb.co/PwFSPmC/mandala-color1.png);
  background-color: #FFFFE1EE;
  background-blend-mode: screen;
  background-position: top;
  background-size: 110%;
  background-attachment: fixed;
  object-fit: fill;

    @media(min-width: 500px) {
      background-size: 150%;
      background-position: center;
    }

  .inner-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFE1EE;
    border-radius: 10px;
    text-align: center;

    @media(min-width: 500px) {
      background-size: 150%;
      background-position: center;
      flex-direction: row;
    }
  }

  p {
    font-size: 1.5rem;
  }

  .logo {
    max-height: 50px;
    margin: 0 0.75em;
  }

  .no-hover-effect:hover {
    background: none;
  }
`;
