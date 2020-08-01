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
    padding: 2em 2.5em;
    background: ${props => props.color};
    color: #1e1f10;

    h1 {
        font-size: 3rem;
        text-align: center;
        color: #565c00;
        line-height: 1.1em;
    }

    p {
        font-size: 1.3rem;
        line-height: 1.2em;
    }

    &:last-child{
        padding-bottom: 10em;
    }

    @media(min-width: 700px) {
        padding: 2em 20vw;
    }
`