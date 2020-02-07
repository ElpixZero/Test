import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    background: 'black',
    color: 'yellow',
    border: '1px dashed yellow',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginRight: 10
  },
  pos: {
    marginBottom: 12,
  },
});


const StyledTypography = withStyles(theme => ({
  root: {
    color: '#f7f70269',
  },
}))(Typography);


function SimpleCard({data}) {
  const classes = useStyles();

  console.log(data);

  return (
    <>
    { data ? <Card className={classes.root}>
      <CardContent style={{padding: 15}}>
        <div style={{display: 'flex'}}>
          <StyledTypography className={classes.title} color="textSecondary" gutterBottom>
            Выбран пользователь: 
          </StyledTypography>
          <Typography className={classes.title} gutterBottom>
            <b> {data.firstName} {data.lastName}</b>
          </Typography>
        </div>

        <div style={{display: 'flex'}}>
          <StyledTypography className={classes.title} color="textSecondary" gutterBottom>
            Описание:
          </StyledTypography>
          <Typography className={classes.title} gutterBottom>
            {data.description}
          </Typography>
        </div>

        <div style={{display: 'flex'}}>
          <StyledTypography className={classes.title} color="textSecondary" gutterBottom>
            Адрес проживания: 
          </StyledTypography>
          <Typography className={classes.title} gutterBottom>
            <b> {data.address.city}</b>
          </Typography>
        </div>

        <div style={{display: 'flex'}}>
          <StyledTypography className={classes.title} color="textSecondary" gutterBottom>
            Город:
          </StyledTypography>
          <Typography className={classes.title} gutterBottom>
            <b>{data.address.state}</b>
          </Typography>
        </div>

        <div style={{display: 'flex'}}>
          <StyledTypography className={classes.title} color="textSecondary" gutterBottom>
            Провинция/штат:
          </StyledTypography>
          <Typography className={classes.title} gutterBottom>
            <b>{data.address.streetAddress}</b>
          </Typography>
        </div>

        <div style={{display: 'flex'}}>
          <StyledTypography className={classes.title} color="textSecondary" gutterBottom>
            Индекс:
          </StyledTypography>
          <Typography className={classes.title} gutterBottom>
            <b> {data.address.zip}</b>
          </Typography>
        </div>
        </CardContent>
    </Card>
    : <div style={{backgroundColor: 'black', color: 'yellow', marginTop: 30}}>
      *Кликните на строку таблицы, чтобы увидеть расширенную информацию о пользователе.
    </div>
  }
  </>
  );
}

SimpleCard.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
}

export default SimpleCard;
