import styled from "styled-components";
import ExpandableCard from "../components/ExpandableCard";
import { RowCenter, RowSpaceAround } from "../styled_foundations/layout";
import { StyledSection } from "../styled_foundations/spacing";
import { H1 } from "../styled_foundations/text";


const FlexContainer = styled(RowCenter)`
    row-gap: 60px;  
    column-gap: 40px;
`

export default function Skills() {


    return <StyledSection>
    <H1>Skills</H1>
        <FlexContainer>
            <ExpandableCard assets={['folder', 'location', 'language']}>Front-End</ExpandableCard>
            <ExpandableCard assets={['folder', 'location', 'language']}>Back-End</ExpandableCard>
            <ExpandableCard assets={['folder', 'location', 'language']}>Mobile</ExpandableCard>
            <ExpandableCard assets={['folder', 'location', 'language']}>Data</ExpandableCard>
            <ExpandableCard assets={['folder', 'location', 'language']}>Version Control Devops</ExpandableCard>
            <ExpandableCard assets={['folder', 'location', 'language']}>Testing</ExpandableCard>
            <ExpandableCard assets={['folder', 'location', 'language']}>Cloud</ExpandableCard>
        </FlexContainer>
    
    </StyledSection>
}