import React from "react";
import styled from "styled-components";
import Hero from "./components/hero/Hero";
import Story from "./components/Story";
import Footer from "./components/Footer";
import "./reset.css";



function App() {
  return (
    <Container className="app">
      <Hero />
      <Story />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Comic Neue", cursive;

  a {
    color: #1e1f10;
    font-weight: 400;
    transition: 200ms;

    &:hover {
      color: #565c00;
      background: #fdff70;
      transition: 200ms;
    }
  }
`;
