import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import matchLinkIcon from "../../../Assets/match_page_link_icon.png";

const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3.5em;
    box-sizing: border-box;
    margin-bottom: 0.5em;
`

const ScheduleAndTimeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin-right: 1em;
    box-sizing: border-box;
    padding: 1em;
    border-right: 1px solid lightgray;
`
const ScheduleOfbeginning = styled.p`
    margin: 0;
    margin-bottom: 0.2em;
`

const CurrentTimeP = styled.p`
    margin: 0;
`

const TeamsNamesDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    height: 100%;
    padding-right: 1em;
    border-right: 1px solid lightgray;
`

const TeamDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50%;
`

const TeamName = styled.p`
    margin: 0;
`

const TeamGoals = styled.p`
    margin: 0;
`

const MatchePageButton = styled.button`
    border: none;
    background: none;
    width: 2em;
    height: 2em;
    * {
        width: 2em;
        height: 2em;
    }
    &:hover {
        cursor: pointer;
    }
    margin: 1em;

`

export default function LiveGame({homeName, awayName, homeGoals, awayGoals, currentTime, date}) {
    return(
        <MainContent>
            <ScheduleAndTimeDiv>
                <ScheduleOfbeginning>{date}</ScheduleOfbeginning>
                <CurrentTimeP>{currentTime}'</CurrentTimeP>
            </ScheduleAndTimeDiv>
            <TeamsNamesDiv>
                <TeamDiv>
                    <TeamName>{homeName}</TeamName>
                    <TeamGoals>{homeGoals}</TeamGoals>
                </TeamDiv>
                <TeamDiv>
                    <TeamName>{awayName}</TeamName>
                    <TeamGoals>{awayGoals}</TeamGoals>
                </TeamDiv>
            </TeamsNamesDiv>
            <MatchePageButton>
                <Link to='/match'>
                <img src={matchLinkIcon} alt="Icon to go for the page of the match" />
                </Link>
                
            </MatchePageButton>
        </MainContent>
    );
}