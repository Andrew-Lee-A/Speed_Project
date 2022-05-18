import React from 'react'
import {Button} from '@mui/material';


// const styledButton = styled(Button)(({ theme }) => ({
//     '&.MuiButton-root':{
//         m: '0.5px',

//     },
//     '&.MuiButton-root label':{
//         textTransform: 'none',
//     }
// }))

export default function MuiButton(props) {

    const { text, size, color, variant, onClick, ...other } = props
    return (
        <Button
            sx = {{
                '&.MuiButton-root':{
                    m: '0.5px',
            
                },
                '&.MuiButton-root label':{
                    textTransform: 'none',
                }
            }}
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            >
            {text}
        </Button>
    )
}