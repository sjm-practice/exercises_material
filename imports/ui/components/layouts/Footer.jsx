import React from "react";
import PropTypes from "prop-types";
import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab key="All" label="All" />
      {muscles.map(muscleGroup => <Tab key={muscleGroup} label={muscleGroup} />)}
    </Tabs>
  </Paper>
);

Footer.propTypes = {
  muscles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Footer;
