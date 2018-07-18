/* eslint-disable arrow-parens, object-curly-newline react/destructuring-assignment */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Header from "./components/layouts/Header";
import Exercises from "./components/Exercises/Exercises";
import Footer from "./components/layouts/Footer";
import { muscles, exercises } from "../data/store";

// App component - represents the whole app
export default withStyles(styles)(
  class App extends Component {
    static propTypes = {
      classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    state = {
      exercises,
      exercise: {},
    };

    getExercisesByMuscle() {
      return Object.entries(
        this.state.exercises.reduce((exerciseList, exercise) => {
          const { muscles } = exercise; // eslint-disable-line no-shadow

          exerciseList[muscles] = exerciseList[muscles] // eslint-disable-line no-param-reassign
            ? [...exerciseList[muscles], exerciseList]
            : [exercise];

          return exerciseList;
        }, {}),
      );
    }

    handleCategorySelected = category => {
      this.setState({
        category,
      });
    };

    handleExerciseSelected = id => {
      this.setState(({ exercises }) => ({
        exercise: exercises.find(ex => ex.id === id),
      }));
    };

    render() {
      const { classes } = this.props; // eslint-disable-line no-unused-vars

      const exercises = this.getExercisesByMuscle();
      const { category, exercise } = this.state;

      return (
        <Fragment>
          <Header />
          <Exercises
            exercise={exercise}
            category={category}
            exercises={exercises}
            onSelect={this.handleExerciseSelected}
          />
          <Footer
            category={category}
            muscles={muscles}
            onSelect={this.handleCategorySelected}
          />
        </Fragment>
      );
    }
  },
);
