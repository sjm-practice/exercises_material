/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Typography } from "@material-ui/core";
import App from "../App";

describe("<App />", function() {
  it("matches render snapshot", function() {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });

  it("contains a Typography component with 'Hello!'", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Typography).prop("children")).toEqual("Hello!");
  });
});
