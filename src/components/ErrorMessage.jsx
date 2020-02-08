import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import CONSTANTS from '../utils/constants'

function ErrorMessage({children}) {
  return(
    <Typography style={{color: CONSTANTS.WARNING_COLOR, textAlign: 'center', margin: '50px 0'}}>
      {children}
    </Typography>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired
}

export default ErrorMessage;