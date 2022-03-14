import styled from "styled-components";
import ExpandableCard from "../components/ExpandableCard";
import IconText from "../components/IconText";
import Section from "../components/Section";
import {ReactComponent as SettingsSvg} from "../assets/svgs/settings.svg"
import Tab from "../components/Tab";
import { useState } from "react";
import { WhiteSpaceLg } from "../styled_foundations/spacing";
import { Column, RowCenter } from "../styled_foundations/layout";
import Card from "../components/Card";

const FlexContainer = styled(RowCenter)`
    row-gap: 60px;  
    column-gap: 40px;
`

export default function Skills({ innerRef }) {

    const leftIcon =  <SettingsSvg fill="red" height="20px" width="20px" />
    const leftText = "Tech"
    const rightIcon =  <SettingsSvg fill="red" height="20px" width="20px" />
    const rightText = "Soft"

    const [currentTabPos, setCurrentTabPos] = useState(0)
    const onPosChanged = (pos)=>{
        setCurrentTabPos(pos)
        console.log(pos)
    }


    return <Section title="Skills" innerRef={innerRef} >
        
        
     
            <Tab leftIcon={leftIcon} 
            leftText={leftText} 
            rightIcon={rightIcon}
     
            rightText={rightText}
            onPosChanged={onPosChanged}
            leftChild={<TechSkills />}
            rightChild={<SoftSkills/>}
            />
     
        <WhiteSpaceLg/>

        
     

    </Section>
}



const TechSkills = () => {


    return <FlexContainer>
        <ExpandableCard assets={['javascript', 'css', 'html', 'flutter', 'react']}>Front-End</ExpandableCard>
        <ExpandableCard assets={['folder', 'location', 'language']}>Back-End</ExpandableCard>
        <ExpandableCard assets={['folder', 'location', 'language']}>Mobile</ExpandableCard>
        <ExpandableCard assets={['folder', 'location', 'language']}>Data</ExpandableCard>
        <ExpandableCard assets={['folder', 'location', 'language']}>Version Control Devops</ExpandableCard>
        <ExpandableCard assets={['folder', 'location', 'language']}>Testing</ExpandableCard>
        <ExpandableCard assets={['folder', 'location', 'language']}>Cloud</ExpandableCard>
    </FlexContainer>
}


const SoftSkill = (props)=>{

    return<Column>
        <IconText asset="language"> English </IconText>
        <p>Englush sf asd fgasdfhjkg df gskdfgh sdfgh sd</p>
    </Column>
}

const SoftSkills = () => {

    return <Card>
        <FlexContainer>
            <SoftSkill></SoftSkill>
        </FlexContainer>
    </Card>


}


