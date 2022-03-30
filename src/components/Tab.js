import React, { useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"
import colors from "../styled_foundations/colors"
import { Row, RowSpaceAround } from "../styled_foundations/layout"
import { DynamicWhiteSpace, WhiteSpaceLg, WhiteSpaceMd, WhiteSpaceXs, intPixelSizes } from "../styled_foundations/spacing"
import { RowCenter } from "../styled_foundations/layout";


const TabContainer = styled(RowSpaceAround)`
    width: ${props=> props.width}px;
    position: relative;
    padding: 10px 15px;
    height: 40px;
`

const InnerRow = styled(Row)`

    cursor: pointer;
`

const TabSelector = styled.div`
    background-color: ${colors.active};
    width: 80px;
    z-index: 2;
    position: absolute;
    border-radius: 8px;
    height: 2px;
    left: 0px; 
    bottom: 0px;
    transition: left 200ms;

`
const ColoredSpan = styled.span`
    color: ${props => props.color};
`
const ChildContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    transform: ${props => props.translate};
    transition: all 500ms ease-in-out;
`

const ChildrenContainer = styled.div`
    position: relative;
    height: fit-content;
`


export default function Tab(props) {

    const [currPos, setCurrPos] = useState(0)
    const [leftChildTranslate, setLeftChildTranslate] = useState('')
    const [rightChildTranslate, setRightChildTranslate] = useState('translateX(100vw)')
    const [childrenMaxHeight, setChildrenMaxHeight] = useState(100)
    const [width, setWidth] = useState(500)

    const leftChildRef = useRef()
    const rightChildRef = useRef()
  
   const selectorRef = useRef()
    const leftRef = useRef()
    const rightRef = useRef()
    const leftTextRef = useRef()
    const rightTextRef = useRef()

    const setMaxHeightAndContainerWidth = () => {
        let leftHeight = leftChildRef.current.offsetHeight
        let rightHeight = rightChildRef.current.offsetHeight
        let maxHeight = leftHeight > rightHeight ? leftHeight : rightHeight

        let leftWidth = leftTextRef.current.offsetWidth
        let rightWidth = rightTextRef.current.offsetWidth 
        let whiteSpace = intPixelSizes.xs*2 
        let icons = intPixelSizes.md * 2

        setWidth(leftWidth + rightWidth + whiteSpace + icons + 50 ) 

        setChildrenMaxHeight(maxHeight)
    }

    useLayoutEffect(() => {
        selectorRef.current.style.width = `${leftRef.current.offsetWidth + 15}px`

        window.addEventListener('resize', setMaxHeightAndContainerWidth);
        setMaxHeightAndContainerWidth()

        return () => window.removeEventListener('resize', setMaxHeightAndContainerWidth);
    }, [])

 


    const handleOnClick = (pos) => {
        if (pos === 1) {
            selectorRef.current.style.left = `${rightRef.current.offsetLeft - 4}px`
            selectorRef.current.style.width = `${rightRef.current.offsetWidth + 15}px`
            setLeftChildTranslate('translateX(-100vw)')
            setRightChildTranslate('')
            setCurrPos(1)
        } else {
            selectorRef.current.style.left = `${leftRef.current.offsetLeft - 4}px`
            selectorRef.current.style.width = `${leftRef.current.offsetWidth + 15}px`
            setLeftChildTranslate('')
            setRightChildTranslate('translateX(100vw)')
            setCurrPos(0)
        }


    }

    const leftIcon = React.cloneElement(props.leftIcon, { fill: currPos === 0 ? colors.active : 'black' })
    const rightIcon = React.cloneElement(props.rightIcon, { fill: currPos === 1 ? colors.active : 'black' })

    return <>
        <RowCenter>
            <TabContainer width={width}>
                <TabSelector ref={selectorRef} />
                <InnerRow ref={leftRef} onClick={() => handleOnClick(0)} >
                    {leftIcon}
                    <WhiteSpaceXs />
                    <ColoredSpan ref={leftTextRef} color={currPos === 0 ? colors.active : 'black'}> {props.leftText}</ColoredSpan>
                </InnerRow>
                <WhiteSpaceMd />
                <InnerRow ref={rightRef} onClick={() => handleOnClick(1)} >
                    {rightIcon}
                    <WhiteSpaceXs />
                    <ColoredSpan ref={rightTextRef} color={currPos === 1 ? colors.active : 'black'}> {props.rightText}</ColoredSpan>
                </InnerRow>

            </TabContainer>
        </RowCenter>
        <WhiteSpaceLg />

        <ChildrenContainer>
            <ChildContainer translate={leftChildTranslate} ref={leftChildRef}>
                {props.leftChild}
            </ChildContainer>

            <ChildContainer translate={rightChildTranslate} ref={rightChildRef}>
                {props.rightChild}
            </ChildContainer>

        </ChildrenContainer>
        <DynamicWhiteSpace height={childrenMaxHeight + 'px'} />

    </>
}

