import styled from "styled-components"
import { Row } from "../../styled_foundations/layout"
import IconText from "../IconText"
import colors from "../../styled_foundations/colors"
import NavItem from "./NavItem"
import { useRef, useLayoutEffect, useEffect } from "react"
import { NAV_ITEM_LABELS } from "./constants"

const LanguagesContainer = styled(Row)`
    position: absolute;
    top: 10px;
    right:40px;
`

const LanguageBtn = styled.div`
    padding: 5px;
    border-radius: 2px;
    color: white;
    cursor: pointer;

    &:hover{
        border: 1px solid ${colors.active};
        padding: 4px; 
    }
`


const StyledNavBar = styled.nav.attrs(props => ({
    style: {
        height: `calc(50% - ${props.height}px)`
    }
}))`
      background: rgb(43,51,244);
        background: linear-gradient(180deg, rgba(43,51,244,1) 0%, rgba(30,5,126,1) 100%);   
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        min-height: 60px; 
        z-index: 50;
`

const VerticalSeparator = styled.div`
    align-self: stretch;
    width: 1px;
    background-color: white;
    margin: 0px 5px;
`

const NavItemsContainer = styled(Row)`
    column-gap: 20px; 
    height: 100%;
    margin-left: 50px; 
    max-width: 600px;
    position: relative; 
    
`

const NavItemSelector = styled.div`
        background-color: ${colors.active};
        color: white; 
        border-radius: 2px; 
        width: 0px;
        position: absolute;
        left: 0px; 
        height: 30px;
        z-index: 48; 
        transition: left 0.4s, width 0.4s;

`


export default function NavBar({ scrollPosition, showNavItems, currentNavItem }) {

    const refs = useRef({})

    const itemSelectorRef = useRef()
    const itemsContainerRef = useRef()
    const currRef = useRef()
   

    useLayoutEffect(() => {

        let navItems = itemsContainerRef.current?.querySelectorAll('li')
        navItems?.forEach(e => {
            e.addEventListener('click',(event)=>setSelector(event.target) )
        })

    }, [itemSelectorRef.current])


    function setSelector(e){
        let navItemSelectorEl = itemSelectorRef.current
        navItemSelectorEl.style.left = `${e.offsetLeft - 4}px`
        navItemSelectorEl.style.width = `${e.offsetWidth + 8}px`

        currRef.current = refs.current[e.id]
    }

    
    return <StyledNavBar height={scrollPosition}>

        {showNavItems &&
            <NavItemsContainer ref={itemsContainerRef} >
                <NavItemSelector ref={itemSelectorRef}/>
                <NavItem link={'#about-me'} id={NAV_ITEM_LABELS.aboutMe} innerRef={e => refs.current[NAV_ITEM_LABELS.aboutMe] = e}>About me</NavItem>
                <NavItem link={'#skills'} id={ NAV_ITEM_LABELS.skills} innerRef={e => refs.current[NAV_ITEM_LABELS.skills] = e}>Skills</NavItem>
                <NavItem link={'#exp'} id={NAV_ITEM_LABELS.exp} innerRef={e => refs.current[NAV_ITEM_LABELS.exp] = e}>Experience</NavItem>
                <NavItem link={'#cert'} id={NAV_ITEM_LABELS.certs} innerRef={e=> refs.current[NAV_ITEM_LABELS.certs] = e}>Certifications</NavItem>
                <NavItem link={'#contact-me'} id={NAV_ITEM_LABELS.certs} innerRef={e=> refs.current[NAV_ITEM_LABELS.contactMe] = e}>Contact Me</NavItem>
            </NavItemsContainer>

        }

        <LanguagesContainer>
            <LanguageBtn>
                <IconText asset='spanish'>ES</IconText>
            </LanguageBtn>
            <VerticalSeparator />
            <LanguageBtn>
                <IconText asset='english'>EN</IconText>
            </LanguageBtn>
        </LanguagesContainer>

    </StyledNavBar>
}


