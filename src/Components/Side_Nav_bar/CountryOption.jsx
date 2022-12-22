import React from "react";
import styled from "styled-components";



const MainContent = styled.div`
    width: 90%;
    height: 50px;
    background-color: #2144F9;
    
    margin-bottom: 1em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.3em;

    &:hover {
        cursor: pointer;
    }
`

const LeagueIconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
`

const LeagueNameDiv = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    
    justify-content: center;
`

const LeagueIcon = styled.img`
    width: 2em;
    height: 2em;
    border-radius: 100%;
`

const LeagueName = styled.h6`
    font-size: 1em;
    color: white;
`
const LeagueDescription = styled.p`
    
`

export default function CountryOption(data) {
    //console.log(data.data.league.name)
    return(
        <MainContent>
            <LeagueIconDiv>
                <LeagueIcon src={data.data.league.logo} />
            </LeagueIconDiv>

            <LeagueNameDiv>
                <LeagueName>
                    {data.data.league.name}
                </LeagueName>
                <LeagueDescription>

                </LeagueDescription>
            </LeagueNameDiv>
            
            
        </MainContent>
    );
}