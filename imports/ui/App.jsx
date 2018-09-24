/* eslint-disable arrow-parens, object-curly-newline react/destructuring-assignment */
import React, { Component } from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Header from "./components/layouts/Header";
import Exercises from "./components/exercises/Exercises";
import Footer from "./components/layouts/Footer";
import { muscles, exercises } from "../data/store";
import { Provider } from "../context";
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
        editMode: false,
        exercise: {},
      });

    handleExerciseSelect = id =>
      this.setState(({ exercises: exs }) => ({
        exercise: exs.find(ex => ex.id === id),
        editMode: false,
      }));

    handleExerciseCreate = exercise =>
      this.setState(({ exercises: exs }) => ({
        exercises: [...exs, exercise],
      }));

    handleExerciseDelete = id =>
      this.setState(({ exercises: exs, exercise, editMode }) => ({
        exercises: exs.filter(ex => ex.id !== id),
        editMode: exercise.id === id ? false : editMode,
        exercise: exercise.id === id ? {} : exercise, // handles deleting this exercise while selected or a different one
      }));

    handleExerciseSelectEdit = id =>
      this.setState(({ exercises: exs }) => ({
        exercise: exs.find(ex => ex.id === id),
        editMode: true,
      }));

    handleExerciseEdit = exercise =>
      this.setState(({ exercises: exs }) => ({
        exercises: [...exs.filter(ex => ex.id !== exercise.id), exercise],
        exercise,
      }));

    getContext = () => ({
      muscles,
      ...this.state,
    });

    render() {
      const { classes } = this.props; // eslint-disable-line no-unused-vars

      const exs = this.getExercisesByMuscle();
      const { category, exercise, editMode } = this.state;

      return (
        <Provider value={this.getContext()}>
          <CssBaseLine />

          <Header onExerciseCreate={this.handleExerciseCreate} />

          <Exercises
            exercise={exercise}
            category={category}
            exercises={exs}
            editMode={editMode}
            muscles={muscles}
            onSelect={this.handleExerciseSelect}
            onDelete={this.handleExerciseDelete}
            onSelectEdit={this.handleExerciseSelectEdit}
            onEdit={this.handleExerciseEdit}
          />

          <Footer
            category={category}
            muscles={muscles}
            onSelect={this.handleCategorySelect}
          />

          <AlertDialogSlide />
        </Provider>
      );
    }
  },
);
