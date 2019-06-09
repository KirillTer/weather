import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import { loadWeather } from '../../store/actions'

import Male from './Male'
import Female from './Female'

const Weather = ({ match }) => {
  useEffect(() => {
    loadWeather()
  }, []);

  return (
    <>
    <Switch>
      <Route path={match.path + "/male"} component={Male} />
      <Route path={match.path + "/female"} component={Female} />
    </Switch>
    </>
  );
};

export default connect(null, loadWeather)(Weather);
