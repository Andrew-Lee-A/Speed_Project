import { NavTopBar } from './NavTopBar'
import { NavSideBar } from './NavSideBar'
import { Stack, Paper, Typography, styled } from '@mui/material'
import theme from '../theme'

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: '',
}))

export default function Home(props) {
  return (
    <>
      <NavTopBar account={props.account} />
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        spacing={2}
      >
        <NavSideBar />
        <Paper
          sx={{
            backgroundColor: theme.palette.secondary.main,
            padding: '4rem',
          }}
        >
          <Text variant='h2'>Welcome to SPEED</Text>
        </Paper>
      </Stack>
    </>
  )
}
