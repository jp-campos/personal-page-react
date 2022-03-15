import styled from "styled-components";
import { Row } from "../styled_foundations/layout";
import Icon from "./Icon";


const StyledText = styled.span`
    margin-left: ${props => props.space ?? '1rem' } ;
    font-size: ${props => props.fontSize};
    color: ${props => props.color};

`
export default function IconText(props) {

    return <Row>
            <Icon width={props.fontSize} height={props.fontSize} asset={props.asset}></Icon> 
            <StyledText color={props.color} fontSize={props.fontSize} space={props.space}>{props.children}</StyledText>
    </Row>
        
}