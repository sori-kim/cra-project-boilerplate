import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ExamResultPage from './pages/Home';

const App = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={ExamResultPage} />
    </Switch>
  );
};

export default App;
