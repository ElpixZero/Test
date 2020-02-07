import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormDialog({rows, addNewObj}) {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValue] = React.useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

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

    console.log(pointer);

    return pointer;
  }

  return (
    <div>
      <Button style={{background: 'black', color: 'yellow', borderColor: 'yellow'}} variant="outlined" onClick={handleClickOpen}>
        Добавить
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <form onSubmit={onSubmit}>
            {
              rows.map( item => (
                <TextField
                  key={item}
                  autoFocus
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

FormDialog.propTypes = {
  rows: PropTypes.array.isRequired,
  addNewObj: PropTypes.func.isRequired,
}

export default FormDialog;
