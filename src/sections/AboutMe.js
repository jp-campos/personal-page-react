import styled from "styled-components";
import Card from "../components/Card";
import IconText from "../components/IconText";
import Section from "../components/Section";
import { Row, RowSpaceAround } from "../styled_foundations/layout";
import { WhiteSpaceLg } from "../styled_foundations/spacing";
import { H3 } from "../styled_foundations/text";
import { currAge, yearsExp } from "../utility/age_calculator";
import me from "../assets/pngs/me.png"


const IconsContainer = styled(RowSpaceAround)`
    margin-bottom: 50px;

`

const StyledImg = styled.img`
    max-width: 100%; 
`
export default function AboutMe({ innerRef }) {

    const left = <StyledImg src={me }/>
    return <Section title='About me' innerRef={innerRef} >

        <Card left={left} imageBackground>
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

            <Row>

                <H3>Contact info:</H3>
                <WhiteSpaceLg/>
                <IconText asset="telephone"></IconText>
                <p>305 260 1208</p>
                <WhiteSpaceLg/>
                <IconText asset="email"></IconText>
                <p>jp.campos99@hotmail.com</p>

            </Row>

        </Card>
    </Section>
}