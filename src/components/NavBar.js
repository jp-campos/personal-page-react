import styled from "styled-components"




const StyledNavBar = styled.div.attrs(props => ({
  style:{
      height: `calc(50% - ${props.height}px)`
  }
  }))`
      background: rgb(43,51,244);
        background: linear-gradient(180deg, rgba(43,51,244,1) 0%, rgba(30,5,126,1) 100%);   
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        min-height: 60px; 
        z-index: 50;
`
export default function NavBar({scrollPosition}){
 
    return <StyledNavBar height={scrollPosition}></StyledNavBar>
}


