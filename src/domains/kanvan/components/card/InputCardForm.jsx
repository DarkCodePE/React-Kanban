import { Button, IconButton, InputBase, Paper } from '@material-ui/core'
import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import { fade, makeStyles } from '@material-ui/core/styles';

const useThemeInputCardForm = makeStyles((theme) =>({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
        padding: theme.spacing(1, 1, 1, 0),
    },
    input:{
        margin: theme.spacing(1)
    },
    btnConfirm:{
        backgroundColor: "green",
        color: "#fff",
    },
    confirm:{
        backgroundColor:"#SAAC44",
        margin: theme.spacing(0, 1, 1, 1),
        "&:hover":{
            backgroundColor:fade("#SAAC44", 0.25),
        }
    }
}))
export default function InputCardForm() {
    const style = useThemeInputCardForm();
    return (
        <div>
            <div>
                <Paper className={style.card}>
                    <InputBase 
                        multiline 
                        fullWidth 
                        inputProps={{
                            className: style.input,
                        }} 
                        placeholder="Enter a title of this card"
                    />
                </Paper>
            </div>
            <div className={style.confirm}>
                <Button className={style.btnConfirm}>
                    Add Card
                    <IconButton>
                        <ClearIcon />
                    </IconButton>
                </Button>
            </div>
        </div>
    )
}
