import React, { useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import onDragEnd from './services/onDragEnd';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Columns from './components/Columns';

const itemsFromBackend = [
    { id: uuidv4(), content: "First task" },
    { id: uuidv4(), content: "Second task" },
    { id: uuidv4(), content: "Third task" },
    { id: uuidv4(), content: "Fourth task" },
    { id: uuidv4(), content: "Fifth task" }
  ];

const columnsFromBackend = {
    [uuidv4()]: {
      name: "Requested",
      items: itemsFromBackend
    },
    [uuidv4()]: {
      name: "To do",
      items: []
    },
    [uuidv4()]: {
      name: "In Progress",
      items: []
    },
    [uuidv4()]: {
      name: "Done",
      items: []
    }
  };

const DashboardContainer = styled.div`
    display:flex;
    justify-content: "center"; 
    height: "100%";
`;

const Dashboard = () => {
    const [column, setColumn] = useState(columnsFromBackend)
    return (
        <DashboardContainer>
            <DragDropContext
            onDragEnd={result => onDragEnd(result, column, setColumn)}>
                {Object.entries(column).map(([columnId, col], index) => {
                     return (
                         <Columns key={columnId} col={col} />
                     )
                })}
            </DragDropContext>
        </DashboardContainer>
    );
}
 
export default Dashboard;