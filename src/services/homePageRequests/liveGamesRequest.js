import axios from "axios";
import { useEffect } from "react";

const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {live: 'all'},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    }
};

async function GetGames(varToStoreGames) {
    const
    useEffect(()=> {

        async function apiCall() {
            await axios.request(options).then((response) => {
                setData(response.data.response)
            })
        }
        
        apiCall();
        
    }, [])
}