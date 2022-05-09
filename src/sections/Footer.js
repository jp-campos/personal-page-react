import styled from "styled-components";
import { RowCenter } from "../styled_foundations/layout";
import { ReactComponent as LinkedinIcon } from "../assets/svgs/linkedin.svg"
import { ReactComponent as GithubIcon } from "../assets/svgs/github.svg"
import { ReactComponent as MailIcon } from "../assets/svgs/mail.svg"
import { WhiteSpaceMd } from "../styled_foundations/spacing";
import React from 'react'

const StyledFooter = styled.footer`
    width: 100vw;
    background-color: #312F99;
    padding: 20px;
`
const IconCreditLink = styled.a`
    text-align: center;
    color: white;
`

const HorizontalDivider = styled.div`
    height: 1px;
    flex-grow: 1;
    background-color: #aaa9a9;
`

const EmailWrapper = styled(MailIcon)`
    cursor: pointer;
`

export default function Footer() {

    const sendMail = () => window.open('mailto:jp.campos99@hotmail.com');

    return <StyledFooter>
        <RowCenter>
            <HorizontalDivider />
            <WhiteSpaceMd />
            <a href="https://www.linkedin.com/in/juan-pablo-campos-dur%C3%A1n-a623b5205/"><LinkedinIcon height="40px" width="40px" fill="white" /></a>
            <WhiteSpaceMd />
            <a href="https://github.com/jp-campos"><GithubIcon height="40px" width="40px" fill="white" /></a>
            <WhiteSpaceMd />
            <EmailWrapper onClick={sendMail} height="40px" width="40px" fill="white" />
            <WhiteSpaceMd />
            <HorizontalDivider />

        </RowCenter>
        <WhiteSpaceMd />
        <RowCenter>
            <IconCreditLink href="https://github.com/jp-campos/personal-page-react/blob/master/credit.txt">Credits for Icons used</IconCreditLink>
        </RowCenter>

    </StyledFooter>
}