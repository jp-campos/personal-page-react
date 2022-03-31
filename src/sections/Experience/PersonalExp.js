import SquareCard from "../../components/SquareCard";
import { RowCenter } from "../../styled_foundations/layout";
import styled from "styled-components"
import goStatic from "../../assets/pngs/go_static.png"

const goAnimate = "https://s1.gifyu.com/images/Grabacion-de-pantalla-2022-03-31-a-las-4.40.30-p.m-1.gif"

const Container = styled(RowCenter)`
    row-gap: 60px;
    column-gap: 60px; 
`

const Img = styled.img`
    max-width: 100%;
`
export default function PersonalExp(){


    const top = "temp"
    const toImg = (img) => <Img src={img}/>
   
    return <Container>
         <SquareCard topStatic={toImg(goStatic)} topAnimated={toImg(goAnimate)} header="This Website" 
    body="This website was created using React, styled components. 
    I tried to use as little extra libraries as posible in order to maximize 
    the learning experience from this project. 
    " />
    <SquareCard topStatic={top} header="This Website's BackEnd" 
    body="I applied what I learned through courses with the implementation
    of this website's backEnd. 
    " />
     <SquareCard topStatic={top} header="Ciclap" 
    body="This website was created using React, styled components. 
    I tried to use as little extra libraries as posible in order to maximize 
    the learning experience from this project. 
    " />
     <SquareCard topStatic={top} header="Farita " 
    body="This website was created using React, styled components. 
    I tried to use as little extra libraries as posible in order to maximize 
    the learning experience from this project. 
    " />
    </Container>
   
}