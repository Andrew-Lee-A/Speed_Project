import { Paper, Link, styled } from '@mui/material'

const Bar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
}))

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    color: '#29D6B5',
  },
}))

export const NavSideBar = () => {
  return (
    <Bar
      sx={{
        width: '10%',
        display: 'flex',
        flexDirection: 'column',
        WebkitAlignItems: 'center',
        position: 'box',
        gap: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        marginRight: '2rem',
        marginLeft: '0.5rem',
        height: '5rem',
      }}
    >
      <StyledLink component={'button'} underline='none'>
        Home
      </StyledLink>
      <StyledLink component={'button'} underline='none'>
        Articles
      </StyledLink>
      <StyledLink component={'button'} underline='none'>
        Create Article
      </StyledLink>
    </Bar>
  )
}
