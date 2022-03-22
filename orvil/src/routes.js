import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";


const Routes = () => {
  var a = 5;

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro-leitor" />
        </Switch>
    </BrowserRouter>
  );
};
