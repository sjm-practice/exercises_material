/* eslint-disable arrow-parens, object-curly-newline react/destructuring-assignment */
import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Header from "./components/layouts/Header";
import Exercises from "./components/exercises/Exercises";
import Footer from "./components/layouts/Footer";
import { muscles, exercises } from "../data/store";
import AlertDialogSlide, { alertDialog } from "./components/global/AlertDialogSlide";

// App component - represents the whole app
export default withStyles(styles)(
  class App extends Component {
    state = {
      exercises,
      exercise: {},
      editMode: false,
    };

    getExercisesByMuscle() {
      return muscles.map(group => {
        const { exercises: groupEx } = this.state;
        return [group, groupEx.filter(ex => ex.muscles === group)];
      });
    }

    handleCategorySelect = category =>
      this.setState({
        category,
      });

    handleExerciseSelect = id =>
      this.setState(({ exercises: exs }) => ({
        exercise: exs.find(ex => ex.id === id),
      }));

    handleExerciseCreate = exercise =>
      this.setState(({ exercises: exs }) => ({
        exercises: [...exs, exercise],
      }));

    handleExerciseDelete = id =>
      this.setState(({ exercises: exs }) => ({
        exercises: exs.filter(ex => ex.id !== id),
      }));

    handleExerciseEdit = id =>
      this.setState(({ exercises: exs }) => ({
        exercise: exs.find(ex => ex.id === id),
        editMode: !this.state.editMode,
      }));

    render() {
      const { classes } = this.props; // eslint-disable-line no-unused-vars

      const exs = this.getExercisesByMuscle();
      const { category, exercise, editMode } = this.state;

      return (
        <Fragment>
          <Header muscles={muscles} onExerciseCreate={this.handleExerciseCreate} />
          <Exercises
            exercise={exercise}
            category={category}
            exercises={exs}
            editMode={editMode}
            onSelect={this.handleExerciseSelect}
            onDelete={this.handleExerciseDelete}
            onEdit={this.handleExerciseEdit}
          />
          <Footer
            category={category}
            muscles={muscles}
            onSelect={this.handleCategorySelect}
          />
          <AlertDialogSlide />
        </Fragment>
      );
    }
  },
);
