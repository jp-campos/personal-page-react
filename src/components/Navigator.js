import React, { useEffect, useState, useReducer } from "react"
import { CurrSectionContext } from "../context/curr_section_context"
import Hero from "./Hero"


export default function Navigator({ sectionRefs, children }) {

    

    const [childScroll, setChildScroll] = useState(0)
    const [currSection, setCurrSection] = useState()

    const minimizedReducer = (state, action)=>({isMinimized: !state.isMinimized, minimizedPos: action})
    const [minimizedObj, dispatch] = useReducer(minimizedReducer, {isMinimized: false, minimizedPos: null })

    const _minimizedCallBack = (_,pos) => {
        dispatch(pos)
    }
    useEffect(() => {
        const handleScroll = (_) => {
            //Change scroll position only when hero hasnt been minimized (for its height to change) or 
            // when it is at the point where the commandline was minimized (to trigger the maximize animation)
            if(!minimizedObj.isMinimized || window.scrollY < minimizedObj.minimizedPos){    
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
    }, [sectionRefs, minimizedObj])
    

    const scrollTo = async (section) => {
        sectionRefs[section]?.scrollIntoView()
    }


    return <CurrSectionContext.Provider value={currSection}>
        <Hero minimizedCallback={_minimizedCallBack} isMinimized={minimizedObj.isMinimized} currSection={currSection} scrollPosition={childScroll} scrollTo={scrollTo}></Hero>
        {children}
    </CurrSectionContext.Provider>
}