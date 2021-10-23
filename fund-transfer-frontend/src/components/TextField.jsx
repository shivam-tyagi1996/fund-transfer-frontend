import React from 'react';
import TextField from '@mui/material/TextField'

const TextBox = (props) => {
    const { label, value, onChange, required } = props;
    return (
        <TextField id="outlined-basic" label={label} value={value} required={required} onChange={(e) => onChange(e.target.value)} variant="outlined" style={{ marginTop: '0px', float: 'right'}} />
    )
}

export default TextBox;