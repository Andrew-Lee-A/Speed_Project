import React from 'react'
import { Paper, Card, Typography, styled } from '@mui/material'

// const useStyles = makeStyles(theme => ({
//     root: {
//         backgroundColor: '#fdfdff'
//     },
//     pageHeader:{
//         padding:theme.spacing(4),
//         display:'flex',
//         marginBottom:theme.spacing(2)
//     },
//     pageIcon:{
//         display:'inline-block',
//         padding:theme.spacing(2),
//         color:'#3c44b1'
//     },
//     pageTitle:{
//         paddingLeft:theme.spacing(4),
//         '& .MuiTypography-subtitle2':{
//             opacity:'0.6'
//         }
//     }
// }))

const HeaderDivStyled = styled('div')(({ theme }) => ({
    padding:theme.spacing(4),
    display:'flex',
    marginBottom:theme.spacing(2),
}))

const TypographyTitle = styled('div')(({ theme }) => ({
    paddingLeft:theme.spacing(4),
    '& .MuiTypography-subtitle2':{
        opacity:'0.6'
    },
    }))


export default function PageHeader(props) {

    const { title, subTitle, icon } = props;
    return (
        <Paper elevation={1} square sx = {{
            '&.MuiPaper-root': {
                color: 'white',
                backgroundColor: '#0e111d',
                margin: '3px',
            },
            '&:hover ': {
                color: '#29D6B5',
            },
        }}>
            <HeaderDivStyled>
                <Card sx = {{
                    '&.MuiCard-root':{
                        color: '#0e111d',
                        backgroundColor: 'white',
                        display: 'inline-block',
                        padding: '8px',
                    }
                 }}>
                    {icon}
                </Card>
                <TypographyTitle>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </TypographyTitle>
            </HeaderDivStyled>
        </Paper>
    )
}