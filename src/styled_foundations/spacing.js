import styled from "styled-components";


export const WhiteSpaceXs  = styled.div`
    height: 5px;
    width: 5px;
`

export const WhiteSpaceSm  = styled.div`
    height: 10px;
    width: 10px;
`

export const WhiteSpaceMd  = styled.div`
    height: 20px;
    width: 20px;
`

export const WhiteSpaceLg  = styled.div`
    height: 40px;
    width: 40px;
`

export const DynamicWhiteSpace = styled.div`
    height: ${props => props.height};
    width: ${props=> props.width};
`