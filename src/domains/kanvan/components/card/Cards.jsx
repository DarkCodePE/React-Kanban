import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useThemeCard = makeStyles((theme) =>({
    card:{
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    }
}))
const Cards = () => {
    const style = useThemeCard()
    return (
        <div>
            <Paper className={style.card}>Task 1</Paper>
        </div>
    );
}
 
export default Cards;