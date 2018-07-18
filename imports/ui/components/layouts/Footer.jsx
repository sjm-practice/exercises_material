import React from "react";
import PropTypes from "prop-types";
import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles, category, onSelect }) => {
  const index = category ? muscles.findIndex(group => group === category) + 1 : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab key="All" label="All" />
        {muscles.map(muscleGroup => <Tab key={muscleGroup} label={muscleGroup} />)}
      </Tabs>
    </Paper>
  );
};

Footer.propTypes = {
  muscles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Footer;
