import styled from "styled-components";
import {ReactComponent as Plus} from "../assets/svgs/plus.svg"
import { useState } from "react";
import colors from "./colors";
import React from 'react'

export const PrimaryBtn = styled.button`
    background-color: ${colors.active};
    border-radius: 8px;
    color: white;
    font-size: 18px;
    border: none; 
    padding: 5px 10px;
    cursor: pointer; 
    &:hover{
        background-color: ${colors.clickable};
    }
    &:disabled{
        background-color: grey;
    }
    transition: background-color 500ms;
`

const StyledAddBtn = styled.div`
    padding: 5px;
    cursor: pointer;
`


export const AddBtn = (props)=>{

    const [color, setColor] = useState('#787878')

    return <StyledAddBtn onMouseLeave={()=>setColor('#787878')} onMouseOver={()=>setColor(colors.clickable)} onClick={()=>props.onClick()}>
        <Plus width="20px" height="20px" fill={color}></Plus>
    </StyledAddBtn>
}