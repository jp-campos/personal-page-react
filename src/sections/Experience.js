import styled from "styled-components";
import Card, { IconsCard } from "../components/Card";
import Section from "../components/Section";
import Tag from "../components/Tag";
import colors from "../styled_foundations/colors";
import { H2, H3, H4 } from "../styled_foundations/text";


const DateText = styled.span`
    color: #6F6F6F;
`

const TextJustify = styled.span`
 text-align: justify;
  text-justify: inter-word;
`

export default function Experience({ innerRef }) {



    return <Section title="Experience" innerRef={innerRef}>

        <H2>Intern</H2>
        <DateText>01/20 - 06/20</DateText>
        <IconsCard assets={['ey','procuraduria']} >
            <H3>Inspector’s general officer  digital transformation</H3>
            <Tag color={colors.backEndTagBg}>Back-End</Tag>
            <Tag color={colors.dataTag}>Data</Tag>
            <TextJustify>
                 <p> Leveraged analytics and data science to give a digiital transformation to government processes</p>
            </TextJustify>

            <H4> Technologies used</H4>
            <ul>
                <li>Datafactory ETLS </li>
                <li>Apache Spark</li>
                <li>Microsoft SQL server</li>
            </ul>
        </IconsCard>


        <H2>Fullstack developer</H2>
        <DateText>04/21 - Today</DateText>
        <IconsCard assets={['accenture', 'bancolombia']}>
            <H3>Bancolombia a la Mano</H3>
            <Tag color={colors.frontEndTagBg}>Front-End</Tag>
            <Tag color={colors.backEndTagBg}>Back-End</Tag>
            <TextJustify>
                 <p>I worked with Colombia's biggest bank on their finantial inclusion product "Bancolombia a la mano". 
                During this time I also contributed in a digital transformation project called "Galatea". This project's main purpose 
                was to increase code reusability between finantial products and promote good programming/architectural practices. 
                </p>
                <p>
                    I took tasks on both front end and backend. The front end was developed in flutter and the backend in reactive Springboot. 
                </p>
            </TextJustify>

            <H4> Technologies used</H4>
            <ul>
                <li>Micro services developed with Springboot Reactor</li>
                <li>Rabbit MQ</li>
                <li>AWS cloudformation</li>
                <li>Kubernetes</li>
                <li>Azure pipelines</li>
                <li>Clean Architecture</li>
                <li>Hybrid app with Flutter</li>
                <li>Atomic Design</li>
            </ul>
        </IconsCard>
    </Section>
}