import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CONSTANTS from '../utils/constants';


const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: CONSTANTS.SECONDARY_COLOR,
      },
      '&.Mui-focused fieldset': {
        borderColor: CONSTANTS.SECONDARY_COLOR,
      },
      '& .MuiInputBase-input': {
        color: CONSTANTS.SECONDARY_COLOR,
        padding: 10,
      }
    },
  },
})(TextField);

function StyledTextField({value, onChange, label, fullWidth, margin }) {
  return (
    <CssTextField margin={margin} placeholder={label} fullWidth={fullWidth} value={value} variant="outlined" onChange={e => onChange(e.target.value)}  />
  );
}

StyledTextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  fullWIdth: PropTypes.bool,
}

StyledTextField.defaultProps = {
  margin: 'dense'
};

export default StyledTextField;