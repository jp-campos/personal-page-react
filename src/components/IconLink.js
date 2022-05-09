import { useState } from "react"
import styled from "styled-components"
import { Row } from "../styled_foundations/layout"
import { NewPageLink } from "../styled_foundations/text"
import Icon from "./Icon"
import React from 'react'




const Invisible = styled.div`
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
`

const Container = styled(Row)`
    cursor: pointer; 
`

const IconLink = (props) => {
    const [iconVisible, setIconVisible] = useState(false)



    return <Container onMouseEnter={() => setIconVisible(true)} onMouseLeave={() => setIconVisible(false)}>
        <Invisible visible={iconVisible}>
            <Icon height={props.size} width={props.size} asset='link' />
        </Invisible>
        <NewPageLink fontSize={props.size} href={props.href}>{props.children}</NewPageLink>

    </Container>
}

export default IconLink