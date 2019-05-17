import React from "react";
import { shallow } from "enzyme";

import CardGlyph from "./CardGlyph";

describe("<CardGlyph />", () => {
  let wrapper;

  test("mounts", () => {
    wrapper = shallow(<CardGlyph />);

    expect(wrapper).toHaveLength(1);
  });
});
