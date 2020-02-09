import React from 'react';
import PropTypes from 'prop-types';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import CONSTANTS from '../utils/constants';

function AddUser({rows, addNewObj}) {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValue] = React.useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: 'Вы создали нового пользователя. У него нет реального описания.',
    address: {
      city: 'Адрес проживания для созданного Вами пользователя',
      state: 'Город для созданного Вами пользователя',
      streetAddress: 'Провинция/штат для созданного Вами пользователя',
      zip: 'Индекс для созданного Вами пользователя',
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = e => {
    e.preventDefault();

    addNewObj(formValues);
    
    setFormValue({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
  }

  const isButtonDisabled = (data) => {
    let pointer = false;

    for (let key in data) {
      if (data[key] === '') pointer =  true;
    }

    return pointer;
  }

  return (
    <div>
      <Button style={{background: CONSTANTS.PRIMARY_COLOR, color: CONSTANTS.SECONDARY_COLOR, borderColor: CONSTANTS.SECONDARY_COLOR}} variant="outlined" onClick={handleClickOpen}>
        Добавить
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавление пользователя</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Чтобы добавить пользователя, заполните все поля:
          </DialogContentText>
          <form onSubmit={onSubmit}>
            {
              rows.map( item => (
                <TextField
                  key={item}
                  variant="outlined"
                  margin="dense"
                  id={item}
                  label={item}
                  fullWidth
                  value={formValues[item]}
                  onChange={e => setFormValue({
                    ...formValues, [item]: e.target.value
                  })}
                />
              ))
            }
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button disabled={isButtonDisabled(formValues)} type="submit" onClick={handleClose} color="primary">
            Добавить
          </Button>
        </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

AddUser.propTypes = {
  rows: PropTypes.array.isRequired,
  addNewObj: PropTypes.func.isRequired,
}

export default AddUser;