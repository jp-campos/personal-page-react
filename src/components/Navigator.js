import React, { useEffect, useRef, useState } from "react"
import Hero from "./Hero"
import { NAV_ITEM_LABELS } from "./nav_bar/constants"


export default function Navigator({ sectionRefs, children }) {


    const [scrollPosition, setScrollPosition] = useState(0)
    const currSection = useRef()

    useEffect(() => {
        window.addEventListener('scroll', _handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', _handleScroll)
    }, [])

    const _handleScroll = (_) => {
        setScrollPosition(window.scrollY)
        currSection.current = _getCurrSectionKey()
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

    const scrollTo = (section) => {
        sectionRefs[section]?.scrollIntoView()
    }


    return <>
        <Hero currSection={currSection.current} scrollPosition={scrollPosition} scrollTo={scrollTo}></Hero>
        {children}
    </>
}