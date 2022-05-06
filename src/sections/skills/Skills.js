import styled from "styled-components";
import Section from "../../components/Section";
import { ReactComponent as SettingsSvg } from "../../assets/svgs/settings.svg"
import { ReactComponent as SoftSkillsIcon } from "../../assets/svgs/soft_skills.svg"

import Tab from "../../components/Tab";
import { WhiteSpaceLg, WhiteSpaceSm } from "../../styled_foundations/spacing";
import { RowCenter } from "../../styled_foundations/layout";
import { H2 } from "../../styled_foundations/text";
import colors from "../../styled_foundations/colors";
import SearchBar from "../../components/SearchBar";
import Icon from "../../components/Icon";
import { TechSkills } from "./TechSkills";
import { SoftSkills } from "./SoftSkills";


const SearchBarLabel = styled(H2)`
    color: ${colors.active}; 
`
export default function Skills({ innerRef, sectionKey }) {

    const leftIcon = <SettingsSvg height="20px" width="20px" />
    const leftText = "Tech"
    const rightIcon = <SoftSkillsIcon height="20px" width="20px" />
    const rightText = "Soft"

    const icon = <Icon asset="books" width="130px" height="50px" />
    


    const separatorColors = ['#F71F68', '#FBAA89']
    return <Section icon={icon} title="Skills" innerRef={innerRef} separatorColors={separatorColors} sectionKey={sectionKey}>

        <Tab leftIcon={leftIcon}
            leftText={leftText}
            rightIcon={rightIcon}

            rightText={rightText}
            leftChild={<TechSkills />}
            rightChild={<SoftSkills />}
        />

        <WhiteSpaceLg />
        <SearchBarLabel>Help me grow</SearchBarLabel>
        <WhiteSpaceSm></WhiteSpaceSm>
        <RowCenter>
            <SearchBar />

        </RowCenter>

    </Section>
}







