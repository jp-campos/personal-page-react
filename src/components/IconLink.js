import { useState } from "react"
import styled from "styled-components"
import { Row } from "../styled_foundations/layout"
import Icon from "./Icon"




const Invisible = styled.div`
    visibility: ${props=> props.visible ? 'visible': 'hidden'};
`

const Container = styled(Row)`
`

const IconLink = (props)=>{
    const [iconVisible, setIconVisible] = useState(false)



    return <Container onMouseEnter={()=>setIconVisible(true)} onMouseLeave={()=>setIconVisible(false)}>
        <Invisible visible={iconVisible}>
            <Icon height={props.size} width={props.size} asset='link'/>
        </Invisible>
        {props.children}

    </Container>
}

export default IconLink