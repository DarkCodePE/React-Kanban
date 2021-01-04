import { InputBase, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { useState } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useTheme = makeStyles((theme) =>({
    editableTitleContainer:{
        margin:theme.spacing(1),
        display: 'flex',
   },
   editableTitle:{
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold",
        textAlign: "left"
   },
   input:{
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin:theme.spacing(1),
        '&:focus':{
            background:'#ddd',
        },
   }
}))

export default function Title() {
    const [title, setTitle] = useState("TO");
    const [open, setOpen] = useState(false);
    const style = useTheme();
    const HandleOpen = (status) => {
        console.log(status)
        setOpen(status);
    }
    const handleBlur = (e) => {
        setTitle(e.target.value)
        setOpen(false)
    }
    return (
        <div>
            {open 
            ? 
                (<div>
                    <InputBase 
                        onBlur={handleBlur}
                        inputProps={{
                            className: style.input,
                        }}    
                        fullWidth
                    />
                </div>)
            :
                (<div className={style.editableTitleContainer}>     
                    <Typography 
                        onClick={() => HandleOpen(!open)}
                        className={style.editableTitle}
                    >{title}</Typography>
                     <MoreHorizIcon />
                </div>
                
                )
            }
           
        </div>
    )
}
