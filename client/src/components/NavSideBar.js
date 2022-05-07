import { Paper, Link } from '@mui/material'

export const NavSideBar = () => {
  return (
    <Paper
      sx={{
        width: '10%',
        display: 'flex',
        flexDirection: 'column',
        WebkitAlignItems: 'center',
        position: 'absolute',
        gap: '1rem',
        margin: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      }}
    >
      <Link component={'button'} underline='none'>
        Home
      </Link>
      <Link component={'button'} underline='none'>
        Articles
      </Link>
      <Link component={'button'} underline='none'>
        Create Article
      </Link>
    </Paper>
  )
}
