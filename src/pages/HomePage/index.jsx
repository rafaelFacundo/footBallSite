import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LeagueInfo from "./components/leagueInfo/Index";
import LeagueLiveGames from "./components/LeagueLiveGames";
import NavBar from "../../Components/Side_Nav_bar/Index";
import {
    LiveGamesDiv,
    MainContent,
    MainContentDiv 
} from "./styles";

export default function HomePage () {
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

    useEffect(() => {
        async function getLiveGames() {
            try {
                const response = await axios.request(options);
                setLiveGames(response.data.response);
            } catch (error) {
                console.log(error)
            }
        }
        getLiveGames();
        
    }, []); 


    liveGames.forEach((liveGame, index) => {
        const leagueKey = `${liveGame.league.name} - ${liveGame.league.country}`;
        if(liveGamesByLeague.has(leagueKey)) { 
            let arrayOfGames = liveGamesByLeague.get(leagueKey);
            arrayOfGames.push(liveGame);
            liveGamesByLeague.set(leagueKey, arrayOfGames)
        }else {
            let newEspecificCountryArray = []
            newEspecificCountryArray.push(liveGame);
            liveGamesByLeague.set(leagueKey, newEspecificCountryArray);
        }
    });



    const liveGamesByLeagueEntries = Array.from(liveGamesByLeague.entries());


    return(
        <MainContent>
            <NavBar  />
            <MainContentDiv>
                <LiveGamesDiv>
                    {
                        liveGamesByLeagueEntries.map((league) => {
                            return <LeagueLiveGames 
                                        key={league[0]}
                                        leagueName={league[0]}
                                        countryName={league[1][0].league.country}
                                        countryFlag={league[1][0].league.flag}
                                        liveGamesArray={league[1]}
                                    />
                        })
                    }
                </LiveGamesDiv>
                <LeagueInfo/>
            </MainContentDiv>
        </MainContent>
    );
}