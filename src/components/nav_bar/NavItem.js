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


export default function NavItem({ children, innerRef, id, onClick }) {


    return <StyledNavItem onClick={onClick} id={id} ref={innerRef} isSelected={false}>
       {children}
    </StyledNavItem>
}