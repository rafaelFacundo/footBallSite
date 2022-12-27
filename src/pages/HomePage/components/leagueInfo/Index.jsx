import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateLeagueId } from "../../../../services/league_IdSlice";
import PremierLeague from "../../../../Assets/premier_league_icon.png";
import England from "../../../../Assets/England_flag.png";
import Chelsea from "../../../../Assets/chelsea.png";
import jorginho from "../../../../Assets/jorginho_face.jpg";

const MainContent = styled.div`
    width: auto;
    flex: 1;
    box-sizing: border-box;
    padding: 10px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
const ImageAndName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LeagueNameAndFlag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const Image = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 10px;
`;
const LeagueContryAndLeagueName = styled.div`
    
`;
const StandingsDiv = styled.div`
    
`;
const StandingTitle = styled.h3``;
const Stand = styled.table`
    border-collapse: collapse;
    width: 100%;
    text-align: center;
`;
const StandHead = styled.th`
    background-color: #2144F9;
    color: ${props => props.textColor || "white"};
`;
const StandRow = styled.tr`
    padding: 10px;
    box-sizing: border-box;
`;
const StandData = styled.td`
    display: ${props => props.dataDisplay || "auto"};
    align-items: center;
    justify-content: space-around;

`;
const StandText = styled.p`
    color: ${props => props.textColor};
`;
const ClubShield = styled.img`
    width: 20px;
    height: 20px;
    margin: 0;
`;
const TopScoresDiv = styled.div``;

export default function LeagueInfo(){
    
    let currentLeagueId = useSelector(state => state.leagueId.value);
    
    console.log(`the current id is ${currentLeagueId}`)
    

    function returnColor(type) {
        switch (type) {
            case 0:
                return "green";
            case 1:
                return "yellow";
            case 2:
                return "red";        
            default:
                return "black";
        };
    };
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
                    <StandRow>
                        <StandHead>P</StandHead>
                        <StandHead>Club</StandHead>
                        <StandHead>MP</StandHead>
                        <StandHead textColor="green">W</StandHead>
                        <StandHead textColor="yellow">D</StandHead>
                        <StandHead textColor="red">L</StandHead>
                        <StandHead>GF</StandHead>
                        <StandHead>GA</StandHead>
                        <StandHead>GD</StandHead>
                        <StandHead>Pts</StandHead>
                        <StandHead>Last five</StandHead>
                    </StandRow>
                    <StandRow>
                        <StandData>1°</StandData>
                        <StandData dataDisplay="flex">
                            <ClubShield src={Chelsea} />
                            <StandText>Chelsea</StandText>
                        </StandData>
                        <StandData>10</StandData>
                        <StandData>8</StandData>
                        <StandData>1</StandData>
                        <StandData>1</StandData>
                        <StandData>10</StandData>
                        <StandData>4</StandData>
                        <StandData>6</StandData>
                        <StandData>25</StandData>
                        <StandData dataDisplay="flex">
                            <StandText textColor={returnColor(2)}>L</StandText>
                            <StandText textColor={returnColor(1)}>D</StandText>
                            <StandText textColor={returnColor(0)}>W</StandText>
                            <StandText textColor={returnColor(0)}>W</StandText>
                            <StandText textColor={returnColor(0)}>W</StandText>
                        </StandData>

                    </StandRow>

                    <StandRow>
                        <StandData>1°</StandData>
                        <StandData dataDisplay="flex">
                            <ClubShield src={Chelsea} />
                            <StandText>Chelsea</StandText>
                        </StandData>
                        <StandData>10</StandData>
                        <StandData>8</StandData>
                        <StandData>1</StandData>
                        <StandData>1</StandData>
                        <StandData>10</StandData>
                        <StandData>4</StandData>
                        <StandData>6</StandData>
                        <StandData>25</StandData>
                        <StandData dataDisplay="flex">
                            <StandText textColor={returnColor(2)}>L</StandText>
                            <StandText textColor={returnColor(1)}>D</StandText>
                            <StandText textColor={returnColor(0)}>W</StandText>
                            <StandText textColor={returnColor(0)}>W</StandText>
                            <StandText textColor={returnColor(0)}>W</StandText>
                        </StandData>

                    </StandRow>
                </Stand>
            </StandingsDiv>

            <TopScoresDiv>
                <StandingTitle>Top Scores</StandingTitle>
                <Stand>
                    <StandRow>
                        <StandHead>P</StandHead>
                        <StandHead>Player</StandHead>
                        <StandHead>Goals</StandHead>
                        <StandHead>Club</StandHead>
                        <StandHead>Y.C</StandHead>
                        <StandHead>R.C</StandHead>
                        <StandHead>Dribbles</StandHead>
                        <StandHead>games</StandHead>
                        <StandHead>Passes</StandHead>
                        <StandHead>shots</StandHead>
                        <StandHead>Penaltys</StandHead>

                    </StandRow>
                    <StandRow>
                        <StandData>1°</StandData>
                        <StandData dataDisplay="flex">
                            <ClubShield src={jorginho} />
                            <StandText>jorginho</StandText>
                        </StandData>
                        <StandData>8</StandData>
                        <StandData>
                            <ClubShield src={Chelsea} />
                        </StandData>
                        <StandData>0</StandData>
                        <StandData>0</StandData>
                        <StandData>10</StandData>
                        <StandData>10</StandData>
                        <StandData>300</StandData>
                        <StandData>8</StandData>
                        <StandData>0</StandData>

                    </StandRow>
                </Stand>
            </TopScoresDiv>
        </MainContent>
    );
}
