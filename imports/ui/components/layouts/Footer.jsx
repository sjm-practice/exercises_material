import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

const Footer = ({ muscles, category, onSelect, width }) => {
  const index = category ? muscles.findIndex(group => group === category) + 1 : 0;

  const onIndexSelect = (e, i) => {
    onSelect(i === 0 ? "" : muscles[i - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered={width !== "xs"}
        scrollable={width === "xs"}
      >
        <Tab key="All" label="All" />
        {muscles.map(muscleGroup => <Tab key={muscleGroup} label={muscleGroup} />)}
      </Tabs>
    </Paper>
  );
};

export default withWidth()(Footer);
