import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'yellow',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiInputLabel-root': {
      color: '#ffff0069',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'yellow',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
      '& .MuiInputBase-input': {
        color: 'yellow',
        padding: 10,
      }
    },
  },
})(TextField);

export default function StyledTextField({value, onChange, label, fullWidth, margin }) {

  return (
    <CssTextField margin={margin ? "dense" : 'none'} placeholder={label} fullWidth={fullWidth} value={value} variant="outlined" onChange={e => onChange(e.target.value)}  />
  );
}