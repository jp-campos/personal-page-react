import styled from "styled-components"
import colors from "../styled_foundations/colors"
import { useState, useEffect } from "react"
import httpClient from "../infraestructure/httpClient";
import { intPixelSizes, pixelSizes, WhiteSpaceSm } from "../styled_foundations/spacing";


const StyledSearchBar = styled.input`
    width: 100%;
    height: 46px;
    font-size: 24px;
    text-align: center;

    &:focus{
        outline: none !important;
        border-color: ${colors.active};
        border-style: solid; 
    }
`

export default function SearchBar() {


    const [input, setInput] = useState('');
    const [data, setData] = useState([])
    const[loading, setLoading] = useState(false)
    const [focused, setFocused] = useState(false)

    useEffect(() => {

        async function fetchData(input) {
            setLoading(true)
            let response = await httpClient.getSkills(input)
            setData(response)
            setLoading(false)
        }

        if (input.length !== 0 && !loading) {
            fetchData(input)
        }
    }, [input])
    const handleSelect = (skill) => {
        setInput(skill)
    }
    
    return <>
        <StyledSearchBar 
        onFocus={()=>setTimeout(()=> setFocused(true), 200)} 
        onBlur={()=> setTimeout(()=> setFocused(false), 200)} 
        placeholder="Add a skill you are searching for" 
        value={input} 
        onInput={evt => setInput(evt.target.value)}/>
       
        {focused &&  <SearchItems  loading={loading} onSelected={handleSelect} data={data} />}
    </>
}

const ItemsContainer = styled.div`
    width: 100%;
    background-color: white;
    padding: ${pixelSizes.s};
`

const Item = styled.div`
    height: 25px;
    cursor: pointer; 
    &:hover{
        background-color: #ededed;
    }

`

const SearchItems = ({ data, loading, onSelected }) => {

    const handle = (skill)=>{

        console.log(skill)
    }

    const child = loading ? 'Loading...' : data.flatMap((e) => [<Item onClick={() => onSelected(e)}>{e}</Item>, <WhiteSpaceSm />,])
    return <ItemsContainer>
        {child}
    </ItemsContainer>
}