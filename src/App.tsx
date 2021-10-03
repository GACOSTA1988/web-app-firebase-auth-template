import React from 'react';
import routes from './router/routes'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
         {routes.map((route, index) => 
            <Route
              key={index}
              path={route.path} 
              exact={route.exact} 
              render={route.component}
              />)}
      </Switch>
    </div>
  );
}

export default App;
