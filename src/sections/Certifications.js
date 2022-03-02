import styled from "styled-components";
import Card, { IconsCard } from "../components/Card";
import IconLink from "../components/IconLink";
import IconText from "../components/IconText";
import Section from "../components/Section";
import colors from "../styled_foundations/colors";
import { Column, ColumnCenter, ColumnSpaceAround } from "../styled_foundations/layout";
import { WhiteSpaceSm } from "../styled_foundations/spacing";
import { H2, H3, NewPageLink } from "../styled_foundations/text";



const links = {
    goStarted: "https://www.coursera.org/account/accomplishments/certificate/QZU6TMANFQZG",
    goFns: "https://www.coursera.org/account/accomplishments/certificate/Q7AQHZQ6JJZC",
    goConcurrency: "https://www.coursera.org/account/accomplishments/certificate/QX53UBTWL6ZH",
    awsDevAssociate: "https://www.credly.com/badges/bcf72c8c-23d8-4c72-954b-22d3afe41537/public_url",
    awsCloudNative: "https://www.coursera.org/account/accomplishments/certificate/XKS4TRQWVKAY",
    awsSecurity: "https://www.coursera.org/account/accomplishments/certificate/KCGHWT2ASHDT"
}

const Li = styled.li`
    margin: 20px 0px;
   
`

const CertLink = styled(NewPageLink)`
    margin: 50px 50px;
`

const Certifications = ({innerRef}) => {


    return <Section title="Certifications and Courses" innerRef={innerRef}>
        <IconsCard assets={['go', 'coursera']}>
            <H2>Go courses</H2>
            <WhiteSpaceSm/>

            <h4><NewPageLink href={links.goStarted}>Getting started with go</NewPageLink></h4>
            <h4><NewPageLink href={links.goFns}>Functions methods and interfaces in go</NewPageLink></h4>
            <h4><NewPageLink href={links.goConcurrency}>Concurrency in go</NewPageLink></h4>
        </IconsCard>
        <IconsCard assets={['aws_certified_dev', 'cloudguru','coursera']}>
            
            <H2>AWS courses and certifications</H2>
            <WhiteSpaceSm/>
            <IconLink href={links.awsDevAssociate}>AWS Certified Developer – Associate</IconLink>
           
      
             
            

        </IconsCard>
    </Section>
}


export default Certifications; 