import { useState } from 'react'
import { NavTopBar } from './NavTopBar'
import { NavSideBar } from './NavSideBar'
import { Paper, Grid, FormGroup, Stack } from '@mui/material'
import Controls from './component-controller/Controls'
import axios from 'axios'
import { Upload, UploadFile } from '@mui/icons-material'
import Button from '@mui/material/Button'; 
import { styled } from '@mui/material/styles';
import { useTabsList } from '@mui/base'

const initialFormValues = {
  title: '',
  authors: '',
  source: '',
  pubYear: '',
  doi: '',
  claimedBenefit: '',
  levelOfEvidence: '',
}

const Input = styled('input')({
  display: 'none',
});

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

  const uploadBib = () => {
    const fileInput = document.getElementById('picker').files[0]

    console.log(fileInput)
    var fullText = "error,"
    var reader = new FileReader();
    reader.onload = function(event) {
        fullText = event.target.result
    };
    reader.readAsText(fileInput);
    
    
    const entertitle = fullText.split(",")[0]
    console.log(entertitle)
    values.title = entertitle
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
          <Grid>
            <label htmlFor="picker">
        <Input accept="text/plain" id="picker" multiple type="file" onChange={uploadBib}/>
        <Button variant="contained" component="span">
          Upload Bibtex
        </Button>
        </label>
            </Grid>
        </FormGroup>
      </Stack>
    </Paper>
  )
}
