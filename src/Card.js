import React from 'react'
import styled from 'styled-components'

export default function Card(props) {
    return (
        <Container>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </Container>
    )
}

const Container = styled.div`

    border: 1px solid black;
    border-radius: 10px;
    width: 200px;
    margin: auto;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }


`
