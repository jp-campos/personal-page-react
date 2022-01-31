import { useEffect, useLayoutEffect, useState, useRef } from "react"
import { ColumnCenter } from "../../styled_foundations/layout"
import IconText from "../IconText"
import { NAV_ITEM_LABELS } from "../nav_bar/constants";
import {AnimationState } from "./constants"
import {Body,CircleContainer,Container,GreenCircle,Header,RedCircle,YellowCircle} from "./styles"; 

export default function CommandLine({scrollPosition,minimizedCallback,scrollTo }) {


    const bodyRef = useRef()

    const [scrollAnimationPos, setScrollAnimationPos] = useState(0)
    const [animationState, setAnimationState] = useState(AnimationState.Initial)

    useEffect(() => {
        if (scrollPosition < scrollAnimationPos && animationState === AnimationState.Forward) {
            setAnimationState(AnimationState.Reverse);
            minimizedCallback(false)
            setTimeout(() => { setAnimationState(AnimationState.Initial) }, 200)
        }
    }, [scrollPosition, animationState,scrollAnimationPos])

    useLayoutEffect(() => {
        if (bodyRef.current.clientHeight < bodyRef.current.scrollHeight && animationState === AnimationState.Initial) {
            setAnimationState(AnimationState.Forward)
            setScrollAnimationPos(scrollPosition)
            minimizedCallback(true)
            executeScroll()
        }
    }, [bodyRef, animationState, scrollPosition, executeScroll])


    function executeScroll(){
        scrollTo(NAV_ITEM_LABELS.aboutMe)
    }


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
                <h1>Juan Pablo Campos</h1>
                <h1>&gt; Software engineer</h1>
            </ColumnCenter>

        </Body>

    </Container>
}

