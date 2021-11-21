import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { createStore } from 'redux';
import allReducer from '/imports/ui/reducers/index.jsx'
import {Provider} from 'react-redux';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

Meteor.startup(() => {
  render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('react-target'));
});
