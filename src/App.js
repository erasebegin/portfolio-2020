import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Section from "./Section";
import Cards from "./Cards";
import "./reset.css";

import otherworld from "./img/screenshots/otherworld.png";

function App() {
  return (
    <Container className="app">
      <Hero />
      <Section year={2020} color={"#FEFFBD"}>
        <p className="section-main-p">
          This year I have taken on my most ambitious project yet, delivering a
          multi-functional website to artist Otherworld Ink based on an
          absolutely cutting edge stack that included React, Gatsby, Contentful,
          and Netlify. I also created a light application to generate student
          comments for my online classes using a static database, and have
          completed several node projects in a bid to become capable with this
          back-end technology.
        </p>
        <Cards
          data={[
            {
              key: 1,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
            {
              key: 2,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
            {
              key: 3,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
          ]}
        />
      </Section>
      <Section year={2019} color={"#CFD09B"}>
        <p className="section-main-p">
          This year I have taken on my most ambitious project yet, delivering a
          multi-functional website to artist Otherworld Ink based on an
          absolutely cutting edge stack that included React, Gatsby, Contentful,
          and Netlify. I also created a light application to generate student
          comments for my online classes using a static database, and have
          completed several node projects in a bid to become capable with this
          back-end technology.
        </p>
        <Cards
          data={[
            {
              key: 1,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
            {
              key: 2,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
            {
              key: 3,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
          ]}
        />
      </Section>
      <Section year={2018} color={"#FFFFE1"}>
        <p className="section-main-p">
          This year I have taken on my most ambitious project yet, delivering a
          multi-functional website to artist Otherworld Ink based on an
          absolutely cutting edge stack that included React, Gatsby, Contentful,
          and Netlify. I also created a light application to generate student
          comments for my online classes using a static database, and have
          completed several node projects in a bid to become capable with this
          back-end technology.
        </p>
        <Cards
          data={[
            {
              key: 1,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
            {
              key: 2,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
            {
              key: 3,
              title: "this is mi card",
              image: otherworld,
              text: "this is some loody doody",
            },
          ]}
        />
      </Section>
    </Container>
  );
}

export default App;

const Container = styled.div`
display: flex;
flex-direction: column;
  font-family: "Balsamiq Sans", cursive;
`;
