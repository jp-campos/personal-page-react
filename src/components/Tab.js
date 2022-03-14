import React, { useRef, useState } from "react"
import styled from "styled-components"
import colors from "../styled_foundations/colors"
import { Row, RowSpaceAround } from "../styled_foundations/layout"
import { WhiteSpaceMd, WhiteSpaceXs } from "../styled_foundations/spacing"


const width = 200

const Container = styled(RowSpaceAround)`
    width: ${width}px;
    position: relative;
    padding: 10px 15px;
    height: 40px;
`

const InnerRow = styled(Row)`
    flex: 1;
    cursor: pointer;
`

const TabSelector = styled.div`
    background-color: ${colors.active};
    width: 80px;
    z-index: 2;
    position: absolute;
    border-radius: 8px;
    height: 2px;
    left: -2px; 
    bottom: 0px;
    transition: left 200ms;

`
const ColoredSpan = styled.span`
    color: ${props=> props.color};
`

export default function Tab(props){

    const [currPos, setCurrPos] = useState(0)
    const selectorRef = useRef()
    const leftRef = useRef()
    const rightRef = useRef()

    const handleOnClick = (pos)=>{
        if(pos === 1){
                selectorRef.current.style.left = `${rightRef.current.offsetLeft - 4}px`
                selectorRef.current.style.width= `${rightRef.current.offsetWidth  }px`
                setCurrPos(1)
        }else{
            selectorRef.current.style.left = `${leftRef.current.offsetLeft - 4}px`
            selectorRef.current.style.width= `${leftRef.current.offsetWidth  }px`
            setCurrPos(0)
        }  
        props.onPosChanged(currPos)

    }

    const leftIcon = React.cloneElement(props.leftIcon, {fill: currPos == 0 ? colors.active : 'black'})
    const rightIcon = React.cloneElement(props.rightIcon, {fill: currPos == 1 ? colors.active : 'black'})

    return <Container>
        <TabSelector ref={selectorRef}/>
        <InnerRow ref={leftRef}  onClick={()=>handleOnClick(0)}>
            {leftIcon}
            <WhiteSpaceXs/>
           <ColoredSpan color={currPos == 0 ? colors.active : 'black'}> {props.leftText}</ColoredSpan>
        </InnerRow>
        <WhiteSpaceMd/>
        <InnerRow ref={rightRef}  onClick={()=>handleOnClick(1)}>
            {rightIcon}
            <WhiteSpaceXs/>
            <ColoredSpan color={currPos == 1 ? colors.active : 'black'}> {props.rightText}</ColoredSpan>
        </InnerRow>

    </Container>
}