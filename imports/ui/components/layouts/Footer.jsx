import React, { Component } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import { withContext } from "../../../context";

class Footer extends Component {
  onIndexSelect = (e, i) => {
    const { onCategorySelect, muscles } = this.props;

    onCategorySelect(i === 0 ? "" : muscles[i - 1]);
  };

  getIndex = () => {
    const { category, muscles } = this.props;

    return category ? muscles.findIndex(group => group === category) + 1 : 0;
  };

  render() {
    const { width, muscles } = this.props;

    return (
      <AppBar position="static">
        <Tabs
          value={this.getIndex()}
          onChange={this.onIndexSelect}
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
  }
}

export default withContext(withWidth()(Footer));
