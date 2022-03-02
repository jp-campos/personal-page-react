import styled from "styled-components";
import colors from "./colors"


export const H1 = styled.h1`
  font-size: 2rem;
  color: #412234;
`

export const H2 = styled.h2` 
    color: #0E0C76;
    margin: 0px;
`

export const H3 = styled.h3`
  color: #0E0C76;
  font-weight: 400;
  margin: 5px 0px;
`
export const H4 = styled.h4`
  color: #090909;
  font-weight: 400;

`
export const Link = styled.a`
  text-decoration: none;


`

export const NewPageLink = (props) => <Link href={props.href} target="_blank">{props.children}</Link>

    

    

