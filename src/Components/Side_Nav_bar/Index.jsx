import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import siteLogo from "../../Assets/site_logo.png";
import menuBarIcon from "../../Assets/menu_bar_icon.png";
import SideBar from "./SideBar";
import axios from "axios";



const Container = styled.div`
    width: 100%;
    height: 150px;
    box-sizing: border-box;
`

const Main = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 100%;
    background: #2E35EE;
    border-bottom: 3px solid #60FF46;
`

const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 35%;
    color: white;
    
`
const SiteLogo = styled.img`
    width: 4em;
    height: 4em;
    margin-right: 2em;
    margin-left: 2em;
`

const MenurIcon = styled.img`
    margin: 1em;
    width: 2em;
    height: 2em;
    
    &:hover{
        cursor: pointer;
    }
`


export default function NavBar() {
    const [displaySideBar, setDisplaySideBar] = useState(false);
    function toggleSideBarDisplay() {
        setDisplaySideBar(!displaySideBar);
    }

    const [data, setData] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
            'X-RapidAPI-Key': 'bae1a79dfdmsh4765bb45f2fb69dp1a04b7jsnd3d98b0643c7',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    useEffect(()=> {

        async function apiCall() {
            await axios.request(options).then((response) => {
                setData(response.data.response)
            })
        }
        
        apiCall();
        
    }, [])

    return(
        <Container>     
            {displaySideBar && <SideBar leagues={data}/>}
            <Main>
                
                <MenurIcon 
                    src={menuBarIcon} 
                    onClick={() => {toggleSideBarDisplay()}}
                />
                <LogoDiv>
                    <SiteLogo src={siteLogo} /> 
                    <h2>Hat Trick</h2>
                </LogoDiv>
                
            </Main>
        </Container>
    );
}