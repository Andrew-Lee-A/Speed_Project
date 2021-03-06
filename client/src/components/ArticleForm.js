import { useState } from 'react'
import { NavTopBar } from './NavTopBar'
import { NavSideBar } from './NavSideBar'
import { Paper, Grid, FormGroup, Stack } from '@mui/material'
import Controls from './component-controller/Controls'
import axios from 'axios'

const initialFormValues = {
  title: '',
  authors: '',
  source: '',
  pubYear: '',
  doi: '',
  claimedBenefit: '',
  levelOfEvidence: '',
}

export default function ArticleForm() {
  const [values, setValues] = useState(initialFormValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  async function handleSubmit() {
    await axios.post('/api/v1/article', values)
  }

  return (
    <Paper
      sx={{
        '&.MuiPaper-root': {
          margin: '5px',
          padding: '5px',
          backgroundColor: '#0e111d',
        },
        '&.MuiPaper-root Input-root': {
          width: '10%',
        },
      }}
    >
      <NavTopBar />
      <Stack direction='row' gap='5rem'>
        <NavSideBar />
        <FormGroup>
          <Grid container direction='column'>
            <Grid item xs={6}>
              <Controls.Input
                variant='outlined'
                label='Title'
                name='title'
                values={values.title}
                onChange={handleInputChange}
              />
              <Controls.Input
                variant='outlined'
                label='Authors'
                name='authors'
                values={values.authors}
                onChange={handleInputChange}
              />
              <Controls.Input
                variant='outlined'
                label='Source'
                name='source'
                values={values.source}
                onChange={handleInputChange}
              />
              <Controls.Input
                variant='outlined'
                label='Publication Year'
                name='pubYear'
                values={values.pubYear}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.Input
                variant='outlined'
                label='DOI'
                name='doi'
                values={values.doi}
                onChange={handleInputChange}
              />
              <Controls.Input
                variant='outlined'
                label='Claimed Benefits'
                name='claimedBenefit'
                values={values.claimedBenefit}
                onChange={handleInputChange}
              />
              <Controls.Input
                variant='outlined'
                label='Level Of Evidence'
                name='levelOfEvidence'
                values={values.levelOfEvidence}
                onChange={handleInputChange}
              />
              <Controls.Button
                onClick={handleSubmit}
                type='sumit'
                text='submit'
                sx={{ padding: '1rem' }}
              ></Controls.Button>
            </Grid>
          </Grid>
        </FormGroup>
      </Stack>
    </Paper>
  )
}
