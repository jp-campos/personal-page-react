import styled from "styled-components";
import ExpandableCard from "../components/ExpandableCard";
import Section from "../components/Section";
import { RowCenter } from "../styled_foundations/layout";
import {ReactComponent as SettingsSvg} from "../assets/svgs/settings.svg"
import SwitchTab from "../components/SwitchTab";
import { useState } from "react";
import { WhiteSpaceLg } from "../styled_foundations/spacing";

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
        console.log(pos)
    }

    return <Section title="Skills" innerRef={innerRef} >
        
        
        <RowCenter>
            <SwitchTab leftIcon={leftIcon} 
            leftText={leftText} 
            rightIcon={rightIcon}
            rightText={rightText}
            onPosChanged={onPosChanged}
            />
        </RowCenter>
        <WhiteSpaceLg/>

        <TechSkills />

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

const SoftSkills = () => {

    <FlexContainer>

    </FlexContainer>


}


