import styled from 'styled-components';
import Hero from './components/Hero.js';
import AboutMe from './sections/AboutMe.js';
import Skills from './sections/Skills.js';


const Body = styled.div`
  background-color: #E5E5E5;
  padding-left: 50px;
  padding-right: 50px;
`

let HeroWhiteSpace = styled.div`
    height: 1000px; //TODO: Hacerlo con base a la altura
    background-color: #E5E5E5;
`
function App() {
  return (
    <>
      <Hero></Hero>
      <Body>
        <HeroWhiteSpace></HeroWhiteSpace>
        
        <AboutMe/>
       <Skills/>

      </Body>
    </>

  )
}

export default App;
