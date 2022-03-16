import React, { useEffect, useState } from "react"
import Hero from "./Hero"


export default function Navigator({ sectionRefs, children }) {


    const [scrollPosition, setScrollPosition] = useState(0)
    const [currSection, setCurrSection] = useState()

    useEffect(() => {
        const handleScroll = (_) => {
            setScrollPosition(window.scrollY)
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
        <Hero currSection={currSection} scrollPosition={scrollPosition} scrollTo={scrollTo}></Hero>
        {children}
    </>
}