import React from "react";
import styled, { keyframes } from "styled-components";
import CountryOption from "./CountryOption";


const InAnimation = keyframes`
    from {
        left: -50%;
    }to {
        left: 0%;
    }
`

const MainContent = styled.div`
    width: 17vw;
    height: 100%;
    background-color: #2144F9;
    position: absolute;
    display: flow-root;
    overflow-y: scroll;
    padding: 0;
    //animation: name duration timing-function delay iteration-count direction fill-mode;
    animation: ${InAnimation} 0.5s linear normal forwards ;
`

export default function SideBar ( {leagues} ) {
    return(
        <MainContent>
            {
                leagues.map((League, index) => {
                    
                    return <CountryOption data = {League} key={League.league.id} />
                })
            }
            
          

        </MainContent>
    );
}