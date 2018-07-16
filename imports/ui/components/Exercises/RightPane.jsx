import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

const RightPane = ({ styles }) => <Paper style={styles.Paper}>Right Pane</Paper>;

RightPane.propTypes = {
  styles: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default RightPane;
