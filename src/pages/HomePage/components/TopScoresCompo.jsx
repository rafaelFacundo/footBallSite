import React from "react";
import styled from "styled-components";
import jorginho from "../../../Assets/jorginho_face.jpg";
import kante from "../../../Assets/kante_face.jpg";

const MainContent = styled.div`
    box-sizing: border-box;
    padding: 0.5em;
    width: 100%;
    height: 100vh;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    margin: 0;
`
const TopScorersTable = styled.table`
    flex: 1;
    width: 100%;

    text-align: center;
    background-color: #f1f2f5;
    display: table;
   
`
const TopScorersTableHea = styled.thead`
    
`
const TopScorersTableTh = styled.th`
    
`
const TopSocorerTableRow = styled.tr`
    height: 3.5em;
    width: 100%;
    
`
const TopScorersTableTd = styled.td``
const TopScorersTableTbod = styled.tbody``
const PlayerImg = styled.img`
    width: 3em;
    height: 3em;
    border-radius: 100%;
    border: 1px solid lightgray;
    margin: 0;
    margin-right: 0.5em;
`
const PlayerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export default function TopScoresCompo() {
    return(
        <MainContent>
            <Title>Top Scorers</Title>
            <TopScorersTable>
                <TopScorersTableHea>
                    <TopSocorerTableRow>
                        <TopScorersTableTh>#</TopScorersTableTh>
                        <TopScorersTableTh>Player</TopScorersTableTh>
                        <TopScorersTableTh>Goals</TopScorersTableTh>
                    </TopSocorerTableRow>
                </TopScorersTableHea>
                <TopScorersTableTbod>

                    <TopSocorerTableRow>
                        <TopScorersTableTd>1° - </TopScorersTableTd>
                        <TopScorersTableTd>
                            <PlayerDiv>
                                <PlayerImg src={jorginho} />
                                Jorginho
                            </PlayerDiv>
                            
                        </TopScorersTableTd>
                        <TopScorersTableTd>50</TopScorersTableTd>
                    </TopSocorerTableRow>

                


                    
                </TopScorersTableTbod>
            </TopScorersTable>
        </MainContent>
    );
}