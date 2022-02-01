import styled from "styled-components"


const StyledTag = styled.div`
    background-color: ${props=>props.color};
    border-radius: 8px;
    padding: 2px 5px;
    display: inline-flex;
`

export default function Tag(props){

    return <StyledTag color={props.color}>{props.children}</StyledTag>
    
}