import { useEffect, useLayoutEffect, createRef, useState } from "react"
import { ColumnCenter } from "../../styled_foundations/layout"
import IconText from "../IconText"
import {AnimationState } from "./constants"
import {Body,CircleContainer,Container,GreenCircle,Header,RedCircle,YellowCircle} from "./styles"; 

export default function CommandLine(props) {


    const bodyRef = createRef()

    const [scrollAnimationPos, setScrollAnimationPos] = useState(0)
    const [animationState, setAnimationState] = useState(AnimationState.Initial)

    useEffect(() => {
        if (props.scrollPosition < scrollAnimationPos && animationState === AnimationState.Forward) {
            setAnimationState(AnimationState.Reverse);
            setTimeout(() => { setAnimationState(AnimationState.Initial) }, 500)
        }
    }, [props.scrollPosition, animationState,scrollAnimationPos])

    useLayoutEffect(() => {
        if (bodyRef.current.clientHeight < bodyRef.current.scrollHeight && animationState === AnimationState.Initial) {
            setAnimationState(AnimationState.Forward)
            setScrollAnimationPos(props.scrollPosition)
            executeScroll()
        }
    }, [bodyRef, animationState, props.scrollPosition, executeScroll])


    function executeScroll(){
        
        props.aboutMeRef.current.scrollIntoView()    
    }


    return <Container height={props.scrollPosition} state={animationState}>
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

