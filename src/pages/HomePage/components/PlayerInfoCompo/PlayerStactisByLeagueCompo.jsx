import React from "react";
import { useState } from "react";
import styled, {keyframes} from "styled-components";
import premierLeague from "../../../../Assets/premier_league_icon.png"

const showElementAnimation = keyframes`
    0% {
        height: 0;
        display: none;
    }
    25% {
        height: 57px;
        display: auto;
    }
    50% {
        height: 114px;
        display: auto;
    }
    75% {
        height: 171px;
        display: auto;
    }
    100% {
        height: 230px;
        display: auto;
    }
`

const closeAnimation = keyframes`
    0% {
        height: 230px;
        display: auto;
    }
    25% {
        height: 171px;
        display: auto;
    }
    50% {
        height: 114px;
        display: auto;
    }
    75% {
        height: 57px;
        display: auto;
    }
    100% {
        height: 0;
        display: auto;
    }
`

const PlayerStatisticByLeague = styled.div`
    width: 100%;
    &:first-child {
        cursor: pointer;
    }
`
const InformationsDiv = styled.div`
    width: 100%;
    height: 0;  
    display: auto;

    animation: ${props => props.animation ? showElementAnimation : closeAnimation} 1s ease-out forwards;
    & p {
        margin: 3px;
    }
    background-color: white;
    box-shadow: 1px 1px 1px black;
`
const LeagueNameDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 40px;
        width: 40px;
        margin-right:20px;
    }
    &:hover{
        cursor: pointer;
    }
`

const InformationsContent = styled.div`
    display: ${props => props.setDis ? "auto" : "none"};
    
`

export default function PlayerStactisByLeague() {
    const [showAnimation, setShowAnimation] = useState(false);
    const [showDisplay, setShowDisplay] = useState(true);



    return(
        <PlayerStatisticByLeague>
            <LeagueNameDiv onClick={()=>{setShowAnimation(!showAnimation)}}>
                <img src={premierLeague} alt="Logo da liga que o jogador joga" /> 
                <p>Premier league</p>
            </LeagueNameDiv>
            <InformationsDiv
                animation={showAnimation}
                onAnimationStart={()=>{setShowDisplay(!showDisplay)}}
                onAnimationEnd={()=>{setShowDisplay(!showDisplay)}}
            >
                <InformationsContent setDis={showDisplay}>
                    <p>Minutes played: 147 min</p>
                    <p>Shoots: 300 On: 147</p>
                    <p>Goals: 147</p>
                    <p>Penaltys scored: 3</p>
                    <p>Dibbles: 465</p>
                    <p>Total of passes: 789</p>
                    <p>Passe accuracy: 37</p>
                    <p>Interceptions: 6</p>
                    <p>Fouls: 45</p>
                    <p>Cards: 4</p>
                </InformationsContent>
            </InformationsDiv>
        </PlayerStatisticByLeague>
    );
}