import React from "react";
import Place from "./Place";
import Map from "./Map";
import Profile from "./Profile";
import Chat from "./Chat";
import Users from "./Users";
import SearchBar from "./SearchBar";
import renderer from "react-test-renderer";
import { FriendsView } from "./Friends";

import { mount } from "enzyme";

test("Place Class renders correctly", () => {
  const tree = renderer.create(<Place />).toJSON();
  expect(tree).toMatchSnapshot();
});

test(" FriendsView Class renders correctly", () => {
  const tree = renderer.create(<FriendsView />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Map Class renders correctly", () => {
  const tree = renderer.create(<Map />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Chat Class renders correctly", () => {
  const tree = renderer.create(<Chat />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Place Class render user position correctly with null values", () => {
  const props = {
      latitude: null,
      longitude: null
    },
    location = mount(<Place {...props} />);
  expect(location.prop("latitude")).toEqual(null);
  expect(location.prop("longitude")).toEqual(null);
});

test("Place Class render user position correctly with valid values", () => {
  const props = {
      latitude: 1,
      longitude: 0.9
    },
    location = mount(<Place {...props} />);
  expect(location.prop("latitude")).toEqual(1);
  expect(location.prop("longitude")).toEqual(0.9);
});

test("User Class render user name correctly with null values", () => {
  const props = {
      name: ""
    },
    location = mount(<Users {...props} />);
  expect(location.prop("name")).toEqual("");
});

test("User Class render user name correctly with valid values", () => {
  const props = {
      name: "Human"
    },
    location = mount(<Users {...props} />);
  expect(location.prop("name")).toEqual("Human");
});

test("Profiile Class renders correctly", () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Users Class enders correctly", () => {
  const tree = renderer.create(<Users />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("SearchBar Class renders correctly", () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Sending Message", () => {
  const location = mount(<Map />);
  const newTodoTextInput = location.find("TextInput").first();
  expect(location.find(Map)).toExist();
});

test("Update Location", () => {
  newTodoTextInput.props().onChangeText(newTodoText);

      addTodoButton.props().onPress();

      wrapper.update();
      expect(
        wrapper.findWhere(node => node.prop('testID') === 'todo-item'),
      ).toExist();
});

jest.useFakeTimers();
