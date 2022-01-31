import styled from "styled-components";
import ExpandableCard from "../components/ExpandableCard";
import Section from "../components/Section";
import { RowCenter } from "../styled_foundations/layout";


const FlexContainer = styled(RowCenter)`
    row-gap: 60px;  
    column-gap: 40px;
`

export default function Skills({ innerRef }) {


    return <Section title="Skills" innerRef={innerRef} >
            <FlexContainer>
                <ExpandableCard assets={['folder', 'location', 'language']}>Front-End</ExpandableCard>
                <ExpandableCard assets={['folder', 'location', 'language']}>Back-End</ExpandableCard>
                <ExpandableCard assets={['folder', 'location', 'language']}>Mobile</ExpandableCard>
                <ExpandableCard assets={['folder', 'location', 'language']}>Data</ExpandableCard>
                <ExpandableCard assets={['folder', 'location', 'language']}>Version Control Devops</ExpandableCard>
                <ExpandableCard assets={['folder', 'location', 'language']}>Testing</ExpandableCard>
                <ExpandableCard assets={['folder', 'location', 'language']}>Cloud</ExpandableCard>
            </FlexContainer>

        </Section>
}