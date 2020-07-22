import React from 'react'
import styled from 'styled-components'

export default function Section(props) {
    return (
        <Container color={props.color} className = "section">
            <h1>{props.year}</h1>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    /* padding: 3em 2em; */
    background: ${props => props.color};

    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 1.3rem;
    }
`