import React from "react";
import styled from "styled-components";

import contentfulLogo from "../img/contentful.png";
import reactLogo from "../img/react.svg";
import gatsbyLogo from "../img/gatsby.png";
import graphqlLogo from "../img/graphql.png";
import netlifyLogo from "../img/netlify.png";
import nodeLogo from "../img/node.png";
import styledLogo from "../img/styled-components.png";
import vueLogo from "../img/vue.png";

export default function Tech() {
  return (
    <Container>
      <h2>Tech</h2>
      <div className="tech">
        <div className="logo-container">
          <img className="tech-logo" src={contentfulLogo} />
          <p>contentful</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={reactLogo} />
          <p>react</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={gatsbyLogo} />
          <p>gatsby</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={graphqlLogo} />
          <p>graphql</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={netlifyLogo} />
          <p>netlify</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={nodeLogo} />
          <p>node.js</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={styledLogo} />
          <p>styled components</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={vueLogo} />
          <p>vue</p>
        </div>
      </div>
      <div className="illustration"></div>
    </Container>
  );
}

const Container = styled.div`
    h2 {
      font-size: 1.6rem;
    }

    .tech {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      justify-items: center;
      margin: auto;

      .logo-container {
        text-align: center;
        width: 90px;

        .tech-logo {
          max-height: 50px;
          margin: 0.5em 0.75em;
        }
      }
    }
  }
`;
