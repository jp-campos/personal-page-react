import styled from "styled-components";
import Card from "../components/Card";
import Section from "../components/Section";
import Tag from "../components/Tag";
import colors from "../styled_foundations/colors";
import { H2, H3, H4 } from "../styled_foundations/text";


const DateText = styled.span`
    color: #6F6F6F;
`

export default function Experience({ innerRef }) {



    return <Section title="Experience" innerRef={innerRef}>

        <H2>Intern</H2>
        <DateText>01/20 - 06/20</DateText>
        <Card>
            <H3>Inspector’s general officer  digital transformation</H3>
            <Tag color={colors.backEndTagBg}>Back-End</Tag>
            <ul>
                <li>Development of ETLS </li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </Card>
    </Section>
}