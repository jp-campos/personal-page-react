import { useEffect, useLayoutEffect, createRef, useState} from "react"
import {keyframes} from "styled-components"
import styled from "styled-components"
import { ColumnCenter, Row, RowCenter } from "../styled_foundations/layout"
import Icon from "./Icon"
import IconText from "./IconText"
import { css } from "styled-components"
import useWindowDimensions from "../hooks/use_window_dimensions"


const marginTop = '50'; 

const minimizeAnimation = keyframes`
 0% { height: 100px; width: 300px; left: 5%; bottom: 80%}
 50% { height: 100px; width: 300px;  left: 80%; bottom: 60%}
 100%  { height: 100px; width: 300px; left: 80%; bottom:0}
 `

const Container = styled.div.attrs(props => ({
    style:{
        height: props.active ? '100px':  `calc(80vh - ${props.height}px)`,
        transform: props.active&&  `translatey(calc(100vh)) translatex(70vw)` ,
        visibility: props.active&& 'hidden',
        width: props.active&& '0px'
        
    },
    
    }))`
        display: flex;
        flex-direction: column;
        position: fixed;
        top: ${marginTop}px;
        left: 10%;
        width:80%;
        z-index: 200;
        overflow: hidden;
        transition: transform 500ms 0s , visibility 0s 500ms , width 500ms 0s ;
        `

let Body = styled(RowCenter)`
        background-color: black;
        color: white;
        height: 100%;
        width: 100%;
        border-radius: 0px 0px 5px 5px;
    `

let Header = styled(RowCenter)`                    
        background-color: #C4C4C4;
        height: 30px;
        border-radius: 5px 5px 0px 0px;  
    `

let CircleContainer = styled(Row)`
        position: absolute;
        left: 10px;

    `

let Circle = styled.div`
        height: 15px;
        width: 15px;
        border-radius: 50%;
        border: solid;
        border-width: 1px;
        margin: 0px 2px;
    `

let YellowCircle = styled(Circle)`
        border-color: #DE9F34;
        background-color: #FDBC40;
    `

let GreenCircle = styled(Circle)`
        border-color: #27AA35;
        background-color: #33C748;
    `

let RedCircle = styled(Circle)`
          border-color: #E0524F;
    background-color: #FC5753;
    margin-left: 10px;
    `
let FolderContainer = styled(Row)`
    position: absolute;
    margin: auto;
    `

export default function CommandLine(props) {
    

    const bodyRef = createRef()
    const size = useWindowDimensions()
    
    const [animationActive, setAnimationActive] = useState(false)
    const [scrollAnimationPos, setScrollAnimationPos] = useState(0)
    
    useEffect(()=>{
    },[props.scrollPosition])

    useLayoutEffect(()=>{
        if (bodyRef.current.clientHeight < bodyRef.current.scrollHeight) {
            setAnimationActive(true);
            setScrollAnimationPos(props.scrollPosition)
          }else if(animationActive && props.scrollPosition < scrollAnimationPos  ){
           
            console.log('devolver animación')
          }
    }, [bodyRef, animationActive, props.scrollPosition])

 
   
    return <Container height={props.scrollPosition} active= {animationActive}>
        <Header>
            <CircleContainer>
                <RedCircle></RedCircle>
                <YellowCircle></YellowCircle>
                <GreenCircle></GreenCircle>
            </CircleContainer>
            <IconText asset='folder'>User ─ zhs ─ 80 x 24</IconText>
        </Header>
        <Body ref={bodyRef} >
            <ColumnCenter>
                <p>Juan Pablo Campos</p>
                <p>&gt; Software engineer</p>
            </ColumnCenter>

        </Body>

    </Container>
}

