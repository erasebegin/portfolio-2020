import React from "react";
import styled from "styled-components";

import contentfulLogo from "../../../img/tech-logos/contentful.png";
import reactLogo from "../../../img/tech-logos/react.svg";
import gatsbyLogo from "../../../img/tech-logos/gatsby.png";
import graphqlLogo from "../../../img/tech-logos/graphql.png";
import netlifyLogo from "../../../img/tech-logos/netlify.png";
import nodeLogo from "../../../img/tech-logos/node.png";
import styledLogo from "../../../img/tech-logos/styled-components.png";
import vueLogo from "../../../img/tech-logos/vue.png";

export default function Tech() {
  return (
    <Container>
      <h2>Tech</h2>
      <div className="tech">
        <div className="logo-container">
          <img
            className="tech-logo"
            src={contentfulLogo}
            alt="contentful logo"
          />
          <p>contentful</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={reactLogo} alt="react logo" />
          <p>react</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={gatsbyLogo} alt="gatsby logo" />
          <p>gatsby</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={graphqlLogo} alt="graphql logo" />
          <p>graphql</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={netlifyLogo} alt="netlify logo" />
          <p>netlify</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={nodeLogo} alt="nodejs logo" />
          <p>node.js</p>
        </div>
        <div className="logo-container">
          <img
            className="tech-logo"
            src={styledLogo}
            alt="styled components logo"
          />
          <p>styled components</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={vueLogo} alt="vue logo" />
          <p>vue</p>
        </div>
      </div>
      <div className="illustration"></div>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 35%;

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
        padding: .3em;
    

        @media(min-width: 400px) {
          padding: 1em;
        }

        .tech-logo {
          max-height: 30px;
          margin: 0.5em 0.75em;

            @media(min-width: 400px) {
              max-height: 50px;
            }
        }
      }
    }
  }
`;
