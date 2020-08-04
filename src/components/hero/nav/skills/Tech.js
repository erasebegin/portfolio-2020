import React from "react";
import styled from "styled-components";

import contentfulLogo from "../../../../img/tech-logos/contentful.png";
import reactLogo from "../../../../img/tech-logos/react.svg";
import gatsbyLogo from "../../../../img/tech-logos/gatsby.png";
import graphqlLogo from "../../../../img/tech-logos/graphql.png";
import netlifyLogo from "../../../../img/tech-logos/netlify.png";
import nodeLogo from "../../../../img/tech-logos/node.png";
import styledLogo from "../../../../img/tech-logos/styled-components.png";
import vueLogo from "../../../../img/tech-logos/vue.png";

export default function Tech() {
  return (
    <Container>
      <h2 className="heading">Tech</h2>
      <div className="tech">
        <div className="logo-container">
          <img
            className="tech-logo"
            src={contentfulLogo}
            alt="contentful logo"
          />
          <p className="logo-label">contentful</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={reactLogo} alt="react logo" />
          <p className="logo-label">react</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={gatsbyLogo} alt="gatsby logo" />
          <p className="logo-label">gatsby</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={graphqlLogo} alt="graphql logo" />
          <p className="logo-label">graphql</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={netlifyLogo} alt="netlify logo" />
          <p className="logo-label">netlify</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={nodeLogo} alt="nodejs logo" />
          <p className="logo-label">node.js</p>
        </div>
        <div className="logo-container">
          <img
            className="tech-logo"
            src={styledLogo}
            alt="styled components logo"
          />
          <p className="logo-label">styled components</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={vueLogo} alt="vue logo" />
          <p className="logo-label">vue</p>
        </div>
      </div>
      <div className="illustration"></div>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 0;

    @media(min-width: 600px) {
          padding: 0 4em;
    }

    .tech {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      justify-items: center;
      margin: auto;

      .logo-container {
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 1em .5em;
        max-width: 70px;
    

        @media(min-width: 400px) {
          margin: 1em;
        }

        .tech-logo {
          max-height: 45px;

            @media(min-width: 500px) {
              max-height: 50px;
              margin: 0.5em 0.75em;
            }
        }

        .logo-label {
          display: none;
          justify-self: flex-end;
          @media(min-width: 500px){
            display: initial;
          }
        }
      }
    }
  }
`;
