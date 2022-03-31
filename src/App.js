import styled from 'styled-components';
import AboutMe from './sections/AboutMe.js';
import Skills from './sections/Skills.js';
import { useRef } from 'react'
import Experience from './sections/Experience/Experience';
import Navigator from './components/Navigator.js';
import { NAV_ITEM_LABELS } from './components/nav_bar/constants.js';
import Certifications from './sections/Certifications.js';
import Footer from './sections/Footer.js';
import { WhiteSpaceLg } from './styled_foundations/spacing.js';

const Body = styled.div`
  
  padding-left: 50px; 
  padding-right: 50px;
`
//TODO: Hacer media query
const HeroWhiteSpace = styled.div`
    height: 100vh;
`


function App() {

  const sectionRefs = useRef({})

  return (
    <Navigator sectionRefs={sectionRefs.current} >

      <Body>
        <HeroWhiteSpace />

        <AboutMe innerRef={e => sectionRefs.current[NAV_ITEM_LABELS.aboutMe] = e} />
        <Skills innerRef={e => sectionRefs.current[NAV_ITEM_LABELS.skills] = e} />
        <Experience innerRef={e => sectionRefs.current[NAV_ITEM_LABELS.exp] = e} />
        <Certifications innerRef={e => sectionRefs.current[NAV_ITEM_LABELS.certs] = e} />
      </Body>
      <WhiteSpaceLg/>
      <Footer/>
    </Navigator>

  )
}

export default App;
