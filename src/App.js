import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
//redux
import { Provider } from 'react-redux';
import store from './store';
import MainView from './components/MainView';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainView} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
