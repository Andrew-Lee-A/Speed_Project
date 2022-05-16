import React, {useState, useEffect} from 'react'
import {Paper, TextField, Grid, styled, FormControl, FormGroup, Select, MenuItem} from '@mui/material'
import Input from './Input'

const initialFormValues = {
    title: '',
    authors: '',
    source: '',
    pubYear: new Date(),
    doi: '',
    claimedBenefit: '',
    levelOfEvidence: '',
}



export default function ArticleForm() {
    const [values, setValues] = useState(initialFormValues);


    const handleInputChange = e => {
        const [name, value] = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <Paper sx = {{
            '&.MuiPaper-root' : {
                margin: '5px',
                padding: '5px',
                backgroundColor: '#0e111d'
            }
        }}>
        <FormGroup>
            <Grid container>
                <Grid item xs = {12}>
                    <Input
                        variant='outlined'
                        label='Title'
                        name='title'
                        values={values.title}
                        onChange = {handleInputChange}
                        />
                    <Input
                        variant='outlined'
                        label='Authors'
                        values={values.authors}
                        /> 
                    <Input
                        variant='outlined'
                        label='Source'
                        values={values.source}
                        />
                    <Input
                        variant='outlined'
                        label='Publication Year'
                        values={values.pubYear}
                        /> 
                    <Input
                        variant='outlined'
                        label='DOI'
                        values={values.doi}
                        /> 
                    <Input
                        variant='outlined'
                        label='Claimed Benefit'
                        values={values.claimedBenefit}
                        /> 
                    <Select 
                        sx = {{ 
                            '&.MuiSelect-root' : {
                                width: '60%'
                            }
                        }}
                        label = 'Claimed Benefit'>
                        <MenuItem value={10}>TDD</MenuItem>
                        <MenuItem value={20}>Self Learning</MenuItem>
                        <MenuItem value={30}>OOP</MenuItem>
                    </Select>
                    <Input
                        variant='outlined'
                        label='Level of Evidence'
                        values={values.levelOfEvidence}
                        />  
                </Grid>
            </Grid>
        </FormGroup>
        </Paper>
    )
}