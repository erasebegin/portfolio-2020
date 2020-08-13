import React from "react";
import styled from "styled-components";

import contentfulLogo from "../../../../img/tech-logos/contentful.png";
import reactLogo from "../../../../img/tech-logos/react.svg";
import rnLogo from "../../../../img/tech-logos/react-native.svg";
import gatsbyLogo from "../../../../img/tech-logos/gatsby.png";
import graphqlLogo from "../../../../img/tech-logos/graphql.png";
import netlifyLogo from "../../../../img/tech-logos/netlify.png";
import nodeLogo from "../../../../img/tech-logos/node.png";
import vueLogo from "../../../../img/tech-logos/vue.png";
import vuetifyLogo from "../../../../img/tech-logos/vuetify-logo.png";
import mongodbLogo from "../../../../img/tech-logos/mongodb-logo.png";

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
          <img className="tech-logo" src={rnLogo} alt="react native logo" />
          <p className="logo-label">react native</p>
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
          <img className="tech-logo" src={vueLogo} alt="vue logo" />
          <p className="logo-label">vue</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={vuetifyLogo} alt="vuetify logo" />
          <p className="logo-label">vuetify</p>
        </div>
        <div className="logo-container">
          <img className="tech-logo" src={mongodbLogo} alt="mongodb logo" />
          <p className="logo-label">mongodb</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;

    @media(min-width: 600px) {
          border-bottom: 1px solid white;
    }

    .tech {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 1fr 1fr;
      width: 90%;
      margin: auto;

      .logo-container {
        text-align: center;
        margin: 1em .5em;
        max-width: 50px;

        @media(min-width: 400px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 1em;
          max-width: 90px;
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
