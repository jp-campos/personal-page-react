import styled from "styled-components";
import Card from "../components/Card";
import IconText from "../components/IconText";
import Section from "../components/Section";
import { RowSpaceAround } from "../styled_foundations/layout";
import { StyledSection } from "../styled_foundations/spacing";
import { H1 } from "../styled_foundations/text";
import  {currAge, yearsExp } from "../utility/age_calculator";



const IconsContainer = styled(RowSpaceAround)`
    margin-bottom: 50px;

`




export default function AboutMe({innerRef}) {

    return <Section title='About me' innerRef={innerRef} >
   
        <Card imageBackground>
            <IconsContainer>
                <IconText asset='location'>Bogotá, Colombia  </IconText>
                <IconText asset='timezone'>GMT-5</IconText>
                <IconText asset='language'>English/Spanish</IconText>
            </IconsContainer>

            <p>
                I am a {currAge()} years old Systems and Computing engineer  from the University of the Andes with {yearsExp()} of experience.
                I am fluent in English and Spanish with strong verbal, written and listening skills to communicate with both programmers and managers. 
                I enjoy coding to solve challeging problems. Other things I enjoy are going outdoors, climbing, and ultimate frisbee. 
            </p>
        </Card>
    </Section>
}