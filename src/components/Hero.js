import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommandLine from './CommandLine'
import NavBar from './NavBar'



export default function Hero(){

    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll',handleScroll, {passive:true})
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    const handleScroll = (_) =>setScrollPosition(window.scrollY)
  
        
    
    return <>
        <NavBar scrollPosition={scrollPosition}></NavBar>
        <CommandLine scrollPosition={scrollPosition}></CommandLine>
    </>
}