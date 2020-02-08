import React from 'react';
import Typography from '@material-ui/core/Typography';

function ErrorMessage({children}) {
  return(
    <Typography style={{color: 'red', textAlign: 'center', margin: '50px 0'}}>
      {children}
    </Typography>
  );
}

export default ErrorMessage;