import Section from "../components/Section";
import { ReactComponent as Icon } from "../assets/svgs/inbox.svg"
import styled from "styled-components";
import { ErrorText, H2 } from "../styled_foundations/text";
import colors from "../styled_foundations/colors";
import { WhiteSpaceLg, WhiteSpaceMd, WhiteSpaceSm } from "../styled_foundations/spacing";
import { PrimaryBtn } from "../styled_foundations/buttons";
import { useState } from "react";
import { Row } from "../styled_foundations/layout";
import httpClient from "../infrastructure/httpClient";
import { toast } from "react-toastify";

const SectionLabel = styled(H2)`
    color: ${colors.active};
`

const FromInput = styled.input`
    height: 30px;
    font-size: 15px;
    width: 300px;
    border: none; 
 
`

const BodyInput = styled.textarea`
    height:200px;
    width: 100%; 
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    border-style: inset;
    padding: 1px 2px; 
   border: none;
`

export default function ContactMe(props) {

    const icon = <Icon width="100px" height="100px" />
    const [isMailValid, setIsMailValid] = useState(true)
    const [mailObj, setMailObj] = useState({ "from": null, "body": null })

    const validateMail = (mail) => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return mail.from.match(regex) !== null

    }

    const handleMailBlur = (e) => {
        let temp = { ...mailObj, 'from': e.target.value }
        setMailObj(temp)
        let isValid = validateMail(temp)
        setIsMailValid(isValid)
    }

    const handleMailChange = (e) => {
        let temp = { ...mailObj, 'from': e.target.value }

        let isValid = validateMail(temp)
        if (isValid && isValid !== isMailValid) {
            setIsMailValid(isValid)
        }
    }

    const handleBodyChange = (e) => {
        let temp = { ...mailObj, 'body': e.target.value }
        setMailObj(temp)
    }

    const successToast = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const failureToast = () => {
        toast.error('Something went wrong', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const handleSubmit = async () => {

        let mailValid = validateMail(mailObj.from);
        if (mailValid) {

            try {
                await httpClient.sendMail(mailObj)
                successToast('Email has been sent')
            }
            catch (e) {
                failureToast()
            }
        } else {
            setIsMailValid(false)
        }

    }

    return <Section icon={icon} title="Let's keep in touch!" innerRef={props.innerRef}>
        <WhiteSpaceLg />
        <SectionLabel>Tell me how I could help your company</SectionLabel>
        <WhiteSpaceMd />
        <Row>
            <FromInput onBlur={handleMailBlur} onInput={handleMailChange} placeholder="Your email" />
            <WhiteSpaceSm />
            {!isMailValid && <ErrorText>Please enter a valid email</ErrorText>}
        </Row>
        <WhiteSpaceSm />
        <BodyInput onInput={handleBodyChange} type="text" placeholder="Whatever you want to tell me" />
        <WhiteSpaceMd />
        <PrimaryBtn onClick={handleSubmit} disabled={!isMailValid}>SUBMIT</PrimaryBtn>
    </Section>
}