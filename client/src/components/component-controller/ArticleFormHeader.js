import React from 'react'
import {Paper, Card, Typography, styled} from '@mui/material'

const paperStyled = styled(Paper)(({theme}) =>({
    root: {
        backgroundColor: '#fdfdff'
    },
}))

const cardStyled = styled(Card)(({theme}) =>({
    display:'inline-block',
    padding:theme.spacing(2),
    color:'#3c44b1',
    '& .MuiCard-root .MuiSVGIcon-root':{
        color: 'white'
    },
}))

const TypographyTitle = styled(Typography)(({ theme }) => ({
    paddingLeft:theme.spacing(4),
    '& .MuiTypography-subtitle2':{
        opacity:'0.6'
    },

}))

const HeaderDivStyled = styled('div')(({ theme }) => ({
    padding:theme.spacing(4),
    display:'flex',
    marginBottom:theme.spacing(2),
  }))

export default function PageHeader(props){

    const {title, subTitle, icon} = props

    return (
        <paperStyled elevation={0} square>
            <HeaderDivStyled>
                <Card>
                    {icon}
                </Card>
                <TypographyTitle variant ='h6' component='div'>
                    {title}
                </TypographyTitle>
                <Typography variant='subtitle2' component='div'>
                    {subTitle}
                </Typography>
            </HeaderDivStyled>
        </paperStyled>
    )
}