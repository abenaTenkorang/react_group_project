import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from './MyProfile';
import store from '../../store/store';

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
