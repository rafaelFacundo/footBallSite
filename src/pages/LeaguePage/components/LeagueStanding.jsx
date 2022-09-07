import React from "react";
import styled from "styled-components";


const LeagueStandingTable = styled.table`
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    border: 1px solid lightgray;
` 

const LeagueStandingHeader = styled.thead`
    background-color: #2E35EE;
    color: white;
`

const LeagueStandingLabel = styled.th`
    
`

const LeagueStandingRow = styled.tr`
    height: 2em;
`

const LeagueStandingTableBody = styled.tbody``

const LeagueStandingTableCell = styled.td``

export default function LeagueStanding() {
    return(
        <LeagueStandingTable>
            <LeagueStandingHeader>
                <LeagueStandingRow>
                    <LeagueStandingLabel></LeagueStandingLabel>
                    <LeagueStandingLabel>Team</LeagueStandingLabel>
                    <LeagueStandingLabel>M</LeagueStandingLabel>
                    <LeagueStandingLabel>W</LeagueStandingLabel>
                    <LeagueStandingLabel>L</LeagueStandingLabel>
                    <LeagueStandingLabel>D</LeagueStandingLabel>
                    <LeagueStandingLabel>GP</LeagueStandingLabel>
                    <LeagueStandingLabel>GA</LeagueStandingLabel>
                    <LeagueStandingLabel>Last five games</LeagueStandingLabel>
                    <LeagueStandingLabel>Points</LeagueStandingLabel>
                </LeagueStandingRow>
            </LeagueStandingHeader>
            <LeagueStandingTableBody>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>1°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Chelsea</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>130</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>114</LeagueStandingTableCell>
                </LeagueStandingRow>

                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>

                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>

                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>

                <LeagueStandingRow>
                    <LeagueStandingTableCell>1°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Chelsea</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>130</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>114</LeagueStandingTableCell>
                </LeagueStandingRow>

                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>

                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>

                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>
                <LeagueStandingRow>
                    <LeagueStandingTableCell>2°</LeagueStandingTableCell>
                    <LeagueStandingTableCell>Manchester United</LeagueStandingTableCell>
                    <LeagueStandingTableCell>38</LeagueStandingTableCell>
                    <LeagueStandingTableCell>37</LeagueStandingTableCell>
                    <LeagueStandingTableCell>1</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>120</LeagueStandingTableCell>
                    <LeagueStandingTableCell>10</LeagueStandingTableCell>
                    <LeagueStandingTableCell>0 0 0  00 0 0</LeagueStandingTableCell>
                    <LeagueStandingTableCell>111</LeagueStandingTableCell>
                </LeagueStandingRow>

            </LeagueStandingTableBody>
        </LeagueStandingTable>
    );
}