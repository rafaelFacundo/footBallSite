import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
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
    const [liveGames, setLiveGames] = useState([]);
    const [canRender, setCanRender] = useState(false);
    const liveGamesByLeague = new Map();
    const currentLeagueId = useSelector(state => state.leagueId.value);

  

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {live: 'all'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        }
    };

    async function getLiveGames() {
        try {
            const response = await axios.request(options);
            setLiveGames(response.data.response);
            console.log(liveGames  )
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLiveGames();
    }, []); 

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

    const liveGamesByLeagueEntries = Array.from(liveGamesByLeague.entries());   

    /* if ( liveGamesByLeagueEntries.length > 0 ) {
        console.log("the list is");
        console.log(liveGamesByLeagueEntries[0][1][0].league.id);
        
    } */

    function renderTheLiveGames(listOfLeagues) {
        listOfLeagues.map((league) => {
            return <LeagueLiveGames
                        key={league[1][0].league.id}
                        leagueId={league[1][0].league.id}
                        leagueName={league[0]}
                        countryName={league[1][0].league.country}
                        countryFlag={league[1][0].league.flag}
                        liveGamesArray={league[1]}
                    />
        });
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
               {/*  <LiveGamesDiv>
                    {canRender ? renderTheLiveGames(liveGamesByLeagueEntries) : returnMessage()}
                </LiveGamesDiv> */}

                <LiveGamesDiv>
                {
                    liveGamesByLeagueEntries.map((league) => {
                        return <LeagueLiveGames
                                    key={league[1][0].league.id}
                                    leagueId={league[1][0].league.id}
                                    leagueName={league[0]}
                                    countryName={league[1][0].league.country}
                                    countryFlag={league[1][0].league.flag}
                                    liveGamesArray={league[1]}
                                />
                    })
                } 

                </LiveGamesDiv>


                <LeagueInfo />
            </MainContentDiv>
        </MainContent>
    );
}

/* {
    liveGamesByLeagueEntries.map((league) => {
        return <LeagueLiveGames
                    key={league[1][0].league.id}
                    leagueId={league[1][0].league.id}
                    leagueName={league[0]}
                    countryName={league[1][0].league.country}
                    countryFlag={league[1][0].league.flag}
                    liveGamesArray={league[1]}
                />
    })
}  */