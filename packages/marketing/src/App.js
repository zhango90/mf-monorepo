import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import { Switch, Route, Router } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix = 'ma'
});
export default ({history}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route path="/" component={Landing}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
