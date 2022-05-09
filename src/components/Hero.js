 import { memo } from 'react'
import CommandLine from './command_line/CommandLine'
import NavBar from './nav_bar/NavBar'
import React from 'react'



export default memo (function Hero({currSection, scrollTo,scrollPosition, isMinimized, minimizedCallback}){
    
    return <>
        <NavBar currSection={currSection} scrollTo={scrollTo} showNavItems={isMinimized} scrollPosition={scrollPosition}></NavBar>
        <CommandLine minimizedCallback={minimizedCallback} scrollTo={scrollTo} scrollPosition={scrollPosition}></CommandLine>
    </>
})

