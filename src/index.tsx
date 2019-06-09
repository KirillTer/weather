import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configureStore";

import Layout from "./containers/Layout";
// import Weather from "./pages/weather/weather";

import Weather from "./containers/wether/Weather";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
        <Route exact path="/" render={() => (
            <Redirect to="/weather/male"/>
        )}/>
          <Route path="/weather" component={Weather} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
