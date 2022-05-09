import styled from "styled-components"
import { RowCenter } from "../styled_foundations/layout"
import { H1 } from "../styled_foundations/text"
import { WhiteSpaceMd } from "../styled_foundations/spacing"
import { useContext, useEffect, useState } from "react"
import { CurrSectionContext } from "../context/curr_section_context"
import useWindowDimensions from "../hooks/use_window_dimensions"
import { sizeNumbers } from "../utility/display"
import React from 'react'

const StyledSection = styled.div`
margin-top: 100px;

`

const SpacingDiv = styled.div`
    height: 1.34rem;
`
const TitleContainer = styled(RowCenter)`
    background-color: #E5E5E5;
    padding: 0px 40px;
    transform: skew(-40deg);
`
const UnSkewContainer = styled(RowCenter)`
    transform: skew(40deg);


`
const Separator = styled.div`
    position: absolute;
    width: 100vw;
    height: 10px;
    z-index: -1;
    overflow: hidden;
    `

const Gradient = styled.div`
    background: ${props => `radial-gradient(circle at center,${props.colors[0]},${props.colors[1]})`};    
    width: ${props => props.active ? '100vw' : '0px'};
    transition: width 400ms ease 200ms;
    height: 40vw;
`

export default function Section({ children, icon, title, innerRef, separatorColors, sectionKey}) {

    const [active, setActive] = useState(false)
    const currSection = useContext(CurrSectionContext)
    const {width} = useWindowDimensions(); 
    useEffect(() => {
        if (currSection === sectionKey) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [currSection, sectionKey])

    let separator = typeof separatorColors !== 'undefined' ?
        <Separator >
            <Gradient colors={separatorColors} active={active} />
        </Separator> : <></>

    return <>
        <SpacingDiv ref={innerRef} />
        <StyledSection>
            <RowCenter>
                {separator}
                <TitleContainer>
                    <UnSkewContainer>

                        <H1>{title}</H1>
                        <WhiteSpaceMd />
                        {width > sizeNumbers.tablet  && icon}
                    </UnSkewContainer>

                </TitleContainer>
            </RowCenter>
            <WhiteSpaceMd />
            {children}
        </StyledSection>
    </>
}