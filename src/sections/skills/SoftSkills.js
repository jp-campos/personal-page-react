import styled from "styled-components";
import IconText from "../../components/IconText";

import { Column, RowCenter } from "../../styled_foundations/layout";
import Card from "../../components/Card";
import {  TextJustify } from "../../styled_foundations/text";
import colors from "../../styled_foundations/colors";

import { device } from "../../utility/display";




const SoftSkillContainer = styled(Column)`
width: 300px; 
@media ${device.laptop}{
    width: 90%;
}
`

const SoftSkill = (props) => {

return <SoftSkillContainer>
    <IconText color={colors.titleBlue} fontSize='20px' asset={props.asset}> {props.title} </IconText>
    <TextJustify>{props.children}</TextJustify>
</SoftSkillContainer>
}

const SoftSkillFlexContainer = styled(RowCenter)`
row-gap: 50px;  
column-gap: 80px;
align-items: flex-start;
`

export const SoftSkills = () => {

return <Card>
    <SoftSkillFlexContainer>
        <SoftSkill asset='language' title='English' >I can comfortably speak, write and understand the language</SoftSkill>
        <SoftSkill asset='handshake' title='Negotiation'>A skill that has been handy when  designing product requirements with project managers. Also important when discussing timelines and the scope of solutions</SoftSkill>
        <SoftSkill asset='speaker' title='Public Speaking'> Both online and onsite I am able to deliver eloquent expositions and talks </SoftSkill>
        <SoftSkill asset='peace' title='Conflict Resolution'>Never have initiated a conflict further from technical disagreements. I have mediated between coworkers conflicts</SoftSkill>
        <SoftSkill asset='teamwork' title='Teamwork'> I make friends with coworkers with ease. Working with friends makes it easier to do effective teamwork </SoftSkill>
        <SoftSkill asset='design_thinking' title='Design thinking' > A very important tool to get in touch with a client and give them the best solution possible </SoftSkill>
        <SoftSkill asset='clock' title='Time management'>With the help of project managing tools such as Azure Devops I am able to organize my time effectively  </SoftSkill>
        <SoftSkill asset='agile' title='Agile methodologies'> I can smoothly respond to change and follow the SCRUM framework </SoftSkill>

    </SoftSkillFlexContainer>
</Card>
}
