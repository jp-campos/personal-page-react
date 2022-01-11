import ExpandableCard from "../components/ExpandableCard";
import { RowSpaceAround } from "../styled_foundations/layout";
import { H1 } from "../styled_foundations/text";

export default function Skills() {


    return <>
    <H1>Skills</H1>
        <RowSpaceAround>
        <ExpandableCard assets={['folder', 'location', 'language']}>Front-End</ExpandableCard>
        <ExpandableCard assets={['folder', 'location', 'language']}>Back-End</ExpandableCard>
        <ExpandableCard assets={['folder', 'location', 'language']}>Data</ExpandableCard>
    </RowSpaceAround>
    
    </>
}