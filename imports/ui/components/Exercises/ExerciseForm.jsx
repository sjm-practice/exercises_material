import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  FormControl: {
    width: 400,
  },
  xsFormControl: {
    width: 250,
  },
});

class ExerciseForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    const { exercise } = this.props;

    return exercise || { title: "", description: "", muscles: "" };
  }

  handleChange = field => ({ target: { value } }) =>
    this.setState({
      [field]: value, // update new field value
    });

  handleSubmit = () => {
    // TODO: validate

    const { onSubmit } = this.props;
    const { title } = this.state;

    onSubmit({
      id: title.toLocaleLowerCase().replace(/ /g, "-"),
      ...this.state,
    });
  };

  render() {
    const { title, description, muscles } = this.state;
    const { exercise, classes, width, muscles: categories } = this.props;

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          className={width === "xs" ? classes.xsFormControl : classes.FormControl}
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
        <br />
        <Button color="primary" variant="raised" onClick={this.handleSubmit}>
          {exercise ? "Edit" : "Create"}
        </Button>
      </form>
    );
  }
}

export default withWidth()(withStyles(styles)(ExerciseForm));
