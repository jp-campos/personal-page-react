import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommandLine from './command_line/CommandLine'
import NavBar from './NavBar'



export default function Hero({aboutMeRef}){

    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll',handleScroll, {passive:true})
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    const handleScroll = (_) =>setScrollPosition(window.scrollY)
  
        
    
    return <>
        <NavBar scrollPosition={scrollPosition}></NavBar>
        <CommandLine aboutMeRef={aboutMeRef} scrollPosition={scrollPosition}></CommandLine>
    </>
}