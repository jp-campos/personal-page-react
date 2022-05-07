import SquareCard from "../../components/SquareCard";
import { RowCenter } from "../../styled_foundations/layout";
import styled from "styled-components"
import goStatic from "../../assets/pngs/go_static.png"
import personalPageFrontStatic from "../../assets/pngs/personal_page_front_static.png"
import ciclapStatic from "../../assets/pngs/ciclap_static.png"
import faritaStatic from "../../assets/pngs/farita_static.png"

import { useEffect } from "react";

//const ciclapAnimate = "https://s1.gifyu.com/images/Grabacion-de-pantalla-2022-03-31-a-las-4.40.30-p.m-1.gif"
const goAnimate = "https://s7.gifyu.com/images/go_animated.gif"
const personalFront = "https://s7.gifyu.com/images/personal-front.gif"
const ciclapAnimate = "https://s8.gifyu.com/images/ciclap_gif.md.gif"
const faritaAnimate = "https://s8.gifyu.com/images/farita_gif.md.gif"

const projs = {
    go: {
        animate: "https://s7.gifyu.com/images/go_animated.gif",
        link: "https://github.com/jp-campos/personal-page-back",
        static: goStatic
    },
    personalPage: {
        animate: "https://s7.gifyu.com/images/personal-front.gif",
        link: "/",
        static: personalPageFrontStatic
    },
    farita: {
        animate: "https://s8.gifyu.com/images/farita_gif.md.gif",
        link: "https://farita-time.netlify.app/",
        static: faritaStatic
    }
    ,
    ciclap: {
        animate: "https://s8.gifyu.com/images/ciclap_gif.md.gif",
        link: "",
        static: ciclapStatic
    }

}



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

    const toImg = (img) => <Img src={img}/>

    return <Container>
         <SquareCard topStatic={toImg(personalPageFrontStatic)} topAnimated={toImg(personalFront)} link={projs.personalPage.link} header="This Website" 
    body="This website was created using React, styled components. 
    I tried to use as little extra libraries as posible in order to maximize 
    the learning experience from this project. 
    " />
    <SquareCard topStatic={toImg(goStatic)} topAnimated={toImg(goAnimate)} link={projs.go.link} header="This Website's BackEnd" 
    body="I applied what I learned through courses with the implementation
    of this website's backEnd. 
    " />
     <SquareCard topStatic={toImg(ciclapStatic)} topAnimated={toImg(ciclapAnimate)} link={projs.ciclap.link} header="Ciclap" 
    body="App developed in Flutter. It was inteded to be a Google Maps for bikes. Offered directions that maximixed 
    the travel time in bikelines and gave indications of the elevations of the trip. Bloc Pattern and firebase
    where key in the state management of the state of the app" />
     <SquareCard topStatic={toImg(faritaStatic)} topAnimated={toImg(faritaAnimate)} link={projs.farita.link} header="Farita " 
    body="Project done in web development course in which we wanted to give an alternative to hangng out with friends during
    the pandemic. ReactJs was used for the front and NodeJs for the backend. Technologies such as NoSQL and 
    websockets were key for the development of this solution
    " />
    </Container>
   
}