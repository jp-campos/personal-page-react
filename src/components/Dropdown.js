import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {  Row, RowSpaceBetween } from "../styled_foundations/layout";
import { WhiteSpaceMd } from "../styled_foundations/spacing";
import colors from './../styled_foundations/colors'

const Title = styled.p`
    color: ${colors.clickable};
`

const TitleContainer = styled(Row)`
    cursor: pointer;
`

const DropDownContainer = styled.div`
    padding-right: 20px;
    max-height: ${props=> props.selected ? '350px' : '0px'};
    overflow: hidden;
    transition: max-height 0.5s linear; 
`


const DropDown = (props) =>{
    const [selected, setSelected] = useState(false);

    const firstHalfChildren = useRef([])
    const secondHalfChildren = useRef([])


    useEffect(()=>{
        let size = props.children.length
        let firstHalfEnd = size % 2 === 0 ? Math.floor(size/2) : Math.floor(size/2) + 1
        let secondHalfStart = firstHalfEnd + 1 ;

        firstHalfChildren.current = props.children.slice(0,firstHalfEnd)
        secondHalfChildren.current = props.children.slice(secondHalfStart, size)

    }, [props.children])

    return <>
        <TitleContainer  onClick={()=>setSelected(!selected)}>

            <Title>Technologies and methodologies used</Title>
             
        </TitleContainer>


        <DropDownContainer selected={selected}>
            <Row>
                <ul>
                    {firstHalfChildren.current}
                </ul>
                <WhiteSpaceMd/>
                <ul>
                    {secondHalfChildren.current}
                </ul>
            </Row>
        </DropDownContainer>
    </>
}

export default DropDown;