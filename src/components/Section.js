import styled from "styled-components"
import { RowCenter } from "../styled_foundations/layout"
import { H1 } from "../styled_foundations/text"
import { WhiteSpaceMd } from "../styled_foundations/spacing"

const StyledSection = styled.div`
margin-top: 100px;
`

const SeparatorDiv = styled.div`
    height: 1.34rem;
`

export default function Section({ children, icon, title, innerRef }) {

    return <>
        <SeparatorDiv ref={innerRef} />
        <StyledSection>
            <RowCenter>
                <H1>{title}</H1>
                <WhiteSpaceMd/>
                {icon}
            </RowCenter>
            <WhiteSpaceMd/>
            {children}
        </StyledSection>
    </>
}