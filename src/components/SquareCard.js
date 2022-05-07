import { Column } from "../styled_foundations/layout";
import styled from "styled-components"
import { H3 } from "../styled_foundations/text";
import { useState } from "react";
import { device } from "../utility/display";


const StyledCard = styled(Column)`
border-radius: 8px; 
background-color: white;
width: 500px;
cursor: pointer; 
@media ${device.mobileL}{
    width: 100%;
    
}

`

const BotWrapper = styled.div`
    padding: 30px; 
`


export default function SquareCard(props) {
    const [mouseOver, setMouseOver] = useState(false)

    return <a href={props.link}>
        <StyledCard onClick={props.onClick} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
      
            {mouseOver ? props.topAnimated : props.topStatic}
       
        <BotWrapper>
            <H3>{props.header}</H3>
            <p>{props.body}</p>
        </BotWrapper>


    </StyledCard>
        </a>
}