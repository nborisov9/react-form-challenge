import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Result from './components/Result';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import DataProvider from './utils/DataContext';
import './app.scss';

function App() {
  return (
    <Router>
      <DataProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </DataProvider>
    </Router>
  );
}

export default App;
