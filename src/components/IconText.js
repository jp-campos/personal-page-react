import styled from "styled-components";
import { Row } from "../styled_foundations/layout";
import Icon from "./Icon";


const StyledText = styled.span`
    margin-left: 1rem;
`
export default function IconText(props) {

    return <Row>
            <Icon asset={props.asset}></Icon> 
            <StyledText>{props.children}</StyledText>
    </Row>
        
}