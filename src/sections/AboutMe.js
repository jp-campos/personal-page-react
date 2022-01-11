import Card from "../components/Card";
import IconText from "../components/IconText";
import { H1 } from "../styled_foundations/text";
import  {currAge, yearsExp } from "../utility/age_calculator";


export default function AboutMe() {



    return <>
        <H1>About me</H1>
        <Card imageBackground>
            <div className="about-container">
                <IconText asset='location'>Bogotá, Colombia  </IconText>
                <IconText asset='timezone'>GMT-5</IconText>
                <IconText asset='language'>English/Spanish</IconText>
            </div>

            <p>
                I am a {currAge()} years old Systems and Computing engineer with {yearsExp()} of experience.
            </p>
        </Card>
    </>
}