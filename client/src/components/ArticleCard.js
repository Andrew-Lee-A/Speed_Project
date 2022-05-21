import { useState } from 'react'
import {
  Stack,
  Paper,
  Typography,
  Button,
  styled,
  Checkbox,
} from '@mui/material'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'
import axios from 'axios'

const StyledPaper = styled(Paper)(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.palette.secondary.main,
  padding: '1rem',
}))

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
}))

export default function ArticleCard(props) {
  const [recommended, setRecommended] = useState('')

  async function handleAccept() {
    axios.post()
  }

  async function handleReject() {
    axios.post()
  }

  return (
    <StyledPaper>
      <Checkbox
        icon={<BookmarkAddIcon sx={{ color: 'white' }} />}
        checkedIcon={<BookmarkAddedIcon sx={{ color: '#36c997' }} />}
        sx={{ float: 'right' }}
        value={recommended}
        onChange={() => {
          if (recommended === 'ticked') {
            setRecommended('')
          } else {
            setRecommended('ticked')
          }
        }}
      ></Checkbox>
      <Stack direction='column' alignItems='center' gap='0.2rem'>
        <Typography>{props.title}</Typography>
        <Typography>DOI: {props.doi}</Typography>
        <Typography>AUTHORS: {props.authors}</Typography>
      </Stack>
      <Stack direction='row' gap='0.5rem'>
        <StyledButton variant='contained' sx={{ backgroundColor: '#36c997' }}>
          Approve
        </StyledButton>
        <StyledButton variant='contained' sx={{ backgroundColor: '#D82746' }}>
          Reject
        </StyledButton>
      </Stack>
    </StyledPaper>
  )
}
