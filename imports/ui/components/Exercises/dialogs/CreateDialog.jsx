import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 500,
  },
});

class CreateDialog extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: "",
    },
  };

  handleToggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  handleChange = field => ({ target: { value } }) => {
    const { exercise: currExercise } = this.state;

    this.setState({
      exercise: {
        ...currExercise, // save any current entered fields
        [field]: value, // update new field value
      },
    });
  };

  handleSubmit = () => {
    // TODO: validate

    const { exercise } = this.state;
    const { onCreate } = this.props;

    onCreate(exercise);

    // clear and close the form dialog
    this.setState({
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: "",
      },
    });
  };

  render() {
    const {
      open,
      exercise: { title, description, muscles },
    } = this.state;
    const { classes, muscles: categories } = this.props;

    return (
      <Fragment>
        <Button variant="fab" aria-label="Add" mini onClick={this.handleToggle}>
          <AddIcon />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out the form below.</DialogContentText>
            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
                className={classes.FormControl}
              />
              <br />
              <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select value={muscles} onChange={this.handleChange("muscles")}>
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                label="Description"
                multiline
                rows="4"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
                className={classes.FormControl}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised" onClick={this.handleSubmit}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreateDialog);
