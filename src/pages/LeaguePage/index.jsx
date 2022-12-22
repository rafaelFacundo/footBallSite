import React from "react";
import styled from "styled-components";
import LeagueStanding from "./components/LeagueStanding";
import NavBar from "../../Components/Side_Nav_bar/Index";
import premierLeague from "../../Assets/premier_league_icon.png";
import england from "../../Assets/England_flag.png";

const MainContent = styled.div`
    width: 100vw;
    flex: 1;
    display: flex;
    flex-direction: column;
`
const LeagueInfoDiv = styled.div`
    flex: 1;
`
const LeagueStandingDiv = styled.div`   
    width: 100%;
`
const LeagueHeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 5em;
    box-sizing: border-box;
    padding: 0.9em;
    margin-bottom: 1em;
`
const LeagueLogo = styled.img`
    width: 4.5em;
    height: 4.5em;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`
const LeagueCountryFlag = styled.img`
    width: 2em;
    height: 2em;
    border: 1px solid lightgray;
    border-radius: 100%;
    margin-right: 0.2em;
    
`
const CountryDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
`
const LeagueName = styled.h4`
    margin: 0;
    font-size: 1.3em;

`
const Div = styled.div`
    margin-left: 0.5em;
`
const StandingAndInfoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export default function LeaguePage() {
    return(
        <MainContent>
            <NavBar/>
            <StandingAndInfoDiv>
                <LeagueInfoDiv>
                    <LeagueHeaderDiv>
                        <LeagueLogo src={premierLeague}/>
                        <Div>
                            <LeagueName>PremierLeague</LeagueName>
                            <CountryDiv>
                                <LeagueCountryFlag src={england}/>
                                <p>England</p>
                            </CountryDiv>
                        </Div>
                    </LeagueHeaderDiv>
                    <LeagueStandingDiv>
                        <LeagueStanding />
                    </LeagueStandingDiv>
                </LeagueInfoDiv>                    
               {/*  <LastGamesOfLeagueDiv>

                </LastGamesOfLeagueDiv> */}
            </StandingAndInfoDiv>
        </MainContent>
    );
}