import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

const Footer = ({ muscles, category, onSelect, width }) => {
  const index = category ? muscles.findIndex(group => group === category) + 1 : 0;

  const onIndexSelect = (e, i) => {
    onSelect(i === 0 ? "" : muscles[i - 1]);
  };

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== "xs"}
        scrollable={width === "xs"}
      >
        <Tab key="All" label="All" />
        {muscles.map(muscleGroup => (
          <Tab key={muscleGroup} label={muscleGroup} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withWidth()(Footer);
