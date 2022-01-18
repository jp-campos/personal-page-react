import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommandLine from './command_line/CommandLine'
import NavBar from './nav_bar/NavBar'



export default function Hero({aboutMeRef}){

    const [scrollPosition, setScrollPosition] = useState(0)
    const [isMinimized, setIsMinimized] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',_handleScroll, {passive:true})
        return () => window.removeEventListener('scroll', _handleScroll)
    },[])

    const _handleScroll = (_) =>setScrollPosition(window.scrollY)

    const _minimizedCallBack = (isMinimized) => setIsMinimized(isMinimized)


    
    return <>
        <NavBar showNavItems={isMinimized} scrollPosition={scrollPosition}></NavBar>
        <CommandLine minimizedCallback={_minimizedCallBack} aboutMeRef={aboutMeRef} scrollPosition={scrollPosition}></CommandLine>
    </>
}

