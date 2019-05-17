import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("<Header />", () => {
  let wrapper;

  test("mounts", () => {
    wrapper = shallow(<Header />);

    expect(wrapper).toHaveLength(1);
  });
});
