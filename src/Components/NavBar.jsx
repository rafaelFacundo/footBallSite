import React from "react";
import styled from 'styled-components';
import siteLogo from "../Assets/site_logo.png";
import searchIcon from "../Assets/search_icon.png";


const MainContent = styled.div`
    display: flex;
    align-items: center;
    
    width: 100vw;
    height: 15vh;
    background: #2E35EE;
    border-bottom: 3px solid #60FF46;
    
`

const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 30%;
    color: white;
`
const SearchInputDiv = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const InputText = styled.input`
    width: 70%;
    height: 3em;
    text-align: center;
`
const ButtonSearch = styled.button`
    margin: 0;
    border: none;
    border-radius: 0;
    height: 3.3em;
    width: 4em;
    background-color: #60FF46;
`
const SiteLogo = styled.img`
    width: 4em;
    height: 4em;
    margin: 5em;
    margin-left: 5em;
    margin-right: 1em;
`
const ImageOfTheButton = styled.img`
    width: 2em;
    height: 2em;
`


export default function NavBar (  ) {
    return(
        <MainContent>
            <LogoDiv>
                <SiteLogo src={siteLogo} /> 
                <h2>Hat Trick</h2>
            </LogoDiv>
            <SearchInputDiv>
                <InputText
                    placeholder="Search here"
                />
                <ButtonSearch>
                    <ImageOfTheButton 
                        src={searchIcon} 
                        alt="icon of a magnifying glass of the button of the search div" 
                    />
                </ButtonSearch>
            </SearchInputDiv>
        </MainContent>
    );
}