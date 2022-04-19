import React, { useEffect, useRef, useState } from "react"
import Hero from "./Hero"


export default function Navigator({ sectionRefs, children }) {

    const [childScroll, setChildScroll] = useState(0)
    const [currSection, setCurrSection] = useState()
    const minimizedObj = useRef({isMinimized: false, minimizedPos: null })
    const _minimizedCallBack = (isMinimized,pos) => {
        minimizedObj.current.minimizedPos = pos
        minimizedObj.current.isMinimized = isMinimized
    }
    useEffect(() => {
        const handleScroll = (_) => {
            //Change scroll position only when hero hasnt been minimized or 
            // when it is at the point where the commandline was minimized
            if(!minimizedObj.current.isMinimized || window.scrollY < minimizedObj.current.minimizedPos){    
                setChildScroll(window.scrollY)
            }   
            setCurrSection( _getCurrSectionKey()) 
        }

        const _getCurrSectionKey = () => {
            let minValue = Infinity
            let minKey
            Object.keys(sectionRefs).forEach(function (key, index) {
                let el = sectionRefs[key]
                if (el !== null && typeof el !== 'undefined') {
                    let elOffset = Math.abs(el.getBoundingClientRect().top)
                    if (elOffset < minValue) {
                        minKey = key
                        minValue = elOffset
                    }
                }
    
            });
            return minKey
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sectionRefs])
    

    const scrollTo = async (section) => {
        sectionRefs[section]?.scrollIntoView()
    }


    return <>
        <Hero minimizedCallback={_minimizedCallBack} isMinimized={minimizedObj.current.isMinimized} currSection={currSection} scrollPosition={childScroll} scrollTo={scrollTo}></Hero>
        {children}
    </>
}