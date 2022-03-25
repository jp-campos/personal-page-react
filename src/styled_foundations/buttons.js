import styled from "styled-components";
import {ReactComponent as Plus} from "../assets/svgs/plus.svg"
import { useState } from "react";
import colors from "./colors";



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