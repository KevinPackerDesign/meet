import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";

import App from "../App";

const feature = loadFeature("./src/features/showHideEventDetails.feature");

defineFeature(feature, (test) => {
  test("When the user opens the app the event detials is collapsed.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the app is opened", () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
    });
    when("the user has not clicked on the detials button", () => {});

    then("the events will be collapsed.", () => {
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });
  });

  test("When the user clicks on the detials button, more info will be displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the event is collapsed", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user clicks the button", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".infoButton")).toHaveLength(2);
      AppWrapper.find(".infoButton").at(0).simulate("click");
    });

    then("the detials will expand.", () => {
      expect(AppWrapper.find(".description")).toHaveLength(1);
    });
  });

  test("When the user clicks the button again, the detials will collapse.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the event is expanded", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".infoButton").at(0).simulate("click");
    });

    when("the user clicks the button", () => {
      AppWrapper.find(".infoButton").at(0).simulate("click");
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });

    then("the event will collapse.", () => {
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });
  });
});
