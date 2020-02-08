import React from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, Container, Button, ButtonGroup} from '@material-ui/core';

function SimpleContainer({setSource}) {
  const ulrs = {
    small: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    big: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{textAlign: 'center'}}>
        <h1 style={{fontSize: 50, marginBottom: 40}}>Добро пожаловать на сервис генераций таблиц</h1>
        <h2 style={{fontSize: 20, marginBottom: 70}}>Выберите, пожалуйста, <span>данные</span> для создания таблицы:</h2>
        <ButtonGroup style={{boxShadow: '1px 1px 1px -1px rgb(51, 76, 175), 1px 1px 4px 1px rgb(51, 76, 175), 6px 3px 15px 1px rgb(51, 76, 175)'}} size="large" color="primary" aria-label="large outlined primary button group">
          <Button onClick={setSource.bind(this, ulrs.small)} variant="outlined">Small Data</Button>
          <Button onClick={setSource.bind(this, ulrs.big)} variant="outlined">
            Big Data
          </Button>
        </ButtonGroup>
      </Container>
    </React.Fragment>
  );
}

SimpleContainer.propTypes = {
  setSource: PropTypes.func.isRequired,
}

export default SimpleContainer;