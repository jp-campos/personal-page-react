import styled from "styled-components";
import Card from "../components/Card";
import IconText from "../components/IconText";
import { RowSpaceAround } from "../styled_foundations/layout";
import { StyledSection } from "../styled_foundations/spacing";
import { H1 } from "../styled_foundations/text";
import  {currAge, yearsExp } from "../utility/age_calculator";



const IconsContainer = styled(RowSpaceAround)`
    margin-bottom: 50px;

`

const SeparatorDiv = styled.div`
    height: 1.34rem;
`


export default function AboutMe({innerRef}) {

    return <>
    <SeparatorDiv id="about-me" ref={innerRef}/>
    <StyledSection>
        <H1>About me</H1>
        <Card imageBackground>
            <IconsContainer>
                <IconText asset='location'>Bogotá, Colombia  </IconText>
                <IconText asset='timezone'>GMT-5</IconText>
                <IconText asset='language'>English/Spanish</IconText>
            </IconsContainer>

            <p>
                I am a {currAge()} years old Systems and Computing engineer with {yearsExp()} of experience.
            </p>
        </Card>
    </StyledSection>
    </>
}