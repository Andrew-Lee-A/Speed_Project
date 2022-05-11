import React, {useState, useEffect} from 'react'
import {TextField, Grid, styled} from '@mui/material'

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
    const [values, setValues] = useState();

    return (
        <form>
            <Grid container>
                <TextField
                    variant='outlined'
                    label='Title'
                    values={values.title}
                />
            </Grid>
        </form>
    )
}