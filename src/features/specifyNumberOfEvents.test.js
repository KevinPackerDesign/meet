import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");
defineFeature(feature, (test) => {
  test("32 events should be displayed by default when the app is opened.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    when("the events are loaded", () => {
      AppWrapper.update();
    });

    then("32 events will be displayed (2 for mockData)", () => {
      expect(AppWrapper.find(".event")).toHaveLength(2);
    });
  });

  test("When the user inputs a new number into the input, the number of events displayed will match.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the app is open", () => {
      AppWrapper = mount(<App />);
    });

    when("the user inputs a number", () => {
      AppWrapper.update();
      AppWrapper.find(".newEventsTotal").simulate("change", {
        target: { value: 1 },
      });
    });

    then("the number of events displayed will change", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(1);
    });
  });
});
