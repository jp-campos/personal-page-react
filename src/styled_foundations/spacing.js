import styled from "styled-components";

export const intPixelSizes = {
    xs: 5,
    s: 10,
    md: 20,
    lg: 40,
}

export const pixelSizes = {
    xs: `${intPixelSizes.xs}px`,
    s: `${intPixelSizes.s}px`,
    md: `${intPixelSizes.md}px`,
    lg: `${intPixelSizes.lg}px`,
}


export const WhiteSpaceXs  = styled.div`
    height: ${pixelSizes.xs};
    width:${pixelSizes.xs};
`

export const WhiteSpaceSm  = styled.div`
    height: ${pixelSizes.s};
    width: ${pixelSizes.s};
`

export const WhiteSpaceMd  = styled.div`
    height: ${pixelSizes.md};
    width: ${pixelSizes.md};
`

export const WhiteSpaceLg  = styled.div`
    height: ${pixelSizes.lg};
    width:  ${pixelSizes.lg};
`

export const DynamicWhiteSpace = styled.div`
    height: ${props => props.height};
    width: ${props=> props.width};
`

export const ExpandedWhiteSpace = styled.div`
    flex-grow: 1; 
`