import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";


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
    border: ${props => props.imgBorder || "none"};
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
const StandBody = styled.tbody``;
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

const GhostDiv = styled.div``

export default function LeagueInfo(){
    const [standing, setStanding] = useState([]);
    //const [topScore, setTopScores] = useState([]);
    const [canRender, setCanRender] = useState({
        render: false,
        hasAproblem: false
    });
    
    const currentLeagueId = useSelector(state => state.leagueId.value_id);
    const currentLeagueSeason = useSelector(state => state.leagueId.season);
    
   
    
    function returnColor(text) {
        switch (text) {
            case "W":
                return "green";
            case "D":
                return "yellow";
            case "L":
                return "red";        
            default:
                return "black";
        };  
    };

    function treatTeamName(teamName) {
        const teamNameSplited = teamName.split(' ');
        if (teamNameSplited.length < 2) {
            return teamNameSplited[0].slice(0,8);
        }else {
            return `${teamNameSplited[0].slice(0,5)}`;
        }
    }



    async function getStandings(id, season) {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {
                
                season: season,
                league: id
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            }
        };
        /* Making the request of the standings of the league */
        try {
            const requesteResponse = await axios.request(options);
            if (requesteResponse.data.response.length == 0) {
                setCanRender({
                    render: false,
                    hasAproblem: true
                });
                return;
            };
            setStanding(requesteResponse.data.response);
            setCanRender({
                render: true,
                hasAproblem: false
            });
            
        } catch (error) {
            setCanRender({
                render: false,
                hasAproblem: true
            });
            console.error(error)
        }
    };

    useEffect(() => {
        if (currentLeagueId != null && currentLeagueSeason != null) {
            setCanRender({
                render: false,
                hasAproblem: false
            });
            async function call(id, season) {
                await getStandings(id, season);
        
            }
            call(currentLeagueId, currentLeagueSeason);
        }
        
    }, [currentLeagueId, currentLeagueSeason])


    function returnContent(League) {
        if (canRender.hasAproblem) {
            return <p>Something went wrong, choose another league...</p>;
        }else if (!(canRender.render)) {
            return <p>Loading data...</p>;
        }else {
            return(
                <>
                    <LeagueNameAndFlag>
                        <ImageAndName>
                            <Image src={League[0].league.logo}/>
                            <LeagueContryAndLeagueName>
                                <p>{League[0].league.country}</p>
                                <p>{League[0].league.name}</p>
                            </LeagueContryAndLeagueName>
                        </ImageAndName>
                        <Image imgBorder={"1px solid lightgray"} src={League[0].league.flag}/>
                    </LeagueNameAndFlag>
                    <StandingsDiv>
                    <StandingTitle>Standings</StandingTitle>
                        {
                            League[0].league.standings.map((standing, index) => {
                                return(
                                    <GhostDiv key={index}>
                                        {(League[0].league.standings.length > 1) ? <StandingTitle>{League[0].league.standings[index][0].group}</StandingTitle> : <></>}
                                        <Stand >
                                            <StandBody>
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
                                                {
                                                    standing.map((teamRow) => {
                                                        return (
                                                            <StandRow key={teamRow.team.id}>
                                                                <StandData>{teamRow.rank}°</StandData>
                                                                <StandData dataDisplay="flex">
                                                                    <ClubShield src={teamRow.team.logo} />
                                                                    <StandText>{treatTeamName(teamRow.team.name)}</StandText>
                                                                </StandData>
                                                                <StandData>{teamRow.all.played}</StandData>
                                                                <StandData>{teamRow.all.win}</StandData>
                                                                <StandData>{teamRow.all.draw}</StandData>
                                                                <StandData>{teamRow.all.lose}</StandData>
                                                                <StandData>{teamRow.all.goals.for}</StandData>
                                                                <StandData>{teamRow.all.goals.against}</StandData>
                                                                <StandData>{teamRow.goalsDiff}</StandData>
                                                                <StandData>{teamRow.points}</StandData>
                                                                <StandData dataDisplay="flex">
                                                                    <StandText textColor={returnColor(teamRow.form[0])}>{teamRow.form[0]}</StandText>
                                                                    <StandText textColor={returnColor(teamRow.form[1])}>{teamRow.form[1]}</StandText>
                                                                    <StandText textColor={returnColor(teamRow.form[2])}>{teamRow.form[2]}</StandText>
                                                                    <StandText textColor={returnColor(teamRow.form[3])}>{teamRow.form[3]}</StandText>
                                                                    <StandText textColor={returnColor(teamRow.form[4])}>{teamRow.form[4]}</StandText>
                                                                </StandData>
                                                            </StandRow>
                                                        );
                                                    })
                                                }
                                            </StandBody>
                                        </Stand>
                                    </GhostDiv>
                                );
                            })
                        }
                        
                    </StandingsDiv>
                    {/* Table of top scores of the league */}
                    {/* <TopScoresDiv>
                        <StandingTitle>Top Scores</StandingTitle>
                        <Stand>
                            <StandBody>
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
                            </StandBody>
                        </Stand>
                    </TopScoresDiv> */}
                </>
            );
        }
    }


    return(
        <MainContent>
            {returnContent(standing)}
        </MainContent>
    );
}
