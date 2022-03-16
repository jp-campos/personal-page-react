import styled from "styled-components";
import { IconsCard } from "../components/Card";
import IconLink from "../components/IconLink";
import Section from "../components/Section";
import { Row } from "../styled_foundations/layout";
import { WhiteSpaceSm, WhiteSpaceXs } from "../styled_foundations/spacing";
import { H2,  Label } from "../styled_foundations/text";



const links = {
    goStarted: "https://www.coursera.org/account/accomplishments/certificate/QZU6TMANFQZG",
    goFns: "https://www.coursera.org/account/accomplishments/certificate/Q7AQHZQ6JJZC",
    goConcurrency: "https://www.coursera.org/account/accomplishments/certificate/QX53UBTWL6ZH",
    awsDevAssociate: "https://www.credly.com/badges/bcf72c8c-23d8-4c72-954b-22d3afe41537/public_url",
    awsCloudNative: "https://www.coursera.org/account/accomplishments/certificate/XKS4TRQWVKAY",
    awsSecurity: "https://www.coursera.org/account/accomplishments/certificate/KCGHWT2ASHDT"
}



const Certifications = ({ innerRef }) => {


    return <Section title="Certifications and Courses" innerRef={innerRef}>
        
        <H2>Go courses</H2>
        <WhiteSpaceSm/>
        <IconsCard key="go" assets={['go', 'coursera']}>
            

        <Certification
                size="22px"
                href={links.goStarted}
                date="March 25, 2021"
                issuer="University of California, Irvine">
                Getting started with go
            </Certification>
            <WhiteSpaceSm />
            <Certification
                size="22px"
                href={links.goFns}
                date="April 15, 2021"
                issuer="AWS">
                Functions methods and interfaces in go
            </Certification>
            <WhiteSpaceSm />
            <Certification
                size="22px"
                href={links.goConcurrency}
                date="December 17, 2021"
                issuer="AWS">
                Concurrency in go
            </Certification>
            <WhiteSpaceSm />
        </IconsCard>

        <H2>AWS courses and certifications</H2>
        <WhiteSpaceSm/>
        <IconsCard key="aws" assets={['aws_certified_dev', 'cloudguru', 'coursera']}>
            
        

            <Certification
                size="22px"
                href={links.awsDevAssociate}
                date="December 17, 2021"
                issuer="AWS">
                AWS Certified Developer – Associate
            </Certification>
            <WhiteSpaceSm />
            <Certification
                size="22px"
                href={links.awsSecurity}
                date="March 15, 2021"
                issuer="AWS">
                AWS Fundamentals: Addressing Security Risk
            </Certification>
            <WhiteSpaceSm />
            <Certification
                size="22px"
                href={links.awsCloudNative}
                date="February 3, 2021"
                issuer="AWS">
                AWS Fundamentals: Going Cloud-Native
            </Certification>
        </IconsCard>
    </Section>
}


  const Field = styled(Row)`
    margin-left: ${props => props.marginLeft};
    `

const Certification = (props) => {

  
    return <>
        <IconLink size={props.size} href={props.href}>{props.children}</IconLink>
        <WhiteSpaceSm />

        <Field marginLeft={props.size}>
            <Label>Date:</Label>
            <WhiteSpaceXs />
            {props.date}
        </Field>
        <WhiteSpaceXs />
        <Field marginLeft={props.size}>
            <Label>Issuer:</Label>
            <WhiteSpaceXs />
            {props.issuer}
        </Field>
    </>
}



export default Certifications; 