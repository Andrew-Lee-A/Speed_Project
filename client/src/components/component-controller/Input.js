import React from 'react'
import {TextField, InputAdornment, styled} from '@mui/material'

const SearchTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,

  '& label.Mui-focused': {
    color: '#29D6B5',
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: '#29D6B5',
  },
  '&:hover label': {
    color: '#29D6B5',
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: "#29D6B5"
  },
  '& .MuiInputAdornment-root': {
    color: 'white',
  },
  input: {
    color: 'white',
  },
  label: {
    color: 'white',
  },
  }))

export default function Input (props){
    const {name, label, value, error = null, onChange, ...other} = props;
    return (
        <SearchTextField
        variant='outlined'
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
        {...(error && {error: true, helperText:error})}
        />
    )
}