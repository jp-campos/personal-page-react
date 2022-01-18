import { useState } from "react"
import styled from "styled-components"
import colors from "../../styled_foundations/colors"


const StyledNavItem = styled.li`
    ${props => props.isSelected && `
        background-color: ${colors.active};
        border-radius: 2px; 
    `}
    display: block;
    padding: 5px;
    color: white; 
    cursor: pointer;
    z-index: 60;
 

`
const StyledAnchor = styled.a`
    text-decoration: none;
    color: inherit; 
`


export default function NavItem({ children, innerRef, id, link }) {


    return <StyledNavItem id={id} ref={innerRef} isSelected={false}>
        <StyledAnchor href={link}>{children}</StyledAnchor>
    </StyledNavItem>
}