import React from 'react'
import styled from 'styled-components'

export default function Section(props) {
    return (
        <Container color={props.color} className = "section">
            <h1>{props.title}</h1>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    padding: 2em 1em;
    background: ${props => props.color};

    h1 {
        font-size: 3rem;
        text-align: center;
    }

    p {
        font-size: 1.3rem;
    }

    @media(min-width: 700px) {
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; */
        padding: 2em 20vw;
    }
`