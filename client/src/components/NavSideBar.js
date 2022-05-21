import { useNavigate } from 'react-router-dom'
import { Stack, Paper, Button, Link, styled } from '@mui/material'

const Bar = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
}))

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    color: theme.palette.primary.focused,
  },
  alignSelf: 'center',
}))

export const NavSideBar = () => {
  let navigate = useNavigate()

  function handleClick(e) {
    const { name } = e.target
    switch (name) {
      case 'home':
        navigate('/')
        break
      case 'articles':
        navigate('/articles')
        break
      case 'create':
        navigate('/createarticle')
        break
      default:
    }
  }

  return (
    <Bar
      component={Paper}
      direction='column'
      justifyContent='space-evenly'
      spacing={2}
      sx={{
        width: '10%',
        gap: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        alignSelf: 'baseline',
      }}
    >
      <StyledLink
        component={Button}
        onClick={handleClick}
        name='home'
        variant='outlined'
        underline='none'
      >
        Home
      </StyledLink>
      <StyledLink
        component={Button}
        onClick={handleClick}
        name='articles'
        underline='none'
      >
        Articles
      </StyledLink>
      <StyledLink
        component={Button}
        onClick={handleClick}
        name='create'
        underline='none'
      >
        Create
      </StyledLink>
    </Bar>
  )
}
