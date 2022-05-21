import { useState } from 'react'
import { NavTopBar } from './NavTopBar'
import { NavSideBar } from './NavSideBar'
import { useNavigate } from 'react-router-dom'
import { Stack, Paper, TextField, Button, styled } from '@mui/material'
import axios from 'axios'

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  '& label.Mui-focused': {
    color: theme.palette.primary.focused,
  },
  input: {
    color: 'white',
  },
  label: {
    color: 'white',
  },
}))

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    color: theme.palette.primary.focused,
  },
}))

export default function Login(props) {
  let navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  function handleChange(e) {
    const { value, name } = e.target

    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  async function handleClick() {
    try {
      const { data } = await axios.post('/api/v1/auth/login', loginData)

      localStorage.setItem('JWT', data.token)
      localStorage.setItem('PERMISSION', data.user.permission)

      setLoginData({
        username: '',
        password: '',
      })

      props.setAccount(true)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <NavTopBar testing={props.testing} />
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        gap='5rem'
      >
        <NavSideBar />
        <Stack
          spacing={2}
          alignItems='center'
          justifyContent='space-around'
          height='100%'
        >
          <StyledTextField
            component={Paper}
            onChange={handleChange}
            required
            label='Username'
            name='username'
            value={loginData.username}
            inputProps={{ 'data-testid': 'username-input' }}
          />
          <StyledTextField
            component={Paper}
            onChange={handleChange}
            required
            label='Password'
            name='password'
            type='password'
            value={loginData.password}
            inputProps={{ 'data-testid': 'password-input' }}
          />
          <StyledButton onClick={handleClick} variant='contained'>
            Login
          </StyledButton>
        </Stack>
      </Stack>
    </>
  )
}
