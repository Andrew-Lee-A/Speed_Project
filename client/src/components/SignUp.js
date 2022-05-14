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

export default function Login() {
  let navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
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
      if (loginData.password === loginData.passwordConfirmation) {
        const { data } = await axios.post('/api/v1/auth/signup', {
          username: loginData.username,
          password: loginData.password,
        })

        localStorage.setItem('JWT', data.token)
        localStorage.setItem('PERMISSION', data.user.permission)

        setLoginData({
          username: '',
          password: '',
          passwordConfirmation: '',
        })
        navigate('/')
      } else {
        throw new Error('Passwords do not match')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <NavTopBar />
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
          />
          <StyledTextField
            component={Paper}
            onChange={handleChange}
            required
            label='Password'
            name='password'
            type='password'
            value={loginData.password}
          />
          <StyledTextField
            component={Paper}
            onChange={handleChange}
            required
            label='Confirm Password'
            name='passwordConfirmation'
            type='password'
            value={loginData.passwordConfirmation}
          />
          <StyledButton onClick={handleClick} variant='contained'>
            Sign Up
          </StyledButton>
        </Stack>
      </Stack>
    </>
  )
}
