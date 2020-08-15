import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Section(props) {
  const [componentId, setComponentId] = useState("");

  const convertToCamelCase = () => {
    const str = props.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    setComponentId(str);
  };

  useEffect(() => {
    convertToCamelCase();
  }, []);

  return (
    <Container color={props.color} className="section">
      <h1 id={componentId}>{props.title}</h1>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 2.5em;
  background: ${(props) => props.color};
  color: #1e1f10;

  h1 {
    font-size: 3rem;
    text-align: center;
    color: #565c00;
    line-height: 1.1em;
    /* z-index: 100; */

    &::after {
      content: "";
      display: block;
      background: #fdff70;
      height: 30px;
      width: 100%;
      margin-top: -30px;
      margin-left: 10px;
      box-shadow: 10px 5px 0 #feffbd, 13px 10px 0 #1e1f12;
    }
  }

  p {
    font-size: 1.3rem;
    line-height: 1.2em;
    font-weight: 300;
  }

  @media (min-width: 700px) {
    padding: 2em 20vw;
  }
`;
