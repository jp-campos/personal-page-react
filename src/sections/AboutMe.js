import styled from "styled-components";
import Card from "../components/Card";
import IconText from "../components/IconText";
import Section from "../components/Section";
import { Row, RowSpaceAround } from "../styled_foundations/layout";
import { WhiteSpaceLg } from "../styled_foundations/spacing";
import { H3 } from "../styled_foundations/text";
import { currAge, yearsExp } from "../utility/age_calculator";
import me from "../assets/pngs/me.png"
import { device } from "../utility/display";
import React from 'react';

const IconsContainer = styled(RowSpaceAround)`
    margin-bottom: 50px;

`

const StyledImg = styled.img`
    max-width: 100%; 
    @media ${device.tablet}{
        max-width: 250px; 
        align-self: center;
        
    }
`
export default function AboutMe({ innerRef }) {

    const left = <StyledImg src={me} />
    
    return <Section title='About me' innerRef={innerRef} >

        <Card left={left} imageBackground>
            <IconsContainer>
                <IconText asset='location'>Bogotá, Colombia  </IconText>
                <IconText asset='timezone'>GMT-5</IconText>
                <IconText asset='language'>English/Spanish</IconText>
            </IconsContainer>

            <p>
                I am a {currAge()} years old Systems and Computing engineer  from the University of the Andes with {yearsExp()} of experience.
                I am fluent in English and Spanish with strong verbal, written and listening skills which I use to efficently communicate with both programmers and managers.
                I enjoy coding to improve and add value to people&lsquo;s lifes. In my free time I enjoy going outdoors, climbing, and ultimate frisbee.
            </p>

            <Row>

                <H3>Contact info:</H3>
                <WhiteSpaceLg/>
                <Row>
                    <IconText asset="telephone"></IconText>
                    <p>+57 305 260 1208</p>
                </Row>
                <WhiteSpaceLg/>
                <Row>
                    <IconText asset="email"></IconText>
                    <p>jp.campos99@hotmail.com</p>
                </Row>

            </Row>

        </Card>
    </Section>
}