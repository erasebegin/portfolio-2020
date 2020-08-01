import React from "react";
import styled from "styled-components";

export default function Card(props) {
  return (
    <Container type={props.type}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt={props.title} />
      </a>
      <div className="bottom-container">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="links-container">
          <a
            href={props.url}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
          {props.repo ? (
            <a
              href={props.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Code
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  max-width: ${(props) => (props.type === "wide" ? "80%" : "80vw")};
  margin: 0.5em 0;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .bottom-container {
    padding: 0 1em;
    text-align: center;
  }

  p {
    font-size: 1rem;
  }

  .links-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0.5em 0;

    .link {
      font-size: 1.2rem;
      text-decoration: none;
      color: black;
      background: rgba(255, 255, 255, 0.75);
      padding: 0.5em;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      border-radius: 3px;

      &:hover {
        transform: translate(2px, 1px);
        font-weight: bold;
      }
    }
  }

  @media (min-width: 700px) {
    max-width: 300px;
    min-height: 350px;
    margin: 0 0.5em;
    max-width: 30%;
  }
`;
