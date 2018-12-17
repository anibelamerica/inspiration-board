import React from 'react';
import NewCardForm from '../NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it renders when passed an empty function', () => {
    const wrapper = shallow(
      <NewCardForm
        addCardCallback={() => {}}/>);

    expect(wrapper).toMatchSnapshot();
  });

});
