import styled from "styled-components";
import colors from "./colors"


export const H1 = styled.h1`
  
  font-family: 'Do Hyeon', sans-serif;
  font-size: 2rem;
  color: #412234;
`

export const H2 = styled.h2` 
    color: ${colors.titleBlue};
    margin: 0px;
`

export const H3 = styled.h3`
font-family: 'Do Hyeon', sans-serif;
  color: ${colors.titleBlue};
  font-weight: 400;
  margin: 5px 0px;
`
export const H4 = styled.h4`
font-family: 'Do Hyeon', sans-serif;
  color: #090909;
  font-weight: 400;

`
export const Link = styled.a`
  font-family: 'Do Hyeon', sans-serif;
  text-decoration: none;
  font-size: ${props => props.fontSize};
  color: #B94A32;
`
export const Label = styled.span`
  font-weight: bold;
  
`

export const TextJustify = styled.span`
 text-align: justify;
  text-justify: inter-word;
`
export const ErrorText = styled.span`
  color: ${colors.error}; 
`
export const NewPageLink = (props) => <Link href={props.href} fontSize={props.fontSize} target="_blank">{props.children}</Link>

    

    

