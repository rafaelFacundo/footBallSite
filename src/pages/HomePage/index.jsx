import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import menuBarIcon from "../../Assets/menu_bar_icon.png";
import LeagueLiveGames from "./components/LeagueLiveGames";
import NavBar from "../../Components/NavBar";
import TopScoresCompo from "./components/TopScoresCompo";
import PlayerInfo from "./components/PlayerInfoCompo/PlayerInfo";
import {
    LeagueTopScoresDiv,
    LiveGamesDiv,
    MainContent,
    MainContentDiv,
    MenurIcon 
} from "./styles";

export default function HomePage () {

    const [sideBar, setSideBar] = useState(false);
   /*  const [data, setData] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
            'X-RapidAPI-Key': 'bae1a79dfdmsh4765bb45f2fb69dp1a04b7jsnd3d98b0643c7',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    useEffect(()=> {

        async function apiCall() {
            await axios.request(options).then((response) => {
                setData(response.data.response)
            })
        }
        
        apiCall();
        
    }, []) */

    const [liveGames, setLiveGames] = useState([]);
    const liveGamesByLeague = new Map();

    console.log(process.env.REACT_APP_API_KEY)

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
    

    const ToggleSideBar = () => {
        setSideBar(!sideBar);
    };

    return(
        <MainContent>
            <MenurIcon 
                src={menuBarIcon} 
                onClick={() => {ToggleSideBar()}}
            />
            <NavBar  />
            <MainContentDiv>
                {/* {sideBar && <SideBar leagues={data}/>} */}
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
                <LeagueTopScoresDiv>
                    <TopScoresCompo/>
                    <PlayerInfo/>
                </LeagueTopScoresDiv>

            </MainContentDiv>
            
            
        </MainContent>
    );
}