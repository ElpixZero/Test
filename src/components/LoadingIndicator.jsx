import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'black',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    padding: '50px 0',
    color: 'yellow',
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CircularProgress style={{color: 'yellow', marginBottom: 20}} id="standard-basic" />
      <span>Загрузка данных для таблицы...</span>
    </div>
  );
}