import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import ExerciseForm from "./ExerciseForm";
import { Consumer } from "../../../context";

class CreateDialog extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  handleFormSubmit = exercise => {
    this.handleToggle();

    const { onCreate } = this.props;

    onCreate(exercise);
  };

  render() {
    const { open } = this.state;
    const { muscles } = this.props;

    return (
      <Consumer>
        {({ muscles }) => (
          <Fragment>
            <Button
              variant="fab"
              aria-label="Add"
              mini
              onClick={this.handleToggle}
              color="secondary"
            >
              <AddIcon />
            </Button>
            <Dialog
              open={open}
              onClose={this.handleToggle}
              aria-labelledby="form-dialog-title"
              fullWidth
              maxWidth="xs"
            >
              <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
              <DialogContent>
                <DialogContentText>Please fill out the form below.</DialogContentText>
                <ExerciseForm muscles={muscles} onSubmit={this.handleFormSubmit} />
              </DialogContent>
            </Dialog>
          </Fragment>
        )}
      </Consumer>
    );
  }
}

export default CreateDialog;
