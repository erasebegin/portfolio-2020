import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function Cards(props) {
  const data = props.data;

  return (
    <Container>
      {data.map((card) => (
        <Card
          title={card.title}
          image={card.image}
          text={card.text}
          url={card.url}
          repo={card.repo}
          key={card.key}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 3em 0;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`;
