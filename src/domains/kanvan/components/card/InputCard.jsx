import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import InputCardForm from './InputCardForm';

const useThemeInputCard = makeStyles((theme) =>({
    root: {
        marginTop: theme.spacing(2),
    },
    addCard:{
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        backgroundColor: "#EBECF0",
        "&:hover":{
            backgroundColor: fade('#000', 0.25),
        }
    }
}))
export default function InputCard() {
    const style = useThemeInputCard();
    return (
        <div className={style.root}>
            <InputCardForm />
            <Paper
                className={style.addCard}
                elevation={0}
            >
                <Typography

                >
                    <span role="img" aria-label="sheep">➕</span> 
                    Add a Card
                </Typography>
            </Paper>
        </div>
    )
}
