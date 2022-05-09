import styled from "styled-components"
import React from 'react'


const StyledTag = styled.div`
    background-color: ${props=>props.color};
    border-radius: 8px;
    padding: 2px 5px;
    display: inline-flex;
    margin-right: 10px;
`

export default function Tag(props){

    return <StyledTag color={props.color}>{props.children}</StyledTag>
    
}