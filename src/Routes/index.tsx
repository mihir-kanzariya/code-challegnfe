import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Home from "Components/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
