import React, { useState } from 'react';
 import CommandLine from './command_line/CommandLine'
import NavBar from './nav_bar/NavBar'



export default function Hero({currSection, aboutMeRef,scrollPosition}){

    const [isMinimized, setIsMinimized] = useState(false)

    const _minimizedCallBack = (isMinimized) => setIsMinimized(isMinimized)


    
    return <>
        <NavBar currSection={currSection} showNavItems={isMinimized} scrollPosition={scrollPosition}></NavBar>
        <CommandLine minimizedCallback={_minimizedCallBack} aboutMeRef={aboutMeRef} scrollPosition={scrollPosition}></CommandLine>
    </>
}

