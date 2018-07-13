import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

const LeftPane = ({ styles }) => <Paper style={styles.Paper}>Left Pane</Paper>;

LeftPane.propTypes = {
  styles: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default LeftPane;
