import styled from "styled-components"

import colors from "../styled_foundations/colors"
import { Column, RowSpaceAround } from "../styled_foundations/layout"
import { H3 } from "../styled_foundations/text"
import Icon from "./Icon"
import React from 'react'




const cardSize = 230


const Title = styled(H3)`
 transition: color 0.3s ease;
`

const StyledCard = styled(Column)`
    background-color: ${colors.cardBackground};
        
    border-radius: 8px;
    min-height: ${cardSize}px;
    width: ${cardSize}px;
    max-width: 100%;
    padding: 15px;    
`



const IconContainer = styled(RowSpaceAround)`
    margin-top: 40px; 
    column-gap: 20px;
    row-gap: 20px;
`



export default function ExpandableCard(props) {

    return <>
        <StyledCard>
                <Title>{props.children}</Title>
                <IconContainer >
                    {props.assets.map(el => <Icon key={el} height="30" width="30" asset={el}></Icon>)}
                </IconContainer>
        </StyledCard>
    
    </>


}