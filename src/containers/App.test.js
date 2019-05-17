import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("<App />", () => {
  let wrapper;

  test("mounts", () => {
    wrapper = shallow(<App />);

    expect(wrapper).toHaveLength(1);
  });
});
