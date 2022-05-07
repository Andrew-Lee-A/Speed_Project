import { Box, Link, Typography, styled } from '@mui/material'

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

export const NavTopBar = () => {
  return (
    <NavBox
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgoundColor: 'red',
        width: '100%',
        height: '10%',
        padding: '0.8rem',
      }}
    >
      <Typography>SPEED</Typography>
      <Box sx={{ display: 'flex', gap: '1rem', marginRight: '1.5rem' }}>
        <LinkStyled component={'button'} underline='none'>
          Articles
        </LinkStyled>
        <LinkStyled component={'button'} underline='none'>
          Create Article
        </LinkStyled>
      </Box>
    </NavBox>
  )
}
