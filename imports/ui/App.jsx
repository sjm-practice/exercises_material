/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// App component - represents the whole app
export default withStyles(styles)(
  class App extends Component {
    static propTypes = {
      classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    state = {};

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <Header />

          <Footer />
        </Fragment>
      );
    }
  },
);
