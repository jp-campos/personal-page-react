import { useEffect, useLayoutEffect, createRef } from "react"
import styled from "styled-components"
import { Column, ColumnCenter, Row, RowCenter } from "../styled_foundations/layout"
import Icon from "./Icon"
import IconText from "./IconText"


const Container = styled.div.attrs(props => ({
    style:{
        height: `calc(80% - ${props.height}px)`
    }
    }))`
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 50px;
        left: 10%;
        width:80%;
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
    useEffect(()=>{
    },[props.scrollPosition])

    useLayoutEffect(()=>{
        if (bodyRef.current.clientWidth < bodyRef.current.scrollWidth) {
            console.log('overflow')
          }
    })

 
   
    return <Container height={props.scrollPosition}>
        <Header>
            <CircleContainer>
                <RedCircle></RedCircle>
                <YellowCircle></YellowCircle>
                <GreenCircle></GreenCircle>
            </CircleContainer>
            <IconText asset='folder'>User ─ zhs ─ 80 x 24</IconText>
        </Header>
        <Body ref={bodyRef}>
            <ColumnCenter>
                <p>Juan Pablo Campos</p>
                <p>&gt; Software engineer</p>
            </ColumnCenter>

        </Body>

    </Container>
}

