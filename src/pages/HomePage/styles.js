import styled from "styled-components";

const MainContent = styled.div`
    width: 100vw;
    height: 100vh;
    
    
    
`
const MainContentDiv = styled.div`
    display: flex;
    //align-items: center;
    //justify-content: center;
    height: 100%;
    flex: 1;
    width: 100%;
`

const LiveGamesDiv = styled.div`
    display: flow-root;
    overflow-y: scroll;
    height: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`

const LeagueTopScoresDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    flex: 1;
    background-color: #f1f2f5;
    width: fit-content;
`

export {
    MainContent,
    MainContentDiv,
    LiveGamesDiv,
    LeagueTopScoresDiv, 
}