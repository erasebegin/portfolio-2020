import React from "react";
import styled from "styled-components";

export default function Misc() {
  return (
    <Container>
      <h2>Misc</h2>
      <ul>
        <li>
          Mandarin <span>(HSK5/Fluent)</span>
        </li>
        <li>
          Teaching <span>(CELTA/4 years)</span>
        </li>
        <li>
          Loveable <span>(Lvl 7)</span>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    font-size: 1.5rem;
    list-style: circle;

    @media (min-width: 600px) {
      font-size: 1.6rem;
    }
  }

  span {
    font-weight: 300;
  }
`;
