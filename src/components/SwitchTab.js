import { useRef, useState } from "react"
import styled from "styled-components"
import colors from "../styled_foundations/colors"
import { Row, RowSpaceAround } from "../styled_foundations/layout"
import { WhiteSpaceXs } from "../styled_foundations/spacing"


const width = 200

const Container = styled(RowSpaceAround)`
    width: ${width}px;
    cursor: pointer; 
    position: relative;
    border-radius: 8px;
    border: 1px solid black; 
    height: 40px;
`

const InnerRow = styled(Row)`
    flex: 1;
`

const TabSelector = styled.div`
    background-color: ${colors.active};
    width: ${width/2}px;
    z-index: -1;
    position: absolute;
    border-radius: 8px;
    height: 40px;
    left: 0px; 

`

export default function SwitchTab(props){

    const [currPos, setCurrPos] = useState(0)
    const selectorRef = useRef()
    const handleOnClick = ()=>{
        
        
        if(currPos == 0){
                selectorRef.current.style.left = '0px'
                setCurrPos(1)
        }else{
            selectorRef.current.style.left = '100px'    
            setCurrPos(0)
        }  
        props.onPosChanged(currPos)

    }
    return <Container onClick={handleOnClick}>
        <TabSelector ref={selectorRef}/>
        <InnerRow >
            {props.leftIcon}
            <WhiteSpaceXs/>
            {props.leftText}
        </InnerRow>
        <InnerRow>
            {props.rightIcon}
            <WhiteSpaceXs/>
            {props.rightText}
        </InnerRow>

    </Container>
}