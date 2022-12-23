import React from "react";
import styled from "styled-components";
import PremierLeague from "../../../../Assets/premier_league_icon.png"
import England from "../../../../Assets/England_flag.png"

const MainContent = styled.div`
    width: auto;
    flex: 1;
`

const ImageAndName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeagueNameAndFlag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Image = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 10px;
`

const LeagueContryAndLeagueName = styled.div`
    
`

const StandingsDiv = styled.div`
    
`
const StandingTitle = styled.h3``

const Stand = styled.table``

const StandHead = styled.th``

const StandRow = styled.tr``

const TopScoresDiv = styled.div``

export default function LeagueInfo(){
    return(
        <MainContent>
            <LeagueNameAndFlag>
                <ImageAndName>
                    <Image src={PremierLeague}/>
                    <LeagueContryAndLeagueName>
                        <p>England</p>
                        <p>Premier League</p>
                    </LeagueContryAndLeagueName>
                </ImageAndName>
                <Image src={England}/>
            </LeagueNameAndFlag>

            <StandingsDiv>
                <StandingTitle>Standings</StandingTitle>
                <Stand>
                    <StandHead>

                    </StandHead>
                    <StandRow>

                    </StandRow>
                </Stand>
            </StandingsDiv>

            <TopScoresDiv>
                <StandingTitle>Top Scores</StandingTitle>
                <Stand>
                    <StandHead>

                    </StandHead>
                    <StandRow>

                    </StandRow>
                </Stand>
            </TopScoresDiv>
        </MainContent>
    );
}
