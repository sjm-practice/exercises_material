/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

describe("<App />", function() {
  it("matches render snapshot", function() {
    // using enzyme-to-json serializer (configured in jest-config)
    const tree = mount(<App />);
    expect(tree).toMatchSnapshot();
  });

  it("contains a Footer and Header components", function() {
    const wrapper = mount(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
