import styled from "styled-components";
import { Row, RowCenter } from "../../styled_foundations/layout";
import { AnimationState, marginTopPixels } from "./constants";




export const  Container = styled.div.attrs(props => ({
    style: {
        height: props.state === AnimationState.Forward ? '100px' : `calc(80vh - ${props.height}px)`,
        
        visibility: props.state === AnimationState.Forward && 'hidden',
        width: props.state === AnimationState.Forward && '0px',
        transform: _getTransform(props.state),
    },

}))`
        display: flex;
        flex-direction: column;
        position: fixed;
        top: ${marginTopPixels}px;
        left: 10%;
        width:80%;
        z-index: 200;
        overflow: hidden;
        transition: transform 300ms 0s , visibility 0s 300ms , width 300ms 0s ;
        `

export const Body = styled(RowCenter)`
        background-color: black;
        color: white;
        height: 100%;
        width: 100%;
        border-radius: 0px 0px 5px 5px;
    `

export const Header = styled(RowCenter)`                    
        background-color: #C4C4C4;
        height: 30px;
        border-radius: 5px 5px 0px 0px;  
    `

export const CircleContainer = styled(Row)`
        position: absolute;
        left: 10px;
    `


const Circle = styled.div`
height: 15px;
width: 15px;
border-radius: 50%;
border: solid;
border-width: 1px;
margin: 0px 2px;
`

export const YellowCircle = styled(Circle)`
        border-color: #DE9F34;
        background-color: #FDBC40;
        cursor: pointer;
    `

export const GreenCircle = styled(Circle)`
        border-color: #27AA35;
        background-color: #33C748;
    `

export const RedCircle = styled(Circle)`
          border-color: #E0524F;
    background-color: #FC5753;
    margin-left: 10px;
    `


function _getTransform(animationState){
    switch(animationState){
        case AnimationState.Forward:
            return `translatey(100vh) translatex(70vw)`
        case AnimationState.Reverse:
            return `translatey(calc(${marginTopPixels}px -100vh)) translatex(-70vw)`
        default: 
            return null;
    }
}

