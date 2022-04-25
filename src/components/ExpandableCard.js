import { useEffect, useReducer, useRef } from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import useWindowDimensions from "../hooks/use_window_dimensions"
import colors from "../styled_foundations/colors"
import { Column, Row, RowSpaceAround } from "../styled_foundations/layout"
import { ExpandedWhiteSpace } from "../styled_foundations/spacing"
import { H3 } from "../styled_foundations/text"
import Icon from "./Icon"




const cardSize = 230
const newCardWidth = 600

const SeeMore = styled(Row)`
    position: relative;
    right: 10px;
    bottom: 10px;
    opacity: 0;
    transition: opacity 0.5s ease;
`

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
    cursor: pointer; 
   
    animation: ${props => props.active ? modalize(props.pos) : '' } 1s ease; 
    animation-direction: normal;
    animation-fill-mode: forwards;
    
    &:hover ${SeeMore}{
        opacity: 1; 
    }

    &:hover ${Title}{
        color: ${colors.active};
    }
    transition: all 5s;
`

const modalize = (pos) => keyframes`
    from{
        position: absolute;
        z-index: 1;
        width: 230px;
        ${SeeMore}{
            opacity: 0; 
        }
    }

    

    to{
        position: fixed;
        left: ${pos.left}px;
        top: ${pos.top}px;
        z-index: 2;
        width: ${newCardWidth}px;
        max-width: 100%;
        height: 500px;
        box-shadow: 5px 8px 7px -1px rgba(163,163,163,1);

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

const PlaceHolder = styled.section`
    width: 230px;
    max-width: 100%;
    min-height: 230px;
`


export default function ExpandableCard(props) {

    const {width, height} = useWindowDimensions()

    const reducer = (state, pos) => {
        let newStateIsActive = !state.active
        let newPos = {}
        if (newStateIsActive) {
            newPos = pos
        } else {
            newPos = { left: null, top: null }
        }
        return { active: !state.active, pos: newPos }
    }
    const [activeState, dispatch] = useReducer(reducer, { active: false, pos: { top: null, left: null } })
    useEffect(()=>{
        console.log('useefect',document.body.ontouchmove)
        if(activeState.active){
            document.body.ontouchmove = (e) => { console.log('prevent')
                e.preventDefault(); return false; };

        }else{
            document.body.ontouchmove =undefined    ;

        }

    }, [activeState])
    const cardRef = useRef()

    const handleClick = () => {
        let left = (width - newCardWidth)/2
        let top = (height- 500)/2

        dispatch({ left: left, top: top })
    }


    const placeholder = activeState.active ? <PlaceHolder /> : <></>

    return <>
        {placeholder}
        <StyledCard pos={activeState.pos} active={activeState.active} onClick={handleClick} ref={cardRef}>
           
                <Title>{props.children}</Title>
                <IconContainer active={activeState.active}>
                    {props.assets.map(el => <Icon key={el} height="30" width="30" asset={el}></Icon>)}
                </IconContainer>
                {activeState.active && <p>Java</p>}
                <ExpandedWhiteSpace/>


                <SeeMore>
                    <StyledSpan>{activeState.active ? 'Close' : 'Expand'}</StyledSpan> 
                    <Icon height="15" width="15" asset={activeState.active ? 'close' : 'expand'}></Icon>
                </SeeMore>
         
        </StyledCard>
    
    </>


}