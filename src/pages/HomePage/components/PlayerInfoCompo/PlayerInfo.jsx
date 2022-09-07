import React from "react";
import styled from "styled-components";
import jorginho from "../../../../Assets/jorginho_face.jpg"
import PlayerStactisByLeague from "./PlayerStactisByLeagueCompo";

const MainContent = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0.8em;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
`

const PlayerImage = styled.img`
    width: 10em;
    height: 10em;
    border-radius: 100%;
`

const PlayerName = styled.h3`
    text-align: center;
`
const PersonalInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    * {
        margin: 5px;
    }
`
const PlayerStatistics = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default function PlayerInfo() {
    
    return(
        <MainContent>
            <PlayerImage src={jorginho}/>
            <PlayerName>Jorginho</PlayerName>
            <PersonalInfoDiv >
                <p>Personal information </p>
                <p>Name: Jorge Luiz Frello Filho</p>
                <p>Current team: Chelsea</p>
                <p>Nationality: Italy</p>
                <p>Height: 180cm</p>
                <p>Weight: 68 kg</p>
                <p>Age: 30</p>
                <p>Birth: 12/20/1991</p>
                <p>Player is not injuried</p>
            </PersonalInfoDiv>            
            <PlayerStatistics>
                <p style={{borderBottom: "1px solid green"}}>Player Statistic</p>

                <PlayerStactisByLeague />
                <PlayerStactisByLeague />
                
            </PlayerStatistics>
        </MainContent>
    );
}