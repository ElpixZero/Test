import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard({data}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
    { data ? <Card className={classes.root}>
      <CardContent>
        <div style={{display: 'flex'}}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Выбран пользователь:
          </Typography>
          <Typography className={classes.title} gutterBottom>
            <b>{data.firstName} {data.lastName}</b>
          </Typography>
        </div>

        <div>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Описание
          </Typography>
          <Typography className={classes.title} gutterBottom>
            {data.description}
          </Typography>
        </div>

        <div style={{display: 'flex'}}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Адрес проживания: 
          </Typography>
          <Typography className={classes.title} gutterBottom>
            <b> {data.address.city} {data.address.state} {data.address.streetAddress}</b>
          </Typography>
        </div>
        </CardContent>
    </Card>
    : <div>Вы не выбрали пользователя.</div>
  }
  </>
  );
}

SimpleCard.propTypes = {
  data: PropTypes.array.isRequired,
}


export default SimpleCard;
