import styled from "styled-components"
import colors from "../styled_foundations/colors";

const StyledIcon = styled.img`

    ${props => props.lightGrey ? `filter: invert(75%) sepia(0%) saturate(4%) hue-rotate(45deg) brightness(91%) contrast(93%);`: ''};
`

export default function Icon(props) {

    const basePath = '../../assets/icons/'
    const defaultWidth = 20;
    const defaultHeight = 20;
    return <StyledIcon lightGrey={props.lightGrey ?? false} alt={props.asset} width={props.width ?? defaultWidth} 
    height={props.height ?? defaultHeight} src={basePath +  props.asset + '.png' }></StyledIcon>

}


