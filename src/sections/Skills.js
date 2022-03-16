import styled from "styled-components";
import ExpandableCard from "../components/ExpandableCard";
import IconText from "../components/IconText";
import Section from "../components/Section";
import { ReactComponent as SettingsSvg } from "../assets/svgs/settings.svg"
import Tab from "../components/Tab";
import { WhiteSpaceLg } from "../styled_foundations/spacing";
import { Column, RowCenter } from "../styled_foundations/layout";
import Card from "../components/Card";
import { TextJustify } from "../styled_foundations/text";
import colors from "../styled_foundations/colors";
import SearchBar from "../components/SearchBar";

const FlexContainer = styled(RowCenter)`
    row-gap: 60px;  
    column-gap: 40px;
    align-items: flex-start;
`

export default function Skills({ innerRef }) {

    const leftIcon = <SettingsSvg height="20px" width="20px" />
    const leftText = "Tech"
    const rightIcon = <SettingsSvg height="20px" width="20px" />
    const rightText = "Soft"




    return <Section title="Skills" innerRef={innerRef} >

        <Tab leftIcon={leftIcon}
            leftText={leftText}
            rightIcon={rightIcon}

            rightText={rightText}
            leftChild={<TechSkills />}
            rightChild={<SoftSkills />}
        />


        <WhiteSpaceLg />

        <RowCenter>
            <SearchBar />
        </RowCenter>

    </Section>
}



const TechSkills = () => {


    return <FlexContainer>
        <ExpandableCard assets={['javascript', 'css', 'html', 'flutter', 'react']}>Front-End</ExpandableCard>
        <ExpandableCard assets={['java', 'spring', 'reactor', 'go', 'node', 'python']}>Back-End</ExpandableCard>
        <ExpandableCard assets={['flutter', 'swift', 'kotlin', 'android', 'ios']}>Mobile</ExpandableCard>
        <ExpandableCard assets={['postgres', 'rabbitmq', 'mongo', 'powerbi', 'spark']}>Data</ExpandableCard>
        <ExpandableCard assets={['git', 'azuredevops']}>Version Control & Devops</ExpandableCard>
        <ExpandableCard assets={['serenity', 'cucumber', 'mockito']}>Testing</ExpandableCard>
        <ExpandableCard assets={['aws', 'azure']}>Cloud</ExpandableCard>
    </FlexContainer>
}


const SoftSkillContainer = styled(Column)`
    width: 300px; 
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

const SoftSkills = () => {

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


