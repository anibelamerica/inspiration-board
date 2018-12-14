import React from 'react';
import Board from '../Board';
import { shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(
      <Board
        url='test url'
        boardName='test board name'/>);

    expect(wrapper).toMatchSnapshot();
  });

  test('that it renders without crashing even with no url and boardName', () => {
    const wrapper = shallow(
      <Board
        url=''
        boardName=''/>);

    expect(wrapper).toMatchSnapshot();
  });
});
