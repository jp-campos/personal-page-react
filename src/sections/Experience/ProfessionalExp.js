import colors from "../../styled_foundations/colors";
import { H2, H3,     TextJustify } from "../../styled_foundations/text";
import { IconsCard } from "../../components/Card";
import DropDown from "../../components/Dropdown";
import Tag from "../../components/Tag";
import styled from "styled-components";
import React from 'react'


const DateText = styled.span`
    color: #6F6F6F;
`
export default function ProfessionalExp(){


    return <>
     <H2>Intern</H2>
        <DateText>01/20 - 06/20</DateText>
        <IconsCard assets={['ey','procuraduria']} >
            <H3>Inspector’s general officer  digital transformation</H3>
            <Tag color={colors.backEndTagBg}>Back-End</Tag>
            <Tag color={colors.dataTag}>Data</Tag>
            <TextJustify>
                 <p> Leveraged analytics and data science to give a digiital transformation to government processes</p>
            </TextJustify>

            
            <DropDown selected={true} >

                <li>Datafactory ETLS </li>
                <li>Apache Spark</li>
                <li>Microsoft SQL server</li>
                <li>PowerBi</li>
                <li>PowerApps</li>
                <li>Orable DB</li>
                <li>Graph algorithms</li>
                <li>K means</li>

            </DropDown>

        </IconsCard>


        <H2>Fullstack developer</H2>
        <DateText>04/21 - Today</DateText>
        <IconsCard assets={['accenture', 'bancolombia']}>
            <H3>Bancolombia a la Mano</H3>
            <Tag color={colors.frontEndTagBg}>Front-End</Tag>
            <Tag color={colors.backEndTagBg}>Back-End</Tag>
            <TextJustify>
                 <p>I worked with Colombia&apos;s biggest bank on their financial inclusion product &quot;Bancolombia a la mano&quot;. 
                During this time I also contributed in a digital transformation project called &quot;Galatea&quot;. This project&apos;s main purpose 
                was to increase code reusability between financial products and promote good programming/architectural practices. 
                </p>
                <p>
                    I tackled tasks on both front end and backend. The front end was developed in Flutter and the backend in reactive Springboot. 
                </p>
            </TextJustify>
            <DropDown>
                
                <li>Springboot Reactor Micro services </li>
                <li>Rabbit MQ</li>
                <li>AWS Cloudformation</li>
                <li>AWS Secret Manager</li>
                <li>AWS S3</li>
                <li>AWS EKS</li>
                <li>Kubernetes</li>
                <li>Azure pipelines</li>
                <li>Clean Architecture</li>
                <li>Hybrid app with Flutter</li>
                <li>Native Flutter plugins for IOS and Android</li>
                <li>Atomic Design</li>
                <li>SCRUM</li>


            </DropDown>
           
        </IconsCard>
    </>
}