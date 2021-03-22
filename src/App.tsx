import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Result from './pages/Result';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import DataProvider from './utils/DataContext';
import './app.scss';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step1" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </DataProvider>
    </Router>
  );
};

export default App;
