import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Card, CardContent, Typography} from '@material-ui/core';

import CONSTANTS from '../utils/constants';

const useStyles = makeStyles({
  root: {
    marginTop: 15,
    background: CONSTANTS.PRIMARY_COLOR,
    color: CONSTANTS.SECONDARY_COLOR,
    border: `1px dashed ${CONSTANTS.SECONDARY_COLOR}`,
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

const StyledTypography = withStyles(() => ({
  root: {
    color: CONSTANTS.PLACEHOLDER_COLOR,
  },
}))(Typography);


function UserCard({data}) {
  const classes = useStyles();

  return (
    <>
    { data ? <Card className={classes.root}>
      <CardContent style={{padding: '10px 15px 5px 15px'}}>
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
    : <div style={{backgroundColor: CONSTANTS.PRIMARY_COLOR, color: CONSTANTS.SECONDARY_COLOR, marginTop: 30}}>
      * Кликните на строку таблицы, чтобы увидеть расширенную информацию о пользователе.
    </div>
  }
  </>
  );
}

UserCard.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
}

export default UserCard;
