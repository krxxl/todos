import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from "./index";
import {ITodo} from "../../App";

const todos: Array<ITodo> = [
  {
    title: 'sdfs',
    id :123,
    isDone:false
  },
  {
     title : 'sdfasdgasdgs',
    id:2354234,
    isDone:true
  }
]

describe(`Render todoList`, () => {
  it(`Render MovieReviews`, () => {
    const tree = renderer.create(<TodoList todos={todos}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});