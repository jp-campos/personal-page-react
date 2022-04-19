
import Section from "../../components/Section";
import {ReactComponent as BriefCase} from "../../assets/svgs/briefcase.svg"
import {ReactComponent as User} from "../../assets/svgs/user.svg"
import Tab from "../../components/Tab";

import ProfessionalExp from "./ProfessionalExp";
import { WhiteSpaceLg } from "../../styled_foundations/spacing";
import {ReactComponent as Icon} from "../../assets/svgs/computer.svg"
import PersonalExp from "./PersonalExp";






export default function Experience({ innerRef }) {


    const leftIcon = <BriefCase width="20px" height="20px"/>
    const leftText = 'Professional'
    const rightIcon = <User width="20px" height="20px" />
    const rightText = 'Personal'


    const icon = <Icon width="100px" height="100px"/>

    const separatorColors = ['#E8C6EC', '#8A6FF7']
    return <Section icon={icon} title="Experience" innerRef={innerRef} separatorColors={separatorColors}>

        <Tab leftIcon={leftIcon} 
            leftText={leftText} 
            rightIcon={rightIcon}
            rightText={rightText}
            leftChild={<ProfessionalExp />}
            rightChild={<PersonalExp/>}
            />

        <WhiteSpaceLg/>
    </Section>
}


