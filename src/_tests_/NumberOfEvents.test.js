import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberWrapper;
  beforeAll(() => {
    NumberWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberWrapper.find(".newEventsTotal")).toHaveLength(1);
  });

  test("check the state for how many events are shown", () => {
    expect(NumberWrapper.state("EventsTotal")).toBe(32);
  });

  test("change state when text input changes", () => {
    const newEventsTotal = { target: { value: 10 } };
    NumberWrapper.find(".newEventsTotal").simulate("change", newEventsTotal);
    expect(NumberWrapper.state("newEventsTotal")).toBe(10);
  });
});
