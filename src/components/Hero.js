import React, { useState } from 'react';
 import CommandLine from './command_line/CommandLine'
import NavBar from './nav_bar/NavBar'



export default function Hero({currSection, scrollTo,scrollPosition}){

    const [isMinimized, setIsMinimized] = useState(false)

    const _minimizedCallBack = (isMinimized) => setIsMinimized(isMinimized)


    
    return <>
        <NavBar currSection={currSection} scrollTo={scrollTo} showNavItems={isMinimized} scrollPosition={scrollPosition}></NavBar>
        <CommandLine minimizedCallback={_minimizedCallBack} scrollTo={scrollTo} scrollPosition={scrollPosition}></CommandLine>
    </>
}

