import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it renders even when passed an empty object prop', () => {
    const wrapper = shallow(
      <Card
        card={{}}/>);

    expect(wrapper).toMatchSnapshot();
  });

  test('that it renders when passed an object prop with text and emoji fields', () => {
    const wrapper = shallow(
      <Card
        card={
          {
            card: {
              text: "test inspirational text",
              emoji: "dog"
            }
          }
        }
        />);

    expect(wrapper).toMatchSnapshot();
  });
});
