import React from "react";
import { shallow } from "enzyme";

import ListHero from "./ListHero";

describe("<ListHero />", () => {
  let wrapper;

  test("mounts", () => {
    wrapper = shallow(<ListHero />);

    expect(wrapper).toHaveLength(1);
  });
});
