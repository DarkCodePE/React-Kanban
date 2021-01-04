import React, { useState } from 'react';
import styled from 'styled-components';
/* import Cards from './Cards'; */

const ColumnContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: "center"; 
`;

const Columns = ({col}) => {
    console.log(col)
    return (
        <ColumnContainer>
            <h2>{col.name}</h2>
        </ColumnContainer>
    );
}
 
export default Columns;