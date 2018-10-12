import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.4.1";
import indexRoutes from "routes/index.jsx";
import configureStore from "configureStore.js";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "assets/jss/theme";
const hist = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter history={hist} basename="/medframeAI">
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired
};

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
