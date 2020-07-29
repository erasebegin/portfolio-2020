import React from "react";
import styled from "styled-components";

export default function Misc() {
  return (
    <Container>
      <h2>Misc</h2>
      <ul>
        <li>Mandarin (HSK5/Fluent)</li>
        <li>Teaching (CELTA/4 years)</li>
        <li>Loveable (Lvl 7)</li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 1.6rem;
    }

    ul {
        font-size: 1.3rem;
    }
`;
