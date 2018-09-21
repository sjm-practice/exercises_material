import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    const { exercise, muscles: categories } = this.props;

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          fullWidth
        />
        <br />
        <FormControl fullWidth>
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
          fullWidth
        />
        <br />
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
          disabled={!title || !muscles}
        >
          {exercise ? "Edit" : "Create"}
        </Button>
      </form>
    );
  }
}

export default ExerciseForm;
