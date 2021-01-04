import React from 'react'
import { Paper, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Title from './Title';
import Cards from './card/Cards';
import InputCard from './card/InputCard';

const useTheme = makeStyles((theme) =>({
    root:{
        width:'300px',
        backgroundColor:'#EBECF0',
        marginLeft:theme.spacing(1),
        padding:theme.spacing(1),
    }
}))
const List = () => {
    const style = useTheme()
    return (
        <>
            <Paper className={style.root}>
                <CssBaseline />
                <Title />
                <Cards />    
                <Cards />
                <InputCard />
            </Paper>
        </>
    );
}
 
export default List;