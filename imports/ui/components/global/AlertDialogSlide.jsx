import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

let openAlertDialogFn;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
    message: "",
    context: "",
    button1: null,
    button2: null,
  };

  componentDidMount() {
    openAlertDialogFn = this.openAlertDialog;
  }

  button1Handler = () => {
    const {
      button1: { handler: closeHandler },
    } = this.state;

    this.closeDialog();

    closeHandler();
  };

  button2Handler = () => {
    const {
      button2: { handler: closeHandler },
    } = this.state;

    this.closeDialog();

    closeHandler();
  };

  closeDialog = () => {
    this.setState({
      open: false,
      message: "",
      context: "",
      button1: null,
      button2: null,
    });
  };

  openAlertDialog = ({ message, context, button1, button2 }) => {
    this.setState({
      open: true,
      message,
      context,
      button1,
      button2,
    });
  };

  render() {
    const { open, message, context, button1, button2 } = this.state;

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.closeDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{message}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {context}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {button1 && (
            <Button onClick={this.button1Handler} color="primary">
              {button1.label}
            </Button>
          )}
          {button2 && (
            <Button onClick={this.button2Handler} color="primary">
              {button2.label}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    );
  }
}

export function alertDialog(options) {
  openAlertDialogFn(options);
}

export default AlertDialogSlide;
