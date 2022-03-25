import styled from "styled-components"
import colors from "../styled_foundations/colors"
import { useState } from "react"
import httpClient from "../infraestructure/httpClient";
import { pixelSizes, WhiteSpaceSm } from "../styled_foundations/spacing";
import { Row } from "../styled_foundations/layout"
import { AddBtn } from "../styled_foundations/buttons";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const searchBarHeight = '46px'

const StyledSearchBar = styled.input`
    width: 100%;
    height: 46px;
    font-size: 20px;
    padding-left: 40px;
   
    &:focus{
        outline: none !important;
        border-color: ${colors.active};
        border-style: solid; 
    }
`

const Container = styled(Row)`
    width: 100%;
    position: relative;

`

const BtnContainer = styled.div`
    left: 10px;
    top: 8px; 
    position: absolute;
    

`

export default function SearchBar() {


    const [input, setInput] = useState('');
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingPost, setLoadingPost] = useState(false)
    const [focused, setFocused] = useState(false)
    const [disabled, setDisabled] = useState(false)



    const onChanged = async (value) => {
        setInput(value)
        if (value.length !== 0 && !loading) {
            setLoading(true)
            try {
                let response = await httpClient.getSkills(value)
                setData(response)

            } catch (err) {

            }
            setLoading(false)
        } else {
            setData([])
        }

    }
    const successToast = ()=> {
        toast.success('Skill added succesfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const postSkill = async (skill) => {
        if (!loadingPost) {
            setDisabled(true)
            try {
                setLoadingPost(true)
                let response = await httpClient.postSkill(skill)
                successToast()
                loadingPost(false)
                setDisabled(false)
            } catch (err) {
                setLoadingPost(false)
                setDisabled(false)
            }
        }


    }

    const onSelected = (skill) => {
        setInput(skill)
        postSkill(skill)
    }

    return <>
        <Container>
            <StyledSearchBar
                onFocus={() => setTimeout(() => setFocused(true), 200)}
                onBlur={() => setTimeout(() => setFocused(false), 200)}
                placeholder="Send me a skill you are searching for"
                value={input}
                onInput={evt => onChanged(evt.target.value)}
                disabled={disabled}
            />
            <BtnContainer>
                <AddBtn onClick={() => onSelected(input)} />
            </BtnContainer>
            {focused && <SearchItems loading={loading} onSelected={onSelected} data={data} />}
        </Container>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />


    </>
}

const ItemsContainer = styled.div`
  
    position: absolute;
    z-index: 200;
    top: ${searchBarHeight};
    width: 100%;
    background-color: white;
    padding: ${pixelSizes.s};
    border-radius: 0px 0px 8px 8px;
`

const Item = styled.div`
    height: 25px;
    cursor: pointer; 
    &:hover{
        background-color: #ededed;
    }

`

const SearchItems = ({ data, loading, onSelected }) => {


    const child = loading ? 'Loading...'
        : data.flatMap((e, i) => [<Item onClick={() => onSelected(e)} key={`item${i}`}>{e}</Item>, <WhiteSpaceSm key={`white${i}`} />,])
    return data.length !== 0 ?
        <ItemsContainer>
            {child}
        </ItemsContainer> : <></>
}

