import { useEffect, useLayoutEffect, useState, useRef, useCallback } from "react"
import { ColumnCenter } from "../../styled_foundations/layout"
import IconText from "../IconText"
import { NAV_ITEM_LABELS } from "../nav_bar/constants";
import { AnimationState } from "./constants"
import { Body, CircleContainer, Container, GreenCircle, Header, RedCircle, YellowCircle } from "./command_line_styles";
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';





const CodeTitle = styled.h1`
    font-family: 'Do Hyeon', sans-serif, monospace;
    font-size: clamp(2.0rem, 6vw, 3.8rem);
`

export default function CommandLine({ scrollPosition, minimizedCallback, scrollTo }) {


    const bodyRef = useRef()

    const [scrollAnimationPos, setScrollAnimationPos] = useState(0)
    const [animationState, setAnimationState] = useState(AnimationState.Initial)
    const executeScroll = useCallback(() => scrollTo(NAV_ITEM_LABELS.aboutMe), [scrollTo])

    useEffect(() => {
        if (scrollPosition < scrollAnimationPos && animationState === AnimationState.Forward) {
            setAnimationState(AnimationState.Reverse);
            minimizedCallback(false, null)
            setTimeout(() => { setAnimationState(AnimationState.Initial) }, 200)
        }
    }, [scrollPosition, animationState, scrollAnimationPos, minimizedCallback])

    useLayoutEffect(() => {
        if (bodyRef.current.clientHeight < bodyRef.current.scrollHeight && animationState === AnimationState.Initial) {
            setAnimationState(AnimationState.Forward)
            setScrollAnimationPos(scrollPosition)
            minimizedCallback(true, scrollPosition)
        }
    }, [bodyRef, animationState, scrollPosition, minimizedCallback])


    return <Container height={scrollPosition} state={animationState}>
        <Header>
            <CircleContainer>
                <RedCircle></RedCircle>
                <YellowCircle onClick={executeScroll}></YellowCircle>
                <GreenCircle></GreenCircle>
            </CircleContainer>
            <IconText asset='folder'>User ─ zhs ─ 80 x 24</IconText>
        </Header>
        <Body ref={bodyRef} >
            <ColumnCenter>
                <CodeTitle>Juan Pablo Campos</CodeTitle>
                <Typewriter
                    options={{
                        strings: ['Software Engineer', 'Front End Developer', 'Back End Developer'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "code"
                      }}
                />
            </ColumnCenter>

        </Body>

    </Container>
}

