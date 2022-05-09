import styled from "styled-components";
import ExpandableCard from "../../components/ExpandableCard";
import React from 'react'


import {  RowCenter } from "../../styled_foundations/layout";



const FlexContainer = styled(RowCenter)`
    row-gap: 60px;  
    column-gap: 40px;
    align-items: flex-start;
`
export const TechSkills = () => {

    return <FlexContainer>
        <ExpandableCard assets={['javascript', 'css', 'html', 'flutter', 'react']}>Front-End</ExpandableCard>
        <ExpandableCard assets={['java', 'spring', 'reactor', 'go', 'node', 'python']}>Back-End</ExpandableCard>
        <ExpandableCard assets={['flutter', 'swift', 'kotlin', 'android', 'ios']}>Mobile</ExpandableCard>
        <ExpandableCard assets={['postgres', 'rabbitmq', 'mongo', 'powerbi', 'spark', 'firebase']}>Data</ExpandableCard>
        <ExpandableCard assets={['git', 'azuredevops']}>Version Control & Devops</ExpandableCard>
        <ExpandableCard assets={['serenity', 'cucumber', 'mockito']}>Testing</ExpandableCard>
        <ExpandableCard assets={['aws', 'azure']}>Cloud</ExpandableCard>
    </FlexContainer>
}