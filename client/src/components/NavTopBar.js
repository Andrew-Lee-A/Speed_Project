import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Link, Typography, styled } from '@mui/material'
import theme from '../theme'
import axios from 'axios'

const NavBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    color: '#29D6B5',
  },
}))

export const NavTopBar = (props) => {
  let navigate = useNavigate()
  const [login, setLogin] = useState(null)

  useEffect(() => {
    async function getLoginData() {
      try {
        const { data } = await axios.get('/api/v1/userinfo', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('JWT'),
          },
        })
        setLogin(data)
      } catch (e) {
        console.log(e)
      }
    }

    if (!props.testing) {
      getLoginData()
    }
  }, [])

  function handleClick(e) {
    const { name } = e.target

    switch (name) {
      case 'login':
        navigate('/login')
        break
      case 'signup':
        navigate('/signup')
        break
      default:
        break
    }
  }

  return (
    <NavBox
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgoundColor: 'red',
        width: '100%',
        height: '10%',
        padding: '0.8rem 0rem',
        marginBottom: '2rem',
      }}
    >
      <Typography sx={{ alignSelf: 'center', marginLeft: '1.5rem' }}>
        SPEED
      </Typography>
      {!login ? (
        <Box sx={{ display: 'flex', gap: '1rem', marginRight: '1.5rem' }}>
          <LinkStyled
            onClick={handleClick}
            component={Button}
            underline='none'
            name='login'
          >
            Login
          </LinkStyled>
          <LinkStyled
            onClick={handleClick}
            sx={{ backgroundColor: theme.palette.primary.main }}
            component={Button}
            underline='none'
            name='signup'
          >
            Sign Up
          </LinkStyled>
        </Box>
      ) : (
        <Typography sx={{ alignSelf: 'center', marginRight: '1.5rem' }}>
          Welcome {login}
        </Typography>
      )}
    </NavBox>
  )
}
