import styled from "styled-components"
import colors from "../styled_foundations/colors"
import { Row, RowSpaceAround } from "../styled_foundations/layout"
import { H3 } from "../styled_foundations/text"
import Icon from "./Icon"




const SeeMore = styled(Row)`
    position: absolute;
    right: 10px;
    bottom: 10px;
    opacity: 0;
    transition: opacity 0.5s ease;
`
    

const Title = styled(H3)`
 transition: color 0.3s ease;

`

const StyledCard = styled.div`
    background-color: ${colors.cardBackground};
    min-height: 230px;
    border-radius: 8px;
    width: 230px;
    max-width: 100%;
    padding: 15px;
    position: relative;
    cursor: pointer; 

    &:hover ${SeeMore}{
        opacity: 1; 
    }

    &:hover ${Title}{
        color: ${colors.active};
    }
`

 


const IconContainer = styled(RowSpaceAround)`
    margin-top: 40px; 
    column-gap: 20px;
    row-gap: 20px;
` 

const StyledSpan = styled.span`
    margin-right: 5px;
`
    

export default function ExpandableCard(props){
    

    return <StyledCard>
        <Title>{props.children}</Title>
        <IconContainer>
            {props.assets.map(el => <Icon height="30" width="30" asset={el}></Icon>)}
        </IconContainer>
        <SeeMore>
        

        
        <StyledSpan>Expand</StyledSpan>
        <Icon height="15" width="15" asset='expand'></Icon>
        
        </SeeMore>
    </StyledCard>
}