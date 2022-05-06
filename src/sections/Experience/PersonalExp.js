import SquareCard from "../../components/SquareCard";
import { RowCenter } from "../../styled_foundations/layout";
import styled from "styled-components"
import goStatic from "../../assets/pngs/go_static.png"
import personalPageFrontStatic from "../../assets/pngs/personal_page_front_static.png"
import ciclapStatic from "../../assets/pngs/ciclap_static.png"

import { useEffect } from "react";

//const ciclapAnimate = "https://s1.gifyu.com/images/Grabacion-de-pantalla-2022-03-31-a-las-4.40.30-p.m-1.gif"
const goAnimate = "https://s7.gifyu.com/images/go_animated.gif"
const personalFront = "https://s7.gifyu.com/images/personal-front.gif"
const ciclap = "https://s8.gifyu.com/images/ciclap_gif.md.gif"

const Container = styled(RowCenter)`
    row-gap: 60px;
    column-gap: 60px; 
`

const Img = styled.img`
    max-width: 100%;
`
export default function PersonalExp(){

    useEffect(()=>{
        const img = new Image();
        img.src = goAnimate;
        img.src = personalPageFrontStatic;
    }, [])
    const top = "temp"
    const toImg = (img) => <Img src={img}/>
   
    return <Container>
         <SquareCard topStatic={toImg(personalPageFrontStatic)} topAnimated={toImg(personalFront)} header="This Website" 
    body="This website was created using React, styled components. 
    I tried to use as little extra libraries as posible in order to maximize 
    the learning experience from this project. 
    " />
    <SquareCard topStatic={toImg(goStatic)} topAnimated={toImg(goAnimate)}  header="This Website's BackEnd" 
    body="I applied what I learned through courses with the implementation
    of this website's backEnd. 
    " />
     <SquareCard topStatic={toImg(ciclapStatic)} header="Ciclap" 
    body="" />
     <SquareCard topStatic={top} header="Farita " 
    body="This website was created using React, styled components. 
    I tried to use as little extra libraries as posible in order to maximize 
    the learning experience from this project. 
    " />
    </Container>
   
}