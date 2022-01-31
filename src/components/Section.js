import styled from "styled-components"
import { H1 } from "../styled_foundations/text"

export const StyledSection = styled.div`
margin-top: 100px;
`


export const SeparatorDiv = styled.div`
    height: 1.34rem;
`
export default function Section({children, title, innerRef}){



    return <>
     <SeparatorDiv ref={innerRef}/>
        <StyledSection>
        <H1>{title}</H1>
            {children}
        </StyledSection>
    </>
}