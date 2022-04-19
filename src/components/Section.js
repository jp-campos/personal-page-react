import styled from "styled-components"
import { RowCenter } from "../styled_foundations/layout"
import { H1 } from "../styled_foundations/text"
import { WhiteSpaceMd } from "../styled_foundations/spacing"

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
    width: 100vw;
    height: 40vw;
`



export default function Section({ children, icon, title, innerRef, separatorColors }) {

    let separator = typeof separatorColors !== 'undefined' ?
        <Separator >
            <Gradient colors={separatorColors} />
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
                        {icon}
                    </UnSkewContainer>

                </TitleContainer>
            </RowCenter>
            <WhiteSpaceMd />
            {children}
        </StyledSection>
    </>
}