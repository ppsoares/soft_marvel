import React from "react";
import { shallow } from "enzyme";

import Hero from "./Hero";

describe("<Hero />", () => {
  let wrapper;

  test("mounts", () => {
    wrapper = shallow(<Hero />);

    expect(wrapper).toHaveLength(1);
  });
});
