import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventInfoWrapper;
  let event = mockData[0];
  beforeAll(() => {
    EventInfoWrapper = shallow(<Event event={event} />);
  });

  //Part one of part one test cases to show basic information

  test("check status of event", () => {
    expect(EventInfoWrapper.find(".status")).toHaveLength(1);
  });

  test("render event summary", () => {
    expect(EventInfoWrapper.find(".summary")).toHaveLength(1);
  });

  test("render event description", () => {
    expect(EventInfoWrapper.find(".description")).toHaveLength(1);
  });

  test("render event start time", () => {
    expect(EventInfoWrapper.find(".start")).toHaveLength(1);
  });

  test("render event end time", () => {
    expect(EventInfoWrapper.find(".end")).toHaveLength(1);
  });

  //Part two of part one test cases to check if extra info is shown when a user clicks on "Details"
  test("clicking the details button to show more information", () => {
    EventInfoWrapper.setState({
      collapsed: true,
    });
    EventInfoWrapper.find(".infoButton").simulate("click");
    expect(EventInfoWrapper.state("collapsed")).toBe(true);
  });
});
//
