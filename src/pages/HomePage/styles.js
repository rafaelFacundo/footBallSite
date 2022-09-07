import styled from "styled-components";

const MainContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MenurIcon = styled.img`
    margin: 1em;
    width: 2em;
    height: 2em;
    position: absolute;
    top: 0.6em;
    left: 0.6em;

    &:hover{
        cursor: pointer;
    }
`

const MainContentDiv = styled.div`
    display: flex;
    //align-items: center;
    //justify-content: center;
    flex: 1;
    width: 100%;
`

const LiveGamesDiv = styled.div``

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
    MenurIcon,
    MainContentDiv,
    LiveGamesDiv,
    LeagueTopScoresDiv, 
}