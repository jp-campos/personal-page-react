import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Row } from "../styled_foundations/layout";
import { WhiteSpaceMd, WhiteSpaceSm } from "../styled_foundations/spacing";
import colors from './../styled_foundations/colors'
import Icon from "./Icon";
import {ReactComponent as DownArrow} from "../assets/svgs/settings.svg"

const Title = styled.p`
    color: ${colors.clickable};
`

const TitleContainer = styled(Row)`
    cursor: pointer;

`

const DropDownContainer = styled.div`
    padding-right: 20px;
    max-height: ${props => props.selected ? '350px' : '0px'};
    overflow: hidden;
    transition: max-height 0.5s linear; 
`

const RotationWrapper = styled.div`
    transform: ${props => props.active ? '' : 'rotate(180deg)'};
    transition: transform 0.5s ease; 
`

const DropDown = (props) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(props.selected)
    }, [props.selected])

    const firstHalfChildren = useRef([])
    const secondHalfChildren = useRef([])


    useEffect(() => {
        let size = props.children.length
        let firstHalfEnd = size % 2 === 0 ? Math.floor(size / 2) : Math.floor(size / 2) + 1
        let secondHalfStart = firstHalfEnd + 1;

        firstHalfChildren.current = props.children.slice(0, firstHalfEnd)
        secondHalfChildren.current = props.children.slice(secondHalfStart, size)

    }, [props.children])

    return <>
        <TitleContainer onClick={() => setSelected(!selected)}>

            <Title>Technologies and methodologies used</Title>
            <WhiteSpaceSm/>
            <RotationWrapper active={selected}>
                <DownArrow/>
            </RotationWrapper>
        </TitleContainer>


        <DropDownContainer selected={selected}>
            <Row>
                <ul>
                    {firstHalfChildren.current}
                </ul>
                <WhiteSpaceMd />
                <ul>
                    {secondHalfChildren.current}
                </ul>
            </Row>
        </DropDownContainer>
    </>
}

export default DropDown;