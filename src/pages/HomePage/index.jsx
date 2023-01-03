import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { updateLeagueId } from "../../services/league_IdSlice";
import LeagueInfo from "./components/leagueInfo/Index";
import LeagueLiveGames from "./components/LeagueLiveGames";
import NavBar from "../../Components/Side_Nav_bar/Index";
import {
    LiveGamesDiv,
    MainContent,
    MainContentDiv 
} from "./styles";

export default function HomePage () {
    const dispatch = useDispatch();
    let liveGamesByLeagueEntries = new Array();
    const [liveGames, setLiveGames] = useState([]);
    const liveGamesByLeague = new Map();

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {live: 'all'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        }
    };

    

    const { data, isFetching} = useQuery('LiveGames', async () => {
        const response = await axios.request(options);
        setLiveGames(response.data.response);
        return response.data.response;
    });

    function createMap(){
        liveGames.forEach((liveGame) => {
            const leagueKey = `${liveGame.league.name} - ${liveGame.league.country}`;
            if(liveGamesByLeague.has(leagueKey)) { 
                let arrayOfGames = liveGamesByLeague.get(leagueKey);
                arrayOfGames.push(liveGame);
                liveGamesByLeague.set(leagueKey, arrayOfGames);
            }else {
                let newEspecificCountryArray = [];
                newEspecificCountryArray.push(liveGame);
                liveGamesByLeague.set(leagueKey, newEspecificCountryArray);
            }
        });
        liveGamesByLeagueEntries = Array.from(liveGamesByLeague.entries());
    };
    
    if( !isFetching ){
        
        dispatch(updateLeagueId({
            id:data[0].league.id,
            season: data[0].league.season
        }));
        createMap();
    };

    function returnMessage() {
        if (liveGames.length > 0) {
            return <p>Carregando os jogos ao vivo</p>
        }else {
            return <p>Não há jogos disponíveis no momento</p>
        }
    }
    
    return(
        <MainContent>
            <NavBar  />
            <MainContentDiv>
                <LiveGamesDiv> 
                {
                    isFetching ? returnMessage() : (liveGamesByLeagueEntries.map((league) => {
                        return <LeagueLiveGames
                                    key={league[1][0].league.id}
                                    leagueId={league[1][0].league.id}
                                    leagueSeason={league[1][0].league.season}
                                    leagueName={league[0]}
                                    countryName={league[1][0].league.country}
                                    countryFlag={league[1][0].league.flag}
                                    liveGamesArray={league[1]}
                                />
                    }))
                } 
                </LiveGamesDiv>
                { (!isFetching) && <LeagueInfo />}
            </MainContentDiv>
        </MainContent>
    );
}
