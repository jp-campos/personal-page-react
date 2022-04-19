import styled from "styled-components"
import { Row } from "../../styled_foundations/layout"
import IconText from "../IconText"
import colors from "../../styled_foundations/colors"
import NavItem from "./NavItem"
import { useRef, useEffect } from "react"
import { NAV_ITEM_LABELS } from "./constants"
import useWindowDimensions from "./../../hooks/use_window_dimensions"
import { device, sizeNumbers } from "./../../utility/display"
import { ReactComponent as MenuIcon } from "./../../assets/svgs/hamburguer.svg"
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
        @media ${device.tablet} {
            max-height: 60px;
        }
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
const MenuIconContainer = styled(Row)`
    align-items: center;
    height: 100%;
`

export default function NavBar({ scrollPosition, showNavItems, currSection, scrollTo }) {

    const refs = useRef({})

    const itemSelectorRef = useRef()
    const itemsContainerRef = useRef()
    const currRef = useRef()


    const { width } = useWindowDimensions()

    useEffect(() => {

        if (width > sizeNumbers.tablet) {
            function setSelector(navItemLabel) {
                if (showNavItems) {
                    let navItemSelectorEl = itemSelectorRef.current
                    currRef.current = refs.current[navItemLabel]

                    navItemSelectorEl.style.left = `${currRef.current.offsetLeft - 4}px`
                    navItemSelectorEl.style.width = `${currRef.current.offsetWidth + 8}px`
                }

            }

            if (typeof currSection !== 'undefined') {
                setSelector(currSection)
            }
        }
    }, [currSection, showNavItems, width])


    function onItemClick(navItemLabel) {
        scrollTo(navItemLabel)
    }


    const mobileNavBar =  showNavItems && <MenuIconContainer>
                            <MenuIcon height="40px" width="40px" fill="white" />
                        </MenuIconContainer>

    const desktopNavBar = showNavItems &&
        <NavItemsContainer ref={itemsContainerRef} >
            <NavItemSelector ref={itemSelectorRef} />
            <NavItem onClick={() => onItemClick(NAV_ITEM_LABELS.aboutMe)} innerRef={e => refs.current[NAV_ITEM_LABELS.aboutMe] = e}>About me</NavItem>
            <NavItem onClick={() => onItemClick(NAV_ITEM_LABELS.skills)} innerRef={e => refs.current[NAV_ITEM_LABELS.skills] = e}>Skills</NavItem>
            <NavItem onClick={() => onItemClick(NAV_ITEM_LABELS.exp)} innerRef={e => refs.current[NAV_ITEM_LABELS.exp] = e}>Experience</NavItem>
            <NavItem onClick={() => onItemClick(NAV_ITEM_LABELS.certs)} innerRef={e => refs.current[NAV_ITEM_LABELS.certs] = e}>Certifications</NavItem>
            <NavItem onClick={() => onItemClick(NAV_ITEM_LABELS.contactMe)} innerRef={e => refs.current[NAV_ITEM_LABELS.contactMe] = e}>Contact me</NavItem>
        </NavItemsContainer>

    const navBar = width <= sizeNumbers.tablet ? mobileNavBar : desktopNavBar;

    return <StyledNavBar height={scrollPosition}>

        {navBar}

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




