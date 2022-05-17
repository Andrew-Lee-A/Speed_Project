import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack'

export default function ComboBox(props) {
    const{onChange} = props;
    
  return (
<Stack direction="row" spacing={2}>

    <Autocomplete
      disablePortal
      id="combo-box-pubYear"
      options={pubYear}
      getOptionLabel={pubYear => pubYear.label}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Year Published" />}
      onChange={onChange}
    />
    
    <Autocomplete
    disablePortal
    id="combo-box-claimedBenefit"
    options={claimedBenefits}
    sx={{ width: 200 }}
    renderInput={(params) => <TextField {...params} label="Claimed Benefits" />}
    onChange={onChange}
    />

<Autocomplete
    disablePortal
    id="combo-box-levelOfEvidence"
    options={levelOfEvidence}
    sx={{ width: 200 }}
    renderInput={(params) => <TextField {...params} label="Level Of Evidence" />}
    onChange={onChange}
    />
    
  </Stack>
  
  
  
    );
}


const pubYear = [
{label: '2022'},
{label: '2021'},
{label: '2020'},
{label: '2019'},
{label: '2018'},
{label: '2017'},
{label: '2016'},
{label: '2015'},
{label: '2014'},
{label: '2013'},
{label: '2012'},
];

const claimedBenefits = [
{label: 'makes you code using less food'},
];

const levelOfEvidence = [
{label: 'strong support'},
];