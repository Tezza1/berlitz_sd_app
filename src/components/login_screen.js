import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends Component {
    state = {
        open: true,
    };

    handleClose = () => {
        this.setState({ 
            open: false, 
            snackOpen: true
        });
    };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Use the credentials provided to login.
              If you experience any issues contact your local Berlitz IT department.
            </DialogContentText>
            <TextField
                required
                autoFocus
                margin="normal"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
            />
            <TextField
                required
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="dense"
                fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

