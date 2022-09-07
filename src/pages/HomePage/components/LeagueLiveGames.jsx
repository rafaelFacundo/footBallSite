import React from "react";
import styled from "styled-components";
import LiveGame from "./LiveGame";

const MainContent = styled.div`
    width: 40vw;
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
    box-sizing: border-box;
    padding: 1em;
    padding-top: 0.5em;
`

const CountryInfomationsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4em;
    margin-bottom: 0.6em;
    
`

const CountryFlag = styled.img`
    width: 3em;
    height: 3em;
    margin: 1em;
    border-radius: 100%;
    border: 0.1px solid lightgray;
`

const CountryNameAndLeague = styled.div`
    flex: 1;
`

const CountryName = styled.p`
    margin: 0.2em;    
    color: gray;
`

const LeagueName = styled.h4`
    margin: 0.2em;
`

const LiveGamesDiv = styled.div``

export default function LeagueLiveGames ({countryName, countryFlag, leagueName, liveGamesArray}) {
   
    return(
        <MainContent>
            <CountryInfomationsDiv>
                <CountryFlag src={countryFlag} />
                <CountryNameAndLeague>
                    <CountryName>{countryName}</CountryName>
                    <LeagueName>{leagueName}</LeagueName>
                </CountryNameAndLeague>
            </CountryInfomationsDiv>
            <LiveGamesDiv>
                {
                    liveGamesArray.map((liveGame, index) => {
                        return <LiveGame 
                                    key={index}
                                    homeName={liveGame.teams.home.name}
                                    homeGoals={liveGame.goals.home}
                                    awayName={liveGame.teams.away.name}
                                    awayGoals={liveGame.goals.away}
                                    currentTime={liveGame.fixture.status.elapsed}
                                    date={liveGame.fixture.date.slice(11,16)}
                                />
                    })
                }
            </LiveGamesDiv>
        </MainContent>
    );
}