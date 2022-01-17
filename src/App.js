import styled from 'styled-components';
import Hero from './components/Hero.js';
import AboutMe from './sections/AboutMe.js';
import Skills from './sections/Skills.js';
import {useRef} from 'react'
import Experience from './sections/Experience.js';

const Body = styled.div`
  
  padding-left: 50px;
  padding-right: 50px;
`

const HeroWhiteSpace = styled.div`
    height: 100vh;
`


function App() {
  const aboutMeRef = useRef()
  return (
    <>
      <Hero aboutMeRef={aboutMeRef}></Hero>
      <Body>
        <HeroWhiteSpace/>
        
        <AboutMe innerRef ={aboutMeRef}/>
       <Skills/>
       <Experience/>

      </Body>
    </>

  )
}

export default App;
